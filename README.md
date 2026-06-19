# Fotostudio Roland Grün — Website

Modern rebuild of the website for **Fotostudio Roland Grün**, Atelier für Fotografie
im Handwerk in Hanau-Großauheim. Built with [Astro](https://astro.build) — static-first,
minimal JavaScript, optimized images, strong SEO.

## Develop

```bash
npm install
npm run dev      # dev server at http://localhost:4321
npm run build    # static output in dist/
npm run preview  # preview the production build
```

## Structure

```
src/
  assets/images/      Photography & logos (optimized at build time)
  components/         Header + slider, Sidebar, Footer, Gallery + Lightbox,
                     ContactForm, Map, CookieConsent, PageHero, ImageGrid, ContentImage
  data/              site.ts (nav, news, contact, partners), galleries.ts
  layouts/           Layout.astro (base shell), LegalLayout.astro
  lib/images.ts      Resolves optimized images by path
  pages/             File-based routes (clean URLs, no .html)
  styles/global.css  Design system (palette, typography, motion)
public/              favicon
foto-gruen/          Original crawled Joomla site (reference only — not built)
```

## Design

Editorial minimalism: white base (`#F9F9F9`/`#FFFFFF`), deep forest green grounding
tone (`#1B3322`/`#122217`), crimson accent used sparingly (`#E42323`). Display headings
in Syne, body in Inter — both **self-hosted** (no Google Fonts CDN, better privacy).
The map uses **OpenStreetMap** (no Google Maps / API key). No analytics ship by default.

## Open TODOs (need real data from the studio)

- **Contact form delivery** — `src/components/ContactForm.astro`: the form validates fully
  (math captcha + DSGVO consent) but does not yet transmit. Wire a form service
  (Formspree/Web3Forms) or a serverless endpoint where marked `// TODO: wire delivery`.
- **Werbefotografie video** — `src/pages/spektrum/werbefotografie.astro`: replace the
  placeholder `videoUrl` with the studio's real YouTube link.
- **Impressum e-mail** — `src/pages/impressum.astro` currently points to the contact form
  in place of a public e-mail address (§5 TMG). Add the real address if one should be shown.

## Legacy URLs

Old query-string variants (`?rCH=±2`, `?format=feed…`) resolve automatically — they are
ignored params on the same paths. Path changes are handled in `astro.config.mjs`
`redirects` (e.g. `/spektrum/werbung` → `/spektrum/werbefotografie`).
