import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useSmoothScrollContext } from './SmoothScrollProvider';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollToTop } = useSmoothScrollContext();

  const handleScrollToTop = () => {
    scrollToTop({ duration: 1.2 });
  };

  const navigationLinks = [
    'About',
    'Works', 
    'Services',
    'Blog'
  ];

  const socialLinks = [
    'Twitter(X)',
    'LinkedIn',
    'Dribbble'
  ];

  const legalLinks = [
    'Privacy Policy',
    'Term of Service'
  ];

  return (
    <footer ref={ref} className="relative bg-black text-white pt-20 pb-8 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-purple-700 to-black opacity-95"></div>
      
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-16 mb-20">
          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-gray-400 text-sm font-medium mb-6 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-4">
              {navigationLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white text-lg font-medium hover:text-gray-300 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-gray-400 text-sm font-medium mb-6 uppercase tracking-wider">Social</h4>
            <ul className="space-y-4">
              {socialLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white text-lg font-medium hover:text-gray-300 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-gray-400 text-sm font-medium mb-6 uppercase tracking-wider">Legals</h4>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white text-lg font-medium hover:text-gray-300 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-gray-400">
            <p>© 2025 Cyvera. All rights reserved.</p>
            <p>London → 04:02:30</p>
          </div>
          
          <button 
            onClick={handleScrollToTop}
            className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
          >
            Back to top
          </button>
        </motion.div>
      </div>
      
      {/* Large Logo */}
      <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
        <div className="text-[20rem] md:text-[30rem] font-bold text-white leading-none">
          Cyvera
        </div>
      </div>
    </footer>
  );
}
