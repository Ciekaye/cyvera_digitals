/**
 * HTML email templates for the discovery-call booking system.
 *
 * Structured to read as a sibling of the contact form's admin notification, so
 * the two internal emails feel like one system. Shared layout primitives come
 * from `./components`.
 *
 * Timestamps here use luxon rather than the `Intl` formatter `contactEmails.ts`
 * reaches for. That file formats a single fixed zone; this one renders one
 * instant into two arbitrary IANA zones with their abbreviations, which is
 * precisely luxon's job — and it lets the email quote the visitor's local time
 * using the same call `BookingPicker` used to show it to them on screen.
 */

import { DateTime } from 'luxon';
import {
  BRAND,
  FONT_STACK,
  accentPanel,
  button,
  detailPanel,
  detailRow,
  escapeHtml,
  escapeMultiline,
  footer,
  hero,
  logoBar,
  shell,
  subjectSafe,
} from './components';
import type { RenderedEmail } from './components';

export type BookingNotification = {
  name: string;
  email: string;
  company?: string;
  notes?: string;
  /** Slot start as an ISO-8601 UTC string, exactly as stored on the event. */
  startUtc: string;
  /** IANA zone the visitor picked in the booking form, e.g. 'America/New_York'. */
  guestTz: string;
  /**
   * Owner/studio IANA zone. Passed in rather than imported from the booking
   * config so this module stays a pure renderer with no dependency on
   * src/lib/booking — templates take data, they don't read configuration.
   */
  ownerTz: string;
  durationMinutes: number;
  meetLink: string | null;
  calendarLink: string | null;
};

/**
 * Matches the string BookingPicker shows on screen, plus the year — an email is
 * read out of context days later, where a bare "Sep 8" is ambiguous.
 */
const LONG_FORMAT = "cccc, LLL d, yyyy 'at' h:mm a (ZZZZ)";
const SHORT_FORMAT = "ccc, LLL d 'at' h:mm a";

/**
 * Luxon returns an invalid DateTime (whose toFormat() yields the literal string
 * "Invalid DateTime") for an unknown zone, and `guestTz` arrives straight from
 * the request body with only a length check applied. Return null on failure so
 * callers can degrade gracefully instead of emailing a placeholder string.
 */
function formatInZone(startUtc: string, zone: string, format: string): string | null {
  const dt = DateTime.fromISO(startUtc, { zone: 'utc' }).setZone(zone);
  return dt.isValid ? dt.toFormat(format) : null;
}

