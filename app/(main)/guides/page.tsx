import type { Metadata } from 'next';
import GuidesPage from '@/pageComponents/GuidesPage';

const title =
  'Guides | Practical Resources for Building Your Digital Presence — Cyvera Digitals';
const description =
  'Step-by-step guides on web design, branding, UX, SEO, and social media. Practical playbooks from the team at Cyvera Digitals.';
const url = 'https://cyveradigitals.com/guides';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/guides' },
  openGraph: {
    title,
    description,
    url,
    type: 'website',
    siteName: 'Cyvera Digitals',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cyveradigitals.com' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: url },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <GuidesPage />
    </>
  );
}
