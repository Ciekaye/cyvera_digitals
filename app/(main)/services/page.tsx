import type { Metadata } from 'next';
import ServicesPage from '@/pageComponents/ServicesPage';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Web Design & Development Services',
  description:
    'Cyvera Digitals offers end-to-end digital services: custom web development, UI/UX strategy, graphic & brand design, and social media management tailored to your business goals.',
  keywords: [
    'web design services',
    'web development services',
    'UI UX design',
    'graphic design services',
    'social media management',
    'branding services',
    'digital agency services',
  ],
  alternates: { canonical: 'https://cyveradigitals.com/services' },
  openGraph: {
    title: 'Web Design & Development Services | Cyvera Digitals',
    description: 'End-to-end digital services: web development, UI/UX, branding, and social media management.',
    url: 'https://cyveradigitals.com/services',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Cyvera Digitals Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Cyvera Digitals',
    description: 'Web development, UI/UX, branding, and social media management.',
    images: ['/logo.png'],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': 'https://cyveradigitals.com/services#webpage',
        url: 'https://cyveradigitals.com/services',
        name: 'Services – Cyvera Digitals',
        description: 'Custom web development, UI/UX strategy, graphic design, branding, and social media management.',
        isPartOf: { '@id': 'https://cyveradigitals.com/#website' },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cyveradigitals.com' },
            { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://cyveradigitals.com/services' },
          ],
        },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: [
            {
              '@type': 'ListItem', position: 1,
              item: { '@type': 'Service', name: 'Web Development', url: 'https://cyveradigitals.com/services/website-development' },
            },
            {
              '@type': 'ListItem', position: 2,
              item: { '@type': 'Service', name: 'UI/UX Strategy', url: 'https://cyveradigitals.com/services/ui-ux-strategy' },
            },
            {
              '@type': 'ListItem', position: 3,
              item: { '@type': 'Service', name: 'Graphic & Brand Design', url: 'https://cyveradigitals.com/services/graphic-brand-design' },
            },
            {
              '@type': 'ListItem', position: 4,
              item: { '@type': 'Service', name: 'Social Media Management', url: 'https://cyveradigitals.com/services/social-media-management' },
            },
            {
              '@type': 'ListItem', position: 5,
              item: { '@type': 'Service', name: 'SEO', url: 'https://cyveradigitals.com/services/seo' },
            },
          ],
        },
      }} />
      <ServicesPage />
    </>
  );
}
