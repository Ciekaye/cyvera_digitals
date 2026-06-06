import type { Metadata } from 'next';
import PortfolioPage from '@/pageComponents/PortfolioPage';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'Explore Cyvera Digitals\' portfolio — a curated collection of websites, brand identities, and digital projects built for businesses across various industries.',
  keywords: ['web design portfolio', 'website projects', 'brand identity work', 'digital agency portfolio', 'Cyvera Digitals work'],
  alternates: { canonical: 'https://cyveradigitals.com/portfolio' },
  openGraph: {
    title: 'Our Work | Cyvera Digitals',
    description: 'Browse our portfolio of websites, brand identities, and digital projects.',
    url: 'https://cyveradigitals.com/portfolio',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Cyvera Digitals Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Work | Cyvera Digitals',
    description: 'Browse our portfolio of websites and brand identities.',
    images: ['/logo.png'],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': 'https://cyveradigitals.com/portfolio#webpage',
        url: 'https://cyveradigitals.com/portfolio',
        name: 'Portfolio – Cyvera Digitals',
        description: 'A curated collection of websites, brand identities, and digital projects by Cyvera Digitals.',
        isPartOf: { '@id': 'https://cyveradigitals.com/#website' },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cyveradigitals.com' },
            { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://cyveradigitals.com/portfolio' },
          ],
        },
      }} />
      <PortfolioPage />
    </>
  );
}
