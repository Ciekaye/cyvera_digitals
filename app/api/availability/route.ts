import { NextRequest, NextResponse } from 'next/server';
import { getAvailableSlots } from '@/lib/booking/google';

// Availability depends on live calendar state and env, so never cache.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * GET /api/availability?date=YYYY-MM-DD&tz=Area/City
 *
 * `date` is the calendar day the visitor is viewing (interpreted in the owner
 * timezone). `tz` is the visitor's IANA timezone — display only; the frontend
 * converts the returned UTC slots for display.
 *
 * Returns: { slots: string[] } where each entry is an ISO-8601 UTC start time.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get('date');

  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return NextResponse.json({ error: 'A valid date (YYYY-MM-DD) is required.' }, { status: 400 });
  }

  try {
    const slots = await getAvailableSlots(date);
    return NextResponse.json({ slots });
  } catch (error) {
    console.error('[availability] failed:', error);
    return NextResponse.json(
      { error: 'We could not load availability right now. Please try again in a moment.' },
      { status: 502 },
    );
  }
}
