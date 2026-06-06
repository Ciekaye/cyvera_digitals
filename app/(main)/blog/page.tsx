import type { Metadata } from 'next';
import ResourcesPage from '@/pageComponents/ResourcesPage';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Practical insights on web design, branding, SEO, and social media to help your business grow its digital presence.',
  keywords: ['web design blog', 'branding tips', 'SEO guide', 'social media tips', 'digital marketing blog'],
  alternates: { canonical: 'https://cyveradigitals.com/blog' },
  openGraph: {
    title: 'Blog | Cyvera Digitals',
    description: 'Practical insights on web design, branding, SEO, and social media.',
    url: 'https://cyveradigitals.com/blog',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Cyvera Digitals Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Cyvera Digitals',
    description: 'Practical insights on web design, branding, SEO, and social media.',
    images: ['/logo.png'],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Blog',
        '@id': 'https://cyveradigitals.com/blog#webpage',
        url: 'https://cyveradigitals.com/blog',
        name: 'Cyvera Digitals Blog',
        description: 'Practical insights on web design, branding, SEO, and social media.',
        isPartOf: { '@id': 'https://cyveradigitals.com/#website' },
        publisher: { '@id': 'https://cyveradigitals.com/#organization' },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cyveradigitals.com' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://cyveradigitals.com/blog' },
          ],
        },
      }} />
      <ResourcesPage />
    </>
  );
}
