'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import FlairButton from '@/components/ui/FlairButton';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Pause the wave loop whenever the hero is scrolled out of view so it
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

        {/* Shared gradient defs for the wave layers (referenced document-wide) */}
        <svg width="0" height="0" aria-hidden="true" className="absolute">
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
          </defs>
        </svg>

        {/* Waves tile every 1440 units (organic multi-harmonic curves so the
            loop has gentle irregular swells, not uniform bumps). Each layer is
            its own svg drawn 2x wide and slid left one tile on the compositor. */}
        <svg className="hero-wave hero-wave-back absolute bottom-0 left-0 h-full" style={{ width: '200%' }} viewBox="0 0 2880 600" preserveAspectRatio="none" aria-hidden="true">
          <path fill="url(#wave3)" opacity="0.7" d="M0,315.8 C27,318.8 53,319.7 80,321.6 C107,323.5 133,325.1 160,327.3 C187,329.4 213,332.4 240,334.4 C267,336.4 293,338.6 320,339.4 C347,340.1 373,339.8 400,338.9 C427,338.1 453,335.9 480,334.3 C507,332.8 533,331.1 560,329.8 C587,328.5 613,328.2 640,326.6 C667,324.9 693,323.9 720,319.9 C747,315.9 773,310.4 800,302.8 C827,295.2 853,284.2 880,274.4 C907,264.5 933,251.9 960,243.7 C987,235.6 1013,227.9 1040,225.5 C1067,223.0 1093,224.7 1120,229.1 C1147,233.5 1173,243.2 1200,251.8 C1227,260.5 1253,272.3 1280,281.0 C1307,289.6 1333,297.9 1360,303.7 C1387,309.5 1413,312.8 1440,315.8 C1467,318.8 1493,319.7 1520,321.6 C1547,323.5 1573,325.1 1600,327.3 C1627,329.4 1653,332.4 1680,334.4 C1707,336.4 1733,338.6 1760,339.4 C1787,340.1 1813,339.8 1840,338.9 C1867,338.1 1893,335.9 1920,334.3 C1947,332.8 1973,331.1 2000,329.8 C2027,328.5 2053,328.2 2080,326.6 C2107,324.9 2133,323.9 2160,319.9 C2187,315.9 2213,310.4 2240,302.8 C2267,295.2 2293,284.2 2320,274.4 C2347,264.5 2373,251.9 2400,243.7 C2427,235.6 2453,227.9 2480,225.5 C2507,223.0 2533,224.7 2560,229.1 C2587,233.5 2613,243.2 2640,251.8 C2667,260.5 2693,272.3 2720,281.0 C2747,289.6 2773,297.9 2800,303.7 C2827,309.5 2853,312.8 2880,315.8 L2880,600 L0,600 Z" />
        </svg>
        <svg className="hero-wave hero-wave-mid absolute bottom-0 left-0 h-full" style={{ width: '200%' }} viewBox="0 0 2880 600" preserveAspectRatio="none" aria-hidden="true">
          <path fill="url(#wave2)" opacity="0.85" d="M0,391.7 C27,391.5 53,391.5 80,390.3 C107,389.1 133,388.1 160,384.5 C187,380.8 213,375.6 240,368.3 C267,360.9 293,350.2 320,340.2 C347,330.2 373,317.2 400,308.5 C427,299.7 453,291.0 480,287.7 C507,284.4 533,285.0 560,288.6 C587,292.1 613,301.1 640,308.8 C667,316.5 693,327.7 720,334.9 C747,342.1 773,348.7 800,352.2 C827,355.7 853,355.8 880,356.0 C907,356.1 933,353.4 960,353.0 C987,352.7 1013,352.2 1040,353.9 C1067,355.5 1093,359.3 1120,363.0 C1147,366.8 1173,372.4 1200,376.4 C1227,380.4 1253,384.4 1280,386.9 C1307,389.3 1333,390.5 1360,391.3 C1387,392.1 1413,391.9 1440,391.7 C1467,391.5 1493,391.5 1520,390.3 C1547,389.1 1573,388.1 1600,384.5 C1627,380.8 1653,375.6 1680,368.3 C1707,360.9 1733,350.2 1760,340.2 C1787,330.2 1813,317.2 1840,308.5 C1867,299.7 1893,291.0 1920,287.7 C1947,284.4 1973,285.0 2000,288.6 C2027,292.1 2053,301.1 2080,308.8 C2107,316.5 2133,327.7 2160,334.9 C2187,342.1 2213,348.7 2240,352.2 C2267,355.7 2293,355.8 2320,356.0 C2347,356.1 2373,353.4 2400,353.0 C2427,352.7 2453,352.2 2480,353.9 C2507,355.5 2533,359.3 2560,363.0 C2587,366.8 2613,372.4 2640,376.4 C2667,380.4 2693,384.4 2720,386.9 C2747,389.3 2773,390.5 2800,391.3 C2827,392.1 2853,391.9 2880,391.7 L2880,600 L0,600 Z" />
        </svg>
        <svg className="hero-wave hero-wave-front absolute bottom-0 left-0 h-full" style={{ width: '200%' }} viewBox="0 0 2880 600" preserveAspectRatio="none" aria-hidden="true">
          <path fill="url(#wave1)" opacity="0.9" d="M0,390.3 C27,385.8 53,379.1 80,373.0 C107,367.0 133,358.7 160,353.9 C187,349.1 213,344.5 240,344.3 C267,344.0 293,347.1 320,352.5 C347,357.9 373,367.9 400,376.8 C427,385.7 453,397.5 480,405.9 C507,414.4 533,422.4 560,427.4 C587,432.4 613,434.7 640,436.0 C667,437.3 693,435.9 720,435.3 C747,434.7 773,433.1 800,432.3 C827,431.6 853,431.3 880,430.6 C907,430.0 933,429.8 960,428.5 C987,427.3 1013,425.4 1040,423.1 C1067,420.9 1093,417.5 1120,415.0 C1147,412.4 1173,409.6 1200,407.7 C1227,405.8 1253,404.9 1280,403.6 C1307,402.2 1333,401.9 1360,399.7 C1387,397.5 1413,394.7 1440,390.3 C1467,385.8 1493,379.1 1520,373.0 C1547,367.0 1573,358.7 1600,353.9 C1627,349.1 1653,344.5 1680,344.3 C1707,344.0 1733,347.1 1760,352.5 C1787,357.9 1813,367.9 1840,376.8 C1867,385.7 1893,397.5 1920,405.9 C1947,414.4 1973,422.4 2000,427.4 C2027,432.4 2053,434.7 2080,436.0 C2107,437.3 2133,435.9 2160,435.3 C2187,434.7 2213,433.1 2240,432.3 C2267,431.6 2293,431.3 2320,430.6 C2347,430.0 2373,429.8 2400,428.5 C2427,427.3 2453,425.4 2480,423.1 C2507,420.9 2533,417.5 2560,415.0 C2587,412.4 2613,409.6 2640,407.7 C2667,405.8 2693,404.9 2720,403.6 C2747,402.2 2773,401.9 2800,399.7 C2827,397.5 2853,394.7 2880,390.3 L2880,600 L0,600 Z" />
        </svg>
        <svg className="hero-wave hero-wave-line1 absolute bottom-0 left-0 h-full" style={{ width: '200%' }} viewBox="0 0 2880 600" preserveAspectRatio="none" aria-hidden="true">
          <path fill="none" stroke="#e879f9" strokeWidth="1.2" opacity="0.35" d="M0,461.2 C27,461.0 53,461.3 80,461.5 C107,461.8 133,462.7 160,462.7 C187,462.7 213,462.4 240,461.3 C267,460.2 293,458.0 320,456.1 C347,454.2 373,451.5 400,449.7 C427,447.9 453,446.4 480,445.1 C507,443.8 533,443.3 560,441.7 C587,440.0 613,438.4 640,435.1 C667,431.9 693,427.1 720,422.2 C747,417.3 773,410.4 800,405.8 C827,401.2 853,396.0 880,394.5 C907,392.9 933,393.4 960,396.5 C987,399.5 1013,406.1 1040,412.6 C1067,419.1 1093,428.4 1120,435.2 C1147,442.1 1173,449.3 1200,453.8 C1227,458.3 1253,460.8 1280,462.3 C1307,463.8 1333,462.9 1360,462.8 C1387,462.6 1413,461.4 1440,461.2 C1467,461.0 1493,461.3 1520,461.5 C1547,461.8 1573,462.7 1600,462.7 C1627,462.7 1653,462.4 1680,461.3 C1707,460.2 1733,458.0 1760,456.1 C1787,454.2 1813,451.5 1840,449.7 C1867,447.9 1893,446.4 1920,445.1 C1947,443.8 1973,443.3 2000,441.7 C2027,440.0 2053,438.4 2080,435.1 C2107,431.9 2133,427.1 2160,422.2 C2187,417.3 2213,410.4 2240,405.8 C2267,401.2 2293,396.0 2320,394.5 C2347,392.9 2373,393.4 2400,396.5 C2427,399.5 2453,406.1 2480,412.6 C2507,419.1 2533,428.4 2560,435.2 C2587,442.1 2613,449.3 2640,453.8 C2667,458.3 2693,460.8 2720,462.3 C2747,463.8 2773,462.9 2800,462.8 C2827,462.6 2853,461.4 2880,461.2" />
        </svg>
        <svg className="hero-wave hero-wave-line2 absolute bottom-0 left-0 h-full" style={{ width: '200%' }} viewBox="0 0 2880 600" preserveAspectRatio="none" aria-hidden="true">
          <path fill="none" stroke="#a78bfa" strokeWidth="1" opacity="0.3" d="M0,450.3 C27,449.6 53,449.8 80,449.3 C107,448.7 133,447.9 160,447.1 C187,446.4 213,445.1 240,444.6 C267,444.2 293,443.9 320,444.4 C347,444.9 373,446.3 400,447.6 C427,448.9 453,450.8 480,452.1 C507,453.3 533,454.3 560,455.1 C587,456.0 613,456.0 640,457.2 C667,458.3 693,459.4 720,462.1 C747,464.7 773,468.7 800,473.2 C827,477.7 853,484.2 880,489.0 C907,493.9 933,499.6 960,502.3 C987,505.1 1013,506.5 1040,505.4 C1067,504.3 1093,500.2 1120,495.8 C1147,491.3 1173,484.2 1200,478.7 C1227,473.1 1253,466.8 1280,462.6 C1307,458.4 1333,455.3 1360,453.3 C1387,451.2 1413,450.9 1440,450.3 C1467,449.6 1493,449.8 1520,449.3 C1547,448.7 1573,447.9 1600,447.1 C1627,446.4 1653,445.1 1680,444.6 C1707,444.2 1733,443.9 1760,444.4 C1787,444.9 1813,446.3 1840,447.6 C1867,448.9 1893,450.8 1920,452.1 C1947,453.3 1973,454.3 2000,455.1 C2027,456.0 2053,456.0 2080,457.2 C2107,458.3 2133,459.4 2160,462.1 C2187,464.7 2213,468.7 2240,473.2 C2267,477.7 2293,484.2 2320,489.0 C2347,493.9 2373,499.6 2400,502.3 C2427,505.1 2453,506.5 2480,505.4 C2507,504.3 2533,500.2 2560,495.8 C2587,491.3 2613,484.2 2640,478.7 C2667,473.1 2693,466.8 2720,462.6 C2747,458.4 2773,455.3 2800,453.3 C2827,451.2 2853,450.9 2880,450.3" />
        </svg>

        <style>{`
          @keyframes hero-wave-shift {
            from { transform: translate3d(0, 0, 0); }
            to { transform: translate3d(-50%, 0, 0); }
          }
          .hero-wave {
            animation: hero-wave-shift linear infinite;
            will-change: transform;
          }
          .hero-wave-back { animation-duration: 60s; }
          .hero-wave-mid { animation-duration: 46s; }
          .hero-wave-front { animation-duration: 32s; }
          .hero-wave-line1 { animation-duration: 38s; }
          .hero-wave-line2 { animation-duration: 52s; }
          section[data-waves=paused] .hero-wave {
            animation-play-state: paused;
          }
          @media (prefers-reduced-motion: reduce) {
            .hero-wave { animation: none; }
          }
        `}</style>

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
