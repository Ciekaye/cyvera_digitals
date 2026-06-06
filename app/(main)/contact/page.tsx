import type { Metadata } from 'next';
import Contact from '@/components/Contact';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Cyvera Digitals. Whether you have a project in mind or just want to learn more about our services, we\'d love to hear from you.',
  keywords: ['contact Cyvera Digitals', 'hire digital agency', 'get a quote', 'web design inquiry'],
  alternates: { canonical: 'https://cyveradigitals.com/contact' },
  openGraph: {
    title: 'Contact Us | Cyvera Digitals',
    description: 'Have a project in mind? Get in touch with Cyvera Digitals today.',
    url: 'https://cyveradigitals.com/contact',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Contact Cyvera Digitals' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Cyvera Digitals',
    description: 'Have a project in mind? Get in touch today.',
    images: ['/logo.png'],
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        '@id': 'https://cyveradigitals.com/contact#webpage',
        url: 'https://cyveradigitals.com/contact',
        name: 'Contact Cyvera Digitals',
        description: 'Reach out to Cyvera Digitals for web development, design, and digital marketing inquiries.',
        isPartOf: { '@id': 'https://cyveradigitals.com/#website' },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cyveradigitals.com' },
            { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://cyveradigitals.com/contact' },
          ],
        },
      }} />
      <section id="contact" className="smooth-scroll-section">
        <Contact />
      </section>
    </>
  );
}
