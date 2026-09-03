/**
 * Shared building blocks for transactional HTML emails.
 *
 * These are written as table-based layouts with fully inline styles because
 * that is what email clients reliably render — Gmail strips <style> blocks in
 * several contexts and Outlook (Word rendering engine) ignores most modern CSS.
 * Gradients degrade to the solid `background-color` underneath them in Outlook,
 * which is why every gradient band also declares one.
 *
 * Templates built from these return `{ subject, html, text }`. The plain-text
 * version is not optional garnish: it is what spam filters score against and
 * what shows in clients with images and HTML disabled.
 *
 * Templates own their own escaping, so callers pass raw user input.
 *
 * Dependency rule: this module and the templates beside it are pure string
 * builders — no I/O, no config reads, and in particular nothing from
 * `src/lib/booking/`. Values like the owner timezone or call duration are
 * passed in as data. That keeps every template renderable in isolation, which
 * is what makes a preview harness and byte-diff testing possible.
 */

export const SITE_URL = 'https://cyveradigitals.com';
export const LOGO_URL = `${SITE_URL}/email/logo-cyvera.png`;

export const BRAND = {
  purple: '#7b19e7',
  magenta: '#c02b7d',
  gradient: 'linear-gradient(135deg, #7b19e7 0%, #c02b7d 100%)',
  ink: '#1a1523',
  body: '#4b4453',
  muted: '#8b8494',
  hairline: '#ece7f5',
  wash: '#faf7ff',
} as const;

export const FONT_STACK =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

export type RenderedEmail = {
  subject: string;
  html: string;
  text: string;
};

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Escape, then turn newlines into <br> so multi-line details keep their shape. */
export function escapeMultiline(value: string): string {
  return escapeHtml(value).replace(/\r?\n/g, '<br />');
}

/** Strip characters that could inject extra headers into a subject line. */
export function subjectSafe(value: string): string {
  return value.replace(/[\r\n]+/g, ' ').trim();
}

export function firstNameOf(fullName: string): string {
  return fullName.trim().split(/\s+/)[0] || fullName.trim();
}

/**
 * Hidden preview text. The trailing entities pad the preview so the client
 * doesn't pull body copy in after the intended line.
 */
export function preheader(text: string): string {
  return `<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:#ffffff;opacity:0;">${escapeHtml(
    text
  )}${'&#8199;&#65279;&#847; '.repeat(40)}</div>`;
}

/** Shared document shell: resets, dark-mode hints, centered 600px container. */
export function shell(options: { title: string; preview: string; body: string }): string {
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
export function logoBar(): string {
  return `<tr>
    <td align="center" style="background-color:#ffffff;border-radius:16px 16px 0 0;padding:28px 24px 24px 24px;">
      <img src="${LOGO_URL}" width="200" height="77" alt="Cyvera Digitals" style="display:block;width:200px;max-width:200px;height:auto;" />
    </td>
  </tr>`;
}

/** Gradient band. `background-color` is the Outlook fallback for the gradient. */
export function hero(options: { eyebrow: string; title: string; subtitle: string }): string {
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
export function detailRow(label: string, valueHtml: string, isLast = false): string {
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

export function detailPanel(rowsHtml: string): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${BRAND.wash};border:1px solid ${BRAND.hairline};border-radius:12px;">
    ${rowsHtml}
  </table>`;
}

/**
 * Panel with a magenta rule down the left edge, for a block of free text the
 * reader shouldn't skim past — a contact form's project details, a booking's
 * notes. Takes already-escaped HTML.
 */
export function accentPanel(contentHtml: string): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${BRAND.wash};border:1px solid ${BRAND.hairline};border-left:4px solid ${BRAND.magenta};border-radius:12px;">
    <tr>
      <td style="padding:18px 20px;font-family:${FONT_STACK};font-size:15px;line-height:24px;color:${BRAND.ink};">${contentHtml}</td>
    </tr>
  </table>`;
}

/**
 * Padded-cell button. Outlook renders it square rather than rounded, which is
 * a cosmetic-only degradation.
 */
export function button(href: string, label: string): string {
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

export function footer(noteHtml: string): string {
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