/** Notification sent to the Cyvera inbox when someone books a call. */
export function bookingNotificationEmail(
  data: BookingNotification,
  meta: { bookedAt: Date }
): RenderedEmail {
  const company = data.company?.trim();
  const notes = data.notes?.trim();

  const ownerTime = formatInZone(data.startUtc, data.ownerTz, LONG_FORMAT) ?? data.startUtc;
  const guestTime = formatInZone(data.startUtc, data.guestTz, LONG_FORMAT);
  const shortOwnerTime = formatInZone(data.startUtc, data.ownerTz, SHORT_FORMAT) ?? data.startUtc;

  // A visitor in the studio's own zone would otherwise get the same line twice.
  const sameZone = data.guestTz.toLowerCase() === data.ownerTz.toLowerCase();

  const bookedAtLabel =
    DateTime.fromJSDate(meta.bookedAt).setZone(data.ownerTz).toFormat(LONG_FORMAT);

  // Guest time falls back to the raw identifier so an unparseable zone still
  // tells the owner what the visitor actually submitted.
  const guestTimeHtml = guestTime
    ? `${escapeHtml(guestTime)}<br /><span style="font-size:13px;color:${BRAND.muted};">${escapeHtml(data.guestTz)}</span>`
    : `<span style="color:${BRAND.muted};">Unrecognised timezone: ${escapeHtml(data.guestTz)}</span>`;

  const rows = [
    detailRow('Who', `<strong style="font-weight:700;">${escapeHtml(data.name)}</strong>`),
    detailRow('Company', escapeHtml(company || 'Not provided')),
    detailRow(
      'Email',
      `<a href="mailto:${escapeHtml(data.email)}" style="color:${BRAND.purple};text-decoration:none;font-weight:600;">${escapeHtml(data.email)}</a>`
    ),
    detailRow(sameZone ? 'Time' : 'Your time', escapeHtml(ownerTime)),
    sameZone ? '' : detailRow('Their time', guestTimeHtml),
    detailRow('Duration', escapeHtml(`${data.durationMinutes} minutes`)),
    detailRow('Booked', escapeHtml(bookedAtLabel), true),
  ].join('');

  const notesHtml = notes
    ? accentPanel(escapeMultiline(notes))
    : `<p style="margin:0;font-family:${FONT_STACK};font-size:15px;line-height:24px;color:${BRAND.muted};">No notes provided.</p>`;

  // Each link is omitted independently — never render href="null".
  const meetButtonHtml = data.meetLink ? button(data.meetLink, 'Join the Google Meet') : '';
  const calendarLinkHtml = data.calendarLink
    ? `<p style="margin:${data.meetLink ? '16px' : '0'} 0 0 0;font-family:${FONT_STACK};font-size:13px;line-height:20px;">
          <a href="${escapeHtml(data.calendarLink)}" style="color:${BRAND.purple};text-decoration:none;font-weight:600;">Open in Google Calendar</a>
        </p>`
    : '';

  const ctaBlock =
    meetButtonHtml || calendarLinkHtml
      ? `<tr>
      <td class="gutter" align="center" style="background-color:#ffffff;padding:28px 40px 36px 40px;">
        ${meetButtonHtml}
        ${calendarLinkHtml}
      </td>
    </tr>`
      : '';

  const body = `
    ${logoBar()}
    ${hero({
      eyebrow: 'New discovery call booked',
      title: data.name,
      subtitle: company ? `${company} · ${ownerTime}` : ownerTime,
    })}
    <tr>
      <td class="gutter" style="background-color:#ffffff;padding:34px 40px 0 40px;">
        ${detailPanel(rows)}
      </td>
    </tr>
    <tr>
      <td class="gutter" style="background-color:#ffffff;padding:26px 40px 0 40px;">
        <p style="margin:0 0 12px 0;font-family:${FONT_STACK};font-size:11px;line-height:16px;letter-spacing:1.2px;text-transform:uppercase;color:${BRAND.muted};font-weight:700;">Notes</p>
        ${notesHtml}
      </td>
    </tr>
    ${ctaBlock}
    <tr>
      <td style="background-color:#ffffff;border-radius:0 0 16px 16px;height:8px;line-height:8px;font-size:8px;">&nbsp;</td>
    </tr>
    ${footer('Sent automatically when someone books a discovery call at cyveradigitals.com.')}
  `;

  const text = [
    'NEW DISCOVERY CALL BOOKED',
    '',
    `Who: ${data.name}`,
    `Company: ${company || 'Not provided'}`,
    `Email: ${data.email}`,
    sameZone ? `Time: ${ownerTime}` : `Your time: ${ownerTime}`,
    sameZone ? null : `Their time: ${guestTime ?? `Unrecognised timezone: ${data.guestTz}`}`,
    `Duration: ${data.durationMinutes} minutes`,
    `Booked: ${bookedAtLabel}`,
    '',
    'NOTES',
    notes || 'No notes provided.',
    '',
    data.meetLink ? `Join the Google Meet: ${data.meetLink}` : null,
    data.calendarLink ? `Open in Google Calendar: ${data.calendarLink}` : null,
    '',
    `Reply: mailto:${data.email}`,
  ]
    .filter((line) => line !== null)
    .join('\n');

  return {
    // `name` is free text straight from the form, so the subject must be
    // stripped of anything that could inject an extra mail header.
    subject: subjectSafe(`New booking: ${data.name} — ${shortOwnerTime}`),
    html: shell({
      title: 'New discovery call booked',
      preview: `${data.name}${company ? ` · ${company}` : ''} · ${ownerTime}`,
      body,
    }),
    text,
  };
}
