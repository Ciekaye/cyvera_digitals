'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import GridBackground from '@/components/GridBackground';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    projectType: '',
    projectDetails: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Your inquiry has been submitted successfully! We\'ll be in touch within 1-2 business days.');
        setFormData({
          fullName: '',
          businessName: '',
          email: '',
          projectType: '',
          projectDetails: '',
        });
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setSubmitMessage(data.error || 'Failed to submit your inquiry. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setSubmitMessage('An error occurred while submitting your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="relative py-24 bg-modern-primary min-h-screen overflow-hidden">
      <GridBackground />
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
          <path fill="url(#contact-wave3)" opacity="0.7" d="M0,320 C200,200 400,420 600,300 C800,180 1000,380 1200,280 C1350,200 1420,320 1440,300 L1440,600 L0,600 Z" />

          {/* Mid wave */}
          <path fill="url(#contact-wave2)" opacity="0.85" d="M0,380 C160,280 360,460 580,350 C760,250 980,430 1180,330 C1340,250 1410,360 1440,340 L1440,600 L0,600 Z" />

          {/* Front wave - sharpest, most vivid */}
          <path fill="url(#contact-wave1)" opacity="0.9" d="M0,420 C180,320 360,500 580,400 C760,310 960,480 1180,380 C1340,300 1410,400 1440,380 L1440,600 L0,600 Z" />

          {/* Fine line details */}
          <path fill="none" stroke="#e879f9" strokeWidth="1.2" opacity="0.35" d="M0,440 C200,360 400,500 620,420 C820,340 1020,490 1240,400 C1370,340 1420,420 1440,400" />
          <path fill="none" stroke="#a78bfa" strokeWidth="1" opacity="0.3" d="M0,460 C180,380 380,520 600,440 C800,360 1000,510 1220,420 C1360,360 1420,440 1440,425" />
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
            Let&apos;s Talk About Your Next Build
          </p>
          <h2 className="text-heading text-gray-900 mb-4">
            Ready to Build, Design, and Grow?
          </h2>
          <p className="text-lg text-gray-600">
            Whether you need a new platform, a brand refresh, or ongoing growth support, this is where it starts.
            Tell us where you are now, and where you want to be &mdash; we&apos;ll map the steps in between.
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
              <p className="text-lg text-gray-800 mb-6">
                Prefer to reach us directly? We&apos;re just a message away.
              </p>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://wa.me/639763775135"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#25D366' }}>
                      <svg role="img" viewBox="0 0 24 24" width="18" height="18" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </span>
                    <span>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">WhatsApp</p>
                      <p className="text-sm font-medium text-gray-900 group-hover:text-secondary-purple transition-colors">+63 976 377 5135</p>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="viber://chat?number=639763775135"
                    className="flex items-center gap-3 group"
                  >
                    <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#7360F2' }}>
                      <svg role="img" viewBox="0 0 24 24" width="18" height="18" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.696 6.7.633 9.817.57 12.933.488 18.776 6.12 20.36h.003l-.004 2.416s-.037.977.61 1.177c.777.242 1.234-.5 1.98-1.302.407-.44.972-1.084 1.397-1.58 3.85.326 6.812-.416 7.15-.525.776-.252 5.176-.816 5.892-6.657.74-6.02-.36-9.83-2.34-11.546-.596-.55-3.006-2.3-8.375-2.323 0 0-.395-.025-1.037-.017zm.058 1.693c.545-.004.88.017.88.017 4.542.02 6.717 1.388 7.222 1.846 1.675 1.435 2.53 4.868 1.906 9.897v.002c-.604 4.878-4.174 5.184-4.832 5.395-.28.09-2.882.737-6.153.524 0 0-2.436 2.94-3.197 3.704-.12.12-.26.167-.352.144-.13-.033-.166-.188-.165-.414l.02-4.018c-4.762-1.32-4.485-6.292-4.43-8.895.054-2.604.543-4.738 1.996-6.173 1.96-1.773 5.474-2.018 7.11-2.03zm.38 2.602c-.167 0-.303.135-.304.302 0 .167.133.303.3.305 1.624.01 2.946.537 4.028 1.592 1.073 1.046 1.62 2.468 1.633 4.334.002.167.14.3.307.3.166-.002.3-.138.3-.304-.014-1.984-.618-3.596-1.816-4.764-1.19-1.16-2.692-1.753-4.447-1.765zm-3.96.695c-.19-.032-.4.005-.616.117l-.01.002c-.43.247-.816.562-1.146.932-.002.004-.006.004-.008.008-.267.323-.42.638-.46.948-.008.046-.01.093-.007.14 0 .136.022.27.065.4l.013.01c.135.48.473 1.276 1.205 2.604.42.768.903 1.5 1.446 2.186.27.344.56.673.87.984l.132.132c.31.308.64.6.984.87.686.543 1.418 1.027 2.186 1.447 1.328.733 2.126 1.07 2.604 1.206l.01.014c.13.042.265.064.402.063.046.002.092 0 .138-.008.31-.036.627-.19.948-.46.004 0 .003-.002.008-.005.37-.33.683-.72.93-1.148l.003-.01c.225-.432.15-.842-.18-1.12-.004 0-.698-.58-1.037-.83-.36-.255-.73-.492-1.113-.71-.51-.285-1.032-.106-1.248.174l-.447.564c-.23.283-.657.246-.657.246-3.12-.796-3.955-3.955-3.955-3.955s-.037-.426.248-.656l.563-.448c.277-.215.456-.737.17-1.248-.217-.383-.454-.756-.71-1.115-.25-.34-.826-1.033-.83-1.035-.137-.165-.31-.265-.502-.297zm4.49.88c-.158.002-.29.124-.3.282-.01.167.115.312.282.324 1.16.085 2.017.466 2.645 1.15.63.688.93 1.524.906 2.57-.002.168.13.306.3.31.166.003.305-.13.31-.297.025-1.175-.334-2.193-1.067-2.994-.74-.81-1.777-1.253-3.05-1.346h-.024zm.463 1.63c-.16.002-.29.127-.3.287-.008.167.12.31.288.32.523.028.875.175 1.113.422.24.245.388.62.416 1.164.01.167.15.295.318.287.167-.008.295-.15.287-.317-.03-.644-.215-1.178-.58-1.557-.367-.378-.893-.574-1.52-.607h-.018z" />
                      </svg>
                    </span>
                    <span>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Viber</p>
                      <p className="text-sm font-medium text-gray-900 group-hover:text-secondary-purple transition-colors">+63 976 377 5135</p>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@cyveradigitals.com"
                    className="flex items-center gap-3 group"
                  >
                    <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#EA4335' }}>
                      <svg role="img" viewBox="0 0 24 24" width="18" height="18" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                      </svg>
                    </span>
                    <span>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Email</p>
                      <p className="text-sm font-medium text-gray-900 group-hover:text-secondary-purple transition-colors">info@cyveradigitals.com</p>
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <p className="text-sm font-semibold tracking-wide uppercase text-gray-500 mb-2">
                Prefer updates in your inbox?
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email for updates"
                  className="flex-1 px-4 py-3 rounded-full border-2 bg-white/90 focus:outline-none focus:ring-2 focus:ring-secondary-purple text-sm"
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
            onSubmit={handleSubmit}
          >
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm">
                ✓ {submitMessage}
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                ✕ {submitMessage}
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-purple text-sm"
                  placeholder="Alex Rivera"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Business / Brand</label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-purple text-sm"
                  placeholder="CYVERA Digitals"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-purple text-sm"
                  placeholder="you@example.com"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-purple text-sm bg-white"
                  disabled={isSubmitting}
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option value="web-app">Web / App Development</option>
                  <option value="wordpress">WordPress Web Development</option>
                  <option value="design">Graphic / UI&UX Design</option>
                  <option value="smm">Social Media Management</option>
                  <option value="other">Other / Not sure yet</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tell us about your project</label>
              <textarea
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-purple text-sm min-h-[140px]"
                placeholder="Share your goals, challenges, and timelines. The more context, the better we can help."
                disabled={isSubmitting}
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-xs text-gray-500">
                We&apos;ll get back to you within 1-2 business day(s). No spam. No pushy sales.
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-gradient-primary text-sm font-semibold px-6 py-3 rounded-full inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
