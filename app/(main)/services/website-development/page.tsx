import type { Metadata } from 'next';
import WebDevPage from '@/pageComponents/services/WebDevPage';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Website Development Services',
  description:
    'Custom website development by Cyvera Digitals — from business sites and e-commerce stores to web applications, built with React, Next.js, WordPress, and Shopify.',
  keywords: [
    'website development',
    'custom website design',
    'Next.js development',
    'WordPress development',
    'Shopify development',
    'e-commerce website',
    'web application development',
  ],
  alternates: { canonical: 'https://cyveradigitals.com/services/website-development' },
  openGraph: {
    title: 'Website Development Services | Cyvera Digitals',
    description: 'Custom websites, e-commerce stores, and web apps built to perform.',
    url: 'https://cyveradigitals.com/services/website-development',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Website Development – Cyvera Digitals' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development | Cyvera Digitals',
    description: 'Custom websites, e-commerce stores, and web apps built to perform.',
    images: ['/logo.png'],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': 'https://cyveradigitals.com/services/website-development#service',
        name: 'Website Development',
        url: 'https://cyveradigitals.com/services/website-development',
        description:
          'Custom website development including business sites, e-commerce stores, and web applications using React, Next.js, WordPress, and Shopify.',
        provider: { '@id': 'https://cyveradigitals.com/#organization' },
        serviceType: 'Web Development',
        areaServed: { '@type': 'Country', name: 'Worldwide' },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cyveradigitals.com' },
            { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://cyveradigitals.com/services' },
            { '@type': 'ListItem', position: 3, name: 'Website Development', item: 'https://cyveradigitals.com/services/website-development' },
          ],
        },
      }} />
      <WebDevPage />
    </>
  );
}
