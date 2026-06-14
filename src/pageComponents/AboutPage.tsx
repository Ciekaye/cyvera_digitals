'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { ArrowRight, Target, Eye, Heart, Users, Shield, Check, Rocket, Building2, Briefcase, Handshake, Award, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import FinalCTA from '@/components/FinalCTA';
import GridBackground from '@/components/GridBackground';
import TeamShowcase from '@/components/ui/team-showcase';
import FlairButton from '@/components/ui/FlairButton';

export default function AboutPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-80px' });

  const whoWeAreRef = useRef(null);
  const whoWeAreInView = useInView(whoWeAreRef, { once: true, margin: '-80px' });

  const missionRef = useRef(null);
  const missionInView = useInView(missionRef, { once: true, margin: '-80px' });

  const workRef = useRef(null);
  const workInView = useInView(workRef, { once: true, margin: '-80px' });

  const whyRef = useRef(null);
  const whyInView = useInView(whyRef, { once: true, margin: '-80px' });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: '-80px' });

  const teamRef = useRef(null);
  const teamInView = useInView(teamRef, { once: true, margin: '-80px' });

  const values = [
    {
      icon: Shield,
      title: 'Quality',
      description: "We don't cut corners, because you'll see the difference, and so will your customers.",
    },
    {
      icon: Heart,
      title: 'Fairness',
      description: 'Transparent pricing, honest scopes, no hidden fees.',
    },
    {
      icon: Eye,
      title: 'Innovation',
      description: 'We use modern tools because your business deserves modern solutions.',
    },
    {
      icon: Users,
      title: 'Integrity',
      description: "We'd rather say no than overpromise.",
    },
  ];

  const goals = [
    'Build digital solutions that provide real business value',
    'Establish long-term partnerships with clients',
    'Continuously improve design and development standards',
    'Stay adaptable to evolving digital technologies',
    'Grow sustainably while maintaining quality and integrity',
  ];

  return (
    <div className="bg-modern-primary min-h-screen">
      {/* ── Hero + Who We Are + Our Story ── */}
      <section
        ref={heroRef}
        className="relative pt-12 pb-32 overflow-hidden"
      >
        <GridBackground />
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
              <linearGradient id="abt4" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e879f9" stopOpacity="0.55" />
                <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="abt5" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f0abfc" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#c4b5fd" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.45" />
              </linearGradient>
              <linearGradient id="abt6" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d946ef" stopOpacity="0.25" />
                <stop offset="60%" stopColor="#818cf8" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.3" />
              </linearGradient>
              <filter id="abtblur2">
                <feGaussianBlur stdDeviation="8" />
              </filter>
            </defs>
            <path fill="url(#abt6)" opacity="0.7" d="M0,260 C200,160 400,340 600,240 C800,140 1000,300 1200,220 C1350,160 1420,260 1440,240 L1440,500 L0,500 Z" />
            <path fill="url(#abt5)" opacity="0.85" d="M0,310 C160,220 360,380 580,280 C760,190 980,350 1180,260 C1340,190 1411,290 1440,270 L1440,500 L0,500 Z" />
            <path fill="url(#abt4)" opacity="0.9" d="M0,350 C180,260 360,420 580,330 C760,250 960,400 1180,310 C1340,240 1410,330 1440,315 L1440,500 L0,500 Z" />
            <path fill="none" stroke="#e879f9" strokeWidth="1.2" opacity="0.35" d="M0,370 C200,295 400,420 620,350 C820,275 1020,410 1240,330 C1370,275 1420,350 1440,335" />
            <path fill="none" stroke="#a78bfa" strokeWidth="1" opacity="0.3" d="M0,385 C180,315 380,440 600,368 C800,295 1000,428 1220,348 C1360,295 1420,368 1440,355" />
          </svg>
          <div className="absolute top-0 left-0 w-[600px] h-[350px] bg-gradient-radial from-fuchsia-100/60 via-purple-50/30 to-transparent rounded-full" />
          <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-gradient-radial from-blue-100/50 via-indigo-50/20 to-transparent rounded-full" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Hero content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6"
              >
                <span className="text-sm font-semibold text-secondary-purple">Who we are</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-display text-gray-900 mb-6"
              >
                About <span className="text-gradient-purple">Cyvera Digitals</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-subheading leading-relaxed mb-8"
                style={{ color: '#535252' }}
              >
                Most businesses know they need a strong digital presence. They just don't know where to start. That's exactly why Cyvera Digitals exists.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="btn-gradient-primary inline-flex items-center justify-center gap-2 no-underline"
                >
                  Work with us
                  <ArrowRight size={18} />
                </Link>
                <FlairButton href="/portfolio" className="no-underline">
                  See our work
                </FlairButton>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Overlap collage */}
              <div className="relative w-full max-w-xl mx-auto pb-10 pr-2 sm:pr-6">
                {/* Soft glow */}
                <div className="absolute -z-10 inset-0 bg-gradient-radial from-fuchsia-200/40 via-purple-100/20 to-transparent blur-3xl" />

                {/* Primary photo */}
                <Image
                  src="/aboutUs.jpg"
                  alt="The Cyvera Digitals team collaborating"
                  width={800}
                  height={600}
                  priority
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="w-[86%] h-auto rounded-3xl shadow-2xl"
                />

                {/* Secondary overlapping photo */}
                <Image
                  src="/hands-joined-by-team.jpg"
                  alt="Cyvera Digitals team joining hands"
                  width={500}
                  height={500}
                  sizes="(min-width: 1024px) 22vw, 45vw"
                  className="hidden sm:block absolute bottom-0 right-0 w-[46%] aspect-square object-cover rounded-2xl border-4 border-white shadow-xl"
                />

                {/* Floating glass badge */}
                <div className="absolute left-2 bottom-6 sm:left-4 card-liquid-glass px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Target size={18} className="text-white" />
                  </div>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold text-gray-900 mb-0.5">Strategy. Design. Growth.</p>
                    <p className="text-xs text-gray-500">Your goals, our craft</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Who We Are + Our Story */}
          <div className="space-y-24 lg:space-y-28 mt-24">
            {/* Who We Are — image left, text right */}
            <div ref={whoWeAreRef} className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={whoWeAreInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative rounded-[26px] p-1.5 bg-gradient-to-tr from-secondary-purple/40 via-purple-300/20 to-blue-200/30 shadow-2xl"
                >
                  <div className="relative rounded-[20px] overflow-hidden aspect-[4/3] bg-white">
                    <Image
                      src="/Who_we_are.jpg"
                      alt="Who We Are"
                      width={800} height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Floating accent card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={whoWeAreInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute -bottom-6 -right-3 sm:-right-6 z-20"
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="card-liquid-glass px-5 py-4 flex items-center gap-3"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#C02B7D] flex items-center justify-center shadow-md flex-shrink-0">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 leading-tight">Purpose-built</p>
                      <p className="text-xs text-gray-500">Scalable &amp; easy to use</p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={whoWeAreInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-7 sm:p-9 shadow-lg ring-1 ring-white/60"
              >
                <h2 className="text-heading text-gradient-purple mb-6">Who We Are</h2>
                <p className="text-body text-gray-700 leading-relaxed mb-4">
                  Cyvera Digitals is a growing digital agency that helps startups, entrepreneurs, and businesses establish a clear and professional digital presence. We focus on building websites and digital experiences that are purposeful, scalable, and easy to use.
                </p>
                <p className="text-body text-gray-700 leading-relaxed mb-6">
                  Our goal is to create digital solutions that support long-term growth and meaningful user engagement.
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {['Purposeful', 'Scalable', 'Easy to use'].map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-sm font-medium text-gray-700">
                      <Check size={13} className="text-secondary-purple" strokeWidth={3} />
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Our Story — text left, image right (alternated) */}
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="lg:order-1 order-2 bg-white/80 backdrop-blur-sm rounded-3xl p-7 sm:p-9 shadow-lg ring-1 ring-white/60"
              >
                <h2 className="text-heading text-gradient-purple mb-6">Our Story</h2>
                <p className="text-body text-gray-700 leading-relaxed mb-4">
                  Cyvera Digitals started with a simple frustration. Too many businesses were being sold expensive digital solutions that didn't actually fit their needs.
                </p>
                <p className="text-body text-gray-700 leading-relaxed mb-6">
                  We set out to do it differently, with clear communication, honest pricing, and work that actually moves the needle.
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {['Clear communication', 'Honest pricing', 'Real results'].map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-sm font-medium text-gray-700">
                      <Check size={13} className="text-secondary-purple" strokeWidth={3} />
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="relative lg:order-2 order-1"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative rounded-[26px] p-1.5 bg-gradient-to-tr from-blue-200/30 via-purple-300/20 to-secondary-purple/40 shadow-2xl"
                >
                  <div className="relative rounded-[20px] overflow-hidden aspect-[4/3] bg-white">
                    <Image
                      src="/our_story.jpg"
                      alt="Our Story"
                      width={800} height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Floating accent card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute -bottom-6 -left-3 sm:-left-6 z-20"
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    className="card-liquid-glass px-5 py-4 flex items-center gap-3"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#C02B7D] flex items-center justify-center shadow-md flex-shrink-0">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 leading-tight">Built differently</p>
                      <p className="text-xs text-gray-500">Honest &amp; clear</p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Meet the Founders ── */}
      <section ref={teamRef} className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <h2 className="text-heading text-gray-900 mb-4">Meet the Founders</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Three people, one shared belief — that every business deserves a digital presence built with intention, craft, and care.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TeamShowcase />
          </motion.div>
        </div>
      </section>

      {/* ── Mission, Vision, Goals, Values ── */}
      <section ref={missionRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Left side - Tall image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 relative hidden lg:block"
            >
              <div className="sticky top-20 h-[90vh] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/mvgv.jpg"
                  alt="Cyvera Digitals Team"
                  width={800} height={1200}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right side - Stacked sections */}
            <div className="lg:col-span-3 lg:pl-12 space-y-16">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[#C02B7D] rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Mission</h2>
                    <p className="text-body text-gray-600 leading-relaxed">
                      Our mission is to help businesses grow online through digital solutions that are clear, scalable, and built around real goals.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[#C02B7D] rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Vision</h2>
                    <p className="text-body text-gray-600 leading-relaxed">
                      We want to be a long-term partner for brands that value quality, honesty, and steady growth.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Goals */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[#C02B7D] rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Goals</h2>
                    <ul className="space-y-3">
                      {goals.map((goal) => (
                        <li key={goal} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Values */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[#C02B7D] rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Values</h2>
                    <ul className="space-y-3">
                      {values.map((value) => (
                        <li key={value.title} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                          <span><strong className="text-gray-900">{value.title}:</strong> {value.description}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who We Work With ── */}
      <section ref={workRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={workInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-heading text-gray-900 text-center mb-4"
          >
            Who We Work With
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={workInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-body text-gray-600 leading-relaxed text-center max-w-2xl mx-auto mb-12"
          >
            We partner with people who want to improve their online presence through professional web design and development.
          </motion.p>

          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Rocket, title: 'Startups', desc: 'Launch with a clear, scalable digital presence built to grow.' },
              { icon: Building2, title: 'Small & medium businesses', desc: 'Level up your online presence with a professional, modern build.' },
              { icon: Briefcase, title: 'Entrepreneurs', desc: 'Turn your idea into a polished, credible digital product.' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={workInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -6 }}
                className="card-liquid-glass p-7 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#C02B7D] flex items-center justify-center mx-auto mb-5 shadow-md">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={workInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="text-center text-gray-500 mt-10"
          >
            Regardless of business size, every project receives the same level of focus and care.
          </motion.p>
        </div>
      </section>

      {/* ── Why Cyvera Digitals ── */}
      <section ref={whyRef} className="py-20 bg-gradient-to-br from-purple-50 to-fuchsia-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-heading text-gray-900 text-center mb-4"
          >
            Why Cyvera Digitals
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-body text-gray-600 leading-relaxed text-center max-w-2xl mx-auto mb-12"
          >
            As a growing agency, we work closely with our clients to build digital solutions that support real growth.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Target, title: 'Focused attention', desc: 'Direct, dedicated focus on your project — never an afterthought.' },
              { icon: Handshake, title: 'Direct collaboration', desc: 'We work closely with you at every step of the process.' },
              { icon: Award, title: 'Commitment to quality', desc: 'A high standard held on every detail, every time.' },
              { icon: TrendingUp, title: 'Built for real growth', desc: 'Solutions designed to support sustainable, long-term growth.' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={whyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -6 }}
                className="card-liquid-glass p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-[#C02B7D] flex items-center justify-center mb-4 shadow-md">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
