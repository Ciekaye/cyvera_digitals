'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import FlairButton from '@/components/ui/FlairButton';
import { ArrowRight } from 'lucide-react';
import PortfolioCard from '@/components/PortfolioCard';
import { projects } from '@/data/portfolio';

export default function PortfolioPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Hide the section entirely on the homepage until there are real projects.
  if (projects.length === 0) return null;

  const preview = projects.slice(0, 3);

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-display text-center text-gray-900 mb-6"
        >
          Selected Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-subheading text-center text-gray-600 mb-16 max-w-3xl mx-auto"
        >
          A glimpse of projects and concepts we've crafted for brands and
          businesses.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {preview.map((project, index) => (
            <PortfolioCard
              key={project.url}
              project={project}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <FlairButton href="/portfolio" className="group">
            View Full Portfolio
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </FlairButton>
        </motion.div>
      </div>
    </section>
  );
}
