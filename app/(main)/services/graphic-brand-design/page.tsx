import type { Metadata } from 'next';
import GraphicDesignPage from '@/pageComponents/services/GraphicDesignPage';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Graphic & Brand Design',
  description:
    'Strategic graphic and brand design by Cyvera Digitals — logo design, brand identity systems, marketing assets, packaging, and visual content that make your business unforgettable.',
  keywords: [
    'graphic design',
    'brand design',
    'logo design',
    'brand identity',
    'marketing assets',
    'visual design',
    'packaging design',
  ],
  alternates: { canonical: 'https://cyveradigitals.com/services/graphic-brand-design' },
  openGraph: {
    title: 'Graphic & Brand Design | Cyvera Digitals',
    description: 'Logo design, brand identity, and visual assets that make your business unforgettable.',
    url: 'https://cyveradigitals.com/services/graphic-brand-design',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Graphic & Brand Design – Cyvera Digitals' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Graphic & Brand Design | Cyvera Digitals',
    description: 'Logo design, brand identity, and visual assets that make your business unforgettable.',
    images: ['/logo.png'],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': 'https://cyveradigitals.com/services/graphic-brand-design#service',
        name: 'Graphic & Brand Design',
        url: 'https://cyveradigitals.com/services/graphic-brand-design',
        description:
          'Logo design, brand identity systems, marketing assets, packaging, and visual content that make businesses unforgettable.',
        provider: { '@id': 'https://cyveradigitals.com/#organization' },
        serviceType: 'Graphic Design',
        areaServed: { '@type': 'Country', name: 'Worldwide' },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cyveradigitals.com' },
            { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://cyveradigitals.com/services' },
            { '@type': 'ListItem', position: 3, name: 'Graphic & Brand Design', item: 'https://cyveradigitals.com/services/graphic-brand-design' },
          ],
        },
      }} />
      <GraphicDesignPage />
    </>
  );
}
