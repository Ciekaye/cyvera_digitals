import type { MetadataRoute } from 'next';
import { posts } from '@/data/blog';
import { guides } from '@/data/guides';
import { founders } from '@/data/founders';

const SITE = 'https://cyveradigitals.com';

const staticRoutes = [
  '',
  '/about',
  '/why-us',
  '/services',
  '/services/website-development',
  '/services/ui-ux-strategy',
  '/services/graphic-brand-design',
  '/services/social-media-management',
  '/services/seo',
  '/portfolio',
  '/pricing',
  '/blog',
  '/guides',
  '/contact',
  '/terms',
  '/privacy',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${SITE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const founderEntries: MetadataRoute.Sitemap = founders.map((f) => ({
    url: `${SITE}/founders/${f.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const guideEntries: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${SITE}/guides/${g.slug}`,
    lastModified: new Date(g.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...founderEntries, ...guideEntries, ...blogEntries];
}
