/**
 * Blog posts for the Resources page.
 *
 * To add a new post, append a BlogPost object to the `posts` array below.
 * `slug` becomes the URL at /resources/<slug>. Body content is an ordered
 * list of typed blocks rendered by the article page — no markdown parser
 * needed. Hero images use Unsplash (whitelisted in next.config.js).
 */

export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'quote'; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  /** One-line summary used on cards and as the SEO meta description. */
  excerpt: string;
  category: string;
  date: string; // ISO yyyy-mm-dd
  readTime: string;
  author: string;
  image: string;
  content: ContentBlock[];
};

export const posts: BlogPost[] = [
  {
    slug: 'signs-your-website-needs-a-redesign',
    title: '5 Signs Your Website Needs a Redesign',
    excerpt:
      "Your website is your hardest-working salesperson. Here are five clear signals it's quietly costing you customers — and what to do about each one.",
    category: 'Web Design',
    date: '2026-05-02',
    readTime: '6 min read',
    author: 'Cyvera Digitals Team',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        type: 'paragraph',
        text: "Most business owners don't redesign their website because it's broken — they redesign it because it stopped working for them, slowly, over a couple of years. Trends shift, expectations rise, and a site that felt modern at launch starts to feel dated without a single line of code changing. The tricky part is knowing when \"good enough\" has quietly become \"actively losing you business.\"",
      },
      {
        type: 'paragraph',
        text: "If any of the five signs below feel familiar, your website is probably due for a refresh. The good news: each one is fixable, and the return on a well-executed redesign usually shows up fast.",
      },
      { type: 'heading', text: '1. It looks broken on mobile' },
      {
        type: 'paragraph',
        text: "More than half of all web traffic now comes from phones. If visitors have to pinch, zoom, or scroll sideways to read your content, most of them will leave before they ever reach your offer. A mobile-first redesign isn't a nice-to-have anymore — it's the baseline for being taken seriously.",
      },
      { type: 'heading', text: '2. It loads slowly' },
      {
        type: 'paragraph',
        text: "Speed is a feature. Studies consistently show that conversions drop sharply for every additional second a page takes to load, and search engines factor speed into rankings. If your site is weighed down by oversized images, bloated plugins, or outdated code, you're paying for that lag in lost leads.",
      },
      { type: 'heading', text: '3. It no longer reflects your brand' },
      {
        type: 'paragraph',
        text: "Businesses evolve. Maybe your services have matured, your audience has shifted, or your visual identity has leveled up everywhere except your website. When your site tells a different story than the rest of your brand, it creates a credibility gap that visitors feel even if they can't name it.",
      },
      { type: 'heading', text: "4. You can't update it yourself" },
      {
        type: 'paragraph',
        text: "If changing a phone number or adding a new service means emailing a developer and waiting three days, your website is working against you. Modern sites are built to be managed by the people who run the business — quickly, safely, and without breaking the layout.",
      },
      { type: 'heading', text: "5. It isn't generating leads" },
      {
        type: 'paragraph',
        text: "This is the one that matters most. A website should do a job: capture attention, build trust, and move people toward contacting you or buying. If yours is essentially a digital business card that nobody acts on, the problem usually isn't traffic — it's that the site was never designed to convert.",
      },
      {
        type: 'paragraph',
        text: 'Watch for these quick tells that a redesign will pay off:',
      },
      {
        type: 'list',
        items: [
          'Your bounce rate is high and time-on-page is low',
          'Competitors look noticeably more polished than you',
          'You feel embarrassed sending people to your own site',
          'Analytics show visitors but almost no inquiries',
          "The design hasn't meaningfully changed in 3+ years",
        ],
      },
      {
        type: 'quote',
        text: "A redesign isn't about chasing the newest trend — it's about removing every reason a potential customer has to leave.",
      },
      {
        type: 'paragraph',
        text: "If you recognized your site in two or three of these, it's worth a conversation. At Cyvera Digitals we start every redesign by understanding what your site needs to accomplish — then we build something that looks the part and actually performs.",
      },
    ],
  },
  {
    slug: 'mobile-first-design-2026',
    title: 'Why Mobile-First Design Matters in 2026',
    excerpt:
      'Over 60% of web traffic comes from mobile — yet most sites are still designed for the desktop first. Here is why flipping that order changes everything.',
    category: 'UI/UX',
    date: '2026-04-18',
    readTime: '5 min read',
    author: 'Cyvera Digitals Team',
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        type: 'paragraph',
        text: 'Mobile-first design means exactly what it sounds like: you design the phone experience before the desktop one, not after. It feels backwards to teams used to designing on big screens, but it produces dramatically better results — because it forces clarity from the very first decision.',
      },
      { type: 'heading', text: 'The majority of your visitors are on a phone' },
      {
        type: 'paragraph',
        text: "For most small and growing businesses, well over half of website visits happen on mobile. When you design desktop-first and then \"squish\" it down to fit a phone, the mobile experience — the one most people actually have — becomes an afterthought. Mobile-first reverses that priority so your biggest audience gets your best work.",
      },
      { type: 'heading', text: 'Constraints create clarity' },
      {
        type: 'paragraph',
        text: "A phone screen has no room for clutter. When you start there, you're forced to answer hard questions early: What's the single most important message? What's the one action we want visitors to take? That discipline produces pages that are easier to use on every device, not just the small one.",
      },
      { type: 'heading', text: 'Google rewards it' },
      {
        type: 'paragraph',
        text: 'Search engines now use the mobile version of your site as the primary basis for ranking. A fast, well-structured mobile experience directly supports your visibility in search. A clunky one quietly holds you back, no matter how good your desktop site looks.',
      },
      { type: 'heading', text: 'What great mobile-first design actually looks like' },
      {
        type: 'list',
        items: [
          'Thumb-friendly buttons and navigation that are easy to tap',
          'Content prioritized so the most important message comes first',
          'Fast loading on cellular connections, not just office Wi-Fi',
          'Forms that are short and effortless to complete on a phone',
          'Text large enough to read without zooming',
        ],
      },
      {
        type: 'quote',
        text: 'Design for the smallest screen first and the experience scales up beautifully. Do it the other way and something always breaks.',
      },
      {
        type: 'paragraph',
        text: "If your current site was clearly built for desktop and patched for mobile, your customers can tell. Designing mobile-first is one of the highest-leverage changes you can make — and it's baked into everything we build at Cyvera Digitals.",
      },
    ],
  },
  {
    slug: 'consistent-branding-online',
    title: 'The Power of Consistent Branding Across Every Platform',
    excerpt:
      'A unified brand identity builds trust faster than any ad. Here is why consistency across your site, social, and content quietly drives loyalty — and revenue.',
    category: 'Branding',
    date: '2026-04-03',
    readTime: '6 min read',
    author: 'Cyvera Digitals Team',
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        type: 'paragraph',
        text: "Your brand isn't your logo. It's the feeling people get every time they encounter your business — on your website, in their Instagram feed, in your emails, on your invoices. When that feeling is consistent, it builds something powerful: recognition. And recognition is the shortcut to trust.",
      },
      { type: 'heading', text: 'Consistency signals reliability' },
      {
        type: 'paragraph',
        text: "When your colors, typography, tone, and imagery line up across every touchpoint, you look organized, established, and dependable. When they don't, visitors feel a subtle friction — a sense that something is off — even if they can't articulate why. In a crowded market, that friction is the difference between \"I trust these people\" and \"I'll keep looking.\"",
      },
      { type: 'heading', text: 'It makes you memorable' },
      {
        type: 'paragraph',
        text: 'People rarely buy the first time they see you. They buy after the third, fifth, or tenth touchpoint — and only if they remember you between them. Consistent branding is what links all those touchpoints together into a single, memorable impression instead of a series of forgettable ones.',
      },
      { type: 'heading', text: 'The building blocks of a consistent brand' },
      {
        type: 'list',
        items: [
          'A defined color palette used everywhere, every time',
          'One or two typefaces with clear rules for headings and body text',
          'A logo with proper spacing and approved variations',
          'A consistent voice — how you sound in words, not just how you look',
          'Templates for social posts so every piece feels related',
        ],
      },
      {
        type: 'quote',
        text: 'Brands that present themselves consistently across platforms are far more likely to be remembered — and remembered brands get chosen.',
      },
      { type: 'heading', text: 'Consistency is not the same as boring' },
      {
        type: 'paragraph',
        text: "A strong brand system gives you freedom, not limits. Once the core rules are set, you can create dozens of fresh posts, pages, and campaigns that still feel unmistakably you. That's the goal: variety on the surface, consistency underneath.",
      },
      {
        type: 'paragraph',
        text: 'If your business looks like a different company on every platform, you are leaving trust — and sales — on the table. A cohesive brand identity is one of the most cost-effective investments you can make, and it is the foundation of everything we design at Cyvera Digitals.',
      },
    ],
  },
  {
    slug: 'seo-basics-for-small-business',
    title: 'SEO Basics Every Small Business Owner Should Know',
    excerpt:
      'You do not need a big budget to show up in search. These practical SEO fundamentals help small businesses get found by the right customers.',
    category: 'SEO',
    date: '2026-03-20',
    readTime: '7 min read',
    author: 'Cyvera Digitals Team',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        type: 'paragraph',
        text: "Search engine optimization sounds technical and intimidating, but the fundamentals are surprisingly approachable. You don't need to outspend big competitors — you need to be clear, relevant, and genuinely useful to the people searching for what you offer. Here's the foundation every small business should have in place.",
      },
      { type: 'heading', text: 'Start with the words your customers use' },
      {
        type: 'paragraph',
        text: 'SEO begins with language. Think about what a real customer types into Google when they need you — not industry jargon, but plain words like "wedding photographer near me" or "affordable accountant for small business." Use those phrases naturally in your page titles, headings, and content. You are matching your words to their search.',
      },
      { type: 'heading', text: 'Give every page a clear job' },
      {
        type: 'paragraph',
        text: 'Search engines reward focus. Each page should target one main topic and answer it thoroughly. A single page trying to cover everything ranks for nothing; a page that clearly answers one question well can rank for years.',
      },
      { type: 'heading', text: 'The fundamentals worth getting right' },
      {
        type: 'list',
        items: [
          'Descriptive page titles and meta descriptions for every page',
          'One clear H1 heading per page that states the topic',
          'Fast load times and a mobile-friendly layout',
          'Descriptive image file names and alt text',
          'A Google Business Profile if you serve a local area',
          'Genuinely helpful content that answers real questions',
        ],
      },
      { type: 'heading', text: 'Local SEO is your secret weapon' },
      {
        type: 'paragraph',
        text: "If you serve a specific area, local SEO levels the playing field. A complete Google Business Profile, consistent name-address-phone details across the web, and a few honest customer reviews can put you ahead of much larger competitors for the searches that actually bring in business.",
      },
      {
        type: 'quote',
        text: "The best SEO strategy for a small business is simple: be the most genuinely useful answer to the questions your customers are already asking.",
      },
      {
        type: 'paragraph',
        text: "SEO is a long game, but the basics compound over time. Get the foundation right and every new page, review, and piece of content adds to your visibility. If you'd like a site built with these fundamentals baked in from day one, that's exactly how we approach every project at Cyvera Digitals.",
      },
    ],
  },
  {
    slug: 'ux-design-impacts-revenue',
    title: 'How Good UI/UX Design Directly Impacts Your Revenue',
    excerpt:
      'Design is not decoration — it is how customers decide whether to trust you and buy. Here is the direct line between user experience and your bottom line.',
    category: 'UI/UX',
    date: '2026-03-06',
    readTime: '6 min read',
    author: 'Cyvera Digitals Team',
    image:
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        type: 'paragraph',
        text: "There's a common myth that design is the \"pretty\" layer you add at the end. In reality, design is how your product works — and how it works determines whether people buy. Good UI/UX isn't an aesthetic choice; it's a revenue decision.",
      },
      { type: 'heading', text: 'Every point of friction costs you a sale' },
      {
        type: 'paragraph',
        text: "Imagine a customer ready to buy, but your checkout has one confusing step too many, or your contact form asks for information they don't want to give. Each small friction point leaks a percentage of ready-to-buy customers. Great UX is the practice of finding and removing those leaks so motivated visitors actually convert.",
      },
      { type: 'heading', text: 'Trust is designed, not declared' },
      {
        type: 'paragraph',
        text: "You can't just tell people you're professional — they decide that in the first few seconds based on how your site looks and feels. Clean layouts, clear navigation, and thoughtful details signal competence. A confusing or dated interface signals the opposite, no matter how good your actual service is.",
      },
      { type: 'heading', text: 'What strong UX delivers' },
      {
        type: 'list',
        items: [
          'Higher conversion rates from the same amount of traffic',
          'Fewer support questions because the product explains itself',
          'More repeat visits and referrals from satisfied users',
          'Lower ad costs, because more visitors take action',
          'A brand reputation that compounds over time',
        ],
      },
      {
        type: 'quote',
        text: 'You can double your results without doubling your traffic — by designing an experience that converts the visitors you already have.',
      },
      { type: 'heading', text: 'Good design pays for itself' },
      {
        type: 'paragraph',
        text: 'Because UX improvements act as a multiplier on every visitor, the return is rarely a one-time bump — it keeps compounding as long as the site is live. That is why we treat UI/UX as a core part of strategy at Cyvera Digitals, not a finishing touch. The goal is always the same: make it effortless for the right people to say yes.',
      },
    ],
  },
  {
    slug: 'social-media-that-converts',
    title: 'Building a Social Media Presence That Actually Converts',
    excerpt:
      'Followers are vanity; customers are the goal. Here is how to turn a social media presence into a genuine engine for leads and sales.',
    category: 'Social Media',
    date: '2026-02-19',
    readTime: '6 min read',
    author: 'Cyvera Digitals Team',
    image:
      'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        type: 'paragraph',
        text: "It's easy to confuse activity with progress on social media. You post consistently, you gain a few followers, you get the occasional like — but none of it shows up in revenue. The problem usually isn't effort; it's strategy. A presence that converts is built differently from one that just exists.",
      },
      { type: 'heading', text: 'Pick the platforms where your customers actually are' },
      {
        type: 'paragraph',
        text: "You don't need to be everywhere. You need to be excellent where your audience already spends time. A B2B consultancy lives on LinkedIn; a visual brand thrives on Instagram and TikTok. Spreading yourself thin across every platform almost always beats doing one well — so resist the urge.",
      },
      { type: 'heading', text: 'Lead with value, not with selling' },
      {
        type: 'paragraph',
        text: "People don't open social apps to be sold to — they open them to learn, laugh, or be inspired. The accounts that convert give first: useful tips, behind-the-scenes moments, genuine stories. When you've earned attention and trust, the occasional clear call to action lands far harder than constant promotion ever could.",
      },
      { type: 'heading', text: 'A simple framework that works' },
      {
        type: 'list',
        items: [
          'Educate: teach your audience something they can use today',
          'Inspire: show transformations, results, and what is possible',
          'Connect: share the people and story behind your brand',
          'Convert: make a clear, specific offer — but only sometimes',
          'Engage: reply to comments and DMs like a real human',
        ],
      },
      {
        type: 'quote',
        text: "A follower who trusts you is worth a hundred who don't. Build for trust, and conversions follow.",
      },
      { type: 'heading', text: 'Consistency beats intensity' },
      {
        type: 'paragraph',
        text: "A burst of ten posts followed by three weeks of silence trains the algorithm — and your audience — to forget you. A steady, sustainable rhythm keeps you visible and builds the familiarity that turns strangers into customers. That's the unglamorous secret behind almost every account that actually drives business.",
      },
      {
        type: 'paragraph',
        text: 'If managing all of this on top of running your business feels like too much, that is exactly the work we take off your plate at Cyvera Digitals — strategy, content, and engagement designed to grow more than just your follower count.',
      },
    ],
  },
  {
    slug: 'wordpress-vs-custom-development',
    title: 'WordPress vs. Custom Development: Which Is Right for You?',
    excerpt:
      'Both can build a great website — but they suit very different businesses. Here is an honest comparison to help you choose the right foundation.',
    category: 'Web Development',
    date: '2026-02-05',
    readTime: '7 min read',
    author: 'Cyvera Digitals Team',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        type: 'paragraph',
        text: "One of the first real decisions in any web project is the foundation: a content management system like WordPress, or a custom-built application. There's no universally \"better\" answer — only the right fit for your goals, budget, and how you plan to grow. Here's how to think about it clearly.",
      },
      { type: 'heading', text: 'When WordPress is the smart choice' },
      {
        type: 'paragraph',
        text: 'WordPress powers a huge share of the web for good reason. It is cost-effective, fast to launch, and easy for non-technical teams to update. For business websites, blogs, portfolios, and many online stores, it offers everything you need without reinventing the wheel.',
      },
      {
        type: 'list',
        items: [
          'You want to manage and update content yourself',
          'You need to launch on a reasonable timeline and budget',
          'Your needs are well served by proven, established features',
          'You value a large ecosystem of themes and integrations',
        ],
      },
      { type: 'heading', text: 'When custom development wins' },
      {
        type: 'paragraph',
        text: 'Custom development means building exactly what you need from the ground up. It costs more and takes longer, but it removes the constraints of any platform. When your product is the website — or your workflows are genuinely unique — custom is often the only option that truly fits.',
      },
      {
        type: 'list',
        items: [
          'You are building a web app, SaaS product, or complex platform',
          'You need bespoke functionality no plugin can deliver well',
          'Performance and scalability are mission-critical',
          'You want full control over every detail of the experience',
        ],
      },
      {
        type: 'quote',
        text: "Don't choose the tool first and force your business to fit it. Define what you need, then choose the foundation that serves it best.",
      },
      { type: 'heading', text: 'The honest answer for most businesses' },
      {
        type: 'paragraph',
        text: 'For the majority of small and growing businesses, a well-built WordPress site delivers everything they need at a fraction of the cost. The moment your ambitions outgrow what a CMS can comfortably do, custom development becomes worth the investment. The key is being honest about which stage you are actually at.',
      },
      {
        type: 'paragraph',
        text: 'At Cyvera Digitals we build with both, which means our recommendation is never tied to a single tool — only to what will serve your business best. If you are weighing the decision, we are happy to talk it through with no obligation.',
      },
    ],
  },
  {
    slug: 'cost-of-a-cheap-website',
    title: 'The Real Cost of a Cheap Website',
    excerpt:
      'A bargain website can be the most expensive thing you ever buy. Here is the hidden math behind cutting corners on your most important sales tool.',
    category: 'Web Development',
    date: '2026-01-22',
    readTime: '5 min read',
    author: 'Cyvera Digitals Team',
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        type: 'paragraph',
        text: "Everyone loves a deal — and when a website can be had for a few hundred dollars from a template mill or a freelancer's quickest gig, it's tempting. But a website isn't a one-time purchase; it's a tool that works for your business every single day. And cheap tools have a way of becoming expensive ones.",
      },
      { type: 'heading', text: 'The cost you see vs. the cost you pay' },
      {
        type: 'paragraph',
        text: "The sticker price of a cheap website is only the beginning. The real costs show up later: customers who bounce because the site looks untrustworthy, leads lost to a broken contact form, hours wasted fighting a system you can't update, and eventually paying again to rebuild it properly. Cheap usually means twice.",
      },
      { type: 'heading', text: 'What corners usually get cut' },
      {
        type: 'list',
        items: [
          'Strategy — no thought given to what the site should achieve',
          'Performance — slow load times that quietly drive visitors away',
          'Mobile experience — an afterthought, not a priority',
          'SEO foundations — invisible to search from day one',
          'Support — no one to call when something breaks',
        ],
      },
      { type: 'heading', text: 'Your website is a salesperson, not a brochure' },
      {
        type: 'paragraph',
        text: "Think of your site the way you'd think of hiring. A great salesperson who works 24/7, never calls in sick, and represents you perfectly is worth investing in. A cheap one who turns customers away at the door costs you far more than their low salary ever saved. Your website is exactly that salesperson.",
      },
      {
        type: 'quote',
        text: 'A good website is an investment that pays you back. A cheap one is an expense that keeps charging you.',
      },
      {
        type: 'paragraph',
        text: "None of this means you need to overspend — it means you should spend deliberately, on the things that actually drive results. That's the balance we aim for at Cyvera Digitals: websites built to perform, priced to make sense for real businesses.",
      },
    ],
  },
];

/** Returns a single post by slug, or undefined if not found. */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

/** Posts sorted newest-first for listing pages. */
export function getSortedPosts(): BlogPost[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}
