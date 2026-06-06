/**
 * Long-form guides for the /guides section.
 *
 * Guides reuse the blog's structured-content idea (no MDX). Each guide's
 * `content` is an ordered list of typed blocks rendered by GuideArticlePage.
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
      'business website planning',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    excerpt:
      'Everything you need to go from "I should probably have a website" to a live, working site you’re proud of — domains, hosting, planning, design, and pre-launch checks, explained in plain English.',
    relatedServices: ['/services/website-development'],
    relatedGuides: ['business-website-development', 'ui-ux-design-strategy'],
    content: [
      { type: 'heading', text: 'Introduction' },
      { type: 'paragraph', text: `Launching a website used to mean weeks of meetings, thick contracts, and a stack of invoices that never quite added up. Today, the tools are better — but the choices are bigger. Domains, hosting, platforms, designers, copywriters, SEO, analytics — every decision branches into ten more, and most business owners end up either overspending, under-planning, or both.` },
      { type: 'paragraph', text: `This guide is the version we wish every new client had read before booking their first discovery call. It walks you through the entire journey of launching a business website — from the first scribbled note to the moment your site goes live — in the order the decisions actually happen.` },
      { type: 'paragraph', text: `You won't need a design background. You won't need to know how to code. You'll just need a clear idea of what your business does and who you want to reach.` },

      { type: 'heading', text: '1. Start With the Job Your Website Has to Do' },
      { type: 'paragraph', text: `Before you think about colors, fonts, or platforms, answer one question: What is this website supposed to accomplish? A good business website usually does one of three jobs: convert visitors into leads, bookings, or sales; inform prospects so they reach out warmer and more ready to buy; or establish credibility for people who already heard about you. Most sites try to do all three, and that's fine — but one should be the priority. Write it down. Every decision from here on out gets easier when there's a clear primary goal.` },

      { type: 'heading', text: '2. Define Your Audience in One Sentence' },
      { type: 'paragraph', text: `You don't need a 40-page persona document. You need one sentence that's specific enough to make design and content choices for you. For example: "Busy clinic owners in their 40s who want to look more established online but don't have time to manage anything technical." That one sentence quietly answers a hundred future questions — tone of voice, photo style, how much copy to include, whether to lean modern or traditional, even what your CTA should say.` },

      { type: 'heading', text: '3. Choose the Right Domain Name' },
      { type: 'paragraph', text: `Your domain is the address customers will type, share, and remember. Keep it short, easy to pronounce, and easy to spell out loud. Prefer .com if it's available; country-specific TLDs are fine if your audience is local. Avoid hyphens and numbers — they cause confusion when shared verbally. Check social media handles before you buy, because consistency across platforms is worth more than a "perfect" domain. Register it through a reputable provider, set auto-renew on, and turn on domain privacy.` },

      { type: 'heading', text: '4. Pick a Platform That Fits Your Stage' },
      { type: 'paragraph', text: `The "best" platform doesn't exist — only the right one for where your business is today. Website builders like Wix and Squarespace are the fastest to launch and easiest to maintain, but limited in room to grow. WordPress is flexible, well-supported, and used by millions — a strong choice for content-heavy sites and businesses that expect to evolve. Webflow and Framer sit nicely between builders and code, with designer-friendly output. Custom development is worth it for businesses with specific integrations, larger teams, or unusual workflows.` },
      { type: 'paragraph', text: `If you're not sure, start with what fits your current stage, not the one you hope to be in three years. Migrating later is rarely as painful as overbuilding now.` },

      { type: 'heading', text: '5. Plan Your Pages Before You Design Anything' },
      { type: 'paragraph', text: `A clear sitemap saves you from one of the most common (and expensive) mistakes in web projects — designing pages you don't actually need, or skipping ones you do. A typical small business site needs Home, About, Services (with sub-pages if you offer several), Portfolio or Case Studies, Pricing if you list it, an optional Blog or Guides for SEO, and Contact. Sketch the structure on paper before you write a single word of copy. If a page doesn't clearly support the website's main job, cut it.` },

      { type: 'heading', text: '6. Write the Copy First, Design Around It' },
      { type: 'paragraph', text: `This is the step most people skip — and the one that quietly determines whether a site converts. Design exists to serve the message, not the other way around. Draft your copy first, even if it's rough. Focus on a clear, specific headline on the home page, real benefits rather than generic adjectives, short paragraphs, scannable subheads, and one clear call to action per page. If writing isn't your strength, hire a copywriter before you hire a designer. It's the single highest-leverage role on a small website project.` },

      { type: 'heading', text: '7. Design With Purpose, Not Decoration' },
      { type: 'paragraph', text: `Good design isn't about looking impressive — it's about making the right thing easy to do. A few principles consistently pay off: clear visual hierarchy so the most important element on each page is the most prominent; generous whitespace, because crowded pages feel cheap regardless of how nice the individual elements are; consistency in buttons, headings, and spacing throughout; and a mobile-first mindset, since over 60% of your visitors will land on a phone.` },

      { type: 'heading', text: '8. Get the Technical Foundations Right' },
      { type: 'paragraph', text: `Behind every good-looking site is a layer most visitors never see — and it's the layer that determines whether your site actually performs. Before launch, make sure performance is solid (compressed images, modern formats, lazy loading), SEO basics are in place (page titles, meta descriptions, semantic headings, clean URLs), analytics is installed (GA4, Plausible, or Fathom), security is covered (SSL certificate active, software up to date, backups scheduled), and accessibility is respected (color contrast, alt text on images, keyboard-friendly navigation).` },

      { type: 'heading', text: '9. The Pre-Launch Checklist' },
      { type: 'paragraph', text: `Before you go live, walk through every page on a phone, a tablet, and a desktop. Then check that all links work, contact forms send to the right inbox and show a confirmation, the 404 page is friendly and helpful, the favicon and social share previews look correct, legal pages are in place if required, and search engines can index the site (no leftover "noindex" tags).` },

      { type: 'heading', text: "10. Launch Isn't the Finish Line" },
      { type: 'paragraph', text: `A website is not a one-time project — it's a living asset. Plan from day one for monthly maintenance (updates, backups, broken-link checks), quarterly reviews (what's converting, what isn't, what to refresh), and yearly evolution (copy updates, new case studies, design refreshes as your brand grows). Sites that get even small monthly attention dramatically outperform sites that are launched and forgotten.` },

      { type: 'heading', text: 'Where Cyvera Digitals Fits In' },
      { type: 'paragraph', text: `If any part of this guide felt overwhelming, that's normal — and it's exactly why we exist. Whether you're launching your first site or rebuilding a tired one, we handle the strategy, design, development, and ongoing care so you can focus on the business behind the website.` },
    ],
  },
  {
    slug: 'business-website-development',
    title: 'Business Website Development: The Complete 2026 Guide',
    metaTitle:
      'Business Website Development: The Complete 2026 Guide | Cyvera Digitals',
    metaDescription:
      'A clear, practical guide to business website development — covering platforms, costs, design, SEO, and what separates a website that performs from one that just looks good.',
    category: 'Web Development',
    readTime: '12 min read',
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
    content: [
      { type: 'heading', text: 'How to Approach Business Website Development the Right Way' },
      { type: 'paragraph', text: `Your website is the hardest-working salesperson in your business — open 24/7, reading every visitor's intent in seconds, and either earning the next click or losing it forever. Strong business website development isn't about flashy effects or trendy layouts. It's about building a digital asset that ranks, converts, and scales with you.` },
      { type: 'paragraph', text: `This guide walks you through everything that goes into modern website development services, so you can plan smarter, spend better, and end up with a site that actually drives growth.` },

      { type: 'heading', text: 'What "Website Development" Actually Means in 2026' },
      { type: 'paragraph', text: `Website development covers everything required to build, launch, and maintain a website — front-end design, back-end logic, content management, hosting, security, and performance. For most small and growing businesses, the term overlaps heavily with custom website design and CMS development, since one rarely succeeds without the other. Treat them as one connected discipline.` },

      { type: 'heading', text: 'Choosing the Right Platform for Your Business Website' },
      { type: 'paragraph', text: `The right platform depends on your goals, content volume, and growth plans. The most common options for business website development today are WordPress for flexibility and SEO, Webflow and Framer for designer-led marketing sites, Shopify for ecommerce, and fully custom development for businesses with unique systems or SaaS components. Choose based on where you'll be in 18 months, not just where you are today.` },

      { type: 'heading', text: 'Core Features Every Professional Business Website Needs' },
      { type: 'paragraph', text: `A modern professional website design should include mobile-first responsive layouts, fast load times under three seconds, secure HTTPS hosting, accessible color and typography choices, on-page SEO structure, lead capture forms, analytics, and a clear conversion path on every page. Anything beyond these is optimization — these are the baseline.` },

      { type: 'heading', text: 'The Real Cost of Custom Website Development' },
      { type: 'paragraph', text: `Custom website development pricing reflects scope, integrations, and design complexity, not page count alone. A small business website might range from a few hundred dollars for a starter site to several thousand for a fully custom build. The hidden cost most owners miss is what a cheap website costs in lost leads, slow performance, and rebuilds within a year. The cheapest option upfront is almost never the cheapest over time.` },

      { type: 'heading', text: 'SEO and Performance: The Non-Negotiables' },
      { type: 'paragraph', text: `Search engines reward speed, structure, and substance. Strong website development services bake SEO into the build — semantic HTML, clean URLs, optimized images, structured data, fast hosting, and crawlable architecture — instead of bolting it on after launch. A site that loads quickly and is structured well will outrank a prettier, slower competitor almost every time.` },

      { type: 'heading', text: 'Maintenance: Where Most Websites Quietly Die' },
      { type: 'paragraph', text: `A business website is a living asset. Plugin updates, security patches, broken-link checks, content refreshes, and analytics reviews keep it healthy. Sites that get even an hour of monthly attention outperform ones that are launched and forgotten. Build maintenance into your budget from day one.` },

      { type: 'heading', text: 'Build a Business Website That Performs' },
      { type: 'paragraph', text: `At Cyvera Digitals, our website development services are built around one outcome: a site that earns its place in your business. Whether you're launching, rebranding, or scaling, we handle strategy, design, development, and ongoing support under one roof.` },
    ],
  },
  {
    slug: 'ui-ux-design-strategy',
    title: 'UI/UX Design Strategy: How Great User Experience Drives Revenue',
    metaTitle:
      'UI/UX Design Strategy: How Great User Experience Drives Revenue | Cyvera Digitals',
    metaDescription:
      'A practical guide to UI/UX design strategy for modern businesses — including UX research, wireframing, conversion design, and how user experience directly impacts revenue.',
    category: 'UI/UX',
    readTime: '11 min read',
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
    content: [
      { type: 'heading', text: "The Business Owner's Guide to UI/UX Design Strategy" },
      { type: 'paragraph', text: `Design is no longer decoration — it's how customers decide whether to trust you, stay on your site, and ultimately buy. A strong UI/UX design strategy turns interest into action by removing friction at every step. This guide breaks down user experience design in plain language, so you can recognize good UX when you see it and demand it from anyone you work with.` },

      { type: 'heading', text: 'What UI and UX Actually Mean' },
      { type: 'paragraph', text: `UI (user interface) is what your visitors see — buttons, colors, typography, layout. UX (user experience) is how those elements feel to use — flow, clarity, speed, and ease. Good UI design without UX strategy is a beautiful site no one converts on. Good UX without UI feels clunky and untrustworthy. A real UI UX design strategy unites both.` },

      { type: 'heading', text: 'Start With Research, Not Pixels' },
      { type: 'paragraph', text: `Every effective UX strategy for business starts with three questions: Who is the user? What are they trying to accomplish? What's currently in their way? Light-touch research — heatmaps, session recordings, short customer interviews — almost always reveals more than guesswork, and it costs far less than redesigning something twice.` },

      { type: 'heading', text: 'Wireframing: Cheap Decisions, Expensive Lessons Avoided' },
      { type: 'paragraph', text: `Wireframes are low-fidelity layouts that test structure before design. They're where you discover that your "About" page should come before "Services," or that your CTA needs to appear three sections higher. Skipping wireframing is the most expensive shortcut in any digital project.` },

      { type: 'heading', text: 'UI Design Best Practices That Quietly Move the Needle' },
      { type: 'paragraph', text: `Strong UI design is governed by hierarchy, whitespace, consistency, and contrast. Every page should have one primary action that's visually unmistakable. Buttons should look like buttons. Headings should follow a clear scale. Typography should be readable on a phone in sunlight. These small disciplines are what separate a polished product from an amateur one.` },

      { type: 'heading', text: 'Mobile-First Is No Longer Optional' },
      { type: 'paragraph', text: `Over 60% of web traffic is mobile. A mobile-first UX strategy means designing for the smallest, most constrained screen first, then scaling up — not the other way around. Sites built mobile-first are almost always faster, simpler, and higher-converting on every device.` },

      { type: 'heading', text: 'Conversion-Focused UX: Where Design Meets Revenue' },
      { type: 'paragraph', text: `Conversion-focused UX is the discipline of designing around user intent. Clear value propositions, obvious next steps, trust signals near decision points, and removing every unnecessary form field add up to measurable revenue lift. A good UX audit can often increase conversions without changing the visual design at all.` },

      { type: 'heading', text: 'When to Invest in a Website UX Audit' },
      { type: 'paragraph', text: `If your traffic is decent but conversions are flat, the bottleneck is almost always UX. A focused website UX audit examines flow, friction, and clarity — and usually pays for itself within months. It's one of the highest-ROI investments a growing business can make.` },

      { type: 'heading', text: 'Design Experiences That Convert' },
      { type: 'paragraph', text: `Cyvera's UI/UX strategy work is built around one truth: design isn't decoration, it's revenue. We help businesses turn intuition into intentional design that customers love and search engines reward.` },
    ],
  },
  {
    slug: 'brand-identity-design',
    title: 'Brand Identity Design: How to Build a Brand That Stands Out',
    metaTitle:
      'Brand Identity Design: How to Build a Brand That Stands Out | Cyvera Digitals',
    metaDescription:
      'A complete guide to brand identity design for modern businesses — covering logos, color, typography, brand guidelines, and how strong branding drives loyalty and revenue.',
    category: 'Branding',
    readTime: '12 min read',
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
    content: [
      { type: 'heading', text: 'The Modern Business Guide to Brand Identity Design' },
      { type: 'paragraph', text: `A brand isn't a logo — it's the feeling a customer gets when they see your name. Strong brand identity design captures that feeling and makes it consistent across every touchpoint, so trust builds faster than any ad could buy. This guide walks through the components, decisions, and best practices behind branding that actually works for small and growing businesses.` },

      { type: 'heading', text: 'What Brand Identity Design Really Includes' },
      { type: 'paragraph', text: `Brand identity design covers the visual and verbal system that represents your business — logo, color palette, typography, imagery, tone of voice, and the rules that govern how they're used. Good graphic design for business doesn't just look good; it makes your brand instantly recognizable.` },

      { type: 'heading', text: 'Step One: Brand Strategy Before Brand Design' },
      { type: 'paragraph', text: `Before designing anything, define three things: who you serve, what you stand for, and how you want to be perceived. These answers shape every visual choice that follows. Skipping this step is why so many small business branding projects feel "off" — the visuals are fine, but they're not built on a foundation.` },

      { type: 'heading', text: 'Logo Design Services: What to Look For' },
      { type: 'paragraph', text: `A strong logo is simple, scalable, distinctive, and timeless. It should work in black and white, at 24 pixels and on a billboard. Avoid trends — your logo should feel as right in five years as it does today. Professional logo design services usually deliver primary, secondary, and submark versions, plus clear-space and minimum-size rules.` },

      { type: 'heading', text: 'Color: The Most Underrated Brand Asset' },
      { type: 'paragraph', text: `Color drives up to 80% of brand recognition. Choose a primary, two or three supporting colors, and neutrals. Test them for accessibility (contrast ratios) and across mediums (screen, print, signage). Document the exact values — HEX, RGB, CMYK, Pantone — in your brand guidelines so every future asset stays consistent.` },

      { type: 'heading', text: 'Typography: The Voice You Read Before You Hear' },
      { type: 'paragraph', text: `A good typography system uses one or two typefaces with a clear hierarchy — display, heading, body. Prioritize readability over personality, and license your fonts properly. Typography quietly carries more brand feeling than most owners realize.` },

      { type: 'heading', text: 'Imagery, Iconography, and Visual Style' },
      { type: 'paragraph', text: `Your photography style, illustration approach, and iconography are part of your visual identity. Decide whether you're warm or sharp, candid or styled, illustrated or photographic — and stay consistent. Inconsistency here is the single biggest reason brands feel "off-the-shelf."` },

      { type: 'heading', text: 'Brand Guidelines: The Document That Protects Your Brand' },
      { type: 'paragraph', text: `Brand guidelines are the rulebook that keeps your identity consistent as your team grows. A useful set covers logo usage, color, typography, imagery, voice and tone, and examples of correct and incorrect application. Without them, every new designer reinvents your brand a little.` },

      { type: 'heading', text: 'Consistency: Where Brand Identity Becomes Revenue' },
      { type: 'paragraph', text: `A consistent brand is perceived as more trustworthy, more established, and worth more — even when the actual business is identical. That trust shortens sales cycles and increases conversions across every channel you appear on.` },

      { type: 'heading', text: 'Build a Brand Worth Remembering' },
      { type: 'paragraph', text: `Cyvera Digitals partners with founders and growing businesses to design brand identities that are clear, distinctive, and built for the long run. From logo design services to full visual identity systems, we make sure your brand looks as good as it works.` },
    ],
  },
  {
    slug: 'social-media-management-for-business',
    title: 'Social Media Management for Business: The 2026 Growth Guide',
    metaTitle:
      'Social Media Management for Business: The 2026 Growth Guide | Cyvera Digitals',
    metaDescription:
      'A practical guide to social media management for business — covering platform strategy, content calendars, engagement, and how to turn followers into customers.',
    category: 'Social Media',
    readTime: '11 min read',
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
    content: [
      { type: 'heading', text: 'A Practical Guide to Social Media Management for Business' },
      { type: 'paragraph', text: `Most businesses don't have a "social media problem" — they have a strategy problem dressed up as one. Posting more, faster, or louder rarely fixes results. A focused social media marketing strategy, paired with disciplined execution, almost always does. This guide explains how modern social media management for business actually works, and what separates accounts that grow from accounts that drift.` },

      { type: 'heading', text: 'Start With Goals, Not Platforms' },
      { type: 'paragraph', text: `Before choosing Instagram, TikTok, LinkedIn, or X, define what success looks like. Awareness, lead generation, community building, and sales each require different content, cadence, and metrics. A social media growth plan without clear goals is just noise on a schedule.` },

      { type: 'heading', text: 'Pick the Right Platforms (Fewer Than You Think)' },
      { type: 'paragraph', text: `Most small businesses don't need to be everywhere — they need to be excellent in one or two places where their customers already spend time. Instagram marketing suits visual brands and lifestyle products. LinkedIn fits B2B and professional services. TikTok rewards personality-driven brands. Pick based on your audience, not your preference.` },

      { type: 'heading', text: 'Build a Content Calendar You Can Actually Sustain' },
      { type: 'paragraph', text: `A content calendar turns "what should we post today?" into a planned, repeatable system. A simple, sustainable structure mixes educational, behind-the-scenes, social proof, and promotional content — usually in a roughly 40/30/20/10 ratio. Plan two to four weeks ahead, batch creation days, and leave room for timely posts that respond to what's happening in your industry.` },

      { type: 'heading', text: 'Content Pillars: Stop Reinventing Every Post' },
      { type: 'paragraph', text: `Three to five content pillars — recurring themes your brand owns — make content planning dramatically easier. They also train your audience on what to expect, which compounds trust over time. Pillars take the pressure off "what should I post?" and replace it with "which pillar is this week's post about?"` },

      { type: 'heading', text: 'Engagement Is Where Growth Actually Happens' },
      { type: 'paragraph', text: `Algorithms reward conversations, not just posts. Replying to comments, answering DMs, engaging with other accounts in your niche, and starting genuine discussions consistently beats raw posting volume. Social media engagement is the unsexy work that drives almost every visible result.` },

      { type: 'heading', text: 'Turn Followers Into Customers' },
      { type: 'paragraph', text: `A social media presence only matters if it eventually moves business. Use clear calls to action, link strategies that make sense for each platform, lead magnets, and the occasional direct offer. Track which content actually drives clicks and conversions, not just likes.` },

      { type: 'heading', text: 'Measuring What Matters' },
      { type: 'paragraph', text: `Vanity metrics (likes, followers) feel good but rarely correlate with revenue. Focus on saves, shares, profile visits, link clicks, DMs, and ultimately conversions. Review monthly, adjust quarterly, and resist the urge to chase every algorithm rumor.` },

      { type: 'heading', text: 'When to Hire Social Media Management Help' },
      { type: 'paragraph', text: `If content is slipping, engagement is shallow, or strategy is unclear, professional social media management for business pays for itself quickly — not by posting more, but by posting better, more consistently, and with intention.` },

      { type: 'heading', text: 'Grow a Social Presence Worth Following' },
      { type: 'paragraph', text: `Cyvera's social media management combines strategy, design, and consistent execution to turn your platforms into genuine engines for growth — not chores you dread on Sundays.` },
    ],
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
