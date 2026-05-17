# Contact Form Email Setup Guide

## Overview
Your contact form is now fully integrated with **Resend** for email delivery. The system will:
- Send a confirmation email to the client when they submit the form
- Send a detailed notification to the admin (you) about each new inquiry

## Prerequisites

### 1. Create a Resend Account
1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email

### 2. Get Your API Key
1. After signing up, go to the [API Keys dashboard](https://resend.com/api-keys)
2. Click "Create API Key"
3. Copy the key (starts with `re_` for production keys)
4. Store it safely

### 3. Verify Email Addresses
For development, you can use Resend's test domain `onboarding@resend.dev` to send emails.

For production, you have two options:

#### Option A: Use Your Own Domain
1. In Resend dashboard, go to **Domains**
2. Add your domain (e.g., `cyvera.com`)
3. Follow the DNS verification steps
4. Use a verified email like `noreply@cyvera.com` as `ADMIN_SENDER_EMAIL`

#### Option B: Use Resend's Domain
1. Use any email address ending in `@resend.dev` (for testing)
2. For production on Resend's domain, they provide email addresses like `onboarding@resend.dev`

## Configuration

### 1. Update Environment Variables
Edit `.env.local` with your actual values:

```env
RESEND_API_KEY=re_your_actual_api_key_here

# Where to send admin notifications
ADMIN_EMAIL=your-admin-email@gmail.com

# The "from" email (must be verified in Resend)
# For testing: use onboarding@resend.dev
# For production: use a verified domain email
ADMIN_SENDER_EMAIL=onboarding@resend.dev
```

### 2. Testing the Integration

#### With Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` and:
1. Scroll to the contact form
2. Fill out the form with test data
3. Submit
4. Check your email (both admin and client confirmation)

#### Quick Test with curl
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "businessName": "Test Business",
    "email": "test@example.com",
    "projectType": "web-app",
    "projectDetails": "This is a test inquiry"
  }'
```

## File Structure

### New Files Created
```
app/
  api/
    contact/
      route.ts          # API endpoint for form submissions
.env.local              # Environment variables (not committed to git)
```

### Modified Files
```
src/components/
  Contact.tsx           # Updated with form state & API integration
```

## Email Customization

### Client Confirmation Email
- Located in: `/app/api/contact/route.ts` (lines ~50-90)
- Edit the HTML template to match your branding
- Includes: Thank you message, project summary, next steps

### Admin Notification Email
- Located in: `/app/api/contact/route.ts` (lines ~95-150)
- Includes: Full inquiry details with formatted sections
- Includes: Submission timestamp

## Security Considerations

1. **Never commit `.env.local`** - Already in `.gitignore`
2. **Rate Limiting**: Consider adding rate limiting in production
3. **Spam Protection**: Resend provides built-in protections
4. **CORS**: The API is POST-only and validates email format
5. **Error Handling**: Errors are logged to console but safe messages sent to users

## Troubleshooting

### Emails Not Sending?
1. Check your Resend API key is correct
2. Verify `ADMIN_SENDER_EMAIL` is verified in Resend dashboard
3. Check server logs for error messages
4. Try with `onboarding@resend.dev` for testing

### Test Email Not Received?
1. Check spam folder
2. Verify email address in the form
3. Wait a few seconds (Resend is usually instant)

### CORS/API Errors?
1. Make sure your dev server is running (`npm run dev`)
2. Check browser console for error messages
3. Verify all environment variables are set

## Production Deployment

### Before Going Live:

1. **Use a verified domain**
   - Don't rely on `@resend.dev` for production
   - Add your domain in Resend and verify DNS records

2. **Test all email addresses**
   - Test client emails
   - Test admin notifications
   - Test fallback scenarios

3. **Monitor submissions**
   - Check admin email is receiving inquiries
   - Monitor client confirmations

4. **Update environment variables**
   - In Vercel/Netlify/your hosting, set:
     - `RESEND_API_KEY`
     - `ADMIN_EMAIL`
     - `ADMIN_SENDER_EMAIL`

### Deployment Platforms

**Vercel** (recommended for Next.js):
1. Connect your GitHub repo
2. Go to Settings → Environment Variables
3. Add your three env vars
4. Redeploy

**Other Platforms**: Follow similar steps to set environment variables.

## Support & Resources

- **Resend Docs**: https://resend.com/docs
- **Next.js API Routes**: https://nextjs.org/docs/app/building-your-application/routing/route-handlers
- **Email Templates**: Use tools like [MJML](https://mjml.io) for more complex emails

## Next Steps

1. ✅ Install Resend package
2. ✅ Create API endpoint
3. ✅ Update Contact component
4. ⬜ Sign up for Resend account
5. ⬜ Get API key
6. ⬜ Verify sender email
7. ⬜ Update `.env.local`
8. ⬜ Test the form
9. ⬜ Deploy to production
