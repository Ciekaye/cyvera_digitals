'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, Layers, Palette, Share2 } from 'lucide-react';
import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const serviceSubPages = [
  { label: 'Website Development', path: '/services/website-development', icon: Code },
  { label: 'UI & UX Strategy', path: '/services/ui-ux-strategy', icon: Layers },
  { label: 'Graphic & Brand Design', path: '/services/graphic-brand-design', icon: Palette },
  { label: 'Social Media Management', path: '/services/social-media-management', icon: Share2 },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Why Us', path: '/why-us' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Pricing', path: '/pricing' }
  ];

  const handleServicesEnter = () => {
    if (servicesTimeout.current) clearTimeout(servicesTimeout.current);
    setIsServicesOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeout.current = setTimeout(() => setIsServicesOpen(false), 150);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 left-0 right-0 z-50 bg-white/95 shadow-sm"
    >
      <nav className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/" className="flex items-center gap-2 cursor-pointer">
              <Image
                src='/logo.png'
                alt="Cyvera Digitals logo"
                width={200}
                height={96}
                style={{ width: 'auto', height: '6rem' }}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => {
              if (item.label === 'Services') {
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="relative"
                    onMouseEnter={handleServicesEnter}
                    onMouseLeave={handleServicesLeave}
                  >
                    <Link
                      href={item.path}
                      className={`relative text-gray-700 hover:text-gray-900 transition-colors font-medium no-underline group ${
                        (pathname ?? '').startsWith('/services') ? 'text-gray-900' : ''
                      }`}
                    >
                      {item.label}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-gray-900 transition-all duration-300 ${
                          (pathname ?? '').startsWith('/services') ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      ></span>
                    </Link>

                    {/* Dropdown */}
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                        >
                          <div className="w-72 bg-white rounded-2xl shadow-xl border border-gray-100 p-3">
                            {serviceSubPages.map((sub) => (
                              <Link
                                key={sub.path}
                                href={sub.path}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all no-underline ${
                                  (pathname ?? '') === sub.path
                                    ? 'bg-purple-50 text-secondary-purple'
                                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                              >
                                <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                                  (pathname ?? '') === sub.path
                                    ? 'bg-gradient-primary'
                                    : 'bg-gray-100 group-hover:bg-gray-200'
                                }`}>
                                  <sub.icon size={18} className={(pathname ?? '') === sub.path ? 'text-white' : 'text-gray-500'} />
                                </div>
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={item.path}
                    className={`relative text-gray-700 hover:text-gray-900 transition-colors font-medium no-underline group ${
                      (pathname ?? '') === item.path ? 'text-gray-900' : ''
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-gray-900 transition-all duration-300 ${
                        (pathname ?? '') === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    ></span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="hidden lg:block"
          >
            <Link
              href="/contact"
              className="px-6 py-2 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors no-underline"
            >
              Contact Us
            </Link>
          </motion.div>

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
            {navItems.map((item) => {
              if (item.label === 'Services') {
                return (
                  <div key={item.label}>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={`relative text-gray-700 hover:text-gray-900 transition-colors font-medium group inline-flex items-center gap-1 ${
                        (pathname ?? '').startsWith('/services') ? 'text-gray-900' : ''
                      }`}
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileServicesOpen && (
                      <div className="ml-4 mt-2 flex flex-col gap-2">
                        <Link
                          href="/services"
                          onClick={() => setIsMenuOpen(false)}
                          className="text-sm text-gray-600 hover:text-gray-900 font-medium no-underline"
                        >
                          All Services
                        </Link>
                        {serviceSubPages.map((sub) => (
                          <Link
                            key={sub.path}
                            href={sub.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={`flex items-center gap-2 text-sm font-medium no-underline ${
                              (pathname ?? '') === sub.path
                                ? 'text-secondary-purple'
                                : 'text-gray-600 hover:text-gray-900'
                            }`}
                          >
                            <sub.icon size={14} />
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`relative text-gray-700 hover:text-gray-900 transition-colors font-medium no-underline group inline-block ${
                    (pathname ?? '') === item.path ? 'text-gray-900' : ''
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gray-900 transition-all duration-300 ${
                      (pathname ?? '') === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 px-6 py-2 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors w-fit no-underline inline-block"
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
