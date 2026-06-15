import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';
import './globals.css';
import { Providers } from './providers';
import { Analytics } from "@vercel/analytics/next"
import JsonLd from '@/components/JsonLd';
import MetaPixel from '@/components/MetaPixel';

// Self-hosted fonts (next/font/local) — no runtime dependency on Google Fonts,
// so no font-swap flash even offline. Files live in app/fonts/.
const poppins = localFont({
  src: [
    { path: './fonts/Poppins-400.woff2', weight: '400', style: 'normal' },
    { path: './fonts/Poppins-500.woff2', weight: '500', style: 'normal' },
    { path: './fonts/Poppins-600.woff2', weight: '600', style: 'normal' },
    { path: './fonts/Poppins-700.woff2', weight: '700', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-poppins',
  preload: true,
});

const inter = localFont({
  src: './fonts/Inter-Variable.woff2',
  weight: '100 900',
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://cyveradigitals.com'),
  title: {
    default: 'Cyvera Digitals | Creative Digital Agency for Modern Businesses',
    template: '%s | Cyvera Digitals',
  },
  description:
    'Cyvera Digitals is a creative digital agency offering web development, UI/UX design, graphic design, branding, and social media management to help modern businesses grow online.',
  keywords: [
    'digital agency',
    'web development',
    'web design',
    'UI UX design',
    'graphic design',
    'branding',
    'social media management',
    'Cyvera Digitals',
    'website development',
    'brand identity',
  ],
  authors: [{ name: 'Cyvera Digitals', url: 'https://cyveradigitals.com' }],
  creator: 'Cyvera Digitals',
  publisher: 'Cyvera Digitals',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Cyvera Digitals',
    title: 'Cyvera Digitals | Creative Digital Agency',
    description:
      'Build. Design. Grow. Full-stack digital solutions — web development, branding, UI/UX, and social media management — that attract, engage, and convert.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Cyvera Digitals – Creative Digital Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cyvera Digitals | Creative Digital Agency',
    description:
      'Build. Design. Grow. Full-stack digital solutions that attract, engage, and convert.',
    images: ['/logo.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <JsonLd data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Organization',
              '@id': 'https://cyveradigitals.com/#organization',
              name: 'Cyvera Digitals',
              url: 'https://cyveradigitals.com',
              logo: {
                '@type': 'ImageObject',
                url: 'https://cyveradigitals.com/logo.png',
              },
              sameAs: [],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                url: 'https://cyveradigitals.com/contact',
              },
            },
            {
              '@type': 'WebSite',
              '@id': 'https://cyveradigitals.com/#website',
              url: 'https://cyveradigitals.com',
              name: 'Cyvera Digitals',
              publisher: { '@id': 'https://cyveradigitals.com/#organization' },
            },
          ],
        }} />
        {children}
        <Analytics />
        <MetaPixel />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NR8G7YKZRF"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NR8G7YKZRF');
          `}
        </Script>
      </body>
    </html>
  );
}
