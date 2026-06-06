import type { Metadata } from 'next';
import PricingPage from '@/pageComponents/PricingPage';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Pricing Plans',
  description:
    'Transparent, affordable pricing for web design and development. Cyvera Digitals offers Starter, Basic, Standard, and Premium plans to fit businesses at every stage.',
  keywords: [
    'web design pricing',
    'website cost',
    'affordable web development',
    'digital agency pricing plans',
    'Cyvera Digitals pricing',
  ],
  alternates: { canonical: 'https://cyveradigitals.com/pricing' },
  openGraph: {
    title: 'Pricing Plans | Cyvera Digitals',
    description: 'Transparent, affordable web design and development pricing for every stage of your business.',
    url: 'https://cyveradigitals.com/pricing',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Cyvera Digitals Pricing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing Plans | Cyvera Digitals',
    description: 'Affordable web design pricing for every stage of your business.',
    images: ['/logo.png'],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': 'https://cyveradigitals.com/pricing#webpage',
        url: 'https://cyveradigitals.com/pricing',
        name: 'Pricing Plans – Cyvera Digitals',
        description: 'Transparent pricing for web design, development, and digital services.',
        isPartOf: { '@id': 'https://cyveradigitals.com/#website' },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cyveradigitals.com' },
            { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://cyveradigitals.com/pricing' },
          ],
        },
        mainEntity: {
          '@type': 'OfferCatalog',
          name: 'Web Design Pricing Plans',
          itemListElement: [
            {
              '@type': 'Offer',
              name: 'Starter',
              description: 'Up to 10 pages — perfect for getting your business online.',
              price: '250',
              priceCurrency: 'USD',
            },
            {
              '@type': 'Offer',
              name: 'Basic',
              description: '11–15 pages for growing businesses.',
              price: '500',
              priceCurrency: 'USD',
            },
          ],
        },
      }} />
      <PricingPage />
    </>
  );
}
