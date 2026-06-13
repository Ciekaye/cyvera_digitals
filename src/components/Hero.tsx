'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import FlairButton from '@/components/ui/FlairButton';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const waveRef = useRef<SVGSVGElement>(null);

  // Pause the morphing wave animation whenever the hero is scrolled out of
  // view so it costs nothing while the user reads the rest of the page.
  useEffect(() => {
    const section = sectionRef.current;
    const wave = waveRef.current;
    if (!section || !wave) return;

    // Honor a reduced-motion preference by freezing the waves outright.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      wave.pauseAnimations();
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) wave.unpauseAnimations();
      else wave.pauseAnimations();
    });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center overflow-hidden bg-white">
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
            maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
          }}
        />

        {/* Original morphing wave background: each layer animates its path `d`
            (SMIL) so the waves gently undulate in place, with the back layer
            blurred for depth. Paused while the hero is off-screen. */}
        <svg
          ref={waveRef}
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 600"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          style={{ minHeight: '100%' }}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e879f9" stopOpacity="0.55" />
              <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f0abfc" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#c4b5fd" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.45" />
            </linearGradient>
            <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d946ef" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#818cf8" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.3" />
            </linearGradient>
            <filter
              id="blur-wave"
              x="-2%"
              y="-15%"
              width="104%"
              height="130%"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="8" />
            </filter>
          </defs>

          {/* Back wave - blurred, lightest */}
          <path filter="url(#blur-wave)" fill="url(#wave3)" opacity="0.7">
            <animate
              attributeName="d"
              dur="9s"
              repeatCount="indefinite"
              values="
                M0,320 C200,200 400,420 600,300 C800,180 1000,380 1200,280 C1350,200 1420,320 1440,300 L1440,600 L0,600 Z;
                M0,360 C180,260 380,440 620,320 C820,210 1020,400 1240,300 C1370,230 1420,340 1440,320 L1440,600 L0,600 Z;
                M0,320 C200,200 400,420 600,300 C800,180 1000,380 1200,280 C1350,200 1420,320 1440,300 L1440,600 L0,600 Z
              "
            />
          </path>

          {/* Mid wave */}
          <path fill="url(#wave2)" opacity="0.85">
            <animate
              attributeName="d"
              dur="7s"
              repeatCount="indefinite"
              values="
                M0,380 C160,280 360,460 580,350 C760,250 980,430 1180,330 C1340,250 1410,360 1440,340 L1440,600 L0,600 Z;
                M0,340 C200,240 380,480 600,360 C800,260 1000,450 1220,340 C1360,270 1420,370 1440,350 L1440,600 L0,600 Z;
                M0,380 C160,280 360,460 580,350 C760,250 980,430 1180,330 C1340,250 1410,360 1440,340 L1440,600 L0,600 Z
              "
            />
          </path>

          {/* Front wave - sharpest, most vivid */}
          <path fill="url(#wave1)" opacity="0.9">
            <animate
              attributeName="d"
              dur="5.5s"
              repeatCount="indefinite"
              values="
                M0,420 C180,320 360,500 580,400 C760,310 960,480 1180,380 C1340,300 1410,400 1440,380 L1440,600 L0,600 Z;
                M0,400 C200,300 380,520 600,410 C800,320 980,500 1200,390 C1360,320 1420,410 1440,390 L1440,600 L0,600 Z;
                M0,420 C180,320 360,500 580,400 C760,310 960,480 1180,380 C1340,300 1410,400 1440,380 L1440,600 L0,600 Z
              "
            />
          </path>

          {/* Fine line details */}
          <path fill="none" stroke="#e879f9" strokeWidth="1.2" opacity="0.35">
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
                M0,440 C200,360 400,500 620,420 C820,340 1020,490 1240,400 C1370,340 1420,420 1440,400;
                M0,420 C220,340 420,520 640,430 C840,350 1040,510 1260,410 C1380,350 1420,430 1440,415;
                M0,440 C200,360 400,500 620,420 C820,340 1020,490 1240,400 C1370,340 1420,420 1440,400
              "
            />
          </path>
          <path fill="none" stroke="#a78bfa" strokeWidth="1" opacity="0.3">
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="
                M0,460 C180,380 380,520 600,440 C800,360 1000,510 1220,420 C1360,360 1420,440 1440,425;
                M0,445 C200,365 400,540 620,450 C820,370 1020,530 1240,435 C1370,370 1420,450 1440,435;
                M0,460 C180,380 380,520 600,440 C800,360 1000,510 1220,420 C1360,360 1420,440 1440,425
              "
            />
          </path>
        </svg>

        {/* Soft radial glow top-left */}
        <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-gradient-radial from-fuchsia-100/60 via-purple-50/30 to-transparent rounded-full blur-3xl" />
        {/* Soft radial glow top-right */}
        <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-gradient-radial from-blue-100/50 via-indigo-50/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-16 lg:pt-24 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center justify-center gap-2 mb-6"
          >
            <span className="text-secondary-purple font-semibold text-lg md:text-xl">
              Strategy. Design. Growth.
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 30 }}
            animate={{ y: 0 }}
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
              <FlairButton href="/portfolio" className="group text-lg no-underline">
                <Play size={18} className="text-secondary-purple group-hover:text-white transition-colors" />
                See What We've Built
              </FlairButton>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ y: 40 }}
            animate={{ y: 0 }}
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
