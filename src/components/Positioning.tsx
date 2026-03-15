'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles } from 'lucide-react';

export default function Positioning() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-modern-primary">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6"
        >
          <Sparkles size={16} className="text-secondary-purple" />
          <span className="text-sm font-semibold text-secondary-purple">Designed for modern businesses</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-heading text-gray-900 leading-snug"
        >
          Helping startups, creators, and growing brands establish a{' '}
          <span className="text-gradient-purple">strong and professional</span>{' '}
          digital presence.
        </motion.p>
      </div>
    </section>
  );
}
