'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ServiceCard } from '@/components/ui/card-22';

export default function ServicesOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Website Development",
      description: "Websites built to convert visitors, close sales, and drive growth.",
      href: "/services/website-development",
      images: [
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      tags: ["Development", "Innovation"],
      rating: 4.9
    },
    {
      title: "UI & UX Strategy",
      description: "Intuitive, user-centered design that delights customers and drives real growth.",
      href: "/services/ui-ux-strategy",
      images: [
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2036&q=80"
      ],
      tags: ["UX/UI", "Strategy"],
      rating: 4.9
    },
    {
      title: "Graphic & Brand Design",
      description: "Memorable, distinctive identities designed to stand out and drive growth.",
      href: "/services/graphic-brand-design",
      images: [
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
        "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      tags: ["Design", "Branding"],
      rating: 4.8
    },
    {
      title: "Social Media Management",
      description: "Social presence that builds community, engages customers, and drives growth.",
      href: "/services/social-media-management",
      images: [
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
        "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      tags: ["Social Media", "Marketing"],
      rating: 4.7
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
          Everything your business needs to stand out online, designed, built, and managed under one roof.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              images={service.images}
              tags={service.tags}
              rating={service.rating}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
