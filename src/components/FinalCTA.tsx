'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA({ hidePricingLink = false }: { hidePricingLink?: boolean } = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-100 to-purple-100">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl bg-white shadow-xl"
        >
          {/* Decorative left arc */}
          <div
            className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
            style={{
              border: '60px solid rgba(139, 92, 246, 0.35)',
              filter: 'blur(28px)',
            }}
            aria-hidden="true"
          />
          {/* Decorative right arc */}
          <div
            className="pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
            style={{
              border: '60px solid rgba(139, 92, 246, 0.35)',
              filter: 'blur(28px)',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 px-8 py-20 md:py-24 text-center">
            {/* Pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-200 bg-white text-sm font-medium text-gray-700 mb-8"
            >
              Cyvera Digitals — Strategy. Design. Growth.
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl mx-auto leading-[1.1] text-gray-900 tracking-tight"
            >
              Let's Build Something{' '}
              <span className="block">Worth Noticing.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-gray-600 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed"
            >
              Whether you're launching, rebranding, or scaling, Cyvera Digitals turns your ideas into a digital presence that performs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white text-base font-semibold hover:shadow-2xl transition-all no-underline"
                  style={{ backgroundColor: '#C02B7D' }}
                >
                  Book a Free Discovery Call
                </Link>
              </motion.div>
              {!hidePricingLink && (
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 px-6 py-3 text-gray-700 font-semibold hover:text-secondary-purple transition-colors no-underline"
                >
                  View pricing
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
