'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Target, Gem, MessageCircle, TrendingUp, ArrowRight } from 'lucide-react';

export default function WhyUsPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const points = [
    {
      step: "01",
      icon: Target,
      title: "Results-Driven Approach",
      description: "We focus on building digital solutions that support real business goals, not just visual appeal.",
    },
    {
      step: "02",
      icon: Gem,
      title: "Modern & Clean Design",
      description: "Our designs follow current best practices for performance, accessibility, and user experience.",
    },
    {
      step: "03",
      icon: MessageCircle,
      title: "Clear Communication",
      description: "We believe in transparency, collaboration, and keeping you informed throughout the process.",
    },
    {
      step: "04",
      icon: TrendingUp,
      title: "Built for Growth",
      description: "Every project is designed with scalability in mind, so your digital presence can grow with your business.",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-display text-center text-gray-900 mb-16"
        >
          Why Choose <span className="text-gradient-purple">Cyvera Digitals</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {points.map((point, index) => (
            <motion.div
              key={point.step}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.12 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="card-liquid-glass p-7 rounded-2xl text-center"
            >
              <span className="inline-block text-4xl font-bold text-gradient-purple mb-4">{point.step}</span>
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-5 mx-auto">
                <point.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{point.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <Link
            href="/why-us"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-gray-200 text-gray-700 font-semibold hover:border-purple-300 hover:text-purple-700 transition-all no-underline"
          >
            Learn More About Us
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
