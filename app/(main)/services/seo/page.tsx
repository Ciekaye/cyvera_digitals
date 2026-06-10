import type { Metadata } from 'next';
import SeoPage from '@/pageComponents/services/SeoPage';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'SEO Services',
  description:
    'Search engine optimisation by Cyvera Digitals — keyword research, on-page SEO, technical SEO, local SEO, and link building to grow your organic traffic and rankings.',
  keywords: [
    'SEO services',
    'search engine optimisation',
    'keyword research',
    'technical SEO',
    'on-page SEO',
    'local SEO',
    'link building',
    'SEO audit',
  ],
  alternates: { canonical: 'https://cyveradigitals.com/services/seo' },
  openGraph: {
    title: 'SEO Services | Cyvera Digitals',
    description: 'Keyword research, technical SEO, local SEO, and link building to grow your organic traffic.',
    url: 'https://cyveradigitals.com/services/seo',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'SEO Services – Cyvera Digitals' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Services | Cyvera Digitals',
    description: 'Keyword research, technical SEO, local SEO, and link building to grow your organic traffic.',
    images: ['/logo.png'],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': 'https://cyveradigitals.com/services/seo#service',
        name: 'SEO Services',
        url: 'https://cyveradigitals.com/services/seo',
        description:
          'Keyword research, on-page SEO, technical SEO, local SEO, and link building to grow organic traffic and rankings.',
        provider: { '@id': 'https://cyveradigitals.com/#organization' },
        serviceType: 'Search Engine Optimisation',
        areaServed: { '@type': 'Country', name: 'Worldwide' },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cyveradigitals.com' },
            { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://cyveradigitals.com/services' },
            { '@type': 'ListItem', position: 3, name: 'SEO Services', item: 'https://cyveradigitals.com/services/seo' },
          ],
        },
      }} />
      <SeoPage />
    </>
  );
}
