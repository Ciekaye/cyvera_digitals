/**
 * Long-form guides for the /guides section.
 *
 * Guides reuse the blog's structured-content idea (no MDX). Each guide's
 * `content` is an ordered list of typed blocks rendered by GuideArticlePage.
 *
 * NOTE: bodies below are SCAFFOLD placeholders (intro + a few headed sections
 * derived from the excerpt). The final approved long-form copy is pasted into
 * the `content` array of each guide later — no route/structure changes needed.
 *
 * To add a guide: append a Guide object. `slug` becomes /guides/<slug>.
 */

export type GuideCategory =
  | 'Getting Started'
  | 'Web Development'
  | 'UI/UX'
  | 'Branding'
  | 'SEO'
  | 'Social Media'
  | 'Business of Digital';

export type GuideBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'quote'; text: string }
  | { type: 'callout'; text: string };

export type Guide = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: GuideCategory;
  readTime: string;
  publishedAt: string; // ISO yyyy-mm-dd
  updatedAt: string; // ISO yyyy-mm-dd
  primaryKeyword: string;
  secondaryKeywords: string[];
  heroImage: string;
  excerpt: string;
  /** Service routes this guide relates to, e.g. '/services/website-development'. */
  relatedServices: string[];
  /** Slugs of related guides. */
  relatedGuides: string[];
  content: GuideBlock[];
};

/** Placeholder body builder — replaced with approved long-form copy later. */
function scaffoldBody(excerpt: string, sections: string[]): GuideBlock[] {
  const blocks: GuideBlock[] = [
    { type: 'paragraph', text: excerpt },
    {
      type: 'callout',
      text: 'This guide is being expanded into a full, in-depth playbook. The outline below is live — the complete walkthrough lands shortly.',
    },
  ];
  for (const s of sections) {
    blocks.push({ type: 'heading', text: s });
    blocks.push({
      type: 'paragraph',
      text: `We're putting the finishing touches on this section. In the meantime, if "${s.toLowerCase()}" is on your plate right now, a quick discovery call is the fastest way to get tailored advice.`,
    });
  }
  return blocks;
}

