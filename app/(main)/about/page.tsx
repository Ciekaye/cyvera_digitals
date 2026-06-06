import type { Metadata } from 'next';
import AboutPage from '@/pageComponents/AboutPage';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Cyvera Digitals — our story, our mission, and the team that helps businesses build a powerful digital presence through design, development, and strategy.',
  keywords: ['about Cyvera Digitals', 'digital agency team', 'our story', 'creative agency Philippines'],
  alternates: { canonical: 'https://cyveradigitals.com/about' },
  openGraph: {
    title: 'About Us | Cyvera Digitals',
    description: 'Meet the team behind Cyvera Digitals and discover how we help businesses grow online.',
    url: 'https://cyveradigitals.com/about',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'About Cyvera Digitals' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Cyvera Digitals',
    description: 'Meet the team behind Cyvera Digitals.',
    images: ['/logo.png'],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        '@id': 'https://cyveradigitals.com/about#webpage',
        url: 'https://cyveradigitals.com/about',
        name: 'About Cyvera Digitals',
        description:
          'Learn about Cyvera Digitals — our story, mission, and the team helping businesses thrive online.',
        isPartOf: { '@id': 'https://cyveradigitals.com/#website' },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cyveradigitals.com' },
            { '@type': 'ListItem', position: 2, name: 'About', item: 'https://cyveradigitals.com/about' },
          ],
        },
      }} />
      <AboutPage />
    </>
  );
}
