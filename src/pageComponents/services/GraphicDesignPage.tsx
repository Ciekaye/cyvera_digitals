'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Palette, PenTool, Image as ImageIcon, BookOpen, Stamp, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';

export default function GraphicDesignPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: Stamp, title: "Logo Design", description: "Distinctive, memorable logos that capture your brand's personality and values." },
    { icon: Palette, title: "Brand Identity", description: "Complete brand kits including colors, typography, imagery guidelines, and usage rules." },
    { icon: ImageIcon, title: "Marketing Graphics", description: "Eye-catching visuals for social media, ads, presentations, and print materials." },
    { icon: PenTool, title: "Illustration", description: "Custom illustrations and iconography that add personality to your brand." },
    { icon: BookOpen, title: "Print Design", description: "Business cards, brochures, packaging, and other tangible brand touchpoints." },
    { icon: Sparkles, title: "Visual Strategy", description: "A cohesive visual direction that ensures consistency across every platform." },
  ];

  const deliverables = [
    "Logo (primary, secondary, icon variations)",
    "Brand color palette with hex/RGB codes",
    "Typography system & font pairings",
    "Brand guidelines document",
    "Social media templates",
    "Business card & stationery design",
    "Marketing collateral templates",
    "Source files (AI, PSD, Figma)",
  ];

  return (
    <div ref={ref} className="bg-modern-primary min-h-screen">
      {/* Hero */}
      <section className="relative pt-4 md:pt-12 pb-20 overflow-hidden">
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

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
                <Palette size={16} className="text-secondary-purple" />
                <span className="text-sm font-semibold text-secondary-purple">Graphic & Brand Design</span>
              </div>
              <h1 className="text-display text-gray-900 mb-6">
                Visual Identities That <span className="text-gradient-purple">Stand Out</span>
              </h1>
              <p className="text-subheading mb-8 leading-relaxed" style={{ color: '#535252' }}>
                We create professional brand identities and design assets that communicate
                your brand clearly, consistently, and memorably across every platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-gradient-primary inline-flex items-center justify-center gap-2 text-lg font-semibold no-underline">
                  Start a Project <ArrowRight size={18} />
                </Link>
                <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-gray-200 text-gray-700 font-semibold hover:border-purple-300 hover:text-purple-700 transition-all no-underline">
                  View Our Work
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="aspect-square bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/graphicdesign.jpg"
                alt="Graphic & Brand Design"
                width={800} height={800}
                className="w-full h-full object-cover"
              />
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
              <linearGradient id="gw1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e879f9" stopOpacity="0.55" />
                <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="gw2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f0abfc" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#c4b5fd" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.45" />
              </linearGradient>
              <linearGradient id="gw3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d946ef" stopOpacity="0.25" />
                <stop offset="60%" stopColor="#818cf8" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.3" />
              </linearGradient>
              <filter id="gblur">
                <feGaussianBlur stdDeviation="8" />
              </filter>
            </defs>
            <path fill="url(#gw3)" opacity="0.7" d="M0,260 C200,160 400,340 600,240 C800,140 1000,300 1200,220 C1350,160 1420,260 1440,240 L1440,500 L0,500 Z" />
            <path fill="url(#gw2)" opacity="0.85" d="M0,310 C160,220 360,380 580,280 C760,190 980,350 1180,260 C1340,190 1410,290 1440,270 L1440,500 L0,500 Z" />
            <path fill="url(#gw1)" opacity="0.9" d="M0,350 C180,260 360,420 580,330 C760,250 960,400 1180,310 C1340,240 1411,330 1440,315 L1440,500 L0,500 Z" />
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
            From logos to full brand systems, we craft visuals that tell your story.
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
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-5">
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
            What You'll Receive
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
                <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
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

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-primary" />
            <div className="relative z-10 px-8 py-16 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Brand?</h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Let's create a visual identity that reflects who you are and resonates with your audience.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-purple rounded-full text-lg font-semibold hover:shadow-2xl transition-all no-underline">
                Get Started <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
