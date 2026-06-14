'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import FlairButton from '@/components/ui/FlairButton';
import Image from 'next/image';
import { TrendingUp, Search, FileText, Wrench, MapPin, Link2, BarChart3, ArrowRight, ArrowLeft, Check, ArrowUpRight } from 'lucide-react';
import FinalCTA from '@/components/FinalCTA';
import GridBackground from '@/components/GridBackground';

export default function SeoPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: Search, title: "Keyword Research", description: "Data-driven keyword targeting to attract visitors already searching for what you offer." },
    { icon: FileText, title: "On-Page SEO", description: "Title tags, meta descriptions, headers, and content structured to rank and convert." },
    { icon: Wrench, title: "Technical SEO", description: "Site speed, crawlability, Core Web Vitals, and structured data — the foundation search engines need." },
    { icon: MapPin, title: "Local SEO", description: "Google Business Profile optimisation and local citations to dominate nearby searches." },
    { icon: Link2, title: "Link Building", description: "Authority-building through quality backlinks that signal trust to search engines." },
    { icon: BarChart3, title: "Audits & Reporting", description: "Monthly performance reports on rankings, traffic, impressions, and opportunities." },
  ];

  const deliverables = [
    "SEO audit & site health report",
    "Keyword research & targeting plan",
    "On-page optimisation (titles, meta, content)",
    "Technical SEO fixes & recommendations",
    "Google Search Console setup",
    "Google Analytics 4 integration",
    "Monthly ranking & traffic reports",
    "Competitor gap analysis",
  ];

  const process = [
    { step: "01", title: "Audit & Discovery", description: "We analyse your current rankings, site health, and competitors to find the biggest opportunities." },
    { step: "02", title: "Strategy & Planning", description: "Keyword targeting, content gaps, and technical priorities mapped to your business goals." },
    { step: "03", title: "Implementation", description: "On-page optimisations, technical fixes, and off-page strategy executed systematically." },
    { step: "04", title: "Monitor & Iterate", description: "Monthly reporting on rankings, traffic, and conversions — with ongoing adjustments for maximum impact." },
  ];

  return (
    <div ref={ref} className="bg-modern-primary min-h-screen">
      {/* Hero */}
      <section className="relative pt-4 md:pt-12 pb-28 overflow-hidden">
        <GridBackground />
        <div className="absolute inset-0 w-full h-full">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1440 600"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="seoflow1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e879f9" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="seoflow2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f0abfc" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#c4b5fd" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="seoflow3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d946ef" stopOpacity="0.25" />
                <stop offset="60%" stopColor="#818cf8" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.25" />
              </linearGradient>
            </defs>
            <path fill="none" stroke="url(#seoflow1)" strokeWidth="2" opacity="0.6" d="M0,480 C180,380 360,560 580,460 C760,370 960,540 1180,440 C1340,360 1410,460 1440,440" />
            <path fill="none" stroke="url(#seoflow2)" strokeWidth="1.5" opacity="0.5" d="M0,520 C160,420 360,600 580,490 C760,390 980,570 1180,470 C1340,390 1410,500 1440,480" />
            <path fill="none" stroke="url(#seoflow3)" strokeWidth="1" opacity="0.4" d="M0,560 C180,460 380,640 600,530 C800,430 1020,610 1220,500 C1360,420 1420,530 1440,510" />
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
                <TrendingUp size={16} className="text-secondary-purple" />
                <span className="text-sm font-semibold text-secondary-purple">Search Engine Optimisation</span>
              </div>
              <h1 className="text-display text-gray-900 mb-6">
                Rank Higher, Get Found, <span className="text-gradient-purple">Grow Faster</span>
              </h1>
              <p className="text-subheading mb-8 leading-relaxed max-w-xl" style={{ color: '#535252' }}>
                We help businesses climb the search rankings with technical precision, smart
                content strategy, and sustainable link-building — driving organic traffic that converts.
              </p>

              {/* Quick value points */}
              <ul className="flex flex-wrap gap-x-6 gap-y-3 mb-9">
                {['Technical + content + links', 'White-hat & sustainable', 'Traffic that converts'].map((point) => (
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
                  Start Ranking <ArrowRight size={18} />
                </Link>
                <FlairButton href="/portfolio">
                  View Our Work
                </FlairButton>
              </div>
            </motion.div>

            {/* Search & ranking mockup */}
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
                {/* Search bar chrome */}
                <div className="px-4 py-3 border-b border-gray-100 bg-white">
                  <div className="h-10 rounded-full border border-gray-200 flex items-center gap-2.5 px-4">
                    <Search size={15} className="text-secondary-purple" />
                    <span className="text-[12px] text-gray-500 font-medium">best agency near me</span>
                    <span className="ml-auto flex items-center gap-1 text-[11px] font-semibold text-secondary-purple">
                      <MapPin size={12} /> Local
                    </span>
                  </div>
                </div>
                {/* Result preview */}
                <div className="relative aspect-[16/11]">
                  <Image
                    src="/seo.jpg"
                    alt="SEO Services"
                    width={800} height={800}
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Floating #1 ranking card */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.75 }}
                className="absolute -top-5 -left-2 sm:-left-6 z-20"
              >
                <motion.div
                  animate={{ y: [0, 9, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="card-liquid-glass px-4 py-3 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center text-white font-extrabold text-base shadow-md flex-shrink-0">#1</div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 leading-tight">Top ranking</p>
                    <p className="text-[11px] text-gray-500">Page one, position one</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating analytics card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-6 -right-3 sm:-right-6 z-20"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="card-liquid-glass px-4 py-3"
                >
                  <div className="flex items-center justify-between gap-6 mb-1.5">
                    <span className="text-xs font-semibold text-gray-700">Organic traffic</span>
                    <span className="flex items-center gap-0.5 text-[11px] font-bold text-green-600">
                      <ArrowUpRight size={12} /> Growing
                    </span>
                  </div>
                  <svg width="120" height="36" viewBox="0 0 120 36" fill="none">
                    <polyline points="0,30 20,26 40,28 60,18 80,20 100,8 120,4" stroke="url(#seoTrend)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="seoTrend" x1="0" y1="0" x2="120" y2="0">
                        <stop stopColor="#7b19e7" />
                        <stop offset="1" stopColor="#c02b7d" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-20 overflow-hidden bg-white">
        <div className="absolute inset-0 w-full h-full">
          <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 1440 500"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            style={{ minHeight: '100%' }}
          >
            <defs>
              <linearGradient id="seow1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e879f9" stopOpacity="0.55" />
                <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="seow2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f0abfc" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#c4b5fd" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.45" />
              </linearGradient>
              <linearGradient id="seow3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d946ef" stopOpacity="0.25" />
                <stop offset="60%" stopColor="#818cf8" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path fill="url(#seow3)" opacity="0.7" d="M0,260 C200,160 400,340 600,240 C800,140 1000,300 1200,220 C1350,160 1420,260 1440,240 L1440,500 L0,500 Z" />
            <path fill="url(#seow2)" opacity="0.85" d="M0,310 C160,220 360,380 580,280 C760,190 980,350 1180,260 C1340,190 1410,290 1440,270 L1440,500 L0,500 Z" />
            <path fill="url(#seow1)" opacity="0.9" d="M0,350 C180,260 360,420 580,330 C760,250 960,400 1180,310 C1340,240 1410,330 1440,315 L1440,500 L0,500 Z" />
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
            Full-spectrum SEO services that move the needle on rankings, traffic, and leads.
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

      {/* Deliverables */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-heading text-center text-gray-900 mb-10"
          >
            What You&apos;ll Receive
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {deliverables.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.06 }}
                className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm"
              >
                <div className="w-6 h-6 bg-[#C02B7D] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-heading text-center text-gray-900 mb-14"
          >
            Our SEO Process
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
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

      <FinalCTA />
    </div>
  );
}
