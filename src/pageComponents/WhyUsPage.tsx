'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Target,
  Rocket,
  Wrench,
  PenTool,
  Handshake,
  Search,
  ClipboardList,
  Layers,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Users,
  Lightbulb,
  Monitor,
  Code,
  Ear,
} from 'lucide-react';

export default function WhyUsPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-80px' });

  const diffRef = useRef(null);
  const diffInView = useInView(diffRef, { once: true, margin: '-80px' });

  const approachRef = useRef(null);
  const approachInView = useInView(approachRef, { once: true, margin: '-80px' });

  const growingRef = useRef(null);
  const growingInView = useInView(growingRef, { once: true, margin: '-80px' });

  const trustRef = useRef(null);
  const trustInView = useInView(trustRef, { once: true, margin: '-80px' });

  const chooseRef = useRef(null);
  const chooseInView = useInView(chooseRef, { once: true, margin: '-80px' });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: '-80px' });

  const differentiators = [
    {
      icon: Target,
      title: 'Strategy Before Design',
      description:
        "We don't start with colors or layouts. We begin by understanding your business, audience, and objectives. Every design and development decision is guided by strategy, not guesswork.",
    },
    {
      icon: Rocket,
      title: 'Built for Performance & Growth',
      description:
        'Our websites and digital solutions are designed to be fast, SEO-friendly, mobile-first, and scalable, ensuring long-term value for your business.',
    },
    {
      icon: Wrench,
      title: 'Flexible Tech, Right Tools',
      description:
        'We select the right platforms and technologies based on your needs, including WordPress and custom development, without forcing unnecessary complexity.',
    },
    {
      icon: PenTool,
      title: 'Design With Purpose',
      description:
        'We focus on clear user journeys, intuitive navigation, strong visual hierarchy, and consistent branding. Every element serves a purpose.',
    },
    {
      icon: Handshake,
      title: 'Honest & Transparent Process',
      description:
        "We believe in clear communication, realistic timelines, and no hidden costs. You'll always know what we're doing and why.",
    },
    {
      icon: Users,
      title: 'Collaborative & Client-Focused',
      description:
        'We treat every project as a partnership. We listen carefully, ask the right questions, and involve you throughout the process to ensure the final result truly reflects your vision and business goals.',
    },
  ];

  const steps = [
    {
      icon: Search,
      step: '01',
      title: 'Understand',
      description: 'We learn about your brand, goals, and audience.',
      image: '/Our_Approach/step01.jpg',
    },
    {
      icon: ClipboardList,
      step: '02',
      title: 'Plan',
      description:
        'We define structure, features, and direction before building.',
      image: '/Our_Approach/step02.jpg',
    },
    {
      icon: Layers,
      step: '03',
      title: 'Design & Build',
      description:
        'We design intentionally and develop with performance in mind.',
      image: '/Our_Approach/step03.jpg',
    },
    {
      icon: CheckCircle2,
      step: '04',
      title: 'Refine & Launch',
      description:
        'We test, refine, and ensure everything works smoothly before launch.',
      image: '/Our_Approach/step04.jpg',
    },
  ];

  const trustPoints = [
    'You receive focused attention',
    'You collaborate directly with the creators',
    'Your project is never treated as "just another job"',
  ];

  const chooseReasons = [
    { icon: MessageCircle, label: 'Clear communication', description: 'No jargon, no guesswork. We keep you informed at every stage of the project.' },
    { icon: Lightbulb, label: 'Strategic thinking', description: 'Every decision is backed by purpose, ensuring your digital presence drives real results.' },
    { icon: Monitor, label: 'Modern, clean design', description: 'We craft visually polished interfaces that feel intuitive and represent your brand.' },
    { icon: Code, label: 'Scalable development', description: 'Built with clean, maintainable code that grows alongside your business needs.' },
    { icon: Ear, label: 'A team that listens', description: 'Your ideas matter. We listen, collaborate, and build solutions that reflect your vision.' },
    { icon: Rocket, label: 'Results-driven delivery', description: 'We focus on outcomes that matter: faster load times, better conversions, and stronger brand presence.' },
  ];

  return (
    <div className="bg-modern-primary min-h-screen">
      {/* ── Hero + What Sets Cyvera Digitals Apart ── */}
      <section
        ref={heroRef}
        className="relative pt-12 pb-20 overflow-hidden"
      >
        {/* Shared wave background */}
        <div className="absolute inset-0 w-full h-full">
          <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 1440 500"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            style={{ minHeight: '100%' }}
          >
            <defs>
              <linearGradient id="wyh4" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e879f9" stopOpacity="0.55" />
                <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="wyh5" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f0abfc" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#c4b5fd" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.45" />
              </linearGradient>
              <linearGradient id="wyh6" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d946ef" stopOpacity="0.25" />
                <stop offset="60%" stopColor="#818cf8" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.3" />
              </linearGradient>
              <filter id="wyhblur2">
                <feGaussianBlur stdDeviation="8" />
              </filter>
            </defs>
            <path filter="url(#wyhblur2)" fill="url(#wyh6)" opacity="0.7">
              <animate attributeName="d" dur="9s" repeatCount="indefinite"
                values="M0,260 C200,160 400,340 600,240 C800,140 1000,300 1200,220 C1350,160 1420,260 1440,240 L1440,500 L0,500 Z;
                        M0,290 C180,200 380,360 620,260 C820,170 1020,320 1240,240 C1370,180 1420,270 1440,255 L1440,500 L0,500 Z;
                        M0,260 C200,160 400,340 600,240 C800,140 1000,300 1200,220 C1350,160 1420,260 1440,240 L1440,500 L0,500 Z" />
            </path>
            <path fill="url(#wyh5)" opacity="0.85">
              <animate attributeName="d" dur="7s" repeatCount="indefinite"
                values="M0,310 C160,220 360,380 580,280 C760,190 980,350 1180,260 C1340,190 1410,290 1440,270 L1440,500 L0,500 Z;
                        M0,280 C200,190 380,400 600,290 C800,200 1000,370 1220,270 C1360,210 1420,300 1440,280 L1440,500 L0,500 Z;
                        M0,310 C160,220 360,380 580,280 C760,190 980,350 1180,260 C1340,190 1410,290 1440,270 L1440,500 L0,500 Z" />
            </path>
            <path fill="url(#wyh4)" opacity="0.9">
              <animate attributeName="d" dur="5.5s" repeatCount="indefinite"
                values="M0,350 C180,260 360,420 580,330 C760,250 960,400 1180,310 C1340,240 1410,330 1440,315 L1440,500 L0,500 Z;
                        M0,330 C200,245 380,440 600,345 C800,260 980,420 1200,325 C1360,260 1420,340 1440,325 L1440,500 L0,500 Z;
                        M0,350 C180,260 360,420 580,330 C760,250 960,400 1180,310 C1340,240 1410,330 1440,315 L1440,500 L0,500 Z" />
            </path>
            <path fill="none" stroke="#e879f9" strokeWidth="1.2" opacity="0.35">
              <animate attributeName="d" dur="6s" repeatCount="indefinite"
                values="M0,370 C200,295 400,420 620,350 C820,275 1020,410 1240,330 C1370,275 1420,350 1440,335;
                        M0,355 C220,278 420,440 640,360 C840,285 1040,430 1260,340 C1380,285 1420,360 1440,345;
                        M0,370 C200,295 400,420 620,350 C820,275 1020,410 1240,330 C1370,275 1420,350 1440,335" />
            </path>
            <path fill="none" stroke="#a78bfa" strokeWidth="1" opacity="0.3">
              <animate attributeName="d" dur="8s" repeatCount="indefinite"
                values="M0,385 C180,315 380,440 600,368 C800,295 1000,428 1220,348 C1360,295 1420,368 1440,355;
                        M0,372 C200,302 400,458 620,375 C820,308 1020,445 1240,360 C1370,308 1420,375 1440,362;
                        M0,385 C180,315 380,440 600,368 C800,295 1000,428 1220,348 C1360,295 1420,368 1440,355" />
            </path>
          </svg>
          <div className="absolute top-0 left-0 w-[600px] h-[350px] bg-gradient-radial from-fuchsia-100/60 via-purple-50/30 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-gradient-radial from-blue-100/50 via-indigo-50/20 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Hero content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-display text-gray-900 mb-6"
              >
                Why Choose <span className="text-gradient-purple">Cyvera Digitals</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-subheading leading-relaxed mb-4"
                style={{ color: '#535252' }}
              >
                Choosing a digital partner isn't just about visuals or code, it's about finding a team that understands your goals and builds solutions that move your business forward.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="text-subheading leading-relaxed"
                style={{ color: '#535252' }}
              >
                At Cyvera Digitals, we focus on clarity, strategy, and execution to create digital experiences that are purposeful, scalable, and built to perform.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <Image
                src="/hands-joined-by-team.jpg"
                alt="Team collaboration"
                width={800} height={600}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-2xl" />
            </motion.div>
          </div>

          {/* What Sets Cyvera Digitals Apart */}
          <div ref={diffRef}>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={diffInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-heading text-center text-gray-900 mb-4"
            >
              What Sets Cyvera Digitals Apart
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={diffInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-center text-gray-600 mb-14 max-w-2xl mx-auto"
            >
              We combine strategic thinking with purposeful design and clean development to deliver real results.
            </motion.p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {differentiators.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={diffInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="card-liquid-glass p-7"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Approach ── */}
      <section ref={approachRef} className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={approachInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-heading text-center text-gray-900 mb-14"
          >
            Our Approach
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                animate={approachInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={800} height={1000}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block text-sm font-bold text-secondary-purple mb-2">
                    Step {item.step}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Built for Growing Businesses ── */}
      <section ref={growingRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={growingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-heading text-gray-900 mb-6"
          >
            Built for Growing Businesses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={growingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Whether you're launching a new brand, rebuilding an outdated website, or growing your online presence, we adapt our approach to your stage and goals.
          </motion.p>
        </div>
      </section>

      {/* ── A Growing Agency You Can Trust ── */}
      <section ref={trustRef} className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={trustInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-heading text-center text-gray-900 mb-4"
          >
            A Growing Agency You Can Trust
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={trustInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-center text-gray-600 mb-10"
          >
            We're honest about where we are. As a growing agency:
          </motion.p>

          <div className="space-y-4 mb-10">
            {trustPoints.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: -20 }}
                animate={trustInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 + index * 0.08 }}
                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm"
              >
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 font-medium">{point}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={trustInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center text-gray-600 text-lg"
          >
            We aim to build long-term partnerships, not one-off projects.
          </motion.p>
        </div>
      </section>

      {/* ── Why Businesses Choose Us ── */}
      <section ref={chooseRef} className="relative py-20 bg-white overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-purple-100/40 via-fuchsia-50/20 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={chooseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-heading text-center text-gray-900 mb-4"
          >
            Why Businesses Choose Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={chooseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center text-gray-500 mb-14 max-w-2xl mx-auto"
          >
            It comes down to how we work, not just what we deliver.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {chooseReasons.map((reason, index) => (
              <motion.div
                key={reason.label}
                initial={{ opacity: 0, y: 30 }}
                animate={chooseInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                className="card-liquid-glass p-8 group hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mb-5 group-hover:shadow-lg group-hover:shadow-purple-200 transition-shadow duration-300">
                  <reason.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.label}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section ref={ctaRef} className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-primary" />
            <div className="relative z-10 px-8 py-16 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let's Build Something That Makes Sense
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                If you're looking for a digital partner who values clarity, quality, and results, let's talk.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-purple rounded-full text-lg font-semibold hover:shadow-2xl transition-all no-underline"
                >
                  Get Started <ArrowRight size={20} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/40 text-white text-lg font-semibold hover:bg-white/10 transition-all no-underline"
                >
                  <MessageCircle size={18} /> Talk to Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
