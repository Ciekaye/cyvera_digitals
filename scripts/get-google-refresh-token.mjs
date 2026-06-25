/**
 * One-time helper to obtain a Google Calendar refresh token for the booking system.
 *
 * Usage (from the project root):
 *   node scripts/get-google-refresh-token.mjs
 *
 * Prerequisites:
 *   - GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET set in .env.local for a VALID
 *     OAuth client (Desktop app type recommended — it allows the loopback
 *     redirect this script uses without registering redirect URIs).
 *   - The Google Calendar API enabled on that Cloud project.
 *   - If the OAuth consent screen is in "Testing", your Google account must be
 *     added as a Test user.
 *
 * What it does: opens Google's consent screen, captures the auth code on a tiny
 * local server, exchanges it for tokens, and writes GOOGLE_REFRESH_TOKEN back
 * into .env.local. Sign in with the account that OWNS the calendar.
 */
import http from 'node:http';
import { readFileSync, writeFileSync } from 'node:fs';
import { exec } from 'node:child_process';
import { google } from 'googleapis';

const ENV_PATH = new URL('../.env.local', import.meta.url);
const PORT = 4567;
const REDIRECT_URI = `http://localhost:${PORT}`;
const SCOPES = ['https://www.googleapis.com/auth/calendar'];

function parseEnv(text) {
  const out = {};
  for (const line of text.split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !line.trim().startsWith('#')) out[m[1]] = m[2];
  }
  return out;
}

function upsertEnv(text, key, value) {
  const lines = text.split('\n');
  const idx = lines.findIndex((l) => l.match(new RegExp(`^\\s*${key}\\s*=`)) && !l.trim().startsWith('#'));
  if (idx >= 0) {
    lines[idx] = `${key}=${value}`;
  } else {
    lines.push(`${key}=${value}`);
  }
  return lines.join('\n');
}

const envText = readFileSync(ENV_PATH, 'utf8');
const env = parseEnv(envText);

const clientId = env.GOOGLE_CLIENT_ID;
const clientSecret = env.GOOGLE_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  console.error('\n✗ GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET missing from .env.local.\n');
  process.exit(1);
}

const oauth2 = new google.auth.OAuth2(clientId, clientSecret, REDIRECT_URI);

const authUrl = oauth2.generateAuthUrl({
  access_type: 'offline',
  prompt: 'consent', // force a refresh_token every time
  scope: SCOPES,
});

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, REDIRECT_URI);
    if (!url.searchParams.has('code')) {
      res.writeHead(204);
      res.end();
      return;
    }

    const code = url.searchParams.get('code');
    const { tokens } = await oauth2.getToken(code);

    if (!tokens.refresh_token) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end('<h2>No refresh token returned.</h2><p>Revoke the app at myaccount.google.com/permissions and run this again.</p>');
      console.error('\n✗ Google did not return a refresh_token. Revoke prior access at');
      console.error('  https://myaccount.google.com/permissions and re-run.\n');
      server.close();
      process.exit(1);
    }

    const updated = upsertEnv(readFileSync(ENV_PATH, 'utf8'), 'GOOGLE_REFRESH_TOKEN', tokens.refresh_token);
    writeFileSync(ENV_PATH, updated);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h2>✅ Refresh token saved to .env.local</h2><p>You can close this tab and return to the terminal.</p>');
    console.log('\n✅ GOOGLE_REFRESH_TOKEN written to .env.local. Restart the dev server.\n');
    server.close();
    process.exit(0);
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/html' });
    res.end(`<h2>Error</h2><pre>${String(err?.message || err)}</pre>`);
    console.error('\n✗ Token exchange failed:', err?.message || err, '\n');
    server.close();
    process.exit(1);
  }
});

server.listen(PORT, () => {
  console.log('\nOpening Google consent screen…');
  console.log('If it does not open, paste this URL into your browser:\n');
  console.log(authUrl + '\n');
  exec(`open "${authUrl}"`); // macOS
});
