import type { MetadataRoute } from 'next';
import { posts } from '@/data/blog';
import { guides } from '@/data/guides';

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
  '/portfolio',
  '/pricing',
  '/blog',
  '/guides',
  '/contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${SITE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const guideEntries: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${SITE}/guides/${g.slug}`,
    lastModified: new Date(g.updatedAt),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticEntries, ...guideEntries, ...blogEntries];
}
