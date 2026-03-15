'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Code, Layers, Palette, Share2, ArrowRight } from 'lucide-react';

export default function ServicesOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Modern, fast, and scalable websites built for performance and growth.",
      link: "/services/website-development",
    },
    {
      icon: Layers,
      title: "UI & UX Strategy",
      description: "User-focused design solutions that improve usability and engagement.",
      link: "/services/ui-ux-strategy",
    },
    {
      icon: Palette,
      title: "Graphic & Brand Design",
      description: "Visual identities and design assets that communicate your brand clearly.",
      link: "/services/graphic-brand-design",
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Content creation and management to keep your brand visible and consistent.",
      link: "/services/social-media-management",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-display text-center text-gray-900 mb-6"
        >
          Our Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-subheading text-center text-gray-600 mb-16 max-w-3xl mx-auto"
        >
          We offer end-to-end digital services designed to help your business stand out,
          connect with your audience, and grow online.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="card-liquid-glass p-7 group cursor-pointer"
            >
              <div className="w-[52px] h-[52px] bg-gradient-primary rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">{service.description}</p>
              <Link
                href={service.link}
                className="inline-flex items-center gap-1 text-sm font-semibold text-secondary-purple group-hover:gap-2 transition-all no-underline"
              >
                Learn more <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
