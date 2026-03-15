'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const router = useRouter();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    router.push('/');
  };

  return (
    <footer ref={ref} className="relative text-black pt-20 pb-8 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-accent opacity-100"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-10 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-16 mb-20">
          {/* Cyvera Logo + Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="inline-block mb-6">
              <img src='/logo.png' alt="Cyvera Digitals" className="h-24 w-auto" />
            </Link>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-black text-lg font-medium hover:text-secondary-purple transition-colors no-underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="text-black text-lg font-medium hover:text-secondary-purple transition-colors no-underline">
                  Why Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-black text-lg font-medium hover:text-secondary-purple transition-colors no-underline">
                  Portfolio
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-gray-400 text-sm font-medium mb-6 uppercase tracking-wider">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/services/website-development" className="text-black text-lg font-medium hover:text-secondary-purple transition-colors no-underline">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux-strategy" className="text-black text-lg font-medium hover:text-secondary-purple transition-colors no-underline">
                  UI & UX Strategy
                </Link>
              </li>
              <li>
                <Link href="/services/graphic-brand-design" className="text-black text-lg font-medium hover:text-secondary-purple transition-colors no-underline">
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link href="/services/social-media-management" className="text-black text-lg font-medium hover:text-secondary-purple transition-colors no-underline">
                  Social Media Management
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-gray-400 text-sm font-medium mb-6 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/resources" className="text-black text-lg font-medium hover:text-secondary-purple transition-colors no-underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-black text-lg font-medium hover:text-secondary-purple transition-colors no-underline">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-black text-lg font-medium hover:text-secondary-purple transition-colors no-underline">
                  Case Insights
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-200"
        >
          <p className="text-sm text-gray-500">© 2026 Cyvera Digitals. All rights reserved.</p>
          
          <button 
            onClick={handleScrollToTop}
            className="text-primary-purple hover:text-secondary-purple transition-colors font-medium text-sm"
          >
            Back to top
          </button>
        </motion.div>
      </div>
      
      {/* Large Logo */}
      <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
        <div className="text-[20rem] md:text-[30rem] font-bold text-primary-purple leading-none">
          Cyvera
        </div>
      </div>
    </footer>
  );
}
