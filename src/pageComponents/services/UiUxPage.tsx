'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import FlairButton from '@/components/ui/FlairButton';
import Image from 'next/image';
import { Layers, PenTool, Users, BarChart3, Figma, Lightbulb, ArrowRight, ArrowLeft, Check, MousePointer2, Square, Type } from 'lucide-react';
import FinalCTA from '@/components/FinalCTA';
import GridBackground from '@/components/GridBackground';

export default function UiUxPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: Users, title: "User Research", description: "Deep understanding of your audience through interviews, surveys, and behavioral analysis." },
    { icon: PenTool, title: "Wireframing & Prototyping", description: "Interactive prototypes to test and validate the experience before development begins." },
    { icon: Layers, title: "Design Systems", description: "Scalable component libraries that ensure consistency across all your digital products." },
    { icon: Figma, title: "Interface Design", description: "Pixel-perfect, modern interfaces that balance aesthetics with usability." },
    { icon: BarChart3, title: "Conversion Optimization", description: "Data-driven design decisions that improve user engagement and conversion rates." },
    { icon: Lightbulb, title: "Usability Testing", description: "Real user testing to validate designs and uncover opportunities for improvement." },
  ];

  const approach = [
    { step: "01", title: "Discover", description: "We dive deep into your business goals, users, and competitive landscape." },
    { step: "02", title: "Define", description: "We map out user flows, information architecture, and key interaction patterns." },
    { step: "03", title: "Design", description: "We craft high-fidelity mockups and interactive prototypes for validation." },
    { step: "04", title: "Deliver", description: "We hand off production-ready designs with specs, assets, and documentation." },
  ];

  return (
    <div ref={ref} className="bg-modern-primary min-h-screen">
      {/* Hero */}
      <section className="relative pt-4 md:pt-12 pb-28 overflow-hidden">
        <GridBackground />
        {/* Animated background */}
        <div className="absolute inset-0 w-full h-full">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1440 600"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="flow1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e879f9" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="flow2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f0abfc" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#c4b5fd" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="flow3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d946ef" stopOpacity="0.25" />
                <stop offset="60%" stopColor="#818cf8" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.25" />
              </linearGradient>
            </defs>
            
            {/* Homepage-style wave lines */}
            <path fill="none" stroke="url(#flow1)" strokeWidth="2" opacity="0.6" d="M0,480 C180,380 360,560 580,460 C760,370 960,540 1180,440 C1340,360 1410,460 1440,440" />
            
            <path fill="none" stroke="url(#flow2)" strokeWidth="1.5" opacity="0.5" d="M0,520 C160,420 360,600 580,490 C760,390 980,570 1180,470 C1340,390 1410,500 1440,480" />
            
            <path fill="none" stroke="url(#flow3)" strokeWidth="1" opacity="0.4" d="M0,560 C180,460 380,640 600,530 C800,430 1020,610 1220,500 C1360,420 1420,530 1440,510" />
            
            {/* Decorative dots attached to lines */}
            <g opacity="0.9">
              {/* Dots on line 1 */}
              <circle r="8" fill="#e879f9">
                <animateMotion dur="25s" repeatCount="indefinite" begin="0s">
                  <mpath href="#dot-path-1" />
                </animateMotion>
              </circle>
              <circle r="6" fill="#e879f9">
                <animateMotion dur="25s" repeatCount="indefinite" begin="0s">
                  <mpath href="#dot-path-1" />
                </animateMotion>
              </circle>
              
              {/* Dots on line 2 */}
              <circle r="8" fill="#f0abfc">
                <animateMotion dur="30s" repeatCount="indefinite" begin="0s">
                  <mpath href="#dot-path-2" />
                </animateMotion>
              </circle>
              <circle r="6" fill="#f0abfc">
                <animateMotion dur="30s" repeatCount="indefinite" begin="0s">
                  <mpath href="#dot-path-2" />
                </animateMotion>
              </circle>
              
              {/* Dots on line 3 */}
              <circle r="8" fill="#d946ef">
                <animateMotion dur="35s" repeatCount="indefinite" begin="0s">
                  <mpath href="#dot-path-3" />
                </animateMotion>
              </circle>
              <circle r="6" fill="#d946ef">
                <animateMotion dur="35s" repeatCount="indefinite" begin="0s">
                  <mpath href="#dot-path-3" />
                </animateMotion>
              </circle>
            </g>
            
            {/* Hidden paths for dot animation */}
            <path id="dot-path-1" d="M0,480 C180,380 360,560 580,460 C760,370 960,540 1180,440 C1340,360 1410,460 1440,440" fill="none" />
            <path id="dot-path-2" d="M0,520 C160,420 360,600 580,490 C760,390 980,570 1180,470 C1340,390 1410,500 1440,480" fill="none" />
            <path id="dot-path-3" d="M0,560 C180,460 380,640 600,530 C800,430 1020,610 1220,500 C1360,420 1420,530 1440,510" fill="none" />
            
            {/* Static decorative dots */}
            <g opacity="0.5">
              <circle cx="300" cy="490" r="4" fill="#e879f9" />
              <circle cx="600" cy="530" r="5" fill="#f0abfc" />
              <circle cx="900" cy="510" r="4" fill="#d946ef" />
              <circle cx="1200" cy="550" r="4" fill="#e879f9" />
              
              <circle cx="450" cy="570" r="4" fill="#f0abfc" />
              <circle cx="750" cy="590" r="5" fill="#d946ef" />
              <circle cx="1050" cy="580" r="4" fill="#e879f9" />
            </g>
          </svg>
          
          {/* Radial glows */}
          <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-gradient-radial from-blue-100/50 via-purple-50/20 to-transparent rounded-full" />
          <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-gradient-radial from-cyan-100/40 via-indigo-50/15 to-transparent rounded-full" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link href="/services" className="inline-flex items-center gap-2 text-secondary-purple font-medium hover:gap-3 transition-all no-underline">
              <ArrowLeft size={16} /> Back to Services
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur border border-purple-100 shadow-sm mb-6">
                <Layers size={16} className="text-secondary-purple" />
                <span className="text-sm font-semibold text-secondary-purple">UI & UX Strategy</span>
              </div>
              <h1 className="text-display text-gray-900 mb-6">
                User-Centered Design That <span className="text-gradient-purple">Converts</span>
              </h1>
              <p className="text-subheading mb-8 leading-relaxed max-w-xl" style={{ color: '#535252' }}>
                We create intuitive, engaging digital experiences grounded in research and best practices.
                Every design decision is made to improve usability, accessibility, and conversion rates.
              </p>

              {/* Quick value points */}
              <ul className="flex flex-wrap gap-x-6 gap-y-3 mb-9">
                {['Research-backed decisions', 'Accessible & inclusive', 'Conversion-focused'].map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-100 flex-shrink-0">
                      <Check size={12} className="text-secondary-purple" strokeWidth={3} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-gradient-primary inline-flex items-center justify-center gap-2 text-lg font-semibold no-underline">
                  Start a Project <ArrowRight size={18} />
                </Link>
                <FlairButton href="/portfolio">
                  View Our Work
                </FlairButton>
              </div>
            </motion.div>

            {/* Design-canvas mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-6 relative"
            >
              <motion.div
                animate={{ scale: [1, 1.06, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -inset-6 bg-gradient-to-tr from-purple-300/40 via-fuchsia-200/30 to-blue-200/30 rounded-[3rem] blur-3xl -z-10"
              />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative rounded-[20px] overflow-hidden shadow-2xl ring-1 ring-black/5 bg-white"
              >
                {/* Design toolbar */}
                <div className="flex items-center gap-3 px-4 h-11 border-b border-gray-100 bg-white">
                  <Figma size={16} className="text-secondary-purple" />
                  <div className="flex items-center gap-2.5 text-gray-400">
                    <MousePointer2 size={14} />
                    <Square size={14} />
                    <Type size={14} />
                    <PenTool size={14} />
                  </div>
                  <span className="ml-auto text-[11px] font-medium text-gray-400">Frame · 1440 × 900</span>
                </div>
                {/* Canvas */}
                <div className="relative aspect-[16/11]">
                  <Image
                    src="/uiux.jpg"
                    alt="UI & UX Strategy"
                    width={800} height={800}
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="w-full h-full object-cover"
                  />
                  {/* Selection annotation */}
                  <div className="absolute left-[12%] top-[20%] w-[44%] h-[44%] border-2 border-secondary-purple rounded-md">
                    <span className="absolute top-0 left-3 -translate-y-[130%] bg-secondary-purple text-white text-[10px] font-semibold px-2 py-0.5 rounded">Hero · 520 × 320</span>
                    <span className="absolute -right-1 -bottom-1 w-2.5 h-2.5 bg-white border-2 border-secondary-purple rounded-sm" />
                    <span className="absolute -left-1 -top-1 w-2.5 h-2.5 bg-white border-2 border-secondary-purple rounded-sm" />
                  </div>
                </div>
              </motion.div>

              {/* Floating collaborator cursor */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.75 }}
                className="absolute top-[32%] -right-1 sm:-right-3 z-20 flex items-start gap-1"
              >
                <MousePointer2 className="w-5 h-5 text-primary-purple fill-primary-purple" />
                <span className="bg-primary-purple text-white text-[11px] font-semibold px-2 py-0.5 rounded-md shadow-md">Cyvera</span>
              </motion.div>

              {/* Floating spec card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-6 -left-3 sm:-left-6 z-20"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="card-liquid-glass px-5 py-4 flex items-center gap-3"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shadow-md flex-shrink-0">
                    <Lightbulb className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 leading-tight">User-tested</p>
                    <p className="text-xs text-gray-500">Designed to convert</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-20 overflow-hidden bg-white">
        {/* Animated wave background */}
        <div className="absolute inset-0 w-full h-full">
          <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 1440 500"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            style={{ minHeight: '100%' }}
          >
            <defs>
              <linearGradient id="uw1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e879f9" stopOpacity="0.55" />
                <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="uw2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f0abfc" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#c4b5fd" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.45" />
              </linearGradient>
              <linearGradient id="uw3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d946ef" stopOpacity="0.25" />
                <stop offset="60%" stopColor="#818cf8" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.3" />
              </linearGradient>
              <filter id="ublur">
                <feGaussianBlur stdDeviation="8" />
              </filter>
            </defs>
            <path fill="url(#uw3)" opacity="0.7" d="M0,260 C200,160 400,340 600,240 C800,140 1000,300 1200,220 C1350,160 1420,260 1440,240 L1440,500 L0,500 Z" />
            <path fill="url(#uw2)" opacity="0.85" d="M0,310 C160,220 360,380 580,280 C760,190 980,350 1180,260 C1340,190 1410,290 1440,270 L1440,500 L0,500 Z" />
            <path fill="url(#uw1)" opacity="0.9" d="M0,350 C180,260 360,420 580,330 C760,250 960,400 1180,310 C1340,240 1410,330 1440,315 L1440,500 L0,500 Z" />
            <path fill="none" stroke="#e879f9" strokeWidth="1.2" opacity="0.35" d="M0,370 C200,295 400,420 620,350 C820,275 1020,410 1240,330 C1370,275 1420,350 1440,335" />
            <path fill="none" stroke="#a78bfa" strokeWidth="1" opacity="0.3" d="M0,385 C180,315 380,440 600,368 C800,295 1000,428 1220,348 C1360,295 1420,368 1440,355" />
          </svg>
          <div className="absolute top-0 left-0 w-[600px] h-[350px] bg-gradient-radial from-fuchsia-100/60 via-purple-50/30 to-transparent rounded-full" />
          <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-gradient-radial from-blue-100/50 via-indigo-50/20 to-transparent rounded-full" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-heading text-center text-gray-900 mb-4"
          >
            What We Deliver
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center text-gray-600 mb-14 max-w-2xl mx-auto"
          >
            Comprehensive UI/UX services from research to polished, production-ready designs.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="card-liquid-glass p-7"
              >
                <div className="w-12 h-12 bg-[#C02B7D] rounded-xl flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-heading text-center text-gray-900 mb-14"
          >
            Our Design Approach
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.12 }}
                className="text-center"
              >
                <span className="inline-block text-4xl font-bold text-gradient-purple mb-4">{item.step}</span>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended reading */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="rounded-2xl border border-purple-100 bg-purple-50/50 p-8 flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="flex-1">
              <p className="text-xs font-semibold text-secondary-purple uppercase tracking-wider mb-2">Recommended reading</p>
              <h3 className="text-lg font-bold text-gray-900 mb-1">UI/UX Design Strategy: How Great User Experience Drives Revenue</h3>
              <p className="text-sm text-gray-600">How research, layout, and conversion-focused design turn visitors into customers.</p>
            </div>
            <Link href="/guides/ui-ux-design-strategy" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-white font-semibold text-sm no-underline whitespace-nowrap hover:-translate-y-0.5 transition-transform" style={{ backgroundColor: '#C02B7D' }}>
              Read the guide <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
