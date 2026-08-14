/**
 * HTML email templates for the contact form.
 *
 * These are written as table-based layouts with fully inline styles because
 * that is what email clients reliably render — Gmail strips <style> blocks in
 * several contexts and Outlook (Word rendering engine) ignores most modern CSS.
 * Gradients degrade to the solid `background-color` underneath them in Outlook,
 * which is why every gradient band also declares one.
 *
 * Each template returns `{ subject, html, text }`. The plain-text version is
 * not optional garnish: it is what spam filters score against and what shows in
 * clients with images and HTML disabled.
 *
 * Templates own their own escaping, so callers pass raw user input.
 */

const SITE_URL = 'https://cyveradigitals.com';
const LOGO_URL = `${SITE_URL}/email/logo-cyvera.png`;

const BRAND = {
  purple: '#7b19e7',
  magenta: '#c02b7d',
  gradient: 'linear-gradient(135deg, #7b19e7 0%, #c02b7d 100%)',
  ink: '#1a1523',
  body: '#4b4453',
  muted: '#8b8494',
  hairline: '#ece7f5',
  wash: '#faf7ff',
} as const;

const FONT_STACK =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

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

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Escape, then turn newlines into <br> so multi-line details keep their shape. */
function escapeMultiline(value: string): string {
  return escapeHtml(value).replace(/\r?\n/g, '<br />');
}

/** Strip characters that could inject extra headers into a subject line. */
function subjectSafe(value: string): string {
  return value.replace(/[\r\n]+/g, ' ').trim();
}

function firstNameOf(fullName: string): string {
  return fullName.trim().split(/\s+/)[0] || fullName.trim();
}

/**
 * Hidden preview text. The trailing entities pad the preview so the client
 * doesn't pull body copy in after the intended line.
 */
function preheader(text: string): string {
  return `<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:#ffffff;opacity:0;">${escapeHtml(
    text
  )}${'&#8199;&#65279;&#847; '.repeat(40)}</div>`;
}

/** Shared document shell: resets, dark-mode hints, centered 600px container. */
function shell(options: { title: string; preview: string; body: string }): string {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="color-scheme" content="light" />
    <meta name="supported-color-schemes" content="light" />
    <title>${escapeHtml(options.title)}</title>
    <!--[if mso]>
      <style type="text/css">
        body, table, td, a { font-family: Arial, Helvetica, sans-serif !important; }
      </style>
    <![endif]-->
    <style type="text/css">
      /* Scoped to clients that honour <style>; layout never depends on it. */
      body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
      img { border: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }
      table { border-collapse: collapse !important; }
      a { color: ${BRAND.purple}; }
      @media only screen and (max-width: 620px) {
        .container { width: 100% !important; }
        .gutter { padding-left: 24px !important; padding-right: 24px !important; }
        .hero-title { font-size: 26px !important; line-height: 34px !important; }
        .stack { display: block !important; width: 100% !important; }
      }
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:${BRAND.wash};">
    ${preheader(options.preview)}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${BRAND.wash};">
      <tr>
        <td align="center" style="padding:32px 12px;">
          <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;">
            ${options.body}
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

/** White band carrying the logo, sitting above the coloured hero. */
function logoBar(): string {
  return `<tr>
    <td align="center" style="background-color:#ffffff;border-radius:16px 16px 0 0;padding:28px 24px 24px 24px;">
      <img src="${LOGO_URL}" width="200" height="66" alt="Cyvera Digitals" style="display:block;width:200px;max-width:200px;height:auto;" />
    </td>
  </tr>`;
}

/** Gradient band. `background-color` is the Outlook fallback for the gradient. */
function hero(options: { eyebrow: string; title: string; subtitle: string }): string {
  return `<tr>
    <td class="gutter" style="background-color:${BRAND.purple};background-image:${BRAND.gradient};padding:36px 40px;">
      <p style="margin:0 0 10px 0;font-family:${FONT_STACK};font-size:11px;line-height:16px;letter-spacing:1.6px;text-transform:uppercase;color:#f0d9ff;font-weight:700;">${escapeHtml(
        options.eyebrow
      )}</p>
      <h1 class="hero-title" style="margin:0 0 10px 0;font-family:${FONT_STACK};font-size:30px;line-height:38px;color:#ffffff;font-weight:700;">${escapeHtml(
        options.title
      )}</h1>
      <p style="margin:0;font-family:${FONT_STACK};font-size:15px;line-height:24px;color:#f3e6ff;">${escapeHtml(
        options.subtitle
      )}</p>
    </td>
  </tr>`;
}

/** One labelled row inside a detail panel. */
function detailRow(label: string, valueHtml: string, isLast = false): string {
  return `<tr>
    <td style="padding:14px 20px;${
      isLast ? '' : `border-bottom:1px solid ${BRAND.hairline};`
    }">
      <p style="margin:0 0 4px 0;font-family:${FONT_STACK};font-size:11px;line-height:16px;letter-spacing:1.2px;text-transform:uppercase;color:${
        BRAND.muted
      };font-weight:700;">${escapeHtml(label)}</p>
      <div style="font-family:${FONT_STACK};font-size:15px;line-height:23px;color:${
        BRAND.ink
      };">${valueHtml}</div>
    </td>
  </tr>`;
}

function detailPanel(rowsHtml: string): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${BRAND.wash};border:1px solid ${BRAND.hairline};border-radius:12px;">
    ${rowsHtml}
  </table>`;
}

/**
 * Padded-cell button. Outlook renders it square rather than rounded, which is
 * a cosmetic-only degradation.
 */
function button(href: string, label: string): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center" style="background-color:${BRAND.purple};background-image:${BRAND.gradient};border-radius:999px;">
        <a href="${escapeHtml(href)}" style="display:inline-block;padding:14px 32px;font-family:${FONT_STACK};font-size:15px;line-height:20px;font-weight:700;color:#ffffff;text-decoration:none;">${escapeHtml(
          label
        )}</a>
      </td>
    </tr>
  </table>`;
}

function footer(noteHtml: string): string {
  return `<tr>
    <td class="gutter" align="center" style="padding:28px 40px 8px 40px;">
      <p style="margin:0 0 6px 0;font-family:${FONT_STACK};font-size:13px;line-height:20px;color:${BRAND.ink};font-weight:700;">Cyvera Digitals</p>
      <p style="margin:0 0 14px 0;font-family:${FONT_STACK};font-size:13px;line-height:20px;color:${BRAND.muted};">Building, designing &amp; growing brands.</p>
      <p style="margin:0 0 16px 0;font-family:${FONT_STACK};font-size:13px;line-height:20px;">
        <a href="${SITE_URL}" style="color:${BRAND.purple};text-decoration:none;font-weight:600;">Website</a>
        <span style="color:${BRAND.hairline};">&nbsp;&bull;&nbsp;</span>
        <a href="${SITE_URL}/portfolio" style="color:${BRAND.purple};text-decoration:none;font-weight:600;">Portfolio</a>
        <span style="color:${BRAND.hairline};">&nbsp;&bull;&nbsp;</span>
        <a href="${SITE_URL}/pricing" style="color:${BRAND.purple};text-decoration:none;font-weight:600;">Pricing</a>
      </p>
      <p style="margin:0;font-family:${FONT_STACK};font-size:12px;line-height:18px;color:${BRAND.muted};">${noteHtml}</p>
    </td>
  </tr>`;
}

export type ContactSubmission = {
  fullName: string;
  businessName?: string;
  email: string;
  projectType?: string;
  projectDetails: string;
};

export type RenderedEmail = {
  subject: string;
  html: string;
  text: string;
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
