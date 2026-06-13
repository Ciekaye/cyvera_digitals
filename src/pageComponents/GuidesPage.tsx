'use client';

import { useRef } from 'react';
import Link from 'next/link';
import FlairButton from '@/components/ui/FlairButton';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import {
  Rocket,
  Code,
  Layers,
  Palette,
  Search,
  Share2,
  Briefcase,
  ArrowRight,
} from 'lucide-react';
import GridBackground from '@/components/GridBackground';
import GuideCard from '@/components/GuideCard';
import { getSortedGuides, getGuideBySlug } from '@/data/guides';

const categories = [
  {
    icon: Rocket,
    title: 'Getting Started With Your Website',
    description:
      "Everything you need to go from \"I should probably have a website\" to a live, working site you're proud of. Domains, hosting, planning, and pre-launch checks — explained in plain English.",
  },
  {
    icon: Code,
    title: 'Web Design & Development',
    description:
      'The how and why behind great websites. Briefs, platforms, performance, accessibility, and the real cost of building something that actually drives business.',
  },
  {
    icon: Layers,
    title: 'UI/UX Strategy',
    description:
      'Design decisions that quietly move the needle. Learn how layout, flow, and small details turn casual visitors into customers.',
  },
  {
    icon: Palette,
    title: 'Branding & Identity',
    description:
      "A strong brand isn't a logo — it's a system. These guides help you shape one that's memorable, consistent, and unmistakably yours.",
  },
  {
    icon: Search,
    title: 'SEO & Discoverability',
    description:
      'Show up where your customers are already looking. Practical SEO fundamentals you can apply this week, no expensive tools required.',
  },
  {
    icon: Share2,
    title: 'Social Media & Content',
    description:
      'Move beyond vanity metrics. Build a content rhythm and social presence that creates real conversations — and real customers.',
  },
  {
    icon: Briefcase,
    title: 'The Business Side of Digital',
    description:
      'Hiring, scoping, budgeting, and maintaining. The decisions around your digital presence matter as much as the design itself.',
  },
];

export default function GuidesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const reduce = useReducedMotion();
  const guides = getSortedGuides();
  const featured = getGuideBySlug('launching-a-business-website');
  const latest = guides.filter((g) => g.slug !== featured?.slug);

  // entrance offset disabled when the user prefers reduced motion
  const fadeUp = (delay = 0) => ({
    initial: reduce ? {} : { opacity: 0, y: 30 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay },
  });

  const scrollToCategories = () => {
    document
      .getElementById('categories')
      ?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <div className="bg-modern-primary min-h-screen">
      {/* Hero */}
      <section ref={ref} className="relative pt-28 pb-12 overflow-hidden">
        <GridBackground />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div {...fadeUp()}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
              <span className="text-sm font-semibold text-secondary-purple">
                Resources
              </span>
            </div>
            <h1 className="text-display text-gray-900 mb-6 max-w-4xl mx-auto">
              Practical Guides for Building a Digital Presence That{' '}
              <span className="text-gradient-purple">Performs</span>
            </h1>
            <p
              className="text-subheading max-w-2xl mx-auto mb-8"
              style={{ color: '#535252' }}
            >
              Step-by-step playbooks on web design, branding, SEO, UX, and social
              media — written by the team behind Cyvera Digitals. No fluff, no
              jargon, just the kind of advice we'd give a client on a discovery
              call.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <button
                type="button"
                onClick={scrollToCategories}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold transition-all hover:shadow-xl hover:-translate-y-0.5"
                style={{ backgroundColor: '#C02B7D' }}
              >
                Browse the Guides <ArrowRight size={18} />
              </button>
              <FlairButton href="/contact" className="!rounded-xl">
                Book a Free Discovery Call
              </FlairButton>
            </div>
            <p className="text-sm text-gray-500">
              New here? Start with our flagship guide —{' '}
              <Link
                href="/guides/launching-a-business-website"
                className="text-secondary-purple font-semibold hover:underline"
              >
                The Complete Beginner's Guide to Launching a Business Website
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category grid */}
      <section id="categories" className="py-16 scroll-mt-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            Browse by topic
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {categories.map((cat, index) => (
              <motion.a
                key={cat.title}
                href="#all-guides"
                {...fadeUp(0.05 * index)}
                className="group p-7 card-modern shadow-md hover:shadow-xl transition-shadow duration-300 no-underline block"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: '#C02B7D' }}
                >
                  <cat.icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {cat.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured guide strip */}
      {featured && (
        <section className="py-10">
          <div className="container mx-auto px-4 lg:px-8">
            <GuideCard guide={featured} featured />
          </div>
        </section>
      )}

      {/* Latest guides grid */}
      <section id="all-guides" className="py-12 scroll-mt-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-10">
            Latest guides
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {latest.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="rounded-3xl p-10 md:p-14 text-center" style={{ backgroundColor: '#C02B7D' }}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Need help putting these guides into practice?
            </h2>
            <p className="text-white/85 max-w-2xl mx-auto mb-7">
              Whether you're launching, rebranding, or scaling — we'll help you
              turn strategy into a digital presence that performs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-gray-900 font-semibold no-underline hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Book a Free Discovery Call <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
