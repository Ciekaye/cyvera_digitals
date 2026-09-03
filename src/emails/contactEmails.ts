/**
 * HTML email templates for the contact form.
 *
 * The shared layout primitives these are built from — the document shell, hero
 * band, detail rows, button and footer — live in `./components`, alongside the
 * rationale for the table-based, inline-styled markup they emit.
 */

import {
  BRAND,
  FONT_STACK,
  SITE_URL,
  button,
  detailPanel,
  detailRow,
  escapeHtml,
  escapeMultiline,
  firstNameOf,
  footer,
  hero,
  logoBar,
  shell,
  subjectSafe,
} from './components';

export type { RenderedEmail } from './components';
import type { RenderedEmail } from './components';

/** Human-readable labels for the form's projectType option values. */
const PROJECT_TYPE_LABELS: Record<string, string> = {
  'web-app': 'Web / App Development',
  wordpress: 'WordPress Web Development',
  design: 'Graphic / UI & UX Design',
  smm: 'Social Media Management',
  other: 'Other / Not sure yet',
};

export function projectTypeLabel(value: string | undefined): string {
  if (!value) return 'Not specified';
  return PROJECT_TYPE_LABELS[value] ?? value;
}

export type ContactSubmission = {
  fullName: string;
  businessName?: string;
  email: string;
  projectType?: string;
  projectDetails: string;
};

const CLIENT_DETAILS_PREVIEW_LIMIT = 400;

/** Confirmation sent to the person who submitted the form. */
export function clientConfirmationEmail(data: ContactSubmission): RenderedEmail {
  const firstName = firstNameOf(data.fullName);
  const business = data.businessName?.trim();
  const typeLabel = projectTypeLabel(data.projectType);

  const truncated =
    data.projectDetails.length > CLIENT_DETAILS_PREVIEW_LIMIT
      ? `${data.projectDetails.slice(0, CLIENT_DETAILS_PREVIEW_LIMIT).trimEnd()}…`
      : data.projectDetails;

  const steps: { title: string; copy: string }[] = [
    { title: 'We read every word', copy: 'Your brief goes straight to our team — no auto-triage, no queue bot.' },
    { title: 'We reply within 1–2 business days', copy: 'With initial thoughts, and any questions we need answered to scope it properly.' },
    { title: 'We map out next steps', copy: 'Timeline, approach, and what working together would actually look like.' },
  ];

  const stepsHtml = steps
    .map(
      (step, i) => `<tr>
        <td width="36" valign="top" style="padding:0 14px 18px 0;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="30">
            <tr>
              <td align="center" width="30" height="30" style="width:30px;height:30px;background-color:${BRAND.purple};background-image:${BRAND.gradient};border-radius:15px;font-family:${FONT_STACK};font-size:13px;line-height:30px;font-weight:700;color:#ffffff;">${i + 1}</td>
            </tr>
          </table>
        </td>
        <td valign="top" style="padding:0 0 18px 0;">
          <p style="margin:0 0 3px 0;font-family:${FONT_STACK};font-size:15px;line-height:22px;font-weight:700;color:${BRAND.ink};">${escapeHtml(step.title)}</p>
          <p style="margin:0;font-family:${FONT_STACK};font-size:14px;line-height:22px;color:${BRAND.body};">${escapeHtml(step.copy)}</p>
        </td>
      </tr>`
    )
    .join('');

  const summaryRows = [
    business ? detailRow('Business or brand', escapeHtml(business)) : '',
    detailRow('Project type', escapeHtml(typeLabel)),
    detailRow('What you told us', escapeMultiline(truncated), true),
  ].join('');

  const body = `
    ${logoBar()}
    ${hero({
      eyebrow: 'Inquiry received',
      title: `Thanks, ${firstName} — we've got it.`,
      subtitle: "Your project brief just landed with our team. Here's what happens from here.",
    })}
    <tr>
      <td class="gutter" style="background-color:#ffffff;padding:34px 40px 8px 40px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          ${stepsHtml}
        </table>
      </td>
    </tr>
    <tr>
      <td class="gutter" style="background-color:#ffffff;padding:8px 40px 0 40px;">
        <p style="margin:0 0 12px 0;font-family:${FONT_STACK};font-size:11px;line-height:16px;letter-spacing:1.2px;text-transform:uppercase;color:${BRAND.muted};font-weight:700;">Your inquiry</p>
        ${detailPanel(summaryRows)}
      </td>
    </tr>
    <tr>
      <td class="gutter" align="center" style="background-color:#ffffff;padding:30px 40px 36px 40px;">
        ${button(`${SITE_URL}/portfolio`, 'See our recent work')}
        <p style="margin:16px 0 0 0;font-family:${FONT_STACK};font-size:13px;line-height:20px;color:${BRAND.muted};">Something to add? Just reply to this email.</p>
      </td>
    </tr>
    <tr>
      <td style="background-color:#ffffff;border-radius:0 0 16px 16px;height:8px;line-height:8px;font-size:8px;">&nbsp;</td>
    </tr>
    ${footer('You received this because you submitted the contact form at cyveradigitals.com.')}
  `;

  const text = [
    `Thanks, ${firstName} — we've got it.`,
    '',
    'Your project brief just landed with our team. Here is what happens from here:',
    '',
    ...steps.map((s, i) => `${i + 1}. ${s.title} — ${s.copy}`),
    '',
    'YOUR INQUIRY',
    business ? `Business or brand: ${business}` : null,
    `Project type: ${typeLabel}`,
    `What you told us: ${truncated}`,
    '',
    `See our recent work: ${SITE_URL}/portfolio`,
    '',
    'Something to add? Just reply to this email.',
    '',
    '—',
    'Cyvera Digitals — Building, designing & growing brands.',
    SITE_URL,
  ]
    .filter((line) => line !== null)
    .join('\n');

  return {
    subject: 'We received your inquiry — Cyvera Digitals',
    html: shell({
      title: 'We received your inquiry',
      preview: `Thanks ${firstName} — we'll get back to you within 1–2 business days.`,
      body,
    }),
    text,
  };
}

