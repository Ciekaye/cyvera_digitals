'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const sections = [
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Why Us', href: '/why-us' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Website Development', href: '/services/website-development' },
      { name: 'UI & UX Strategy', href: '/services/ui-ux-strategy' },
      { name: 'Graphic Design', href: '/services/graphic-brand-design' },
      { name: 'Social Media Management', href: '/services/social-media-management' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', href: '/blog' },
      { name: 'Guides', href: '/guides' },
      { name: 'Case Studies', href: '/blog' },
    ],
  },
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

const legalLinks = [
  { name: 'Terms and Conditions', href: '/terms' },
  { name: 'Privacy Policy', href: '/privacy' },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer ref={ref} className="relative text-black pt-32 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-accent opacity-100"></div>

      <div className="relative z-10 container mx-auto px-8 lg:px-12 py-16 lg:py-20 bg-white/95 rounded-3xl shadow-lg">
        <div className="flex w-full flex-col justify-between gap-16 lg:flex-row lg:items-start lg:text-left">
          {/* Logo + Description + Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex w-full flex-col justify-between gap-8 lg:items-start"
          >
            <Link href="/" className="inline-block">
              <Image src="/logo.png" alt="Cyvera Digitals" width={360} height={144} style={{ width: 'auto', height: '8rem' }} />
            </Link>
            <p className="max-w-[70%] text-base text-gray-500 leading-relaxed">
              From bold brand identities to high-performing websites, Cyvera Digitals helps startups and growing businesses show up online with purpose and professionalism.
            </p>
            <ul className="flex items-center space-x-7 text-gray-400">
              {socialLinks.map((social) => (
                <li key={social.label} className="hover:text-secondary-purple transition-colors">
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="size-6" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Link Sections */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid w-full gap-10 md:grid-cols-3 lg:gap-24"
          >
            {sections.map((section) => (
              <div key={section.title}>
                <h4 className="mb-6 font-bold text-lg text-gray-900">{section.title}</h4>
                <ul className="space-y-4 text-base text-gray-500">
                  {section.links.map((link) => (
                    <li key={link.name} className="font-medium hover:text-secondary-purple transition-colors">
                      <Link href={link.href} className="no-underline text-inherit">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-col justify-between gap-4 border-t border-gray-200 pt-10 text-sm font-medium text-gray-500 md:flex-row md:items-center md:text-left"
        >
          <p className="order-2 lg:order-1">© 2026 Cyvera Digitals. All rights reserved.</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link) => (
              <li key={link.name} className="hover:text-secondary-purple transition-colors">
                <Link href={link.href} className="no-underline text-inherit">{link.name}</Link>
              </li>
            ))}
          </ul>
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
