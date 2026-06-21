// Helper for building internal links that respect the configured `base`
// (needed because the site is served from a sub-path on GitHub Pages).
//
// import.meta.env.BASE_URL is the configured base with a trailing slash,
// e.g. "/foto-gruen-webpage/" (or "/" when no base is set).

const BASE = import.meta.env.BASE_URL;

/** Prefix a root-relative internal path with the site base. */
export function url(path: string): string {
  if (!path) return path;
  // Leave external URLs, protocol-relative links, anchors, tel:/mailto: alone.
  if (/^([a-z][a-z0-9+.-]*:|\/\/|#)/i.test(path)) return path;
  const base = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}

/** Strip the site base from a pathname (for active-link comparisons). */
export function stripBase(pathname: string): string {
  const base = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  let p = pathname;
  if (base && p.startsWith(base)) p = p.slice(base.length);
  p = p.replace(/\/$/, '');
  return p || '/';
}
