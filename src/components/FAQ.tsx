'use client';

import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Plus, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

const faqs = [
  {
    question: 'How much does a website cost?',
    answer:
      "Our website projects start at $250 and scale with the size and complexity of your build. Each plan covers a common scope — head to our Pricing page for the details, or reach out and we'll give you an accurate quote with no obligation.",
  },
  {
    question: 'How long does a project take?',
    answer:
      'Timelines depend on scope. A simple starter site can be ready in about 1–2 weeks, while larger, fully custom builds take longer. We agree on a clear timeline together during the discovery phase before any work begins.',
  },
  {
    question: 'Do you offer revisions?',
    answer:
      'Yes. Every plan includes a free revision window (1–2 weeks depending on the plan) so we can fine-tune the details. Beyond that, extra revisions and requests are available at an $8/hr add-on rate.',
  },
  {
    question: 'What services do you offer?',
    answer:
      'We handle web development, WordPress development, UI/UX design, graphic and brand design, social media management, SEO, and high-converting lead-generation funnels — everything you need to build, design, and grow online.',
  },
  {
    question: 'Do you provide ongoing maintenance?',
    answer:
      'Yes. Maintenance is available as an add-on on most plans and is included with Enterprise. We can keep your site updated, secure, and running smoothly after launch.',
  },
  {
    question: 'Do you work with clients worldwide?',
    answer:
      "Absolutely. We work with businesses anywhere — the entire process runs online, from discovery to launch, so location is never a barrier.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={ref} className="py-12 lg:py-24 bg-modern-primary">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        }}
      />
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-left lg:sticky lg:top-28 self-start"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
            <span className="text-sm font-semibold text-secondary-purple">FAQ</span>
          </div>
          <h2 className="text-display text-gray-900 mb-6">
            Frequently Asked <span className="text-gradient-purple">Questions</span>
          </h2>
          <p className="text-subheading text-gray-600 max-w-md mb-8">
            Everything you need to know before we get started. Still have a
            question? Just reach out.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm text-white no-underline transition-all hover:shadow-xl hover:-translate-y-0.5"
            style={{ backgroundColor: '#C02B7D', boxShadow: '0 4px 20px rgba(192, 43, 125, 0.35)' }}
          >
            Contact us
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
                className={`card-modern overflow-hidden transition-colors ${
                  isOpen ? 'ring-1 ring-purple-200/70' : ''
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 focus:outline-none"
                >
                  <span className="text-base md:text-lg font-bold text-gray-900">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: '#C02B7D' }}
                  >
                    <Plus size={18} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}
