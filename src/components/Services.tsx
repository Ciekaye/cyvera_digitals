'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ServiceCard } from '@/components/ui/card-22';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Website Development",
      description: "Custom websites, web applications, and mobile apps built with cutting-edge technologies.",
      features: ["React & Next.js", "Node.js & Laravel", "Mobile Apps", "E-commerce", "API Development"],
      images: [
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      tags: ["Development", "Innovation"],
      rating: 4.9
    },
    {
      title: "Graphic & Brand Design",
      description: "Beautiful, conversion-focused designs that put users first. From brand identity to product interfaces.",
      features: ["UI/UX Design", "Brand Identity", "Design Systems", "Prototyping", "User Research"],
      images: [
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80"
      ],
      tags: ["Design", "Branding"],
      rating: 4.8
    },
    {
      title: "UI & UX Strategy",
      description: "User-focused design solutions that improve engagement, usability, and conversion rates across all your digital products.",
      features: ["User Research", "Wireframing", "Design Systems", "Usability Testing", "Conversion Optimization"],
      images: [
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      tags: ["UX/UI", "Strategy"],
      rating: 4.9
    },
    {
      title: "Social Media Management",
      description: "Content creation and account management to help your brand stay active, visible, and engaging across all major platforms.",
      features: ["Content Planning", "Graphic Design", "Community Management", "Analytics", "Growth Strategy"],
      images: [
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
      ],
      tags: ["Social Media", "Marketing"],
      rating: 4.7
    }
  ];

  return (
    <section ref={ref} className="pt-0 pb-24 bg-white">
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
          Comprehensive digital solutions tailored to your unique needs
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              images={service.images}
              tags={service.tags}
              rating={service.rating}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
