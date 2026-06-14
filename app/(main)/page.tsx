import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Positioning from '@/components/Positioning';
import ServicesOverview from '@/components/ServicesOverview';
import WhyUsPreview from '@/components/WhyUsPreview';
import HowWeWork from '@/components/HowWeWork';
import PortfolioPreview from '@/components/PortfolioPreview';
import BlogPreview from '@/components/BlogPreview';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Cyvera Digitals | Creative Digital Agency for Modern Businesses',
  description:
    'Cyvera Digitals is a creative digital agency that builds websites, crafts brand identities, and drives growth through UI/UX design and social media management.',
  keywords: [
    'creative digital agency',
    'web design agency',
    'web development company',
    'branding agency',
    'UI UX design agency',
    'social media management agency',
    'Cyvera Digitals',
  ],
  alternates: { canonical: 'https://cyveradigitals.com' },
  openGraph: {
    title: 'Cyvera Digitals | Creative Digital Agency for Modern Businesses',
    description:
      'Build. Design. Grow. Web development, branding, UI/UX, and social media management that attract, engage, and convert.',
    url: 'https://cyveradigitals.com',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Cyvera Digitals' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cyvera Digitals | Creative Digital Agency',
    description: 'Build. Design. Grow. Full-stack digital solutions for modern businesses.',
    images: ['/logo.png'],
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': 'https://cyveradigitals.com/#service',
        name: 'Cyvera Digitals',
        url: 'https://cyveradigitals.com',
        description:
          'Cyvera Digitals is a creative digital agency specialising in web development, brand identity design, UI/UX strategy, and social media management.',
        image: 'https://cyveradigitals.com/logo.png',
        priceRange: '$$',
        serviceType: [
          'Web Development',
          'UI/UX Design',
          'Graphic Design',
          'Brand Identity',
          'Social Media Management',
          'SEO',
        ],
        areaServed: { '@type': 'Country', name: 'Worldwide' },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Digital Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UI/UX Strategy' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Graphic & Brand Design' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Management' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO' } },
          ],
        },
      }} />
      <section id="hero" className="smooth-scroll-section">
        <Hero />
      </section>
      <section id="positioning" className="smooth-scroll-section">
        <Positioning />
      </section>
      <section id="services-overview" className="smooth-scroll-section">
        <ServicesOverview />
      </section>
      <section id="why-us-preview" className="smooth-scroll-section">
        <WhyUsPreview />
      </section>
      <section id="how-we-work" className="smooth-scroll-section">
        <HowWeWork />
      </section>
      <section id="portfolio-preview" className="smooth-scroll-section">
        <PortfolioPreview />
      </section>
      <section id="blog-preview" className="smooth-scroll-section">
        <BlogPreview />
      </section>
      <section id="faq" className="smooth-scroll-section">
        <FAQ />
      </section>
      <section id="final-cta" className="smooth-scroll-section">
        <FinalCTA />
      </section>
    </>
  );
}
