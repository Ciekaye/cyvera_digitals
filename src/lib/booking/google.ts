/**
 * Google Calendar integration for the discovery-call booking system.
 *
 * SERVER-SIDE ONLY. This module reads the OAuth credentials and must never be
 * imported into a client component. Auth uses OAuth 2.0 with a stored refresh
 * token: the googleapis client exchanges the refresh token for a short-lived
 * access token at request time and uses it to create events on the owner's
 * calendar. Google then emails the invite + Meet link to the guest.
 */
import 'server-only';
import { randomUUID } from 'crypto';
import { google } from 'googleapis';
import { DateTime } from 'luxon';
import { bookingConfig, OWNER_TIMEZONE } from './config';

export const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID || 'primary';

/**
 * Build an OAuth2 client authenticated with the stored refresh token. The
 * googleapis client automatically exchanges the refresh token for a short-lived
 * access token (POST https://oauth2.googleapis.com/token, grant_type=refresh_token)
 * on first use and refreshes it as needed. All credentials stay server-side.
 */
function getAuth() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error('Missing Google OAuth environment variables');
  }

  const oauth2 = new google.auth.OAuth2(clientId, clientSecret);
  oauth2.setCredentials({ refresh_token: refreshToken });
  return oauth2;
}

function getCalendar() {
  return google.calendar({ version: 'v3', auth: getAuth() });
}

interface BusyInterval {
  start: DateTime;
  end: DateTime;
}

/**
 * Compute open slots for a single calendar date.
 *
 * @param dateISO  A `YYYY-MM-DD` date, interpreted in the OWNER timezone.
 * @returns        Array of slot start times as ISO-8601 UTC strings.
 *
 * Logic: build the owner's working window for the date, run a Calendar
 * free/busy query for it, generate candidate slots stepping by
 * (duration + buffer), then drop any slot that overlaps a busy block
 * (padded by buffer), is in the past, or violates the minimum notice.
 */
export async function getAvailableSlots(dateISO: string): Promise<string[]> {
  const day = DateTime.fromISO(dateISO, { zone: OWNER_TIMEZONE });
  if (!day.isValid) throw new Error('Invalid date');

  // Closed on non-working days.
  if (!bookingConfig.workingDays.includes(day.weekday)) return [];

  // Compute the window off midnight so workingEndHour: 24 maps cleanly to the
  // next midnight (and 0 to this midnight) — set({ hour: 24 }) is ambiguous.
  const dayStart = day.startOf('day');
  const windowStart = dayStart.plus({ hours: bookingConfig.workingStartHour });
  const windowEnd = dayStart.plus({ hours: bookingConfig.workingEndHour });

  const minStart = DateTime.utc().plus({ hours: bookingConfig.minNoticeHours });

  // Query a slightly padded window so events just outside working hours still
  // block adjacent slots via the buffer.
  const cal = getCalendar();
  const fb = await cal.freebusy.query({
    requestBody: {
      timeMin: windowStart.minus({ minutes: bookingConfig.bufferMinutes }).toUTC().toISO()!,
      timeMax: windowEnd.plus({ minutes: bookingConfig.bufferMinutes }).toUTC().toISO()!,
      items: [{ id: CALENDAR_ID }],
    },
  });

  const busy: BusyInterval[] = (fb.data.calendars?.[CALENDAR_ID]?.busy ?? [])
    .filter((b) => b.start && b.end)
    .map((b) => ({
      start: DateTime.fromISO(b.start!).toUTC(),
      end: DateTime.fromISO(b.end!).toUTC(),
    }));

  const step = bookingConfig.slotDurationMinutes + bookingConfig.bufferMinutes;
  const slots: string[] = [];

  let cursor = windowStart;
  while (cursor.plus({ minutes: bookingConfig.slotDurationMinutes }) <= windowEnd) {
    const start = cursor.toUTC();
    const end = cursor.plus({ minutes: bookingConfig.slotDurationMinutes }).toUTC();

    // Overlap test against busy blocks, each padded by the buffer on both sides.
    const overlapsBusy = busy.some(
      (b) =>
        start < b.end.plus({ minutes: bookingConfig.bufferMinutes }) &&
        end > b.start.minus({ minutes: bookingConfig.bufferMinutes }),
    );

    if (start >= minStart && !overlapsBusy) {
      slots.push(start.toISO()!);
    }

    cursor = cursor.plus({ minutes: step });
  }

  return slots;
}

/**
 * Re-validate that a specific UTC start time is still an open slot.
 * Used by the POST handler to guard against race conditions and tampering.
 */
export async function isSlotAvailable(startUtcISO: string): Promise<boolean> {
  const start = DateTime.fromISO(startUtcISO, { zone: 'utc' });
  if (!start.isValid) return false;

  const ownerDate = start.setZone(OWNER_TIMEZONE).toISODate();
  if (!ownerDate) return false;

  const slots = await getAvailableSlots(ownerDate);
  const target = start.toMillis();
  return slots.some((s) => DateTime.fromISO(s).toMillis() === target);
}

export interface CreateBookingParams {
  startUtc: string;
  name: string;
  email: string;
  tz: string;
  notes?: string;
  company?: string;
}

export interface BookingResult {
  startUtc: string;
  meetLink: string | null;
}

/**
 * Create the calendar event as the impersonated user, with a Google Meet link.
 * `sendUpdates: 'all'` makes Google email the invite + confirmation to the guest.
 */
export async function createBooking(params: CreateBookingParams): Promise<BookingResult> {
  const cal = getCalendar();

  const start = DateTime.fromISO(params.startUtc, { zone: 'utc' });
  const end = start.plus({ minutes: bookingConfig.slotDurationMinutes });

  const description = [
    'Discovery call booked via cyveradigitals.com',
    '',
    `Name: ${params.name}`,
    `Email: ${params.email}`,
    params.company ? `Company: ${params.company}` : null,
    `Guest timezone: ${params.tz}`,
    params.notes ? `\nNotes:\n${params.notes}` : null,
  ]
    .filter((line) => line !== null)
    .join('\n');

  const res = await cal.events.insert({
    calendarId: CALENDAR_ID,
    conferenceDataVersion: 1,
    sendUpdates: 'all',
    requestBody: {
      summary: `Discovery call — ${params.name} x Cyvera Digitals`,
      description,
      start: { dateTime: start.toISO()!, timeZone: 'UTC' },
      end: { dateTime: end.toISO()!, timeZone: 'UTC' },
      attendees: [{ email: params.email, displayName: params.name }],
      conferenceData: {
        createRequest: {
          requestId: randomUUID(),
          conferenceSolutionKey: { type: 'hangoutsMeet' },
        },
      },
    },
  });

  const meetLink =
    res.data.hangoutLink ||
    res.data.conferenceData?.entryPoints?.find((e) => e.entryPointType === 'video')?.uri ||
    null;

  return { startUtc: start.toUTC().toISO()!, meetLink };
}
