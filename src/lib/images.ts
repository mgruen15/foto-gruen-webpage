import type { ImageMetadata } from 'astro';

/**
 * Eagerly import every bundled image under src/assets/images so pages and
 * components can resolve an optimized asset by its path relative to that
 * folder (e.g. "bilder/beitraege/Fotostudio Grn.jpg").
 */
const modules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/**/*.{jpg,jpeg,JPG,JPEG,png,PNG,gif,GIF}',
  { eager: true },
);

const PREFIX = '/src/assets/images/';

const map = new Map<string, ImageMetadata>();
for (const [key, mod] of Object.entries(modules)) {
  map.set(key.slice(PREFIX.length), mod.default);
}

/** Resolve an image by its path relative to src/assets/images. Throws on miss. */
export function img(relPath: string): ImageMetadata {
  const found = map.get(relPath);
  if (!found) {
    throw new Error(
      `Image not found: "${relPath}". Check the path relative to src/assets/images.`,
    );
  }
  return found;
}

/** Like img(), but returns undefined instead of throwing. */
export function tryImg(relPath: string): ImageMetadata | undefined {
  return map.get(relPath);
}
