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
  /** Extended paragraphs shown on the founder's page, below the intro bio. */
  longBio?: string[];
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
    name: 'Clark Kent Uyanguren',
    role: 'Co-Founder & Creative Director',
    image: '/team/clark.jpg',
    imageScale: 1.25,
    imageOrigin: '50% 50%',
    heroImagePosition: '50% 50%',
    bio: 'With nearly 6 years in the industry, Clark leads the creative vision at Cyvera Digitals — translating brand ideas into design systems that feel intentional and alive.',
    skills: ['Brand Identity', 'Creative Direction', 'UI Design', 'Visual Strategy', 'Front-End Development', 'WordPress'],
    quote: 'Design is how it works, not just how it looks.',
    social: { linkedin: '#' },
  },
  {
    id: '2',
    slug: 'jhon-carl-ignoro',
    name: 'Jhon Carl Ignoro',
    role: 'Co-Founder & Growth Lead',
    image: '/team/jhon.jpg',
    heroImagePosition: '50% 10%',
    bio: 'With nearly 10 years of experience, Jhon drives growth strategy at Cyvera Digitals — connecting businesses with the right audiences through data-informed campaigns.',
    skills: ['Growth Marketing', 'Paid Media', 'SEO Strategy', 'Analytics', 'WordPress'],
    quote: 'Every click is a conversation — make it count.',
    social: { linkedin: '#' },
  },
  {
    id: '3',
    slug: 'rechcel-toledo-araneta',
    name: 'Rechcel Toledo Araneta',
    role: 'Co-Founder & Technical Lead',
    image: '/team/rechcel.jpg',
    heroImagePosition: '50% 10%',
    bio: 'A Software Developer with 3+ years of experience, Rechcel is passionate about development and technology. He architects the technical backbone of every project at Cyvera Digitals — building fast, scalable digital experiences with modern tools like React, TypeScript, and Tailwind CSS.',
    longBio: [
      'Currently building at Onlinejobs.ph, Rechcel leads the development of a real-time communication system — architecting a chat and video call platform with WebRTC, WebSockets, and modern web technologies.',
      'Beyond client work, he has taught comprehensive web development courses on Udemy, designing project-based curriculum covering both frontend and backend technologies. His full-stack range spans React, TypeScript, and Astro on the frontend to Node.js, Python, and Flask on the backend, backed by databases like MongoDB, Firebase, Supabase, and MySQL.',
    ],
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Python', 'Flask', 'WebRTC', 'WebSocket', 'Supabase', 'MongoDB', 'Full Stack Development'],
    quote: 'Good code is invisible — it just works.',
    experience: [
      {
        role: 'Software Developer',
        company: 'Onlinejobs.ph',
        period: 'Aug 2023 — Present',
        description:
          'Leading development of a real-time communication system using Flask. Architecting a chat and video call platform with WebRTC, WebSockets, and modern web technologies.',
      },
      {
        role: 'Web Development Instructor',
        company: 'Udemy',
        period: 'Jun — Aug 2023',
        description:
          'Created and taught comprehensive web development courses. Designed curriculum covering frontend and backend technologies through project-based learning.',
      },
      {
        role: 'Junior Frontend Developer',
        company: 'Purple Roof',
        period: 'Mar — May 2023',
        description:
          'Contributed to mortgage solutions platform development. Implemented and maintained user-facing features for purpleroof.com under senior developer guidance.',
      },
      {
        role: 'Backend Python Developer',
        company: 'Rooche Digital',
        period: 'Dec 2022 — Mar 2023',
        description:
          'Developed and maintained backend APIs for ecommerce clients using Python. Ensured scalability, performance, and seamless frontend integration.',
      },
    ],
    social: {
      linkedin: 'https://www.linkedin.com/in/rechcel-toledo-589252388/',
      github: 'https://github.com/phcodesage',
      youtube: 'https://www.youtube.com/@SWERech',
    },
  },
];

export function getFounderBySlug(slug: string): Founder | undefined {
  return founders.find((f) => f.slug === slug);
}
