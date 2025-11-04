import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { SmoothScrollLink } from './SmoothScrollButton';
import { useSmoothScrollContext } from './SmoothScrollProvider';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollToTop } = useSmoothScrollContext();

  const navItems = [
    { label: 'About', targetId: 'difference' },
    { label: 'Why Us', targetId: 'difference' },
    { label: 'Works', targetId: 'tech-expertise' },
    { label: 'Services', targetId: 'services' },
    { label: 'Testimonials', targetId: 'testimonials' }
  ];

  const handleLogoClick = () => {
    scrollToTop({ duration: 1.2 });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md"
    >
      <nav className="container mx-auto px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            onClick={handleLogoClick}
            className="text-2xl font-bold text-gradient-purple hover:opacity-80 transition-opacity cursor-pointer"
          >
            Cyvera.
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <SmoothScrollLink
                  targetId={item.targetId}
                  className="relative text-gray-700 hover:text-gray-900 transition-colors font-medium text-decoration-none group"
                  duration={1200}
                  offset={80}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                </SmoothScrollLink>
              </motion.div>
            ))}
          </div>

          {/* Contact Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="hidden lg:block px-6 py-2 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            Contact
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-6 pb-6 flex flex-col gap-4"
          >
            {navItems.map((item) => (
              <SmoothScrollLink
                key={item.label}
                targetId={item.targetId}
                className="relative text-gray-700 hover:text-gray-900 transition-colors font-medium text-decoration-none group inline-block"
                duration={1200}
                offset={80}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
              </SmoothScrollLink>
            ))}
            <button className="mt-2 px-6 py-2 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors w-fit">
              Contact
            </button>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
