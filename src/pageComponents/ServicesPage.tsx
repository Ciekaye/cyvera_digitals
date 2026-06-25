'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import FlairButton from '@/components/ui/FlairButton';
import Image from 'next/image';
import {
  Code, Layers, Palette, Share2, ArrowRight, MessageCircle,
  Monitor, ShoppingCart, Wrench, Globe,
  PenTool, Users, BarChart3, Lightbulb,
  Image as ImageIcon, Stamp, Megaphone,
  CalendarDays, Camera, ChevronDown, ChevronRight,
  Instagram, Facebook,
  TrendingUp, Search, FileText, MapPin, Link2,
} from 'lucide-react';
import FinalCTA from '@/components/FinalCTA';
import GridBackground from '@/components/GridBackground';

/* ─── Smooth scroll helper ─── */
const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

/* ─── Fade-in wrapper ─── */
function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SERVICES PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function ServicesPage() {
  return (
    <div className="bg-modern-primary">
      <ServicesHero />
      <WebDevSection />
      <WordPressSection />
      <UiUxSection />
      <GraphicDesignSection />
      <SocialMediaSection />
      <SeoSection />
      <GuidedDecision />
      <FinalCTA />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   1 · HERO
   ═══════════════════════════════════════════════════════════════ */
function ServicesHero() {
  return (
    <section className="relative min-h-[75vh] lg:min-h-[80vh] flex items-center overflow-hidden bg-white">
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
            <linearGradient id="sw1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e879f9" stopOpacity="0.55" />
              <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="sw2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f0abfc" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#c4b5fd" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.45" />
            </linearGradient>
            <linearGradient id="sw3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d946ef" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#818cf8" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.3" />
            </linearGradient>
            <filter id="sblur">
              <feGaussianBlur stdDeviation="8" />
            </filter>
          </defs>
          <path fill="url(#sw3)" opacity="0.7" d="M0,260 C200,160 400,340 600,240 C800,140 1000,300 1200,220 C1350,160 1420,260 1440,240 L1440,500 L0,500 Z" />
          <path fill="url(#sw2)" opacity="0.85" d="M0,310 C160,220 360,380 580,280 C760,190 980,350 1180,260 C1340,190 1410,290 1440,270 L1440,500 L0,500 Z" />
          <path fill="url(#sw1)" opacity="0.9" d="M0,350 C180,260 360,420 580,330 C760,250 960,400 1180,310 C1340,240 1410,330 1440,315 L1440,500 L0,500 Z" />
          <path fill="none" stroke="#e879f9" strokeWidth="1.2" opacity="0.35" d="M0,370 C200,295 400,420 620,350 C820,275 1020,410 1240,330 C1370,275 1420,350 1440,335" />
          <path fill="none" stroke="#a78bfa" strokeWidth="1" opacity="0.3" d="M0,385 C180,315 380,440 600,368 C800,295 1000,428 1220,348 C1360,295 1420,368 1440,355" />
        </svg>
        <div className="absolute top-0 left-0 w-[600px] h-[350px] bg-gradient-radial from-fuchsia-100/60 via-purple-50/30 to-transparent rounded-full" />
        <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-gradient-radial from-blue-100/50 via-indigo-50/20 to-transparent rounded-full" />
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-16 lg:pt-20 pb-20">
        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6"
            >
              <span className="text-sm font-semibold text-secondary-purple">Our services</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-display text-gray-900 mb-6"
            >
              Digital Services Built to Help Your{' '}
              <span className="text-gradient-purple">Business Grow</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-subheading mb-10 leading-relaxed max-w-2xl"
                style={{ color: '#535252' }}
            >
              From concept to launch, we handle every piece of your digital presence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Link
                href="/book"
                className="btn-gradient-primary inline-flex items-center gap-2 text-lg font-semibold no-underline"
              >
                Book Now <ArrowRight size={18} />
              </Link>
              <FlairButton href="/contact">
                <MessageCircle size={18} /> Talk to Us
              </FlairButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Overlap collage */}
            <div className="relative w-full max-w-xl mx-auto pb-10 pr-2 sm:pr-6">
              {/* Soft glow */}
              <div className="absolute -z-10 inset-0 bg-gradient-radial from-fuchsia-200/40 via-purple-100/20 to-transparent blur-3xl" />

              {/* Primary photo */}
              <Image
                src="/services.jpg"
                alt="Building digital services on a laptop"
                width={800}
                height={600}
                priority
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="w-[86%] h-auto rounded-3xl shadow-2xl"
              />

              {/* Secondary overlapping photo */}
              <Image
                src="/our_story.jpg"
                alt="The Cyvera Digitals team at work"
                width={500}
                height={400}
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="hidden sm:block absolute bottom-0 right-0 w-[46%] aspect-[4/3] object-cover rounded-2xl border-4 border-white shadow-xl"
              />

              {/* Floating glass badge */}
              <div className="absolute left-2 bottom-6 sm:left-4 card-liquid-glass px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Layers size={18} className="text-white" />
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-gray-900 mb-0.5">Concept to launch</p>
                  <p className="text-xs text-gray-500">End-to-end delivery</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What We Do - Cards within a card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="card-liquid-glass rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-10">
            <h2 className="text-heading text-gray-900 mb-4">
              What We Do
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {overviewCards.map((card, i) => (
              <motion.button
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo(card.target)}
                className="text-left p-7 bg-white/95 rounded-2xl hover:bg-white/100 transition-all cursor-pointer group border border-white/20"
              >
                <div className="w-13 h-13 bg-[#C02B7D] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform" style={{ width: 52, height: 52 }}>
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{card.desc}</p>
                <Link
                  href={card.link}
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-secondary-purple group-hover:gap-2 transition-all no-underline"
                >
                  Learn more <ArrowRight size={14} />
                </Link>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   2 · SERVICE CARDS DATA
   ═══════════════════════════════════════════════════════════════ */
const overviewCards = [
  { icon: Code, title: 'Website Development', desc: 'Modern, fast, and scalable websites built for performance and growth.', target: 'web-dev', link: '/services/website-development' },
  { icon: Layers, title: 'UI & UX Strategy', desc: 'User-focused design solutions that improve usability and engagement.', target: 'ui-ux', link: '/services/ui-ux-strategy' },
  { icon: Palette, title: 'Graphic & Brand Design', desc: 'Visual identities and design assets that communicate your brand clearly.', target: 'graphic-design', link: '/services/graphic-brand-design' },
  { icon: Share2, title: 'Social Media Management', desc: 'Content creation and management to keep your brand visible and consistent.', target: 'social-media', link: '/services/social-media-management' },
  { icon: TrendingUp, title: 'SEO', desc: 'Data-driven optimisations that grow your organic traffic, rankings, and leads.', target: 'seo', link: '/services/seo' },
];

/* ═══════════════════════════════════════════════════════════════
   3 · WEBSITE DEVELOPMENT
   ═══════════════════════════════════════════════════════════════ */
const webBullets = [
  { icon: Monitor, label: 'Custom website development' },
  { icon: Globe, label: 'WordPress development' },
  { icon: ShoppingCart, label: 'E-commerce websites' },
  { icon: Wrench, label: 'Website maintenance and support' },
];

const techStack = [
  { name: 'WordPress',    slug: 'wordpress',   color: '#21759B', description: "The world's most popular CMS — flexible, SEO-friendly, and easy to manage." },
  { name: 'Shopify',      slug: 'shopify',     color: '#96BF48', description: 'Hosted e-commerce with payments, shipping, and product tools out of the box.' },
  { name: 'Next.js',      slug: 'nextdotjs',   color: '#000000', description: 'React framework for production with hybrid rendering and built-in optimizations.' },
  { name: 'React',        slug: 'react',       color: '#61DAFB', description: 'Component-based UI library that powers fast, interactive interfaces.' },
  { name: 'Tailwind CSS', slug: 'tailwindcss', color: '#38BDF8', description: 'Utility-first CSS framework for building modern, responsive designs quickly.' },
  { name: 'Node.js',      slug: 'nodedotjs',   color: '#339933', description: 'JavaScript runtime for fast, scalable backend services and APIs.' },
  { name: 'Laravel',      slug: 'laravel',     color: '#FF2D20', description: 'Elegant PHP framework with batteries included for shipping web apps fast.' },
  { name: 'TypeScript',   slug: 'typescript',  color: '#3178C6', description: 'Typed superset of JavaScript that catches bugs before they reach production.' },
];

function WebDevSection() {
  const [activeTech, setActiveTech] = useState(0);

  return (
    <section id="web-dev" className="py-24 scroll-mt-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
              <Code size={16} className="text-secondary-purple" />
              <span className="text-sm font-semibold text-secondary-purple">Featured Service</span>
            </div>
            <h2 className="text-heading text-gray-900 mb-5">Website Development</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              We build modern, responsive, and high-performing websites designed to grow alongside your business.
            </p>

            <ul className="space-y-4 mb-8">
              {webBullets.map((b) => (
                <li key={b.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0">
                    <b.icon size={20} className="text-secondary-purple" />
                  </div>
                  <span className="text-gray-700 font-medium">{b.label}</span>
                </li>
              ))}
            </ul>

            <div className="bg-gray-50 rounded-xl p-5 mb-8">
              <p className="text-sm text-gray-600 leading-relaxed italic">
                Websites built with clean code, modern technologies, and a focus on usability, performance, and scalability.
              </p>
            </div>

            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#C02B7D] text-white font-semibold no-underline shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Book Now <ArrowRight size={16} />
            </Link>
          </FadeIn>

          {/* Tech carousel */}
          <FadeIn delay={0.2}>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">Technologies We Use</h3>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {techStack.map((tech, i) => (
                  <button
                    key={tech.name}
                    onClick={() => setActiveTech(i)}
                    className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
                      activeTech === i
                        ? 'bg-[#C02B7D] text-white shadow-md'
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {tech.name}
                  </button>
                ))}
              </div>
              <motion.div
                key={activeTech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center p-6 bg-gray-50 rounded-xl"
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: techStack[activeTech].color + '18' }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://cdn.simpleicons.org/${techStack[activeTech].slug}/${techStack[activeTech].color.replace('#', '')}`}
                    alt={`${techStack[activeTech].name} logo`}
                    width={36}
                    height={36}
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">{techStack[activeTech].name}</h4>
                <p className="text-sm text-gray-500 max-w-xs mx-auto leading-relaxed">
                  {techStack[activeTech].description}
                </p>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   4 · WORDPRESS DEVELOPMENT (SUB-SECTION)
   ═══════════════════════════════════════════════════════════════ */
const wpUseCases = [
  { title: 'Business websites', desc: 'Professional company websites with custom themes, intuitive admin panels, and built-in SEO.' },
  { title: 'Blogs and content platforms', desc: 'Optimized content management with categories, tags, and fast page loads for readers.' },
  { title: 'WooCommerce online stores', desc: 'Full-featured e-commerce stores with product management, payments, and shipping integration.' },
];

function WordPressSection() {
  const [openCase, setOpenCase] = useState<number | null>(0);

  return (
    <section id="wordpress" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <FadeIn>
          <div className="grid lg:grid-cols-[14rem,1fr,1fr] gap-10 items-stretch">
            <div
              className="hidden lg:flex rounded-2xl items-center justify-center self-stretch min-h-[260px]"
              style={{ backgroundColor: '#21759B18' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://cdn.simpleicons.org/wordpress/21759B"
                alt="WordPress logo"
                width={112}
                height={112}
              />
            </div>
            <div>
              <h3 className="text-heading text-gray-900 mb-4">WordPress Development</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Flexible and easy-to-manage WordPress websites tailored to your business needs.
              </p>
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#C02B7D] text-white font-semibold no-underline shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Book Now <ArrowRight size={16} />
              </Link>
            </div>

            {/* Accordion */}
            <div className="space-y-3">
              {wpUseCases.map((uc, i) => (
                <div key={uc.title} className="rounded-xl border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => setOpenCase(openCase === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                  >
                    {uc.title}
                    <motion.div animate={{ rotate: openCase === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown size={18} className="text-gray-400" />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openCase === i ? 'auto' : 0, opacity: openCase === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">{uc.desc}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   5 · UI & UX STRATEGY
   ═══════════════════════════════════════════════════════════════ */
const uxSteps = [
  { icon: Users, title: 'User research', desc: 'Understand your audience, their goals, and pain points through interviews and analysis.' },
  { icon: PenTool, title: 'Wireframing and prototyping', desc: 'Map out layouts and interactive prototypes to validate the experience early.' },
  { icon: Layers, title: 'User interface design', desc: 'Create polished, accessible interfaces that align with your brand.' },
  { icon: BarChart3, title: 'User experience optimization', desc: 'Improve flows and interactions based on data and real user feedback.' },
];

function UiUxSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="ui-ux" ref={ref} className="py-24 scroll-mt-24 bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
              <Layers size={16} className="text-secondary-purple" />
              <span className="text-sm font-semibold text-secondary-purple">Design Strategy</span>
            </div>
            <h2 className="text-heading text-gray-900 mb-4">UI & UX Strategy</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We design intuitive and engaging digital experiences that guide users and improve interaction across all devices.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {uxSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative card-liquid-glass p-6 group"
            >
              <span className="absolute top-4 right-4 text-3xl font-bold text-purple-200/60 group-hover:text-purple-300/80 transition-colors">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="w-12 h-12 bg-[#C02B7D] rounded-xl flex items-center justify-center mb-4">
                <step.icon size={22} className="text-white" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="card-liquid-glass p-8 text-center">
            <Lightbulb size={28} className="text-secondary-purple mx-auto mb-3" />
            <p className="text-lg font-semibold text-gray-900 italic">
              "Good design isn't just how it looks, it's how it works."
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   6 · GRAPHIC & BRAND DESIGN
   ═══════════════════════════════════════════════════════════════ */
const designServices = [
  { icon: Stamp, title: 'Brand identity and logo design', desc: 'Distinctive logos and cohesive brand systems that set you apart.' },
  { icon: Megaphone, title: 'Marketing and promotional materials', desc: 'Print and digital assets designed to communicate your message effectively.' },
  { icon: ImageIcon, title: 'Social media graphics', desc: 'Scroll-stopping visuals consistent with your brand for every platform.' },
];

const designPreviews = [
  { label: 'Brand Identity', image: '/brandidentity.jpg' },
  { label: 'Logo Design', image: '/logodesign.jpg' },
  { label: 'Social Templates', image: '/socialtemplates.jpg' },
  { label: 'Marketing Assets', image: '/marketingassets.jpg' },
  { label: 'Presentation Design', image: '/presentationdesign.jpg' },
  { label: 'Packaging', image: '/packaging.jpg' },
];

function GraphicDesignSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="graphic-design" ref={ref} className="py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
              <Palette size={16} className="text-secondary-purple" />
              <span className="text-sm font-semibold text-secondary-purple">Creative Studio</span>
            </div>
            <h2 className="text-heading text-gray-900 mb-4">Graphic & Brand Design</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Visual identities and design assets that help businesses communicate clearly and consistently.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {designServices.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-7 rounded-2xl shadow-lg border border-gray-50 bg-white transition-all"
            >
              <div className="w-12 h-12 bg-[#C02B7D] rounded-xl flex items-center justify-center mb-5">
                <s.icon size={22} className="text-white" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Design preview grid */}
        <FadeIn delay={0.2}>
          <h3 className="text-lg font-bold text-gray-900 text-center mb-8">Design Capabilities</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {designPreviews.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                whileHover={{ scale: 1.04 }}
                className="aspect-[4/3] rounded-2xl overflow-hidden cursor-default relative group"
              >
                <Image
                  src={p.image}
                  alt={p.label}
                  width={800} height={1000}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-base px-4 text-center drop-shadow-2xl">{p.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   7 · SOCIAL MEDIA MANAGEMENT
   ═══════════════════════════════════════════════════════════════ */
const smIncludes = [
  { icon: CalendarDays, label: 'Content planning and creation' },
  { icon: Users, label: 'Account management' },
  { icon: BarChart3, label: 'Basic analytics and performance tracking' },
  { icon: Camera, label: 'Brand-aligned visuals' },
];

const platformTabs = [
  {
    name: 'Instagram',
    icon: Instagram,
    posts: [
      { type: 'Carousel Post', caption: 'Swipe to see our latest project launch →', time: '2 hours ago', likes: 124 },
      { type: 'Reel', caption: 'Behind the scenes at our creative studio', time: '1 day ago', likes: 302 },
      { type: 'Story', caption: 'Quick poll: Which color scheme?', time: '3 hours ago', likes: 89 },
    ],
  },
  {
    name: 'Facebook',
    icon: Facebook,
    posts: [
      { type: 'Page Update', caption: 'Excited to announce our latest partnership!', time: '5 hours ago', likes: 67 },
      { type: 'Shared Article', caption: '5 Tips for Better Brand Consistency Online', time: '2 days ago', likes: 43 },
      { type: 'Event', caption: 'Free webinar: Digital branding essentials', time: '1 week ago', likes: 156 },
    ],
  },
];

function SocialMediaSection() {
  const [activePlatform, setActivePlatform] = useState(0);
  return (
    <section id="social-media" className="py-24 scroll-mt-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
              <Share2 size={16} className="text-secondary-purple" />
              <span className="text-sm font-semibold text-secondary-purple">Social Growth</span>
            </div>
            <h2 className="text-heading text-gray-900 mb-5">Social Media Management</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Helping brands stay active, consistent, and visible across social platforms.
            </p>

            <ul className="space-y-4 mb-8">
              {smIncludes.map((item) => (
                <li key={item.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-secondary-purple" />
                  </div>
                  <span className="text-gray-700 font-medium">{item.label}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Platform tabs with mock posts */}
          <FadeIn delay={0.2}>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="flex border-b border-gray-100">
                {platformTabs.map((p, i) => (
                  <button
                    key={p.name}
                    onClick={() => setActivePlatform(i)}
                    className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold transition-all ${
                      activePlatform === i
                        ? 'text-secondary-purple border-b-2 border-secondary-purple bg-purple-50/40'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <p.icon size={18} /> {p.name}
                  </button>
                ))}
              </div>

              <motion.div
                key={activePlatform}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="p-5 space-y-3"
              >
                {platformTabs[activePlatform].posts.map((post) => (
                  <div key={post.caption} className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-secondary-purple bg-purple-50 px-2 py-0.5 rounded-full">
                        {post.type}
                      </span>
                      <span className="text-xs text-gray-400">{post.time}</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{post.caption}</p>
                    <span className="text-xs text-gray-400">{post.likes} likes</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   8 · SEO
   ═══════════════════════════════════════════════════════════════ */
const seoBullets = [
  { icon: Search, label: 'Keyword research & strategy' },
  { icon: FileText, label: 'On-page SEO optimisation' },
  { icon: Wrench, label: 'Technical SEO & site health' },
  { icon: MapPin, label: 'Local SEO & Google Business' },
  { icon: Link2, label: 'Link building & authority' },
  { icon: BarChart3, label: 'Monthly reporting & analysis' },
];

function SeoSection() {
  return (
    <section id="seo" className="py-24 scroll-mt-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
              <TrendingUp size={16} className="text-secondary-purple" />
              <span className="text-sm font-semibold text-secondary-purple">Search Growth</span>
            </div>
            <h2 className="text-heading text-gray-900 mb-5">SEO</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              We help businesses climb the search rankings with technical precision, smart content strategy, and sustainable link-building.
            </p>

            <ul className="space-y-4 mb-8">
              {seoBullets.map((b) => (
                <li key={b.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0">
                    <b.icon size={20} className="text-secondary-purple" />
                  </div>
                  <span className="text-gray-700 font-medium">{b.label}</span>
                </li>
              ))}
            </ul>

            <a
              href="/book"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#C02B7D] text-white font-semibold no-underline shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Book Now <ArrowRight size={16} />
            </a>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">What We Optimise</h3>
              <div className="space-y-4">
                {[
                  { label: 'Technical SEO', desc: 'Site speed, crawlability, Core Web Vitals, structured data', pct: 92 },
                  { label: 'On-Page SEO', desc: 'Titles, meta, headings, content, internal linking', pct: 88 },
                  { label: 'Off-Page SEO', desc: 'Backlinks, citations, authority signals', pct: 76 },
                  { label: 'Local SEO', desc: 'Google Business Profile, local citations, map pack', pct: 84 },
                ].map((item) => (
                  <div key={item.label} className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold text-gray-900">{item.label}</span>
                      <span className="text-xs font-bold text-secondary-purple">{item.pct}%</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-2">{item.desc}</p>
                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#C02B7D] to-purple-400"
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   9 · GUIDED DECISION
   ═══════════════════════════════════════════════════════════════ */
const guidanceCards = [
  { label: 'I need a website', target: 'web-dev', icon: Monitor, color: 'from-purple-50 to-purple-100' },
  { label: 'I want better user experience', target: 'ui-ux', icon: Layers, color: 'from-pink-50 to-pink-100' },
  { label: 'I need branding & visuals', target: 'graphic-design', icon: Palette, color: 'from-blue-50 to-blue-100' },
  { label: 'I want online visibility', target: 'social-media', icon: Share2, color: 'from-orange-50 to-orange-100' },
  { label: 'I want to rank on Google', target: 'seo', icon: TrendingUp, color: 'from-green-50 to-green-100' },
];

function GuidedDecision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center" ref={ref}>
        <FadeIn>
          <h2 className="text-heading text-gray-900 mb-4">Not Sure What You Need?</h2>
          <p className="text-gray-600 mb-12 max-w-xl mx-auto">
            Not sure where to start? Tell us where you are and we'll point you in the right direction.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {guidanceCards.map((card, i) => (
            <motion.button
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo(card.target)}
              className={`flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br ${card.color} border border-gray-100 text-left transition-all cursor-pointer group shadow-sm hover:shadow-lg`}
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                <card.icon size={22} className="text-secondary-purple" />
              </div>
              <div className="flex-1">
                <span className="text-base font-semibold text-gray-900">{card.label}</span>
              </div>
              <ChevronRight size={18} className="text-gray-400 group-hover:text-secondary-purple transition-colors" />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

