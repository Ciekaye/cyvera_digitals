import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
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
                  className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-purple text-sm"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-primary-purple text-white text-sm font-semibold hover:bg-secondary-purple transition-colors"
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
            className="bg-white rounded-3xl shadow-xl p-8 space-y-6 border border-gray-100"
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
