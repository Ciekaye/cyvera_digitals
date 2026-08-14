/**
 * Portfolio entries.
 *
 * To add a new website to the portfolio, append one object to the `projects`
 * array below. Only `title` and `url` are required — everything else is
 * optional. The screenshot is generated automatically from the URL via
 * WordPress mShots; pass `image` only if you want to override with a manual
 * screenshot (e.g. a file in `public/portfolio/your-site.jpg`).
 *
 * Example:
 *   {
 *     title: "Acme Studios",
 *     url: "https://acmestudios.com",
 *     filterCategory: "Custom Website Development",
 *     description: "Brand site for a creative studio.",
 *     // image: "/portfolio/acme.jpg", // optional override
 *   }
 */

export type FilterCategory =
  | 'Custom Website Development'
  | 'WordPress Website Development'
  | 'Graphic Design'
  | 'Social Media Management';

export type Project = {
  title: string;
  url: string;
  /**
   * Which filter tab this project belongs to. Doubles as the label shown on
   * the card, so a project only ever carries one category value.
   */
  filterCategory?: FilterCategory;
  description?: string;
  /** Optional manual image override. If unset, falls back to mShots. */
  image?: string;
  /**
   * Bump this value to force mShots to capture a fresh screenshot when the
   * site has changed but the URL hasn't (mShots caches per target URL).
   * It's appended only to the screenshot request, not the click-through link.
   */
  previewRefresh?: string | number;
};

export const projects: Project[] = [
  {
    title: "Vireo Cardiology",
    url: "https://vireocardiology.cyveradigitals.com/",
    filterCategory: "Custom Website Development",
    description: "A multi-location cardiology practice site with physician profiles, service and condition pages, patient portal links, and online appointment booking.",
    image: "/portfolio/vireo-cardiology.jpg",
  },
  {
    title: "Beauty E-Commerce",
    url: "https://beauty-e-commerse.cyveradigitals.com/",
    filterCategory: "Custom Website Development",
    description: "A luxury skincare storefront with a filterable product catalog, cart and checkout, an ingredient explorer, and a guided skin-consultation quiz.",
    image: "/portfolio/beauty-ecommerce.jpg",
  },
  {
    title: "By Kate Cristyl",
    url: "https://bykatecristyl.com/",
    filterCategory: "Custom Website Development",
    description: "A social media manager's personal brand site covering services, process, and portfolio work, with an enquiry form for new client projects.",
    image: "/portfolio/by-kate-cristyl.jpg",
  },
  {
    title: "Helio Grid",
    url: "https://hello-grid.cyveradigitals.com/",
    filterCategory: "Custom Website Development",
    description: "A premium solar installer's site pairing a design-led project gallery with service pages, performance stats, and a consultation booking flow.",
    image: "/portfolio/helio-grid.jpg",
  },
  {
    title: "Dental App",
    url: "https://dental-app.cyveradigitals.com/",
    filterCategory: "Custom Website Development",
    description: "A patient-facing dental booking app with account sign-up, live appointment availability, and a secure dashboard for rescheduling and visit history.",
    image: "/portfolio/dental-app.jpg",
  },
  {
    title: "Bark & Bathe Lounge",
    url: "https://bark-bathe-lounge.cyveradigitals.com/",
    filterCategory: "Custom Website Development",
    description: "A cage-free pet grooming salon site with an interactive spa pricing estimator, a facility tour, client testimonials, and a booking FAQ.",
    image: "/portfolio/bark-bathe-lounge.jpg",
  },
  {
    title: "Zenith Financial Advisory",
    url: "https://zenithfinancialadvisory.jcdigital.dev/",
    filterCategory: "WordPress Website Development",
    description: "A remote-first financial advisory site for freelancers and digital nomads, with service pages, case studies, an income allocation calculator, and consultation booking.",
    image: "/portfolio/zenith-financial-advisory.jpg",
  },
  {
    title: "BrightPath Careers",
    url: "https://brightpathcareers.jcdigital.dev/",
    filterCategory: "WordPress Website Development",
    description: "A career coaching site for remote job seekers, with resume, LinkedIn and interview service pages, client success stories, and a free resume checklist.",
    image: "/portfolio/brightpath-careers.jpg",
  },
  {
    title: "ClarityOps Consulting",
    url: "https://clarityopsconsulting.jcdigital.dev/",
    filterCategory: "WordPress Website Development",
    description: "An operations consulting site for founders and remote teams, with detailed service pages, case studies, downloadable guides, and a clarity call booking flow.",
    image: "/portfolio/clarity-ops-consulting.jpg",
  },
  {
    title: "Aetheria Estates",
    url: "https://realestate-sample-site.cyveradigitals.com/",
    filterCategory: "Custom Website Development",
    description: "An ultra-luxury real estate site with a curated property portfolio, an off-market listings vault, advisory services, and private viewing requests.",
    image: "/portfolio/aetheria-estates.jpg",
  },
  {
    title: "Eleanor & Adrian Wedding",
    url: "https://sample.clarkuyanguren.com/",
    filterCategory: "WordPress Website Development",
    description: "A wedding site for invited guests, with the couple's story, event schedule, photo gallery, live countdown, and an RSVP form capturing party size and dietary needs.",
    image: "/portfolio/eleanor-adrian-wedding.jpg",
  },
  {
    title: 'Roofing Lead Gen Website',
    url: 'https://roofing-leadgen-funnel.clarkuyanguren.com/',
    filterCategory: 'WordPress Website Development',
    description: "A roofing contractor's lead generation site built around a free 15-point inspection offer, with a multi-step qualification form, project case studies, and testimonials.",
    image: '/portfolio/roofing-leadgen-funnel.jpg',
  },
];

/**
 * Returns the preview image URL for a project.
 * - If `project.image` is set, returns it (manual override).
 * - Otherwise returns a WordPress mShots screenshot URL for `project.url`.
 */
export function getPreviewUrl(
  project: Project,
  width = 1200,
  height = 900
): string {
  if (project.image) return project.image;

  // mShots caches per target URL. If previewRefresh is set, append it to the
  // target URL so mShots treats it as a new capture (the click link is
  // unaffected — that uses project.url directly).
  let target = project.url;
  if (project.previewRefresh !== undefined) {
    const sep = target.includes('?') ? '&' : '?';
    target = `${target}${sep}_r=${project.previewRefresh}`;
  }

  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(
    target
  )}?w=${width}&h=${height}`;
}
