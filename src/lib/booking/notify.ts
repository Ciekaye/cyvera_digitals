/**
 * Internal "new booking" notification.
 *
 * SERVER-SIDE ONLY — reads RESEND_API_KEY. Reuses the same Resend credentials
 * and destination inbox as the contact form; there are no booking-specific
 * environment variables.
 *
 * Contract: this function NEVER throws and NEVER rejects. By the time it runs,
 * the calendar event already exists and Google has already invited the guest,
 * so the booking has succeeded from the visitor's point of view. A missing API
 * key or a Resend outage is an operational problem for us, not a failed
 * booking, and must never surface to the visitor as an error.
 *
 * That is deliberately the opposite of /api/contact, where the email *is* the
 * deliverable and a send failure genuinely is a 500.
 */
import 'server-only';
import { Resend } from 'resend';
import { bookingNotificationEmail } from '@/emails/bookingEmails';
import { OWNER_TIMEZONE, bookingConfig } from './config';

export interface OwnerNotificationInput {
  name: string;
  email: string;
  company?: string;
  notes?: string;
  startUtc: string;
  /** IANA zone the visitor selected in the booking form. */
  tz: string;
  meetLink: string | null;
  calendarLink: string | null;
}

/**
 * Email the studio inbox about a new booking.
 *
 * @returns true if Resend accepted the message; false if it was skipped
 *          (unconfigured) or failed. Callers may ignore the result — it exists
 *          for tests and future metrics, not for error handling.
 */
export async function notifyOwnerOfBooking(input: OwnerNotificationInput): Promise<boolean> {
  // Same inbox and sender as the contact form, including the fallback.
  const adminEmail = process.env.ADMIN_EMAIL || 'info@cyveradigitals.com';
  const senderEmail = process.env.ADMIN_SENDER_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;

  // Warn rather than throw: this is the current local-dev path, where the
  // Resend keys are absent and bookings must still work end to end.
  if (!senderEmail || !apiKey) {
    console.warn(
      '[book] Resend is not configured (ADMIN_SENDER_EMAIL / RESEND_API_KEY missing); skipping owner notification',
    );
    return false;
  }

  try {
    const mail = bookingNotificationEmail(
      {
        name: input.name,
        email: input.email,
        company: input.company,
        notes: input.notes,
        startUtc: input.startUtc,
        guestTz: input.tz,
        ownerTz: OWNER_TIMEZONE,
        durationMinutes: bookingConfig.slotDurationMinutes,
        meetLink: input.meetLink,
        calendarLink: input.calendarLink,
      },
      { bookedAt: new Date() },
    );

    // The Resend SDK reports API-level failures in the resolved `error` field
    // and only throws on transport-level problems, so both arms are required.
    const { error } = await new Resend(apiKey).emails.send({
      from: senderEmail,
      to: adminEmail,
      replyTo: input.email, // hitting Reply reaches the person who booked
      subject: mail.subject,
      html: mail.html,
      text: mail.text,
    });

    if (error) {
      console.error('[book] owner notification rejected by Resend:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('[book] owner notification threw:', error);
    return false;
  }
}
