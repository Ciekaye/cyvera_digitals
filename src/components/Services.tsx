'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, TrendingUp, Share2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Custom websites, web applications, and mobile apps built with cutting-edge technologies. From MVP to enterprise scale, we architect solutions that grow with your business.",
      features: ["React & Next.js", "Node.js & Laravel", "Mobile Apps", "E-commerce", "API Development"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      link: "/services/website-development"
    },
    {
      icon: Palette,
      title: "Graphic & Brand Design",
      description: "Beautiful, conversion-focused designs that put users first. From brand identity to product interfaces, we create digital experiences that engage and delight.",
      features: ["UI/UX Design", "Brand Identity", "Design Systems", "Prototyping", "User Research"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
      link: "/services/graphic-brand-design"
    },
    {
      icon: TrendingUp,
      title: "UI & UX Strategy",
      description: "User-focused design solutions that improve engagement, usability, and conversion rates across all your digital products.",
      features: ["User Research", "Wireframing", "Design Systems", "Usability Testing", "Conversion Optimization"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      link: "/services/ui-ux-strategy"
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Content creation and account management to help your brand stay active, visible, and engaging across all major platforms.",
      features: ["Content Planning", "Graphic Design", "Community Management", "Analytics", "Growth Strategy"],
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
      link: "/services/social-media-management"
    }
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
          Comprehensive digital solutions tailored to your unique needs
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group card-modern shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            >
              {/* Service Image */}
              <div className="aspect-video overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-secondary-purple rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>

                <Link href={service.link} className="group/btn inline-flex items-center gap-2 text-secondary-purple font-semibold hover:gap-3 transition-all no-underline">
                  Discover More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
