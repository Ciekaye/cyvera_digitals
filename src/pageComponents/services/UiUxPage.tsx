'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Layers, PenTool, Users, BarChart3, Figma, Lightbulb, ArrowRight, ArrowLeft } from 'lucide-react';

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
            <path fill="none" stroke="url(#flow1)" strokeWidth="2" opacity="0.6">
              <animate
                attributeName="d"
                dur="5.5s"
                repeatCount="indefinite"
                values="
                  M0,480 C180,380 360,560 580,460 C760,370 960,540 1180,440 C1340,360 1410,460 1440,440;
                  M0,460 C200,360 380,580 600,470 C800,380 980,560 1200,450 C1360,380 1420,470 1440,450;
                  M0,480 C180,380 360,560 580,460 C760,370 960,540 1180,440 C1340,360 1410,460 1440,440
                "
              />
            </path>
            
            <path fill="none" stroke="url(#flow2)" strokeWidth="1.5" opacity="0.5">
              <animate
                attributeName="d"
                dur="7s"
                repeatCount="indefinite"
                values="
                  M0,520 C160,420 360,600 580,490 C760,390 980,570 1180,470 C1340,390 1410,500 1440,480;
                  M0,500 C200,400 380,620 600,510 C800,410 1000,590 1220,480 C1360,410 1420,510 1440,490;
                  M0,520 C160,420 360,600 580,490 C760,390 980,570 1180,470 C1340,390 1410,500 1440,480
                "
              />
            </path>
            
            <path fill="none" stroke="url(#flow3)" strokeWidth="1" opacity="0.4">
              <animate
                attributeName="d"
                dur="9s"
                repeatCount="indefinite"
                values="
                  M0,560 C180,460 380,640 600,530 C800,430 1020,610 1220,500 C1360,420 1420,530 1440,510;
                  M0,540 C200,440 400,660 620,550 C820,450 1040,630 1240,520 C1380,440 1420,550 1440,530;
                  M0,560 C180,460 380,640 600,530 C800,430 1020,610 1220,500 C1360,420 1420,530 1440,510
                "
              />
            </path>
            
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
          <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-gradient-radial from-blue-100/50 via-purple-50/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-gradient-radial from-cyan-100/40 via-indigo-50/15 to-transparent rounded-full blur-3xl" />
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
                <Layers size={16} className="text-secondary-purple" />
                <span className="text-sm font-semibold text-secondary-purple">UI & UX Strategy</span>
              </div>
              <h1 className="text-display text-gray-900 mb-6">
                User-Centered Design That <span className="text-gradient-purple">Converts</span>
              </h1>
              <p className="text-subheading mb-8 leading-relaxed" style={{ color: '#535252' }}>
                We create intuitive, engaging digital experiences grounded in research and best practices.
                Every design decision is made to improve usability, accessibility, and conversion rates.
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
              <img
                src="/uiux.jpg"
                alt="UI & UX Strategy"
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
            <path filter="url(#ublur)" fill="url(#uw3)" opacity="0.7">
              <animate attributeName="d" dur="9s" repeatCount="indefinite"
                values="M0,260 C200,160 400,340 600,240 C800,140 1000,300 1200,220 C1350,160 1420,260 1440,240 L1440,500 L0,500 Z;
                        M0,290 C180,200 380,360 620,260 C820,170 1020,320 1240,240 C1370,180 1420,270 1440,255 L1440,500 L0,500 Z;
                        M0,260 C200,160 400,340 600,240 C800,140 1000,300 1200,220 C1350,160 1420,260 1440,240 L1440,500 L0,500 Z" />
            </path>
            <path fill="url(#uw2)" opacity="0.85">
              <animate attributeName="d" dur="7s" repeatCount="indefinite"
                values="M0,310 C160,220 360,380 580,280 C760,190 980,350 1180,260 C1340,190 1410,290 1440,270 L1440,500 L0,500 Z;
                        M0,280 C200,190 380,400 600,290 C800,200 1000,370 1220,270 C1360,210 1420,300 1440,280 L1440,500 L0,500 Z;
                        M0,310 C160,220 360,380 580,280 C760,190 980,350 1180,260 C1340,190 1410,290 1440,270 L1440,500 L0,500 Z" />
            </path>
            <path fill="url(#uw1)" opacity="0.9">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Elevate Your User Experience?</h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Let's design digital experiences your users will love.
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
