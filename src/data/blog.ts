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
  | { type: 'quote'; text: string }
  | { type: 'table'; headers: string[]; rows: string[][] };

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
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
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
      'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
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
    slug: 'cheap-website-vs-broken-website-math',
    title: 'We Sell $250 Websites. Here Is Why a Cheap Website Cost a Founder $14,000.',
    excerpt:
      'Cheap websites are not the problem. Broken ones are. Here is the hidden math of a website missing its fundamentals, and the checklist proving yours has them.',
    category: 'Web Development',
    date: '2026-06-12',
    readTime: '10 min read',
    author: 'Cyvera Digitals Team',
    image: '/blog/cheap-website-vs-broken-website-math.jpg',
    content: [
      {
        type: 'paragraph',
        text: 'Our Starter plan costs $250.',
      },
      {
        type: 'paragraph',
        text: 'So this next sentence might sound strange coming from us: a cheap website once cost a founder roughly $14,000 in lost leads.',
      },
      {
        type: 'paragraph',
        text: 'Both statements are true, and the gap between them is the most misunderstood thing in web design. Price was never the problem. What gets left out is.',
      },
      {
        type: 'paragraph',
        text: 'A founder came to us after paying for the same website five times. A freelancer patch here. A new template there. A "quick fix" from a cousin who knew WordPress. Each round cost a few hundred dollars and bought a few months of false comfort.',
      },
      {
        type: 'paragraph',
        text: 'The website never broke in a visible way. No error messages. No crashes. The damage happened quietly, one lost visitor at a time, because every build skipped the same four fundamentals.',
      },
      {
        type: 'paragraph',
        text: 'This post shows you the full math. Then we show you the checklist proving a website has the fundamentals, at any price.',
      },
      { type: 'heading', text: 'The four leaks in a broken website' },
      {
        type: 'paragraph',
        text: 'Broken websites fail in four predictable places. None of them show up on launch day. All of them show up on your revenue. And none of them are caused by a low price. They are caused by missing work.',
      },
      { type: 'heading', text: 'Leak 1: No speed optimization' },
      {
        type: 'paragraph',
        text: "Google's research found 53% of mobile visits are abandoned when a page takes longer than 3 seconds to load. The same study found mobile sites loading in 5 seconds earned almost double the mobile revenue of sites taking 19 seconds.",
      },
      {
        type: 'paragraph',
        text: "Rushed builds skip image compression, stack unnecessary plugins, and sit on crowded hosting. The average mobile page in Google's benchmark took 19 seconds to load on a 3G connection. Your visitors decide in 3.",
      },
      {
        type: 'paragraph',
        text: 'Walmart measured this on their own store: every 1-second improvement in load time lifted conversions by 2%. Speed is not a technical detail. Speed is a revenue setting, and optimizing for speed costs discipline, not thousands of dollars.',
      },
      { type: 'heading', text: 'Leak 2: No mobile design' },
      {
        type: 'paragraph',
        text: 'Mobile devices account for around 59% of all web traffic worldwide, according to StatCounter. A website built desktop-first greets the majority of your visitors with pinch-to-zoom text, broken layouts, and buy buttons buried four screens deep.',
      },
      {
        type: 'paragraph',
        text: 'These visitors do not complain. They leave. Your analytics record a bounce, and you never learn the person was ready to buy.',
      },
      {
        type: 'paragraph',
        text: 'Mobile responsive design is standard in every plan we sell, including the $250 one, because excluding the majority of your visitors is not a budget decision. Excluding them is a building error.',
      },
      { type: 'heading', text: 'Leak 3: No SEO structure' },
      {
        type: 'paragraph',
        text: 'A rushed build has no time budget for SEO fundamentals. No heading hierarchy. No meta descriptions. No image alt text. No sitemap submitted to Google.',
      },
      {
        type: 'paragraph',
        text: 'The result: your site exists, but search engines treat you as invisible. Every customer searching for your service finds a competitor instead. You then compensate with paid ads, which means the broken website forces you into a permanent advertising bill. The site was supposed to bring customers in. Instead, you pay rent to reach them.',
      },
      {
        type: 'paragraph',
        text: 'Basic SEO setup belongs in the foundation, not the upsell. A site without an SEO structure is not cheaper. The site simply bills you later, through Google Ads.',
      },
      { type: 'heading', text: 'Leak 4: Template bloat and the 12-month rebuild' },
      {
        type: 'paragraph',
        text: 'Careless builds rely on mass-market templates loaded with features nobody uses. Sliders, animations, demo pages, and plugin stacks all add weight and security holes. Within a year, one of three things happens:',
      },
      {
        type: 'list',
        items: [
          'A plugin update breaks the layout',
          'The template developer abandons support',
          'The business outgrows the structure and nothing fits anymore',
        ],
      },
      {
        type: 'paragraph',
        text: 'Then you pay for the website again. Our founder paid five times. This pattern is so common in our discovery calls we now ask about rebuild history before anything else.',
      },
      { type: 'heading', text: 'The $14,000 math, line by line' },
      {
        type: 'paragraph',
        text: "Here is how a broken website turns into a five-figure loss. The numbers below use the founder's real traffic, with conservative assumptions throughout.",
      },
      {
        type: 'paragraph',
        text: 'His business: a B2B service with an average client value of $1,200.',
      },
      {
        type: 'table',
        headers: ['Line item', 'The math', 'Annual cost'],
        rows: [
          [
            'Speed abandonment',
            '1,000 monthly visitors, 53% lost to slow load = 530 lost visits/month',
            '6,360 lost visits',
          ],
          [
            'Mobile bounce',
            'Of remaining 470, 59% arrive on mobile and meet a broken layout. 60% of them bounce immediately = 166 more lost visits/month',
            '1,992 lost visits',
          ],
          [
            'Conversion on survivors',
            '~304 usable visits/month at a weak 1% conversion = 3 leads/month instead of a realistic 10+ on a working site',
            '7+ lost leads/month',
          ],
          [
            'Lead value',
            '7 lost leads × 12 months × 20% close rate × $1,200 client value',
            '$20,160 potential',
          ],
          [
            'Conservative haircut',
            'Cut the estimate by 30% for optimism bias',
            '~$14,000',
          ],
        ],
      },
      {
        type: 'paragraph',
        text: 'Add the repeat build costs across five attempts, plus months of lost compounding from an invisible site.',
      },
      {
        type: 'paragraph',
        text: 'Notice what is absent from this table: the original purchase price. The math punishes missing fundamentals identically whether the invoice said $250 or $2,500. We have audited expensive sites leaking from all four holes, and modest sites sealed tight. Price predicts nothing. The build checklist predicts everything.',
      },
      { type: 'heading', text: 'A website is your hardest-working salesperson' },
      {
        type: 'paragraph',
        text: 'Picture hiring a salesperson with these traits:',
      },
      {
        type: 'list',
        items: [
          'Works 24 hours a day, 7 days a week',
          'Greets every single prospect before you do',
          'Never takes a holiday, never calls in sick',
          'Forms the first impression for 100% of your inbound interest',
        ],
      },
      {
        type: 'paragraph',
        text: 'A salesperson succeeds with the right equipment: a clear pitch, a fast response, the ability to meet customers where they are. Strip away the equipment and the most expensive salesperson in the world still loses deals.',
      },
      {
        type: 'paragraph',
        text: 'Here is the reframe behind everything we build: a website is not an expense on your books. A website is a salesperson on your payroll. The question is never "how little did the salesperson cost?" The question is "does the salesperson have what they need to close?"',
      },
      { type: 'heading', text: 'What "fundamentals included" looks like, at any price' },
      {
        type: 'paragraph',
        text: 'An affordable build done right is not a stripped-down version of a real website. The fundamentals stay in. The scope shrinks instead: fewer pages, simpler features, leaner design. Here is the non-negotiable list:',
      },
      {
        type: 'list',
        items: [
          "Performance budget. Images compressed, code clean, hosting matched to traffic. Target: under 3 seconds on mobile, because Google's data shows half your visitors leave after second three.",
          'Mobile-first layout. Designed for the 59% majority first, then scaled up to desktop. Buy buttons above the fold on a phone screen.',
          'SEO foundation from day one. Heading structure, metadata, and page copy written around the phrases your customers type into Google.',
          "One job per page. A clear headline naming the customer's problem, one primary call to action, and a path from landing to enquiry with no detours.",
          'Built to grow. A structure your business scales into, not out of. Add pages later. Never rebuild the foundation.',
        ],
      },
      {
        type: 'paragraph',
        text: "This is exactly how a $250 Starter project earns more than a $2,000 site missing the list. A 0.5-second delay cut traffic by 20% in Google's testing. Decisions this small separate a site earning leads from a site burning them, and these decisions cost discipline, not money.",
      },
      { type: 'heading', text: 'Is your website leaking? A 5-minute self-audit' },
      {
        type: 'paragraph',
        text: 'Run these checks on your own site today, whatever you paid for the build:',
      },
      {
        type: 'list',
        items: [
          'The 3-second test. Open your site on your phone using mobile data, not Wi-Fi. Count the seconds before you see usable content. Over 3? You lose half your visitors before hello.',
          'The thumb test. On your phone, find your main call to action without scrolling. Hidden below the fold? Your salesperson mumbles.',
          'The 5-second headline test. Show your homepage to a stranger for 5 seconds. Ask what your business does and why anyone should care. Hesitation means your message fails.',
          'The Google test. Search the exact phrase a customer would use to find your service. Not your brand name, the problem phrase. Absent from page one? Your SEO structure is missing.',
          'The shame test. Do you hesitate before sharing your own link? Your gut already audited the site for you.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Fail two or more checks and your website is costing you customers right now, regardless of what the invoice said.',
      },
      { type: 'heading', text: 'Frequently asked questions' },
      { type: 'heading', text: 'Can a $250 website convert customers?' },
      {
        type: 'paragraph',
        text: 'Yes, when the fundamentals are included: mobile responsive design, speed discipline, basic SEO setup, and one clear call to action. The low price should reflect a smaller scope, never missing foundations. Ask any provider to show you the fundamentals checklist before you compare prices.',
      },
      { type: 'heading', text: 'Why do some cheap websites fail then?' },
      {
        type: 'paragraph',
        text: 'Because the price reflected skipped work rather than reduced scope. A 5-page site built properly beats a 30-page site built carelessly. Compare what each quote includes, not the number on the invoice.',
      },
      { type: 'heading', text: 'Is a redesign always the answer?' },
      {
        type: 'paragraph',
        text: 'No. Many sites need three fixes first: a headline naming the customer problem, compressed images for speed, and one clear call to action per page. Run those changes, measure 30 days, then decide.',
      },
      { type: 'heading', text: 'How do I measure what my current site loses?' },
      {
        type: 'paragraph',
        text: 'Open Google Analytics. Look at mobile bounce rate, average load time, and conversion rate. Multiply lost visitors by your average lead value. The number tells you whether your site needs fixes, a rebuild, or nothing at all.',
      },
      { type: 'heading', text: 'Equip your salesperson properly' },
      {
        type: 'paragraph',
        text: 'The founder with five failed builds now runs a site with all four leaks sealed. Same business. Same offer. Same traffic sources. The difference: 2.4x more enquiries within 60 days.',
      },
      {
        type: 'paragraph',
        text: 'Your website greets every prospect you will ever earn. Before your pitch, before your pricing, before your name registers, your site has already spoken for you.',
      },
      {
        type: 'quote',
        text: 'The price tag never closes deals. The fundamentals do.',
      },
      {
        type: 'paragraph',
        text: 'Make sure your hardest-working salesperson has them.',
      },
      {
        type: 'paragraph',
        text: "Want the leaks found in your site? Book a free 15-minute teardown with Cyvera Digitals. No pitch. We show you the three biggest fixes, and you decide what happens next. And yes, properly built websites start at $250. See exactly what's included on our pricing page.",
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
