'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function Positioning() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-10 lg:py-14 bg-modern-primary overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="relative w-full bg-[#fffdfd]"
        style={{ boxShadow: 'inset 0 0 26px 9px rgba(0,0,0,0.12)' }}
      >
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-6 md:gap-5 lg:gap-3 py-10 sm:py-14 lg:py-16 px-0">
          {/* Gradient capsule with the glass logo. Flat on the left (flush with the screen
              edge) and rounded only on the right at every breakpoint, so it reads as a
              pill flowing in from off-screen rather than a circle. Stacked full-width-ish
              above the text pill on mobile/tablet; sits beside it on desktop. */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative flex-shrink-0 self-start flex items-center justify-center md:justify-end lg:justify-end w-full h-28 sm:h-32 md:w-[38%] md:h-28 lg:w-[28rem] lg:h-52 xl:w-[34rem] xl:h-56 md:pr-8 lg:pr-10 xl:pr-14"
          >
            {/* Colored pill, narrower than the wrapper on mobile so a small gap shows
                before the true right edge. On md+ the wrapper itself is already the
                narrow pill size, so this just fills it. */}
            <div className="absolute inset-y-0 left-0 w-[92%] md:w-full rounded-l-none rounded-r-full bg-gradient-to-r from-[#d899fc] to-[#b1c4fe]" />
            <Image
              src="/positioning/glass-logo.png"
              alt="Cyvera Digitals"
              width={1122}
              height={1402}
              className="relative z-10 w-28 sm:w-32 md:w-28 lg:w-40 xl:w-48 h-auto"
              style={{ filter: 'drop-shadow(-8px 14px 16px rgba(0,0,0,0.25))' }}
            />
          </motion.div>

          {/* Lighter capsule with the trust statement. Cut flat on the right (flush with
              the screen edge) at every breakpoint, rounded only on the left. */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full md:w-[68%] md:ml-[34%] lg:ml-0 lg:flex-1 lg:h-52 xl:h-56 flex items-center justify-center rounded-l-full rounded-r-none bg-[rgba(177,196,254,0.6)] px-6 py-8 sm:px-8 md:px-10 lg:px-16 lg:py-6 text-center"
          >
            <p className="font-inter font-semibold text-black text-balance leading-snug text-[clamp(1.25rem,2.8vw,2.1rem)]">
              Trusted by startups, creators, and growing brands who want a{' '}
              <span className="text-gradient-purple italic">digital presence worth noticing</span>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
