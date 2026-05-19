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

export type Project = {
  title: string;
  url: string;
  category?: string;
  description?: string;
  /** Optional manual image override. If unset, falls back to mShots. */
  image?: string;
};

export const projects: Project[] = [
  {
    title: "By Kate Cristyl",
    url: "https://bykatecristyl.com/",
    category: "Brand & Web Design",
  },
  {
    title: "Dental App",
    url: "https://dental-app.cyveradigitals.com/",
    category: "Web Application",
  },
  {
    title: "Hello Grid Solar",
    url: "https://hello-grid-solar-cyvera.vercel.app/",
    category: "Web Development",
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
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(
    project.url
  )}?w=${width}&h=${height}`;
}
