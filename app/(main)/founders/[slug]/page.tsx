import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import FounderPage from '@/pageComponents/FounderPage';
import JsonLd from '@/components/JsonLd';
import { founders, getFounderBySlug } from '@/data/founders';

export function generateStaticParams() {
  return founders.map((f) => ({ slug: f.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const founder = getFounderBySlug(params.slug);
  if (!founder) return { title: 'Founder Not Found | Cyvera Digitals' };
  return {
    title: `${founder.name} — ${founder.role}`,
    description: founder.bio,
    alternates: { canonical: `https://cyveradigitals.com/founders/${founder.slug}` },
    openGraph: {
      title: `${founder.name} | Cyvera Digitals`,
      description: founder.bio,
      url: `https://cyveradigitals.com/founders/${founder.slug}`,
      type: 'profile',
      images: [{ url: founder.image, alt: founder.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${founder.name} | Cyvera Digitals`,
      description: founder.bio,
      images: [founder.image],
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const founder = getFounderBySlug(params.slug);
  if (!founder) notFound();

  const others = founders.filter((f) => f.slug !== founder.slug);

  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        '@id': `https://cyveradigitals.com/founders/${founder.slug}#webpage`,
        url: `https://cyveradigitals.com/founders/${founder.slug}`,
        name: `${founder.name} — ${founder.role}`,
        mainEntity: {
          '@type': 'Person',
          name: founder.name,
          jobTitle: founder.role,
          image: `https://cyveradigitals.com${founder.image}`,
          description: founder.bio,
          worksFor: { '@id': 'https://cyveradigitals.com/#organization' },
        },
        isPartOf: { '@id': 'https://cyveradigitals.com/#website' },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cyveradigitals.com' },
            { '@type': 'ListItem', position: 2, name: 'About', item: 'https://cyveradigitals.com/about' },
            { '@type': 'ListItem', position: 3, name: founder.name, item: `https://cyveradigitals.com/founders/${founder.slug}` },
          ],
        },
      }} />
      <FounderPage founder={founder} others={others} />
    </>
  );
}
