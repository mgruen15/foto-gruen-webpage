// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
//
// Hosted on GitHub Pages as a *project* site, so the app lives under a base
// path. If you fork/rename, update `site` to https://<your-user>.github.io and
// `base` to '/<your-repo>'. Internal links go through src/lib/url.ts (url())
// which prepends import.meta.env.BASE_URL, so changing `base` is enough.
export default defineConfig({
  site: 'https://mgruen15.github.io',
  base: '/foto-gruen-webpage',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  // Note: `redirects` destinations are NOT prefixed with `base`, so they break
  // on a sub-path deployment. Re-add legacy redirects (e.g. /spektrum/werbung →
  // /spektrum/werbefotografie) only when serving from the domain root.
  image: {
    // Allow large source photos through the optimizer.
    responsiveStyles: true,
  },
});
