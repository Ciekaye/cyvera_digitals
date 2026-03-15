'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" ref={ref} className="relative py-24 bg-modern-primary min-h-screen overflow-hidden">
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
            <linearGradient id="contact-wave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e879f9" stopOpacity="0.55" />
              <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="contact-wave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f0abfc" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#c4b5fd" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.45" />
            </linearGradient>
            <linearGradient id="contact-wave3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d946ef" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#818cf8" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.3" />
            </linearGradient>
            <filter id="contact-blur-wave">
              <feGaussianBlur stdDeviation="8" />
            </filter>
          </defs>

          {/* Back wave - blurred, lightest */}
          <path filter="url(#contact-blur-wave)" fill="url(#contact-wave3)" opacity="0.7">
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
          <path fill="url(#contact-wave2)" opacity="0.85">
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
          <path fill="url(#contact-wave1)" opacity="0.9">
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

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {} }
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-12"
        >
          <p className="text-secondary-purple font-semibold text-lg mb-2">
            Lets Talk About Your Next Build
          </p>
          <h2 className="text-heading text-gray-900 mb-4">
            Ready to Build, Design, and Grow?
          </h2>
          <p className="text-lg text-gray-600">
            Whether you need a new platform, a brand refresh, or ongoing growth support, this is where it starts.
            Tell us where you are now, and where you want to be  well map the steps in between.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {} }
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm font-semibold tracking-wide uppercase text-gray-500 mb-2">
                Contact Info
              </p>
              <p className="text-lg text-gray-800 mb-4">
                Prefer WhatsApp, Viber, or email? Plug in your official details here when youre ready.
              </p>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li>
                  <span className="font-semibold text-gray-900">WhatsApp Business:</span>{' '}
                  <span className="text-gray-700">(Add WA number here)</span>
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Viber Business:</span>{' '}
                  <span className="text-gray-700">(Add Viber number here)</span>
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Email:</span>{' '}
                  <span className="text-gray-700">(Add official email here)</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <p className="text-sm font-semibold tracking-wide uppercase text-gray-500 mb-2">
                Prefer updates in your inbox?
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email for updates"
                  className="flex-1 px-4 py-3 rounded-full border-2 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-secondary-purple text-sm"
                  style={{ 
                    backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #e879f9, #a78bfa, #60a5fa)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                    border: '2px solid transparent'
                  }}
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-gradient-primary text-white text-sm font-semibold hover:shadow-lg transition-all"
                  style={{ boxShadow: '0 4px 20px rgba(123, 25, 231, 0.35)' }}
                >
                  Join Newsletter
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {} }
            transition={{ duration: 0.8, delay: 0.3 }}
            className="card-liquid-glass rounded-3xl p-8 space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-purple text-sm"
                  placeholder="Alex Rivera"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Business / Brand</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-purple text-sm"
                  placeholder="CYVERA Digitals"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-purple text-sm"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
                <select
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-purple text-sm bg-white"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option value="web-app">Web / App Development</option>
                  <option value="design">Graphics / UI-UX Design</option>
                  <option value="va-growth">VA + Growth Support</option>
                  <option value="other">Other / Not sure yet</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tell us about your project</label>
              <textarea
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-purple text-sm min-h-[140px]"
                placeholder="Share your goals, challenges, and timelines. The more context, the better we can help."
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-xs text-gray-500">
                Well get back to you within 12 business day(s). No spam. No pushy sales.
              </p>
              <button
                type="submit"
                className="btn-gradient-primary text-sm font-semibold px-6 py-3 rounded-full inline-flex items-center justify-center"
              >
                Submit Inquiry
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