export const guides: Guide[] = [
  {
    slug: 'launching-a-business-website',
    title: 'The Complete Beginner’s Guide to Launching a Business Website',
    metaTitle:
      'The Complete Beginner’s Guide to Launching a Business Website | Cyvera Digitals',
    metaDescription:
      'A step-by-step guide to planning, designing, and launching a business website that performs — from domain choice to post-launch maintenance.',
    category: 'Getting Started',
    readTime: '18 min read',
    publishedAt: '2026-05-10',
    updatedAt: '2026-05-10',
    primaryKeyword: 'launching a business website',
    secondaryKeywords: [
      'how to build a business website',
      'small business website guide',
      'website launch checklist',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    excerpt:
      'Everything you need to go from "I should probably have a website" to a live, working site you’re proud of — domains, hosting, planning, design, and pre-launch checks, explained in plain English.',
    relatedServices: ['/services/website-development'],
    relatedGuides: ['business-website-development', 'ui-ux-design-strategy'],
    content: scaffoldBody(
      'Launching a business website can feel overwhelming when you’re starting from scratch. This guide breaks the whole journey into clear, manageable steps — so you end up with a site that does real work for your business, not just a digital business card.',
      [
        'Why your business needs a website',
        'Planning before you build',
        'Choosing a domain and hosting',
        'Designing for your customers',
        'Pre-launch checklist',
        'After launch: maintenance and growth',
      ]
    ),
  },
  {
    slug: 'business-website-development',
    title: 'Business Website Development: The Complete 2026 Guide',
    metaTitle:
      'Business Website Development: The Complete 2026 Guide | Cyvera Digitals',
    metaDescription:
      'A clear, practical guide to business website development — covering platforms, costs, design, SEO, and what separates a website that performs from one that just looks good.',
    category: 'Web Development',
    readTime: '16 min read',
    publishedAt: '2026-05-08',
    updatedAt: '2026-05-08',
    primaryKeyword: 'business website development',
    secondaryKeywords: [
      'website design for small business',
      'custom website development',
      'website development services',
      'build a business website',
      'professional website design',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    excerpt:
      'A clear, practical look at how business websites are actually built — platforms, costs, design, performance, and SEO — and what separates a site that performs from one that just looks good.',
    relatedServices: ['/services/website-development'],
    relatedGuides: ['ui-ux-design-strategy', 'brand-identity-design'],
    content: scaffoldBody(
      'Business website development is about far more than picking a template. The decisions you make about platform, structure, performance, and SEO determine whether your site quietly drives growth or just sits there. This guide walks through what matters and why.',
      [
        'What "website development" really means',
        'Choosing the right platform',
        'What a professional build actually costs',
        'Performance, accessibility, and SEO foundations',
        'How to brief a developer',
      ]
    ),
  },
  {
    slug: 'ui-ux-design-strategy',
    title: 'UI/UX Design Strategy: How Great User Experience Drives Revenue',
    metaTitle:
      'UI/UX Design Strategy: How Great User Experience Drives Revenue | Cyvera Digitals',
    metaDescription:
      'A practical guide to UI/UX design strategy for modern businesses — including UX research, wireframing, conversion design, and how user experience directly impacts revenue.',
    category: 'UI/UX',
    readTime: '15 min read',
    publishedAt: '2026-05-06',
    updatedAt: '2026-05-06',
    primaryKeyword: 'UI UX design strategy',
    secondaryKeywords: [
      'user experience design',
      'UX strategy for business',
      'UI design best practices',
      'conversion-focused UX',
      'website UX audit',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    excerpt:
      'Design decisions that quietly move the needle. Learn how UX research, layout, flow, and small details turn casual visitors into customers — and why user experience is a revenue lever, not a finishing touch.',
    relatedServices: ['/services/ui-ux-strategy'],
    relatedGuides: [
      'business-website-development',
      'social-media-management-for-business',
    ],
    content: scaffoldBody(
      'Good UI/UX isn’t decoration — it’s how customers decide whether to trust you and buy. This guide covers the strategy behind experiences that convert: research, wireframing, conversion-focused design, and measuring what works.',
      [
        'Why UX is a revenue decision',
        'UX research and understanding your users',
        'Wireframing and information architecture',
        'Designing for conversion',
        'Auditing and improving an existing site',
      ]
    ),
  },
  {
    slug: 'brand-identity-design',
    title: 'Brand Identity Design: How to Build a Brand That Stands Out',
    metaTitle:
      'Brand Identity Design: How to Build a Brand That Stands Out | Cyvera Digitals',
    metaDescription:
      'A complete guide to brand identity design for modern businesses — covering logos, color, typography, brand guidelines, and how strong branding drives loyalty and revenue.',
    category: 'Branding',
    readTime: '15 min read',
    publishedAt: '2026-05-04',
    updatedAt: '2026-05-04',
    primaryKeyword: 'brand identity design',
    secondaryKeywords: [
      'graphic design for business',
      'logo design services',
      'brand guidelines',
      'visual identity',
      'brand design agency',
      'small business branding',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    excerpt:
      'A strong brand isn’t a logo — it’s a system. This guide helps you shape a visual identity that’s memorable, consistent, and unmistakably yours, and shows how good branding drives loyalty and revenue.',
    relatedServices: ['/services/graphic-brand-design'],
    relatedGuides: [
      'ui-ux-design-strategy',
      'social-media-management-for-business',
    ],
    content: scaffoldBody(
      'Brand identity design is the system that makes your business recognizable everywhere it shows up. This guide covers the building blocks — logo, color, typography, voice, and guidelines — and how to keep them consistent across every touchpoint.',
      [
        'What a brand identity actually is',
        'Logo, color, and typography',
        'Building brand guidelines',
        'Staying consistent across platforms',
        'When to invest in a rebrand',
      ]
    ),
  },
  {
    slug: 'social-media-management-for-business',
    title: 'Social Media Management for Business: The 2026 Growth Guide',
    metaTitle:
      'Social Media Management for Business: The 2026 Growth Guide | Cyvera Digitals',
    metaDescription:
      'A practical guide to social media management for business — covering platform strategy, content calendars, engagement, and how to turn followers into customers.',
    category: 'Social Media',
    readTime: '15 min read',
    publishedAt: '2026-05-02',
    updatedAt: '2026-05-02',
    primaryKeyword: 'social media management for business',
    secondaryKeywords: [
      'social media marketing strategy',
      'content calendar',
      'social media growth',
      'Instagram marketing',
      'social media engagement',
      'small business social media',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    excerpt:
      'Move beyond vanity metrics. Build a content rhythm and social presence that creates real conversations — and real customers — with platform strategy, content calendars, and engagement that converts.',
    relatedServices: ['/services/social-media-management'],
    relatedGuides: ['brand-identity-design', 'ui-ux-design-strategy'],
    content: scaffoldBody(
      'Social media management for business is about strategy, not just posting. This guide covers how to pick the right platforms, build a sustainable content rhythm, engage your audience, and turn followers into paying customers.',
      [
        'Choosing the right platforms',
        'Building a content calendar',
        'Content that earns attention',
        'Engagement and community',
        'Measuring what matters',
      ]
    ),
  },
];

/** Returns a single guide by slug, or undefined if not found. */
export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

/** Guides sorted newest-first for listing pages. */
export function getSortedGuides(): Guide[] {
  return [...guides].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}
