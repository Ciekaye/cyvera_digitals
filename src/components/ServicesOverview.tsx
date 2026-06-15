'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Code2, PenTool, Palette, Share2, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Service {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  image: string;
  /** Extra grid-span classes that shape the bento layout (lg and up). */
  span: string;
  featured?: boolean;
}

const services: Service[] = [
  {
    title: 'Website Development',
    description: 'Websites built to convert visitors, close sales, and drive growth.',
    href: '/services/website-development',
    icon: <Code2 className="size-6" />,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=70',
    span: 'sm:col-span-2 lg:col-span-2 lg:row-span-2',
    featured: true,
  },
  {
    title: 'UI & UX Strategy',
    description: 'Intuitive, user-centered design that delights customers.',
    href: '/services/ui-ux-strategy',
    icon: <PenTool className="size-5" />,
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=70',
    span: '',
  },
  {
    title: 'Graphic & Brand Design',
    description: 'Memorable, distinctive identities designed to stand out.',
    href: '/services/graphic-brand-design',
    icon: <Palette className="size-5" />,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=70',
    span: '',
  },
  {
    title: 'Social Media Management',
    description: 'Social presence that builds community and engages customers.',
    href: '/services/social-media-management',
    icon: <Share2 className="size-5" />,
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=900&q=70',
    span: 'sm:col-span-2 lg:col-span-2',
  },
  {
    title: 'SEO',
    description: 'Data-driven optimisations that grow your organic traffic, rankings, and leads.',
    href: '/services/seo',
    icon: <TrendingUp className="size-5" />,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=70',
    span: '',
  },
];

export default function ServicesOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-12 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-display text-center text-gray-900 mb-6"
        >
          Our <span className="text-gradient-purple">Services</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-subheading text-center text-gray-600 mb-12 lg:mb-16 max-w-3xl mx-auto"
        >
          Everything your business needs to stand out online, designed, built, and managed under one roof.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 lg:auto-rows-[minmax(180px,1fr)]">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
              className={service.span}
            >
              <Link
                href={service.href}
                className={cn(
                  'group relative flex h-full min-h-[180px] flex-col justify-between overflow-hidden rounded-2xl border border-gray-200 p-6 shadow-sm outline-none transition-all duration-300 hover:-translate-y-1 hover:border-[#C02B7D]/40 hover:shadow-xl focus-visible:-translate-y-1 focus-visible:shadow-xl',
                  service.featured
                    ? 'bg-gradient-to-br from-[#1a1c25] to-[#0c0d12] border-white/10 text-white'
                    : 'bg-white'
                )}
              >
                {/* Depth layer 1 — faint background image that parallax-scales on hover */}
                <img
                  src={service.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className={cn(
                    'pointer-events-none absolute inset-0 h-full w-full object-cover grayscale transition-[transform,opacity,filter] duration-[900ms] ease-out group-hover:scale-110 group-hover:grayscale-0',
                    service.featured ? 'opacity-60 grayscale-0 group-hover:opacity-80' : 'opacity-45 group-hover:opacity-70'
                  )}
                />

                {/* Depth layer 2 — gradient scrim keeps text readable and adds vignette depth */}
                <div
                  aria-hidden="true"
                  className={cn(
                    'pointer-events-none absolute inset-0',
                    service.featured
                      ? 'bg-gradient-to-t from-[#0c0d12] via-[#0c0d12]/60 to-transparent'
                      : 'bg-gradient-to-t from-white via-white/75 to-white/25'
                  )}
                />

                {/* Icon */}
                <span
                  className="relative z-10 inline-flex w-fit items-center justify-center rounded-xl bg-[#C02B7D] p-2.5 text-white shadow-sm transition-transform duration-300 group-hover:scale-110"
                >
                  {service.icon}
                </span>

                {/* Title + description */}
                <div className="relative z-10 mt-4">
                  <h3
                    className={cn(
                      'font-bold tracking-tight text-gray-900',
                      service.featured ? 'text-2xl lg:text-3xl text-white' : 'text-lg lg:text-xl'
                    )}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={cn(
                      'mt-2 leading-relaxed text-gray-500',
                      service.featured ? 'text-base max-w-md text-white/80' : 'text-sm'
                    )}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Arrow affordance */}
                <ArrowUpRight
                  className={cn(
                    'absolute right-5 top-5 z-10 h-5 w-5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5',
                    service.featured
                      ? 'text-white/60 group-hover:text-white'
                      : 'text-gray-300 group-hover:text-[#C02B7D]'
                  )}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
