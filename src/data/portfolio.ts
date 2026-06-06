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
 *     category: "Web Development",
 *     description: "Brand site for a creative studio.",
 *     // image: "/portfolio/acme.jpg", // optional override
 *   }
 */

export type FilterCategory =
  | 'Web Development'
  | 'WordPress Web Development'
  | 'Graphic Design'
  | 'Social Media Management';

export type Project = {
  title: string;
  url: string;
  /** Display label shown on the card (free-form). */
  category?: string;
  /** Which filter tab this project belongs to. */
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
    category: "Web Development",
    filterCategory: "Web Development",
  },
  {
    title: "Beauty E-Commerce",
    url: "https://beauty-e-commerse.cyveradigitals.com/",
    category: "E-Commerce",
    filterCategory: "Web Development",
    image: "/portfolio/beauty-ecommerce.jpg",
  },
  {
    title: "Helio Grid",
    url: "https://hello-grid.cyveradigitals.com/",
    category: "Web Development",
    filterCategory: "Web Development",
  },
  {
    title: "By Kate Cristyl",
    url: "https://bykatecristyl.com/",
    category: "Brand & Web Design",
    filterCategory: "Web Development",
  },
  {
    title: "Dental App",
    url: "https://dental-app.cyveradigitals.com/",
    category: "Web Application",
    filterCategory: "Web Development",
    previewRefresh: 2,
  },
  {
    title: "Bark & Bathe Lounge",
    url: "https://bark-bathe-lounge.cyveradigitals.com/",
    category: "Web Design",
    filterCategory: "Web Development",
    image: "/portfolio/bark-bathe-lounge.png",
  },
  {
    title: "Zenith Financial Advisory",
    url: "https://zenithfinancialadvisory.jcdigital.dev/",
    category: "Wordpress Web Development",
    filterCategory: "WordPress Web Development",
    image: "/portfolio/zenith-financial-advisory.jpg",
  },
  {
    title: "BrightPath Careers",
    url: "https://brightpathcareers.jcdigital.dev/",
    category: "Wordpress Web Development",
    filterCategory: "WordPress Web Development",
    image: "/portfolio/brightpath-careers.jpg",
  },
  {
    title: "ClarityOps Consulting",
    url: "https://clarityopsconsulting.jcdigital.dev/",
    category: "Wordpress Web Development",
    filterCategory: "WordPress Web Development",
    image: "/portfolio/clarity-ops-consulting.jpg",
  },
  {
    title: "Aetheria Estates",
    url: "https://realestate-sample-site.cyveradigitals.com/",
    category: "Web Development",
    filterCategory: "Web Development",
    image: "/portfolio/aetheria-estates.png",
  },
  {
    title: "Eleanor & Adrian Wedding",
    url: "https://sample.clarkuyanguren.com/",
    category: "Wordpress Web Development",
    filterCategory: "WordPress Web Development",
    image: "/portfolio/sample-clark.jpg",
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
