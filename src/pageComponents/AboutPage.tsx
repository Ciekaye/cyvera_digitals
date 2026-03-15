'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { ArrowRight, Target, Eye, Heart, Users, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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

  const values = [
    {
      icon: Shield,
      title: 'Quality',
      description: 'Delivering excellence in every digital solution we create, with attention to detail, performance, and long-term value.',
    },
    {
      icon: Heart,
      title: 'Fairness',
      description: 'Providing transparent pricing, honest recommendations, and balanced solutions that respect both client needs and project scope.',
    },
    {
      icon: Eye,
      title: 'Innovation',
      description: 'Embracing creativity and modern technologies to deliver forward-thinking and effective digital solutions.',
    },
    {
      icon: Users,
      title: 'Integrity',
      description: 'Upholding transparency, honesty, and ethical practices in every project and partnership.',
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
            <path filter="url(#abtblur2)" fill="url(#abt6)" opacity="0.7">
              <animate attributeName="d" dur="9s" repeatCount="indefinite"
                values="M0,260 C200,160 400,340 600,240 C800,140 1000,300 1200,220 C1350,160 1420,260 1440,240 L1440,500 L0,500 Z;
                        M0,290 C180,200 380,360 620,260 C820,170 1020,320 1240,240 C1370,180 1420,270 1440,255 L1440,500 L0,500 Z;
                        M0,260 C200,160 400,340 600,240 C800,140 1000,300 1200,220 C1350,160 1420,260 1440,240 L1440,500 L0,500 Z" />
            </path>
            <path fill="url(#abt5)" opacity="0.85">
              <animate attributeName="d" dur="7s" repeatCount="indefinite"
                values="M0,310 C160,220 360,380 580,280 C760,190 980,350 1180,260 C1340,190 1411,290 1440,270 L1440,500 L0,500 Z;
                        M0,280 C200,190 380,400 600,290 C800,200 1000,370 1220,270 C1360,210 1420,300 1440,280 L1440,500 L0,500 Z;
                        M0,310 C160,220 360,380 580,280 C760,190 980,350 1180,260 C1340,190 1410,290 1440,270 L1440,500 L0,500 Z" />
            </path>
            <path fill="url(#abt4)" opacity="0.9">
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
                About <span className="text-gradient-purple">Cyvera Digitals</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-subheading leading-relaxed mb-4"
                style={{ color: '#535252' }}
              >
                Cyvera Digitals is a digital agency focused on helping businesses build a strong and effective online presence. We specialize in web design, website development, and digital solutions that are visually engaging, strategically built, and aligned with real business goals.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <Image
                src="/aboutUs.jpg"
                alt="About Cyvera Digitals"
                width={800} height={600}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Who We Are */}
          <div ref={whoWeAreRef} className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={whoWeAreInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="card-liquid-glass p-8"
            >
              <div className="grid lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-2">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={whoWeAreInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.1 }}
                  >
                    <Image
                      src="/Who_we_are.jpg"
                      alt="Who We Are"
                      width={800} height={600}
                      className="w-full h-auto rounded-xl shadow-lg"
                    />
                  </motion.div>
                </div>
                <div className="lg:col-span-3">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={whoWeAreInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-heading text-gradient-purple mb-6"
                  >
                    Who We Are
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={whoWeAreInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-body text-gray-700 leading-relaxed mb-4"
                  >
                    Cyvera Digitals is a growing digital agency that helps startups, entrepreneurs, and businesses establish a clear and professional digital presence. We focus on building websites and digital experiences that are purposeful, scalable, and easy to use.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={whoWeAreInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-body text-gray-700 leading-relaxed"
                  >
                    Our goal is to create digital solutions that support long-term growth and meaningful user engagement.
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Our Story */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="card-liquid-glass p-8"
            >
              <div className="grid lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-2">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={heroInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    <Image
                      src="/our_story.jpg"
                      alt="Our Story"
                      width={800} height={600}
                      className="w-full h-auto rounded-xl shadow-lg"
                    />
                  </motion.div>
                </div>
                <div className="lg:col-span-3">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-heading text-gradient-purple mb-6"
                  >
                    Our Story
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="text-body text-gray-700 leading-relaxed mb-4"
                  >
                    Cyvera Digitals was founded with a simple goal. To help businesses navigate the digital space with clarity and confidence.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="text-body text-gray-700 leading-relaxed"
                  >
                    We focus on thoughtful design, clean development, and strategic execution. Our approach avoids unnecessary complexity and prioritizes solutions that make sense for both users and businesses.
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>
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
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Mission</h2>
                    <p className="text-body text-gray-600 leading-relaxed mb-3">
                      Our mission is to create meaningful digital solutions that help businesses grow, connect with their audience, and succeed online.
                    </p>
                    <p className="text-body text-gray-600 leading-relaxed">
                      We deliver web design and development services that are user-focused, performance-driven, and built for scalability.
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
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Vision</h2>
                    <p className="text-body text-gray-600 leading-relaxed mb-3">
                      Our vision is to become a trusted digital partner for growing businesses seeking reliable and effective digital solutions.
                    </p>
                    <p className="text-body text-gray-600 leading-relaxed">
                      We aim to support brands that value clarity, quality, and long-term digital growth.
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
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
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
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
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
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={workInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-heading text-gray-900 mb-6"
          >
            Who We Work With
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={workInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-body text-gray-600 leading-relaxed mb-4"
          >
            We work with startups, small to medium-sized businesses, and entrepreneurs who want to improve their online presence through professional web design and development.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={workInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-body text-gray-600 leading-relaxed"
          >
            Regardless of business size, every project receives the same level of focus and care.
          </motion.p>
        </div>
      </section>

      {/* ── Why Cyvera Digitals ── */}
      <section ref={whyRef} className="py-20 bg-gradient-to-br from-purple-50 to-fuchsia-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-heading text-gray-900 mb-6"
          >
            Why Cyvera Digitals
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-body text-gray-600 leading-relaxed"
          >
            As a growing digital agency, we offer focused attention, direct collaboration, and a strong commitment to quality. We work closely with our clients to build digital solutions that support real growth.
          </motion.p>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section ref={ctaRef} className="py-20 bg-white">
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
                Let's Build Something Meaningful
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                If you are looking for a digital agency that values clarity, collaboration, and effective digital solutions, we would love to work with you.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="group bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all inline-flex items-center gap-2 no-underline"
                  >
                    Get Started
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-white text-white font-semibold text-lg hover:bg-white/10 transition-all no-underline"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
