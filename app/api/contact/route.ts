import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import {
  adminNotificationEmail,
  clientConfirmationEmail,
} from '@/emails/contactEmails';

interface ContactFormData {
  fullName: string;
  businessName: string;
  email: string;
  projectType: string;
  projectDetails: string;
}

const MAX_LENGTHS = {
  fullName: 100,
  businessName: 150,
  email: 254,
  projectType: 100,
  projectDetails: 5000,
} as const;

// Simple in-memory rate limiter: max 3 submissions per IP per 10 minutes.
// Resets when the serverless instance recycles, which is acceptable for a contact form.
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const submissions = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissions.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) {
    submissions.set(ip, recent);
    return true;
  }
  recent.push(now);
  submissions.set(ip, recent);
  // Prevent unbounded memory growth
  if (submissions.size > 10000) {
    for (const [key, times] of submissions) {
      if (times.every((t) => now - t >= RATE_WINDOW_MS)) submissions.delete(key);
    }
  }
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many submissions. Please try again later.' },
        { status: 429 }
      );
    }

    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.fullName || !body.email || !body.projectDetails) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Enforce field length limits
    for (const [field, max] of Object.entries(MAX_LENGTHS)) {
      const value = body[field as keyof ContactFormData];
      if (typeof value === 'string' && value.length > max) {
        return NextResponse.json(
          { error: `${field} is too long` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const adminEmail = process.env.ADMIN_EMAIL;
    const senderEmail = process.env.ADMIN_SENDER_EMAIL;
    const apiKey = process.env.RESEND_API_KEY;

    if (!adminEmail || !senderEmail || !apiKey) {
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    // Templates escape their own input, so raw values are passed through.
    const submission = {
      fullName: body.fullName,
      businessName: body.businessName,
      email: body.email,
      projectType: body.projectType,
      projectDetails: body.projectDetails,
    };

    // Send confirmation email to client
    const clientEmail = clientConfirmationEmail(submission);
    const clientEmailResponse = await resend.emails.send({
      from: senderEmail,
      to: body.email,
      subject: clientEmail.subject,
      html: clientEmail.html,
      text: clientEmail.text,
    });

    if (clientEmailResponse.error) {
      console.error('Error sending client email:', clientEmailResponse.error);
      return NextResponse.json(
        { error: 'Failed to send confirmation email' },
        { status: 500 }
      );
    }

    // Send notification email to admin. replyTo points at the enquirer so
    // hitting Reply in the inbox reaches them rather than the sender address.
    const adminMail = adminNotificationEmail(submission, { receivedAt: new Date() });
    const adminEmailResponse = await resend.emails.send({
      from: senderEmail,
      to: adminEmail,
      replyTo: body.email,
      subject: adminMail.subject,
      html: adminMail.html,
      text: adminMail.text,
    });

    if (adminEmailResponse.error) {
      console.error('Error sending admin email:', adminEmailResponse.error);
      return NextResponse.json(
        { error: 'Failed to send notification to admin' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been submitted successfully!',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
