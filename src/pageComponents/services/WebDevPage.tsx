'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Code, Monitor, Smartphone, ShoppingCart, Server, Zap, ArrowRight, ArrowLeft } from 'lucide-react';

export default function WebDevPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: Monitor, title: "Custom Websites", description: "Fully tailored websites designed to match your brand and business goals." },
    { icon: Smartphone, title: "Responsive Design", description: "Seamless experience across all devices — desktop, tablet, and mobile." },
    { icon: ShoppingCart, title: "E-Commerce", description: "Online stores with secure payments, inventory management, and smooth checkout." },
    { icon: Server, title: "Web Applications", description: "Complex web apps with custom backends, dashboards, and real-time features." },
    { icon: Zap, title: "Performance Optimized", description: "Fast-loading, SEO-friendly builds that score high on Core Web Vitals." },
    { icon: Code, title: "API Development", description: "Custom REST and GraphQL APIs to power your applications and integrations." },
  ];

  const techStack = [
    {
      name: 'WordPress',
      color: '#21759B',
      bg: '#EBF5FB',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',
      desc: 'Flexible CMS for business sites, blogs, and WooCommerce stores with easy content management.',
    },
    {
      name: 'Shopify',
      color: '#96BF48',
      bg: '#F0F9EB',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg',
      desc: 'Powerful e-commerce platform for building scalable online stores with seamless checkout.',
    },
    {
      name: 'React',
      color: '#61DAFB',
      bg: '#E8FAFE',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      desc: 'Component-based UI library for building fast, interactive, and dynamic web applications.',
    },
    {
      name: 'Next.js',
      color: '#000000',
      bg: '#F2F2F2',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      desc: 'Full-stack React framework with SSR and SSG for lightning-fast, SEO-friendly websites.',
    },
    {
      name: 'Tailwind CSS',
      color: '#38BDF8',
      bg: '#E8F7FE',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
      desc: 'Utility-first CSS framework for building modern, responsive interfaces rapidly.',
    },
    {
      name: 'Node.js',
      color: '#339933',
      bg: '#EBF7EB',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      desc: 'Scalable server-side runtime for building fast APIs, backends, and real-time applications.',
    },
    {
      name: 'TypeScript',
      color: '#3178C6',
      bg: '#EBF2FB',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      desc: 'Typed superset of JavaScript that improves code quality, reliability, and maintainability.',
    },
    {
      name: 'Laravel',
      color: '#FF2D20',
      bg: '#FEF0EF',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
      desc: 'Elegant PHP framework for building robust web applications with clean, expressive syntax.',
    },
  ];

  const process = [
    { step: "01", title: "Requirements & Planning", description: "We define your project scope, goals, target audience, and technical requirements." },
    { step: "02", title: "Design & Prototyping", description: "Wireframes and interactive prototypes to validate the user experience before development." },
    { step: "03", title: "Development & Testing", description: "Clean, maintainable code built with modern frameworks, tested rigorously at every stage." },
    { step: "04", title: "Launch & Optimization", description: "Deployment, performance optimization, and post-launch monitoring to ensure success." },
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

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
                <Code size={16} className="text-secondary-purple" />
                <span className="text-sm font-semibold text-secondary-purple">Website Development</span>
              </div>
              <h1 className="text-display text-gray-900 mb-6">
                Custom Websites Built for <span className="text-gradient-purple">Performance</span>
              </h1>
              <p className="text-subheading mb-8 leading-relaxed" style={{ color: '#535252' }}>
                We build custom, responsive, and high-performing websites using modern technologies.
                From landing pages to full-scale web applications, every project is engineered
                for speed, usability, and scalability.
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
                src="/webdevelopment.jpg"
                alt="Website Development"
                width={800} height={800}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
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
            End-to-end web development services tailored to your business needs.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-7 bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-50 transition-all"
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

      {/* Tech Stack */}
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
              <linearGradient id="tw1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e879f9" stopOpacity="0.55" />
                <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="tw2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f0abfc" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#c4b5fd" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.45" />
              </linearGradient>
              <linearGradient id="tw3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d946ef" stopOpacity="0.25" />
                <stop offset="60%" stopColor="#818cf8" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.3" />
              </linearGradient>
              <filter id="tblur">
                <feGaussianBlur stdDeviation="8" />
              </filter>
            </defs>
            <path fill="url(#tw3)" opacity="0.7" d="M0,260 C200,160 400,340 600,240 C800,140 1000,300 1200,220 C1350,160 1420,260 1440,240 L1440,500 L0,500 Z" />
            <path fill="url(#tw2)" opacity="0.85" d="M0,310 C160,220 360,380 580,280 C760,190 980,350 1180,260 C1340,190 1410,290 1440,270 L1440,500 L0,500 Z" />
            <path fill="url(#tw1)" opacity="0.9" d="M0,350 C180,260 360,420 580,330 C760,250 960,400 1180,310 C1340,240 1410,330 1440,315 L1440,500 L0,500 Z" />
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
            Our Tech Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center text-gray-600 mb-14 max-w-2xl mx-auto"
          >
            We work with modern, proven technologies to deliver fast, scalable, and maintainable solutions.
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.07 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="card-liquid-glass p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: tech.bg }}
                  >
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={28}
                      height={28}
                      className="object-contain"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                        (e.currentTarget.parentElement as HTMLElement).innerHTML = `<span style="font-size:1.25rem;font-weight:700;color:${tech.color}">${tech.name.charAt(0)}</span>`;
                      }}
                    />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">{tech.name}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{tech.desc}</p>
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
            Our Development Process
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Website?</h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Let's discuss your project and create something exceptional together.
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