/** Notification sent to the Cyvera inbox. */
export function adminNotificationEmail(
  data: ContactSubmission,
  meta: { receivedAt: Date }
): RenderedEmail {
  const business = data.businessName?.trim();
  const typeLabel = projectTypeLabel(data.projectType);

  // Format explicitly: serverless runtimes default to UTC, which makes a bare
  // toLocaleString() misleading when read from Manila.
  const timestamp = new Intl.DateTimeFormat('en-PH', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Manila',
  }).format(meta.receivedAt);

  const rows = [
    detailRow('From', `<strong style="font-weight:700;">${escapeHtml(data.fullName)}</strong>`),
    detailRow('Business or brand', escapeHtml(business || 'Not provided')),
    detailRow(
      'Email',
      `<a href="mailto:${escapeHtml(data.email)}" style="color:${BRAND.purple};text-decoration:none;font-weight:600;">${escapeHtml(data.email)}</a>`
    ),
    detailRow('Project type', escapeHtml(typeLabel)),
    detailRow('Received', escapeHtml(`${timestamp} (Manila)`), true),
  ].join('');

  const body = `
    ${logoBar()}
    ${hero({
      eyebrow: 'New contact inquiry',
      title: data.fullName,
      subtitle: business ? `${business} · ${typeLabel}` : typeLabel,
    })}
    <tr>
      <td class="gutter" style="background-color:#ffffff;padding:34px 40px 0 40px;">
        ${detailPanel(rows)}
      </td>
    </tr>
    <tr>
      <td class="gutter" style="background-color:#ffffff;padding:26px 40px 0 40px;">
        <p style="margin:0 0 12px 0;font-family:${FONT_STACK};font-size:11px;line-height:16px;letter-spacing:1.2px;text-transform:uppercase;color:${BRAND.muted};font-weight:700;">Project details</p>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${BRAND.wash};border:1px solid ${BRAND.hairline};border-left:4px solid ${BRAND.magenta};border-radius:12px;">
          <tr>
            <td style="padding:18px 20px;font-family:${FONT_STACK};font-size:15px;line-height:24px;color:${BRAND.ink};">${escapeMultiline(
              data.projectDetails
            )}</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td class="gutter" align="center" style="background-color:#ffffff;padding:28px 40px 36px 40px;">
        ${button(
          `mailto:${data.email}?subject=${encodeURIComponent(`Re: your inquiry — Cyvera Digitals`)}`,
          `Reply to ${firstNameOf(data.fullName)}`
        )}
      </td>
    </tr>
    <tr>
      <td style="background-color:#ffffff;border-radius:0 0 16px 16px;height:8px;line-height:8px;font-size:8px;">&nbsp;</td>
    </tr>
    ${footer('Sent automatically by the cyveradigitals.com contact form.')}
  `;

  const text = [
    `NEW CONTACT INQUIRY`,
    '',
    `From: ${data.fullName}`,
    `Business or brand: ${business || 'Not provided'}`,
    `Email: ${data.email}`,
    `Project type: ${typeLabel}`,
    `Received: ${timestamp} (Manila)`,
    '',
    'PROJECT DETAILS',
    data.projectDetails,
    '',
    `Reply: mailto:${data.email}`,
  ].join('\n');

  return {
    subject: subjectSafe(`New inquiry: ${data.fullName} — ${typeLabel}`),
    html: shell({
      title: 'New contact inquiry',
      preview: `${data.fullName}${business ? ` · ${business}` : ''} · ${typeLabel}`,
      body,
    }),
    text,
  };
}
