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

## Deploy to GitHub Pages

The site deploys automatically via GitHub Actions (`.github/workflows/deploy.yml`).
It is configured as a **project site** served from a sub-path:

- `astro.config.mjs`: `site: 'https://mgruen15.github.io'`, `base: '/foto-gruen-webpage'`
- Live URL: **https://mgruen15.github.io/foto-gruen-webpage/**
- All internal links go through `url()` in `src/lib/url.ts`, which prepends the base.
  If you rename the repo, change `base` and `site` — nothing else.

One-time setup:

1. Create a GitHub repo named **`foto-gruen-webpage`** (must match `base`).
2. Push this project to it:
   ```bash
   git add -A && git commit -m "Astro site"
   git branch -M main
   git remote add origin https://github.com/mgruen15/foto-gruen-webpage.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The workflow runs on every push to `main`; watch progress under the **Actions** tab.
   When it finishes, the site is live at the URL above.

> If your GitHub username is not `mgruen15`, or you use a different repo name, update
> `site`/`base` in `astro.config.mjs` and the remote URL accordingly.

### Moving to the real domain later (foto-gruen.de)

To serve from the domain root instead, set `base` back to `/` (or remove it), set
`site: 'https://www.foto-gruen.de'`, add a `public/CNAME` file containing `www.foto-gruen.de`,
point DNS (CNAME `www` → `mgruen15.github.io`) at GitHub, and re-add any legacy
`redirects` in `astro.config.mjs` (redirect destinations are not base-prefixed).

## Legacy URLs

Old query-string variants (`?rCH=±2`, `?format=feed…`) resolve automatically — they are
ignored params on the same paths. Path-change redirects (e.g. `/spektrum/werbung` →
`/spektrum/werbefotografie`) are omitted while on the sub-path deployment because Astro
does not prefix redirect destinations with `base`; re-add them when serving from the root.
