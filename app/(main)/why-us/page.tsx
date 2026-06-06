import type { Metadata } from 'next';
import WhyUsPage from '@/pageComponents/WhyUsPage';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Why Choose Cyvera Digitals',
  description:
    'Discover what sets Cyvera Digitals apart — our commitment to quality, results-driven strategies, transparent communication, and end-to-end digital expertise.',
  keywords: ['why choose Cyvera Digitals', 'digital agency advantages', 'best web design agency', 'agency differentiators'],
  alternates: { canonical: 'https://cyveradigitals.com/why-us' },
  openGraph: {
    title: 'Why Choose Cyvera Digitals',
    description: 'Discover what sets Cyvera Digitals apart from the competition.',
    url: 'https://cyveradigitals.com/why-us',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Why Cyvera Digitals' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Choose Cyvera Digitals',
    description: 'Discover what sets Cyvera Digitals apart.',
    images: ['/logo.png'],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': 'https://cyveradigitals.com/why-us#webpage',
        url: 'https://cyveradigitals.com/why-us',
        name: 'Why Choose Cyvera Digitals',
        description: 'What sets Cyvera Digitals apart — quality, strategy, transparency, and end-to-end expertise.',
        isPartOf: { '@id': 'https://cyveradigitals.com/#website' },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cyveradigitals.com' },
            { '@type': 'ListItem', position: 2, name: 'Why Us', item: 'https://cyveradigitals.com/why-us' },
          ],
        },
      }} />
      <WhyUsPage />
    </>
  );
}
