import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

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

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

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

    // Escape all user input before interpolating into email HTML
    const safe = {
      fullName: escapeHtml(body.fullName),
      businessName: escapeHtml(body.businessName || ''),
      email: escapeHtml(body.email),
      projectType: escapeHtml(body.projectType || ''),
      projectDetails: escapeHtml(body.projectDetails),
    };

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

    // Send confirmation email to client
    const clientEmailResponse = await resend.emails.send({
      from: senderEmail,
      to: body.email,
      subject: 'We received your inquiry - CYVERA Digitals',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #7b19e7 0%, #a78bfa 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .footer { margin-top: 20px; font-size: 12px; color: #666; }
              h1 { margin: 0; font-size: 24px; }
              .cta { display: inline-block; background: linear-gradient(135deg, #7b19e7 0%, #a78bfa 100%); color: white; padding: 12px 24px; border-radius: 25px; text-decoration: none; margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Thank You for Getting in Touch!</h1>
              </div>
              <div class="content">
                <p>Hi <strong>${safe.fullName}</strong>,</p>
                <p>We've received your inquiry for <strong>${safe.businessName || 'your project'}</strong>. We're excited to learn more about your vision!</p>
                
                <h3>What happens next?</h3>
                <ul>
                  <li>Our team will review your details</li>
                  <li>We'll reach out within 1-2 business days</li>
                  <li>We'll discuss your project requirements and next steps</li>
                </ul>

                <h3>Your Inquiry Summary:</h3>
                <p><strong>Project Type:</strong> ${safe.projectType}</p>
                <p><strong>Details:</strong> ${safe.projectDetails.substring(0, 200)}${safe.projectDetails.length > 200 ? '...' : ''}</p>

                <p style="margin-top: 30px; font-style: italic;">In the meantime, feel free to explore more about our services at CYVERA Digitals.</p>
              </div>
              <div class="footer">
                <p>CYVERA Digitals | Building, Designing & Growing Brands</p>
                <p>This is an automated response. Please do not reply to this email.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (clientEmailResponse.error) {
      console.error('Error sending client email:', clientEmailResponse.error);
      return NextResponse.json(
        { error: 'Failed to send confirmation email' },
        { status: 500 }
      );
    }

    // Send notification email to admin
    const adminEmailResponse = await resend.emails.send({
      from: senderEmail,
      to: adminEmail,
      subject: `New Contact Inquiry: ${body.fullName.replace(/[\r\n]/g, ' ')} - ${(body.projectType || '').replace(/[\r\n]/g, ' ')}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #1f2937; color: white; padding: 20px; border-radius: 10px 10px 0 0; }
              .content { background: #f3f4f6; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #7b19e7; }
              .value { margin-top: 5px; padding: 10px; background: white; border-left: 3px solid #7b19e7; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🚀 New Contact Inquiry</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Full Name:</div>
                  <div class="value">${safe.fullName}</div>
                </div>

                <div class="field">
                  <div class="label">Business/Brand:</div>
                  <div class="value">${safe.businessName || 'Not provided'}</div>
                </div>

                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${safe.email}">${safe.email}</a></div>
                </div>

                <div class="field">
                  <div class="label">Project Type:</div>
                  <div class="value">${safe.projectType}</div>
                </div>

                <div class="field">
                  <div class="label">Project Details:</div>
                  <div class="value">${safe.projectDetails.replace(/\n/g, '<br>')}</div>
                </div>

                <hr style="margin-top: 30px; border: none; border-top: 1px solid #d1d5db;">
                <p style="color: #666; font-size: 12px; margin-top: 20px;">
                  Received at: ${new Date().toLocaleString()}
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
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
