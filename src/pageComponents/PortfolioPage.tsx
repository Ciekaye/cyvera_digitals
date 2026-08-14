'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GridBackground from '@/components/GridBackground';
import FinalCTA from '@/components/FinalCTA';
import PortfolioCard from '@/components/PortfolioCard';
import { projects, FilterCategory } from '@/data/portfolio';

const FILTERS: { label: string; value: FilterCategory | 'All' }[] = [
  { label: 'All', value: 'All' },
  { label: 'Custom Website Development', value: 'Custom Website Development' },
  { label: 'WordPress Website Development', value: 'WordPress Website Development' },
  { label: 'Graphic Design', value: 'Graphic Design' },
  { label: 'Social Media Management', value: 'Social Media Management' },
];

export default function PortfolioPage() {
  const [active, setActive] = useState<FilterCategory | 'All'>('All');

  const filtered =
    active === 'All'
      ? projects
      : projects.filter((p) => p.filterCategory === active);

  // Count per category so empty tabs can be visually de-emphasized.
  const countFor = (value: FilterCategory | 'All') =>
    value === 'All'
      ? projects.length
      : projects.filter((p) => p.filterCategory === value).length;

  return (
    <>
      {/* Hero + work, one continuous section so spacing stays cohesive */}
      <section className="relative pt-20 pb-20 overflow-hidden bg-modern-primary">
        <GridBackground />

        {/* Subtle wave anchored to the bottom of the whole section */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 pointer-events-none">
          <svg
            className="absolute bottom-0 left-0 w-full h-full"
            viewBox="0 0 1440 600"
            preserveAspectRatio="xMidYMax slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="portfolio-wave1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e879f9" stopOpacity="0.35" />
                <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.32" />
              </linearGradient>
              <linearGradient id="portfolio-wave2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f0abfc" stopOpacity="0.24" />
                <stop offset="50%" stopColor="#c4b5fd" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.26" />
              </linearGradient>
            </defs>
            <path fill="url(#portfolio-wave2)" d="M0,420 C160,320 360,500 580,390 C760,290 980,470 1180,370 C1340,290 1410,400 1440,380 L1440,600 L0,600 Z" />
            <path fill="url(#portfolio-wave1)" d="M0,460 C180,360 360,540 580,440 C760,350 960,520 1180,420 C1340,340 1410,440 1440,420 L1440,600 L0,600 Z" />
          </svg>
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          {/* Header block */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-sm font-semibold text-secondary-purple mb-5">
              Our Work
            </span>
            <h1 className="text-display text-gray-900 mb-5">
              Selected <span className="text-gradient-purple">Projects</span>
            </h1>
            <p className="text-subheading" style={{ color: '#535252' }}>
              A growing collection of websites we&apos;ve built and brands
              we&apos;ve shaped. Click any card to view the live site.
            </p>
          </motion.div>

          {/* Filter bar — sits directly under the header, no dead space */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 mb-10"
          >
            <div className="flex flex-wrap justify-center gap-2.5">
              {FILTERS.map((f) => {
                const isActive = active === f.value;
                const count = countFor(f.value);
                const disabled = count === 0;
                return (
                  <button
                    key={f.value}
                    onClick={() => !disabled && setActive(f.value)}
                    disabled={disabled}
                    className="relative px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-40"
                    style={{
                      color: isActive ? '#fff' : '#7b19e7',
                      border: isActive ? 'none' : '1.5px solid #e2d4fb',
                      background: isActive ? 'transparent' : 'rgba(250,245,255,0.8)',
                    }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="filter-pill"
                        className="absolute inset-0 rounded-full"
                        style={{ background: 'linear-gradient(135deg,#7b19e7,#c02b7d)' }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      {f.label}
                      <span
                        className="text-xs font-bold tabular-nums"
                        style={{ color: isActive ? 'rgba(255,255,255,0.75)' : '#b794e8' }}
                      >
                        {count}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-400 text-lg">
                No projects in this category yet — check back soon.
              </p>
            </motion.div>
          ) : (
            <motion.div
              layout
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 max-w-6xl mx-auto"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((project, index) => (
                  <motion.div
                    key={project.url}
                    layout
                    initial={index < 3 ? false : { opacity: 0, scale: 0.92, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.88, y: -10 }}
                    transition={{ duration: 0.35, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <PortfolioCard
                      project={project}
                      showDescription
                      priority={index < 3}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
