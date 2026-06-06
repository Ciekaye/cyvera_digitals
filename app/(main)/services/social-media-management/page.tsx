import type { Metadata } from 'next';
import SocialMediaPage from '@/pageComponents/services/SocialMediaPage';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Social Media Management',
  description:
    'Full-service social media management by Cyvera Digitals — content creation, scheduling, community management, and analytics to grow your brand across all platforms.',
  keywords: [
    'social media management',
    'social media marketing',
    'content creation',
    'Instagram management',
    'Facebook management',
    'social media strategy',
    'community management',
  ],
  alternates: { canonical: 'https://cyveradigitals.com/services/social-media-management' },
  openGraph: {
    title: 'Social Media Management | Cyvera Digitals',
    description: 'Content creation, scheduling, and community management to grow your brand on social.',
    url: 'https://cyveradigitals.com/services/social-media-management',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Social Media Management – Cyvera Digitals' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Management | Cyvera Digitals',
    description: 'Content creation and community management to grow your brand on social.',
    images: ['/logo.png'],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': 'https://cyveradigitals.com/services/social-media-management#service',
        name: 'Social Media Management',
        url: 'https://cyveradigitals.com/services/social-media-management',
        description:
          'Content creation, scheduling, community management, and analytics to grow a brand across all social media platforms.',
        provider: { '@id': 'https://cyveradigitals.com/#organization' },
        serviceType: 'Social Media Management',
        areaServed: { '@type': 'Country', name: 'Worldwide' },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cyveradigitals.com' },
            { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://cyveradigitals.com/services' },
            { '@type': 'ListItem', position: 3, name: 'Social Media Management', item: 'https://cyveradigitals.com/services/social-media-management' },
          ],
        },
      }} />
      <SocialMediaPage />
    </>
  );
}
