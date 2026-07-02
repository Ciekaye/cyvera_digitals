import type { Metadata } from 'next';
import BookPage from '@/pageComponents/BookPage';
import JsonLd from '@/components/JsonLd';
import { OWNER_TIMEZONE } from '@/lib/booking/config';

export const metadata: Metadata = {
  title: 'Book a Free Discovery Call',
  description:
    'Pick a time that works for you and book a free discovery call with Cyvera Digitals. We will send a Google Calendar invite and a Google Meet link automatically.',
  keywords: ['book a call', 'discovery call', 'free consultation', 'Cyvera Digitals booking'],
  alternates: { canonical: 'https://cyveradigitals.com/book' },
  openGraph: {
    title: 'Book a Free Discovery Call | Cyvera Digitals',
    description: 'Choose a time and book your free discovery call with Cyvera Digitals.',
    url: 'https://cyveradigitals.com/book',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Book a call with Cyvera Digitals' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Free Discovery Call | Cyvera Digitals',
    description: 'Choose a time and book your free discovery call.',
    images: ['/logo.png'],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': 'https://cyveradigitals.com/book#webpage',
          url: 'https://cyveradigitals.com/book',
          name: 'Book a Free Discovery Call — Cyvera Digitals',
          description:
            'Self-serve booking for a free discovery call with Cyvera Digitals.',
          isPartOf: { '@id': 'https://cyveradigitals.com/#website' },
        }}
      />
      {/* The owner timezone is forwarded from the server so no extra public
          env var is needed; all credentials stay server-side. */}
      <BookPage ownerTimezone={OWNER_TIMEZONE} />
    </>
  );
}
