import type { Metadata } from 'next';
import UiUxPage from '@/pageComponents/services/UiUxPage';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'UI/UX Design & Strategy',
  description:
    'User-centred UI/UX design by Cyvera Digitals — wireframing, prototyping, user research, and conversion-focused design systems that make digital products intuitive and effective.',
  keywords: [
    'UI UX design',
    'user experience design',
    'user interface design',
    'wireframing',
    'prototyping',
    'design systems',
    'conversion rate optimisation',
  ],
  alternates: { canonical: 'https://cyveradigitals.com/services/ui-ux-strategy' },
  openGraph: {
    title: 'UI/UX Design & Strategy | Cyvera Digitals',
    description: 'User-centred design that makes digital products intuitive, engaging, and effective.',
    url: 'https://cyveradigitals.com/services/ui-ux-strategy',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'UI/UX Design – Cyvera Digitals' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UI/UX Design & Strategy | Cyvera Digitals',
    description: 'User-centred design that makes digital products intuitive and effective.',
    images: ['/logo.png'],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': 'https://cyveradigitals.com/services/ui-ux-strategy#service',
        name: 'UI/UX Design & Strategy',
        url: 'https://cyveradigitals.com/services/ui-ux-strategy',
        description:
          'User-centred UI/UX design including wireframing, prototyping, user research, and conversion-focused design systems.',
        provider: { '@id': 'https://cyveradigitals.com/#organization' },
        serviceType: 'UI/UX Design',
        areaServed: { '@type': 'Country', name: 'Worldwide' },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cyveradigitals.com' },
            { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://cyveradigitals.com/services' },
            { '@type': 'ListItem', position: 3, name: 'UI/UX Strategy', item: 'https://cyveradigitals.com/services/ui-ux-strategy' },
          ],
        },
      }} />
      <UiUxPage />
    </>
  );
}
