/**
 * Discovery-call booking configuration.
 *
 * EDIT THESE NUMBERS to tune the booking system — no logic changes needed.
 * This file contains NO secrets and is safe to import in client components
 * (the booking picker imports `bookingConfig` to build its date grid).
 *
 * Note: our clients are global (US, UAE, Australia, Europe). Working hours
 * below are expressed in BOOKING_OWNER_TIMEZONE (Asia/Manila by default).
 * To open evening slots for Western timezones later, just widen
 * `workingStartHour` / `workingEndHour` or add more `workingDays`.
 */
export const bookingConfig = {
  /** Length of a single discovery call. */
  slotDurationMinutes: 30,

  /** Gap enforced between calls (also padded around existing calendar events). */
  bufferMinutes: 15,

  /** Visitors cannot book sooner than this many hours from now. */
  minNoticeHours: 4,

  /** How many days into the future the date picker shows. */
  maxDaysAhead: 90,

  /**
   * Working days, in Luxon weekday numbers: 1 = Monday … 7 = Sunday.
   * All seven days open so global clients always have slots in their own week.
   */
  workingDays: [1, 2, 3, 4, 5, 6, 7] as number[],

  /**
   * Working window (24h clock) in the owner timezone. 0–24 = open around the
   * clock, so visitors in any timezone always see slots during their daytime.
   * Existing calendar events still block their slots via the free/busy check.
   */
  workingStartHour: 0,

  /** End of the working window. 24 = midnight (end of day). */
  workingEndHour: 24,
} as const;

/**
 * The owner's timezone (where the studio actually lives). Working hours above
 * are interpreted in this zone. Server-side only; the booking page forwards it
 * to the client as a prop so secrets-free env stays out of the client bundle.
 */
export const OWNER_TIMEZONE = process.env.BOOKING_OWNER_TIMEZONE || 'Asia/Manila';
