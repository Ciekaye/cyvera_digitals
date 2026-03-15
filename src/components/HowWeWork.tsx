'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

export default function HowWeWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Discovery",
      description: "We learn about your business, goals, and target audience.",
    },
    {
      icon: PenTool,
      number: "02",
      title: "Design",
      description: "We create structured layouts and visuals focused on user experience.",
    },
    {
      icon: Code,
      number: "03",
      title: "Development",
      description: "We build, optimize, and test your digital solution.",
    },
    {
      icon: Rocket,
      number: "04",
      title: "Launch & Support",
      description: "We launch your project and provide ongoing support when needed.",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-modern-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-display text-center text-gray-900 mb-6"
        >
          How We Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-subheading text-center text-gray-600 mb-16 max-w-2xl mx-auto"
        >
          A streamlined process built for clarity and results
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-40px)] h-px bg-gradient-to-r from-purple-200 to-transparent z-0" />
              )}

              <div className="relative z-10 text-center">
                <div className="relative mx-auto mb-6">
                  <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-lg">
                    <step.icon className="w-9 h-9 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border-2 border-purple-200 flex items-center justify-center text-xs font-bold text-secondary-purple shadow-sm">
                    {step.number}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed max-w-[220px] mx-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
