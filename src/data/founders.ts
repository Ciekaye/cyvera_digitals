export interface FounderExperience {
  role: string;
  company: string;
  period: string;
  description?: string;
}

export interface Founder {
  id: string;
  slug: string;
  name: string;
  role: string;
  image: string;
  imageScale?: number;
  imageOrigin?: string;
  heroImagePosition?: string;
  bio: string;
  /** Short lead statement shown prominently below the name. */
  tagline?: string;
  /** Extended paragraphs shown on the founder's page, below the intro bio. */
  longBio?: string[];
  /** Headline stats (e.g. years of experience, projects). */
  stats?: { value: string; label: string }[];
  skills?: string[];
  quote?: string;
  experience?: FounderExperience[];
  social?: {
    linkedin?: string;
    github?: string;
    youtube?: string;
    website?: string;
    email?: string;
  };
}

export const founders: Founder[] = [
  {
    id: '1',
    slug: 'clark-kent-uyanguren',
    name: 'Clark Kent Quirante Uyanguren',
    role: 'Co-Founder — Creative, Multimedia and Operations',
    image: '/team/clark.jpg',
    imageScale: 1.25,
    imageOrigin: '50% 50%',
    heroImagePosition: '50% 50%',
    bio: 'With nearly 6 years in the industry, Clark leads the creative vision at Cyvera Digitals, translating brand ideas into design systems that feel intentional and alive.',
    tagline: 'Helping brands look credible, show up consistently, and sell more.',
    longBio: [
      "For 6 years, Clark has been the person brands call when they need visuals that actually do something, not just look pretty, but build trust, attract the right audience, and drive real results.",
      "He doesn't just design. He manages social media accounts, builds high-converting funnels, and makes sure everything works together as one system. His clients are in Europe, the UAE, Australia, and the USA, so he knows what works across different markets because he's tested it.",
    ],
    skills: ['Brand Identity', 'Creative Direction', 'UI Design', 'Visual Strategy', 'Front-End Development', 'WordPress'],
    quote: 'Design is how it works, not just how it looks.',
    social: { linkedin: '#' },
  },
  {
    id: '3',
    slug: 'lg-whinsley-malaga',
    name: 'LG Whinsley Malaga',
    role: 'Co-Founder — Client Acquisition',
    image: '/team/lg-whinsley-malaga.jpg',
    heroImagePosition: '50% 10%',
    bio: 'LG Whinsley is a full-stack Digital Marketing Strategist with 7+ years of experience taking businesses from strategy to execution across SEO, email marketing, LinkedIn marketing, webinar campaign management, social media, CRM-driven campaigns, and paid advertising. She has led 190+ B2B campaigns for enterprise clients, managing everything end-to-end, from Google Ads and Meta Ads to LinkedIn strategy, demand generation, and marketing automation.',
    tagline: 'Your breakthrough engine for leads and brand growth.',
    longBio: [
      'As a webinar campaign manager, she coordinates the full process from concept to execution, using webinars as a reliable channel for B2B lead generation.',
      'She has worked in SEO and email marketing content strategy since 2019, long before it was trendy, writing content built to rank, resonate, and convert. Along the way, she has led high-performing teams, built KPI systems, and delivered campaigns that consistently exceed lead generation targets across industries and channels.',
    ],
    skills: ['LinkedIn Strategy', 'Lead Generation', 'Webinar Management', 'Email Marketing', 'SEO Content Strategy', 'B2B Marketing', 'KPI Systems', 'Team Leadership'],
    quote: 'Strategic when it counts. Hands-on when it matters.',
    social: { linkedin: 'https://www.linkedin.com/in/lgwhnsly/' },
  },
  {
    id: '2',
    slug: 'jhon-carl-ignoro',
    name: 'Jhon Carl Bonifacio Ignoro',
    role: 'Co-Founder — Development and Technology',
    image: '/team/jhon.jpg',
    heroImagePosition: '50% 10%',
    bio: 'With 8 years of experience building and maintaining websites for businesses and agencies across the US, UK, Canada, Australia, and Europe, Jhon brings deep technical expertise to Cyvera Digitals, from hand-coded WordPress development to hosting, server administration, and technical SEO.',
    tagline: 'Fast, reliable websites built to rank and built to last.',
    longBio: [
      "He specializes in custom WordPress development and site rescues, turning slow, poorly built sites into fast, stable, high-ranking ones without relying on page-builder shortcuts.",
      'Since 2017, he has delivered and maintained websites for a wide range of clients and agencies, holding himself to a standard of near-100% uptime and passing Core Web Vitals, so what he ships keeps working long after launch.',
    ],
    skills: ['WordPress Development', 'Technical SEO', 'PHP', 'JavaScript', 'Server Administration', 'Site Rescue & Maintenance', 'Cross-Device QA'],
    quote: 'Every click is a conversation. Make it count.',
    social: { linkedin: '#' },
  },
];

export function getFounderBySlug(slug: string): Founder | undefined {
  return founders.find((f) => f.slug === slug);
}
