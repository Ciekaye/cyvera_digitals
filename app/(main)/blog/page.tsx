import type { Metadata } from 'next';
import ResourcesPage from '@/pageComponents/ResourcesPage';

export const metadata: Metadata = {
  title: 'Blog | Cyvera Digitals',
  description:
    'Practical insights on web design, branding, SEO, and social media to help your business grow its digital presence.',
};

export default function Page() {
  return <ResourcesPage />;
}
