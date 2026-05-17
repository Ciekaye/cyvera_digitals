'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden bg-white">
      {/* Animated wave background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Grid Background */}
        <div
          className="absolute top-0 left-0 right-0 z-0"
          style={{
            height: "60%",
            backgroundImage: `
              linear-gradient(to right, #d1d5db 1px, transparent 1px),
              linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            opacity: 0.2,
          }}
        />

        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 600"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          style={{ minHeight: '100%' }}
        >
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e879f9" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f0abfc" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#c4b5fd" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.65" />
            </linearGradient>
            <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d946ef" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#818cf8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.5" />
            </linearGradient>
            <filter id="blur-wave">
              <feGaussianBlur stdDeviation="8" />
            </filter>
          </defs>

          {/* Back wave - blurred, lightest */}
          <path fill="url(#wave3)" opacity="0.7" d="M0,320 C200,200 400,420 600,300 C800,180 1000,380 1200,280 C1350,200 1420,320 1440,300 L1440,600 L0,600 Z" />

          {/* Mid wave */}
          <path fill="url(#wave2)" opacity="0.85" d="M0,380 C160,280 360,460 580,350 C760,250 980,430 1180,330 C1340,250 1410,360 1440,340 L1440,600 L0,600 Z" />

          {/* Front wave - sharpest, most vivid */}
          <path fill="url(#wave1)" opacity="0.9" d="M0,420 C180,320 360,500 580,400 C760,310 960,480 1180,380 C1340,300 1410,400 1440,380 L1440,600 L0,600 Z" />

          {/* Fine line details */}
          <path fill="none" stroke="#e879f9" strokeWidth="1.2" opacity="0.35" d="M0,440 C200,360 400,500 620,420 C820,340 1020,490 1240,400 C1370,340 1420,420 1440,400" />
          <path fill="none" stroke="#a78bfa" strokeWidth="1" opacity="0.3" d="M0,460 C180,380 380,520 600,440 C800,360 1000,510 1220,420 C1360,360 1420,440 1440,425" />
        </svg>

        {/* Soft radial glow top-left */}
        <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-gradient-radial from-fuchsia-100/60 via-purple-50/30 to-transparent rounded-full" />
        {/* Soft radial glow top-right */}
        <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-gradient-radial from-blue-100/50 via-indigo-50/20 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-16 lg:pt-24 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center justify-center gap-2 mb-6"
          >
            <Sparkles size={20} className="text-secondary-purple" />
            <span className="text-secondary-purple font-semibold text-lg md:text-xl">
              Strategy. Design. Growth.
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-inter font-medium text-gray-900 mb-6 tracking-tight leading-[1.2] text-[clamp(2.5rem,6vw,4.5rem)]"
          >
            We Build Digital Experiences That{' '}
            <span className="text-gradient-purple italic font-medium leading-[1.2]">
              Work as Hard as You Do
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-subheading mb-12 max-w-[52rem] mx-auto leading-relaxed"
            style={{ color: '#535252' }}
          >
            From bold brand identities to high performing websites, Cyvera Digitals helps startups and growing businesses show up online with purpose and professionalism.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-10"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="group btn-gradient-primary text-lg font-semibold hover:shadow-2xl transition-all inline-flex items-center gap-2 no-underline"
              >
                Get Started
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-gray-200 text-gray-700 font-semibold text-lg hover:border-purple-300 hover:text-purple-700 transition-all no-underline"
              >
                <Play size={18} className="text-secondary-purple" />
                See What We've Built
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-16 mx-auto max-w-6xl"
          >
            <div
              className="border-2 border-secondary-purple rounded-[31px] p-3"
              style={{ boxShadow: '0 4px 4px 0 rgba(0,0,0,0.25)' }}
            >
              <div
                className="relative rounded-[30px] overflow-hidden aspect-[1093/577]"
                style={{ boxShadow: '0 7px 11.9px 7px rgba(0,0,0,0.11)' }}
              >
                <Image
                  src="/heroimage.jpg"
                  alt="Cyvera Digitals work showcase"
                  fill
                  sizes="(min-width: 1024px) 1100px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
