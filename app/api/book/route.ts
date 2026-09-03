import { NextRequest, NextResponse } from 'next/server';
import { createBooking, isSlotAvailable } from '@/lib/booking/google';
import { notifyOwnerOfBooking } from '@/lib/booking/notify';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface BookRequestBody {
  startUtc?: string;
  name?: string;
  email?: string;
  tz?: string;
  notes?: string;
  company?: string;
  website?: string; // honeypot — real users never fill this
}

const MAX_LENGTHS = {
  name: 100,
  email: 254,
  company: 150,
  notes: 2000,
  tz: 100,
} as const;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Simple in-memory per-IP rate limit, mirroring the contact route: max 5
// booking attempts per IP per 10 minutes. Resets when the instance recycles,
// which is acceptable as a light abuse guard.
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const attempts = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (attempts.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) {
    attempts.set(ip, recent);
    return true;
  }
  recent.push(now);
  attempts.set(ip, recent);
  if (attempts.size > 10000) {
    for (const [key, times] of attempts) {
      if (times.every((t) => now - t >= RATE_WINDOW_MS)) attempts.delete(key);
    }
  }
  return false;
}

/**
 * POST /api/book
 *
 * Body: { startUtc, name, email, tz, notes?, company?, website? }
 * Creates a discovery-call event on the studio calendar and lets Google send
 * the invite + Meet link. Re-validates availability at booking time so two
 * people can't grab the same slot.
 */
export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many booking attempts. Please try again later.' },
        { status: 429 },
      );
    }

    const body = (await request.json()) as BookRequestBody;

    // Honeypot: a filled `website` field means a bot. Pretend success, do nothing.
    if (body.website && body.website.trim() !== '') {
      return NextResponse.json({ success: true });
    }

    const name = body.name?.trim() ?? '';
    const email = body.email?.trim() ?? '';
    const tz = body.tz?.trim() || 'UTC';
    const company = body.company?.trim() || undefined;
    const notes = body.notes?.trim() || undefined;
    const startUtc = body.startUtc?.trim() ?? '';

    if (!name || !email || !startUtc) {
      return NextResponse.json({ error: 'Please fill in your name, email, and pick a time.' }, { status: 400 });
    }
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }
    if (
      name.length > MAX_LENGTHS.name ||
      email.length > MAX_LENGTHS.email ||
      (company && company.length > MAX_LENGTHS.company) ||
      (notes && notes.length > MAX_LENGTHS.notes) ||
      tz.length > MAX_LENGTHS.tz
    ) {
      return NextResponse.json({ error: 'One of your fields is too long.' }, { status: 400 });
    }

    // Guard against race conditions / tampering: confirm the slot is still open.
    let stillAvailable: boolean;
    try {
      stillAvailable = await isSlotAvailable(startUtc);
    } catch (error) {
      console.error('[book] availability re-check failed:', error);
      return NextResponse.json(
        { error: 'We could not confirm that time right now. Please try again.' },
        { status: 502 },
      );
    }

    if (!stillAvailable) {
      return NextResponse.json(
        { error: 'Sorry, that time was just taken or is no longer available. Please pick another slot.' },
        { status: 409 },
      );
    }

    const result = await createBooking({ startUtc, name, email, tz, notes, company });

    // Awaited rather than fire-and-forget: a serverless instance can be frozen
    // the moment the response is flushed, which would silently drop a floating
    // promise. Safe to sit inside this try — notifyOwnerOfBooking swallows its
    // own failures, so a mail problem can never reach the catch below and tell
    // the visitor their booking failed when the event already exists.
    await notifyOwnerOfBooking({
      name,
      email,
      company,
      notes,
      startUtc: result.startUtc,
      tz,
      meetLink: result.meetLink,
      calendarLink: result.htmlLink,
    });

    return NextResponse.json({
      success: true,
      startUtc: result.startUtc,
      meetLink: result.meetLink,
    });
  } catch (error) {
    console.error('[book] failed:', error);
    return NextResponse.json(
      { error: 'Something went wrong creating your booking. Please try again.' },
      { status: 500 },
    );
  }
}
