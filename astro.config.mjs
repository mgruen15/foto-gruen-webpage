// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.foto-gruen.de',
  integrations: [sitemap()],
  // Legacy URL support: ?rCH=±2 and ?format=feed variants are query params on the
  // same paths and are served automatically. Only paths that actually changed need a
  // redirect here.
  redirects: {
    '/spektrum/werbung': '/spektrum/werbefotografie',
    '/spektrum': '/spektrum/freisteller',
    '/produkte': '/produkte/1a-produkte',
    '/bildgalerien': '/bildgalerien/bewerbung',
  },
  image: {
    // Allow large source photos through the optimizer.
    responsiveStyles: true,
  },
});
