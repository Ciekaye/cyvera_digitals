'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

export default function PricingPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and personal brands getting started online.",
      price: "499",
      features: [
        "Custom one-page website",
        "Mobile responsive design",
        "Basic SEO setup",
        "Contact form integration",
        "1 round of revisions",
        "2 weeks delivery",
      ],
      highlighted: false,
    },
    {
      name: "Growth",
      description: "Ideal for growing brands that need a complete digital presence.",
      price: "999",
      features: [
        "Multi-page custom website",
        "UI/UX strategy & wireframes",
        "Advanced SEO optimization",
        "Social media starter kit",
        "Brand identity package",
        "3 rounds of revisions",
        "Priority support (30 days)",
        "4 weeks delivery",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      description: "Full-scale digital solutions for established businesses ready to scale.",
      price: "Custom",
      features: [
        "Full web application development",
        "Custom UI/UX design system",
        "E-commerce or SaaS integration",
        "Social media management",
        "Ongoing maintenance & support",
        "Dedicated project manager",
        "Unlimited revisions",
        "Custom timeline",
      ],
      highlighted: false,
    },
  ];

  return (
    <section ref={ref} className="relative py-24 bg-modern-primary min-h-screen overflow-hidden">
      {/* Homepage wave background */}
      <div className="absolute inset-0 w-full h-full">
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 600"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          style={{ minHeight: '100%' }}
        >
          <defs>
            <linearGradient id="pricing-wave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e879f9" stopOpacity="0.55" />
              <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="pricing-wave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f0abfc" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#c4b5fd" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.45" />
            </linearGradient>
            <linearGradient id="pricing-wave3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d946ef" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#818cf8" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.3" />
            </linearGradient>
            <filter id="pricing-blur-wave">
              <feGaussianBlur stdDeviation="8" />
            </filter>
          </defs>

          {/* Back wave - blurred, lightest */}
          <path filter="url(#pricing-blur-wave)" fill="url(#pricing-wave3)" opacity="0.7">
            <animate
              attributeName="d"
              dur="9s"
              repeatCount="indefinite"
              values="
                M0,320 C200,200 400,420 600,300 C800,180 1000,380 1200,280 C1350,200 1420,320 1440,300 L1440,600 L0,600 Z;
                M0,360 C180,260 380,440 620,320 C820,210 1020,400 1240,300 C1370,230 1420,340 1440,320 L1440,600 L0,600 Z;
                M0,320 C200,200 400,420 600,300 C800,180 1000,380 1200,280 C1350,200 1420,320 1440,300 L1440,600 L0,600 Z
              "
            />
          </path>

          {/* Mid wave */}
          <path fill="url(#pricing-wave2)" opacity="0.85">
            <animate
              attributeName="d"
              dur="7s"
              repeatCount="indefinite"
              values="
                M0,380 C160,280 360,460 580,350 C760,250 980,430 1180,330 C1340,250 1410,360 1440,340 L1440,600 L0,600 Z;
                M0,340 C200,240 380,480 600,360 C800,260 1000,450 1220,340 C1360,270 1420,370 1440,350 L1440,600 L0,600 Z;
                M0,380 C160,280 360,460 580,350 C760,250 980,430 1180,330 C1340,250 1410,360 1440,340 L1440,600 L0,600 Z
              "
            />
          </path>

          {/* Front wave - sharpest, most vivid */}
          <path fill="url(#pricing-wave1)" opacity="0.9">
            <animate
              attributeName="d"
              dur="5.5s"
              repeatCount="indefinite"
              values="
                M0,420 C180,320 360,500 580,400 C760,310 960,480 1180,380 C1340,300 1410,400 1440,380 L1440,600 L0,600 Z;
                M0,400 C200,300 380,520 600,410 C800,320 980,500 1200,390 C1360,320 1420,410 1440,390 L1440,600 L0,600 Z;
                M0,420 C180,320 360,500 580,400 C760,310 960,480 1180,380 C1340,300 1410,400 1440,380 L1440,600 L0,600 Z
              "
            />
          </path>

          {/* Fine line details */}
          <path fill="none" stroke="#e879f9" strokeWidth="1.2" opacity="0.35">
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
                M0,440 C200,360 400,500 620,420 C820,340 1020,490 1240,400 C1370,340 1420,420 1440,400;
                M0,420 C220,340 420,520 640,430 C840,350 1040,510 1260,410 C1380,350 1420,430 1440,415;
                M0,440 C200,360 400,500 620,420 C820,340 1020,490 1240,400 C1370,340 1420,420 1440,400
              "
            />
          </path>
          <path fill="none" stroke="#a78bfa" strokeWidth="1" opacity="0.3">
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="
                M0,460 C180,380 380,520 600,440 C800,360 1000,510 1220,420 C1360,360 1420,440 1440,425;
                M0,445 C200,365 400,540 620,450 C820,370 1020,530 1240,435 C1370,370 1420,450 1440,435;
                M0,460 C180,380 380,520 600,440 C800,360 1000,510 1220,420 C1360,360 1420,440 1440,425
              "
            />
          </path>
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
            <Sparkles size={16} className="text-secondary-purple" />
            <span className="text-sm font-semibold text-secondary-purple">Simple & Transparent</span>
          </div>
          <h1 className="text-display text-gray-900 mb-6">
            Pricing That Fits Your <span className="text-gradient-purple">Business</span>
          </h1>
          <p className="text-subheading max-w-2xl mx-auto" style={{ color: '#535252' }}>
            Choose the plan that works best for your goals. Every plan includes quality design,
            clean code, and dedicated support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              whileHover={{ y: -8 }}
              className={`relative p-8 rounded-2xl transition-all card-liquid-glass ${
                plan.highlighted
                  ? 'scale-[1.02] ring-2 ring-purple-200/50'
                  : ''
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-primary shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">{plan.description}</p>

              <div className="mb-8">
                {plan.price === "Custom" ? (
                  <span className="text-4xl font-bold text-gray-900">Custom</span>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-medium text-gray-500">$</span>
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500 text-sm ml-1">/ project</span>
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-gray-700">
                    <Check size={18} className="text-secondary-purple flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all no-underline ${
                  plan.highlighted
                    ? 'text-white hover:shadow-xl hover:-translate-y-0.5'
                    : 'border-2 border-gray-200 text-gray-700 hover:border-purple-300 hover:text-purple-700'
                }`}
                style={plan.highlighted ? { background: 'var(--gradient-primary)', boxShadow: '0 4px 20px rgba(123, 25, 231, 0.35)' } : {}}
              >
                {plan.price === "Custom" ? "Contact Us" : "Get Started"}
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-sm text-gray-600 mt-12"
        >
          All prices are starting points. Final pricing depends on project scope and requirements.
        </motion.p>
      </div>
    </section>
  );
}
