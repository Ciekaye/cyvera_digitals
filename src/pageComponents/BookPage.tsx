'use client';

import { motion } from 'framer-motion';
import BookingPicker from '@/components/BookingPicker';
import GridBackground from '@/components/GridBackground';
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

export default function BookPage({ ownerTimezone }: { ownerTimezone: string }) {
  return (
    <section id="book" className="smooth-scroll-section relative py-20 lg:py-28 overflow-hidden">
      <GridBackground />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Intro — left column */}
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-secondary-purple font-semibold text-lg mb-2"
            >
              Let&apos;s talk
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-display text-gray-900 mb-4"
            >
              Book a <span className="text-gradient-purple">free discovery call</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-gray-600"
            >
              Pick a time that suits you. We&apos;ll send a calendar invite and a Google Meet
              link to your inbox — no back-and-forth emails.
            </motion.p>

            {/* What to expect */}
            <ul className="mt-10 space-y-6">
              {EXPECTATIONS.map(({ icon: Icon, title, body }, i) => (
                <motion.li
                  key={title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 + i * 0.15 }}
                  className="flex gap-4"
                >
                  <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#c02b7d] flex items-center justify-center shadow-md">
                    <Icon className="text-white" size={20} />
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">{title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Booking card — right column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <BookingPicker ownerTimezone={ownerTimezone} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
