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
  /**
   * Bump this value to force mShots to capture a fresh screenshot when the
   * site has changed but the URL hasn't (mShots caches per target URL).
   * It's appended only to the screenshot request, not the click-through link.
   */
  previewRefresh?: string | number;
};

export const projects: Project[] = [
  {
    title: "By Kate Cristyl",
    url: "https://bykatecristyl.com/",
    category: "Brand & Web Design",
  },
  {
    title: "Vireo Cardiology",
    url: "https://vireocardiology.cyveradigitals.com/",
    category: "Web Development",
  },
  {
    title: "Helio Grid",
    url: "https://hello-grid.cyveradigitals.com/",
    category: "Web Development",
  },
  {
    title: "Dental App",
    url: "https://dental-app.cyveradigitals.com/",
    category: "Web Application",
    previewRefresh: 2,
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
