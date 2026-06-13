'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import FlairButton from '@/components/ui/FlairButton';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Pause the wave animation whenever the hero is scrolled out of view so it
  // costs nothing while the user reads the rest of the page.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      section.dataset.waves = entry.isIntersecting ? 'running' : 'paused';
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

        {/* Shared gradient defs for the wave layers */}
        <svg width="0" height="0" aria-hidden="true" className="absolute">
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
          </defs>
        </svg>

        {/* Wave layers: smooth organic curves drawn 2x wide and looped exactly
            one tile on the GPU (translateX), each with a gentle vertical bob
            (translateY) so they undulate like flowing water — without the
            main-thread cost of path-morphing, so it stays smooth on mobile. */}
        <div className="hero-wave hero-wave-back absolute left-0 h-full" style={{ width: '200%', bottom: '-16px' }}>
          <svg className="hero-wave-bob hero-wave-bob-back h-full w-full" viewBox="0 0 2880 600" preserveAspectRatio="none" aria-hidden="true">
            <path fill="url(#wave3)" opacity="0.7" d="M0,350.6 C27,353.2 53,354 80,355.7 C107,357.3 133,358.8 160,360.7 C187,362.5 213,365.1 240,366.9 C267,368.6 293,370.6 320,371.3 C347,371.9 373,371.7 400,370.8 C427,370.1 453,368.1 480,366.8 C507,365.5 533,364 560,362.9 C587,361.7 613,361.4 640,360.1 C667,358.5 693,357.7 720,354.1 C747,350.6 773,345.8 800,339.1 C827,332.4 853,322.8 880,314.3 C907,305.5 933,294.5 960,287.3 C987,280.1 1013,273.4 1040,271.4 C1067,269.2 1093,270.6 1120,274.5 C1147,278.3 1173,286.8 1200,294.4 C1227,302.1 1253,312.4 1280,320 C1307,327.6 1333,334.9 1360,340 C1387,345 1413,347.9 1440,350.6 C1467,353.2 1493,354 1520,355.7 C1547,357.3 1573,358.8 1600,360.7 C1627,362.5 1653,365.1 1680,366.9 C1707,368.6 1733,370.6 1760,371.3 C1787,371.9 1813,371.7 1840,370.8 C1867,370.1 1893,368.1 1920,366.8 C1947,365.5 1973,364 2000,362.9 C2027,361.7 2053,361.4 2080,360.1 C2107,358.5 2133,357.7 2160,354.1 C2187,350.6 2213,345.8 2240,339.1 C2267,332.4 2293,322.8 2320,314.3 C2347,305.5 2373,294.5 2400,287.3 C2427,280.1 2453,273.4 2480,271.4 C2507,269.2 2533,270.6 2560,274.5 C2587,278.3 2613,286.8 2640,294.4 C2667,302.1 2693,312.4 2720,320 C2747,327.6 2773,334.9 2800,340 C2827,345 2853,347.9 2880,350.6 L2880,600 L0,600 Z" />
          </svg>
        </div>
        <div className="hero-wave hero-wave-mid absolute left-0 h-full" style={{ width: '200%', bottom: '-16px' }}>
          <svg className="hero-wave-bob hero-wave-bob-mid h-full w-full" viewBox="0 0 2880 600" preserveAspectRatio="none" aria-hidden="true">
            <path fill="url(#wave2)" opacity="0.85" d="M0,417.1 C27,417 53,417 80,415.9 C107,415 133,414 160,410.8 C187,407.6 213,403 240,396.7 C267,390.1 293,380.7 320,371.9 C347,363.1 373,351.8 400,344.1 C427,336.5 453,328.8 480,325.8 C507,323 533,323.5 560,326.7 C587,329.7 613,337.7 640,344.4 C667,351.2 693,361 720,367.3 C747,373.6 773,379.5 800,382.5 C827,385.6 853,385.7 880,385.8 C907,385.9 933,383.5 960,383.3 C987,382.9 1013,382.5 1040,384 C1067,385.5 1093,388.7 1120,392 C1147,395.3 1173,400.2 1200,403.7 C1227,407.3 1253,410.8 1280,413 C1307,415.1 1333,416.2 1360,416.8 C1387,417.5 1413,417.4 1440,417.1 C1467,417 1493,417 1520,415.9 C1547,415 1573,414 1600,410.8 C1627,407.6 1653,403 1680,396.7 C1707,390.1 1733,380.7 1760,371.9 C1787,363.1 1813,351.8 1840,344.1 C1867,336.5 1893,328.8 1920,325.8 C1947,323 1973,323.5 2000,326.7 C2027,329.7 2053,337.7 2080,344.4 C2107,351.2 2133,361 2160,367.3 C2187,373.6 2213,379.5 2240,382.5 C2267,385.6 2293,385.7 2320,385.8 C2347,385.9 2373,383.5 2400,383.3 C2427,382.9 2453,382.5 2480,384 C2507,385.5 2533,388.7 2560,392 C2587,395.3 2613,400.2 2640,403.7 C2667,407.3 2693,410.8 2720,413 C2747,415.1 2773,416.2 2800,416.8 C2827,417.5 2853,417.4 2880,417.1 L2880,600 L0,600 Z" />
          </svg>
        </div>
        <div className="hero-wave hero-wave-front absolute left-0 h-full" style={{ width: '200%', bottom: '-16px' }}>
          <svg className="hero-wave-bob hero-wave-bob-front h-full w-full" viewBox="0 0 2880 600" preserveAspectRatio="none" aria-hidden="true">
            <path fill="url(#wave1)" opacity="0.9" d="M0,415.9 C27,412 53,406.2 80,400.8 C107,395.5 133,388.3 160,384 C187,379.8 213,375.7 240,375.6 C267,375.3 293,378 320,382.8 C347,387.5 373,396.3 400,404.1 C427,411.9 453,422.3 480,429.6 C507,437.1 533,444.1 560,448.5 C587,452.9 613,454.9 640,456 C667,457.3 693,455.9 720,455.4 C747,454.9 773,453.5 800,452.9 C827,452.3 853,451.9 880,451.3 C907,450.8 933,450.7 960,449.5 C987,448.5 1013,446.8 1040,444.7 C1067,442.7 1093,439.8 1120,437.6 C1147,435.3 1173,432.9 1200,431.2 C1227,429.6 1253,428.7 1280,427.6 C1307,426.4 1333,426.2 1360,424.2 C1387,422.3 1413,419.8 1440,415.9 C1467,412 1493,406.2 1520,400.8 C1547,395.5 1573,388.3 1600,384 C1627,379.8 1653,375.7 1680,375.6 C1707,375.3 1733,378 1760,382.8 C1787,387.5 1813,396.3 1840,404.1 C1867,411.9 1893,422.3 1920,429.6 C1947,437.1 1973,444.1 2000,448.5 C2027,452.9 2053,454.9 2080,456 C2107,457.3 2133,455.9 2160,455.4 C2187,454.9 2213,453.5 2240,452.9 C2267,452.3 2293,451.9 2320,451.3 C2347,450.8 2373,450.7 2400,449.5 C2427,448.5 2453,446.8 2480,444.7 C2507,442.7 2533,439.8 2560,437.6 C2587,435.3 2613,432.9 2640,431.2 C2667,429.6 2693,428.7 2720,427.6 C2747,426.4 2773,426.2 2800,424.2 C2827,422.3 2853,419.8 2880,415.9 L2880,600 L0,600 Z" />
          </svg>
        </div>
        <div className="hero-wave hero-wave-line1 absolute left-0 h-full" style={{ width: '200%', bottom: '-16px' }}>
          <svg className="hero-wave-bob hero-wave-bob-line1 h-full w-full" viewBox="0 0 2880 600" preserveAspectRatio="none" aria-hidden="true">
            <path fill="none" stroke="#e879f9" strokeWidth="1.2" opacity="0.35" d="M0,478.2 C27,478 53,478.2 80,478.5 C107,478.7 133,479.4 160,479.4 C187,479.4 213,479.2 240,478.2 C267,477.2 293,475.4 320,473.7 C347,472 373,469.7 400,468.1 C427,466.5 453,465.2 480,464.1 C507,462.9 533,462.5 560,461 C587,459.6 613,458.1 640,455.3 C667,452.5 693,448.2 720,444 C747,439.7 773,433.6 800,429.6 C827,425.6 853,420.9 880,419.6 C907,418.2 933,418.6 960,421.4 C987,424 1013,429.8 1040,435.6 C1067,441.3 1093,449.3 1120,455.3 C1147,461.4 1173,467.7 1200,471.6 C1227,475.7 1253,477.9 1280,479.2 C1307,480.4 1333,479.7 1360,479.6 C1387,479.4 1413,478.3 1440,478.2 C1467,478 1493,478.2 1520,478.5 C1547,478.7 1573,479.4 1600,479.4 C1627,479.4 1653,479.2 1680,478.2 C1707,477.2 1733,475.4 1760,473.7 C1787,472 1813,469.7 1840,468.1 C1867,466.5 1893,465.2 1920,464.1 C1947,462.9 1973,462.5 2000,461 C2027,459.6 2053,458.1 2080,455.3 C2107,452.5 2133,448.2 2160,444 C2187,439.7 2213,433.6 2240,429.6 C2267,425.6 2293,420.9 2320,419.6 C2347,418.2 2373,418.6 2400,421.4 C2427,424 2453,429.8 2480,435.6 C2507,441.3 2533,449.3 2560,455.3 C2587,461.4 2613,467.7 2640,471.6 C2667,475.7 2693,477.9 2720,479.2 C2747,480.4 2773,479.7 2800,479.6 C2827,479.4 2853,478.3 2880,478.2" />
          </svg>
        </div>
        <div className="hero-wave hero-wave-line2 absolute left-0 h-full" style={{ width: '200%', bottom: '-16px' }}>
          <svg className="hero-wave-bob hero-wave-bob-line2 h-full w-full" viewBox="0 0 2880 600" preserveAspectRatio="none" aria-hidden="true">
            <path fill="none" stroke="#a78bfa" strokeWidth="1" opacity="0.3" d="M0,468.6 C27,468 53,468.2 80,467.7 C107,467.3 133,466.5 160,465.8 C187,465.2 213,464.1 240,463.6 C267,463.2 293,463 320,463.5 C347,463.8 373,465.1 400,466.3 C427,467.4 453,469.1 480,470.2 C507,471.3 533,472.1 560,472.9 C587,473.6 613,473.6 640,474.7 C667,475.7 693,476.6 720,479 C747,481.3 773,484.8 800,488.7 C827,492.6 853,498.3 880,502.6 C907,506.9 933,511.9 960,514.3 C987,516.7 1013,518 1040,517 C1067,516 1093,512.4 1120,508.6 C1147,504.6 1173,498.3 1200,493.6 C1227,488.6 1253,483.1 1280,479.4 C1307,475.7 1333,473 1360,471.3 C1387,469.4 1413,469.1 1440,468.6 C1467,468 1493,468.2 1520,467.7 C1547,467.3 1573,466.5 1600,465.8 C1627,465.2 1653,464.1 1680,463.6 C1707,463.2 1733,463 1760,463.5 C1787,463.8 1813,465.1 1840,466.3 C1867,467.4 1893,469.1 1920,470.2 C1947,471.3 1973,472.1 2000,472.9 C2027,473.6 2053,473.6 2080,474.7 C2107,475.7 2133,476.6 2160,479 C2187,481.3 2213,484.8 2240,488.7 C2267,492.6 2293,498.3 2320,502.6 C2347,506.9 2373,511.9 2400,514.3 C2427,516.7 2453,518 2480,517 C2507,516 2533,512.4 2560,508.6 C2587,504.6 2613,498.3 2640,493.6 C2667,488.6 2693,483.1 2720,479.4 C2747,475.7 2773,473 2800,471.3 C2827,469.4 2853,469.1 2880,468.6" />
          </svg>
        </div>

        <style>{`
          @keyframes hero-wave-flow {
            from { transform: translate3d(0, 0, 0); }
            to { transform: translate3d(-50%, 0, 0); }
          }
          @keyframes hero-wave-bob-a {
            from { transform: translate3d(0, 0, 0); }
            to { transform: translate3d(0, 10px, 0); }
          }
          @keyframes hero-wave-bob-b {
            from { transform: translate3d(0, 0, 0); }
            to { transform: translate3d(0, -12px, 0); }
          }
          .hero-wave {
            animation: hero-wave-flow linear infinite;
            will-change: transform;
          }
          .hero-wave-bob {
            animation: hero-wave-bob-a ease-in-out infinite alternate;
            will-change: transform;
          }
          .hero-wave-back { animation-duration: 60s; filter: blur(6px); }
          .hero-wave-mid { animation-duration: 46s; }
          .hero-wave-front { animation-duration: 34s; }
          .hero-wave-line1 { animation-duration: 40s; }
          .hero-wave-line2 { animation-duration: 52s; }
          .hero-wave-bob-back { animation-name: hero-wave-bob-a; animation-duration: 9s; }
          .hero-wave-bob-mid { animation-name: hero-wave-bob-b; animation-duration: 7s; }
          .hero-wave-bob-front { animation-name: hero-wave-bob-a; animation-duration: 6s; }
          .hero-wave-bob-line1 { animation-name: hero-wave-bob-b; animation-duration: 8s; }
          .hero-wave-bob-line2 { animation-name: hero-wave-bob-a; animation-duration: 11s; }
          section[data-waves=paused] .hero-wave,
          section[data-waves=paused] .hero-wave-bob {
            animation-play-state: paused;
          }
          @media (prefers-reduced-motion: reduce) {
            .hero-wave, .hero-wave-bob { animation: none; }
          }
        `}</style>

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
