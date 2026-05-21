'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import GridBackground from '@/components/GridBackground';
import FinalCTA from '@/components/FinalCTA';
import PortfolioCard from '@/components/PortfolioCard';
import { projects } from '@/data/portfolio';

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-12 overflow-hidden bg-modern-primary">
        <GridBackground />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 container mx-auto px-4 lg:px-8 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6"
          >
            <Sparkles size={16} className="text-secondary-purple" />
            <span className="text-sm font-semibold text-secondary-purple">
              Our Work
            </span>
          </motion.div>
          <h1 className="text-display text-gray-900 mb-6">
            Selected{' '}
            <span className="text-gradient-purple">Projects</span>
          </h1>
          <p className="text-subheading max-w-2xl mx-auto" style={{ color: '#535252' }}>
            A growing collection of websites we've built and brands we've
            shaped. Click any card to view the live site.
          </p>
        </motion.div>
      </section>

      {/* Projects grid */}
      <section className="relative py-16 overflow-hidden bg-modern-primary">
        {/* Wave background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 1440 600"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            style={{ minHeight: '100%' }}
          >
            <defs>
              <linearGradient id="portfolio-wave1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e879f9" stopOpacity="0.55" />
                <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="portfolio-wave2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f0abfc" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#c4b5fd" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.45" />
              </linearGradient>
              <linearGradient id="portfolio-wave3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d946ef" stopOpacity="0.25" />
                <stop offset="60%" stopColor="#818cf8" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.3" />
              </linearGradient>
            </defs>

            {/* Back wave */}
            <path fill="url(#portfolio-wave3)" opacity="0.7" d="M0,320 C200,200 400,420 600,300 C800,180 1000,380 1200,280 C1350,200 1420,320 1440,300 L1440,600 L0,600 Z" />

            {/* Mid wave */}
            <path fill="url(#portfolio-wave2)" opacity="0.85" d="M0,380 C160,280 360,460 580,350 C760,250 980,430 1180,330 C1340,250 1410,360 1440,340 L1440,600 L0,600 Z" />

            {/* Front wave */}
            <path fill="url(#portfolio-wave1)" opacity="0.9" d="M0,420 C180,320 360,500 580,400 C760,310 960,480 1180,380 C1340,300 1410,400 1440,380 L1440,600 L0,600 Z" />

            {/* Fine line details */}
            <path fill="none" stroke="#e879f9" strokeWidth="1.2" opacity="0.35" d="M0,440 C200,360 400,500 620,420 C820,340 1020,490 1240,400 C1370,340 1420,420 1440,400" />
            <path fill="none" stroke="#a78bfa" strokeWidth="1" opacity="0.3" d="M0,460 C180,380 380,520 600,440 C800,360 1000,510 1220,420 C1360,360 1420,440 1440,425" />
          </svg>
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          {projects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">
                Projects coming soon. Check back shortly.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <PortfolioCard
                  key={project.url}
                  project={project}
                  delay={index * 0.1}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
