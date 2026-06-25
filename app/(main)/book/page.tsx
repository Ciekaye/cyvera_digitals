import type { Metadata } from 'next';
import BookingPicker from '@/components/BookingPicker';
import JsonLd from '@/components/JsonLd';
import GridBackground from '@/components/GridBackground';
import { OWNER_TIMEZONE } from '@/lib/booking/config';
import { Clock, Video, ShieldCheck } from 'lucide-react';

const EXPECTATIONS = [
  {
    icon: Clock,
    title: '30 minutes, focused',
    body: 'A quick, no-fluff chat about your goals, challenges, and where we can help.',
  },
  {
    icon: Video,
    title: 'On Google Meet',
    body: 'You’ll get a calendar invite with the Meet link the moment you book.',
  },
  {
    icon: ShieldCheck,
    title: 'Zero pressure',
    body: 'No commitment and no hard sell — just honest advice you can act on.',
  },
];

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

export default function BookPage() {
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
      <section id="book" className="smooth-scroll-section relative py-20 lg:py-28 overflow-hidden">
        <GridBackground />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Intro — left column */}
            <div className="max-w-xl">
              <p className="text-secondary-purple font-semibold text-lg mb-2">Let&apos;s talk</p>
              <h1 className="text-display text-gray-900 mb-4">
                Book a <span className="text-gradient-purple">free discovery call</span>
              </h1>
              <p className="text-lg text-gray-600">
                Pick a time that suits you. We&apos;ll send a calendar invite and a Google Meet
                link to your inbox — no back-and-forth emails.
              </p>

              {/* What to expect */}
              <ul className="mt-10 space-y-6">
                {EXPECTATIONS.map(({ icon: Icon, title, body }) => (
                  <li key={title} className="flex gap-4">
                    <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#c02b7d] flex items-center justify-center shadow-md">
                      <Icon className="text-white" size={20} />
                    </span>
                    <div>
                      <p className="font-semibold text-gray-900">{title}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Booking card — right column */}
            {/* The owner timezone is forwarded from the server so no extra public
                env var is needed; all credentials stay server-side. */}
            <div className="flex justify-center lg:justify-end">
              <BookingPicker ownerTimezone={OWNER_TIMEZONE} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
