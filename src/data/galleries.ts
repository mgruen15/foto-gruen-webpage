export type Gallery = {
  slug: string;
  title: string;
  /** Folder under images/phocagallery/<dir>/thumbs/ */
  dir: string;
  intro: string;
  /** Base filenames without the phoca_thumb_m_ / phoca_thumb_l_ prefix. */
  items: string[];
};

export const galleries: Gallery[] = [
  {
    slug: 'bewerbung',
    title: 'Bewerbung',
    dir: 'Bewerbung',
    intro:
      'Ausdrucksstarke Bewerbungs- und Businessportraits, die Persönlichkeit und Kompetenz auf den Punkt bringen.',
    items: [
      '01116267.jpg',
      '01121405.jpg',
      '01126959_sw.jpg',
      '01128206.jpg',
      '02051338felge.jpg',
      '02125076.jpg',
      '03128150sepia.jpg',
      '04184576_quad.jpg',
      '04184589_quer.jpg',
      '12114537.jpg',
      '14.jpg',
      '15.jpg',
    ],
  },
  {
    slug: 'industrie',
    title: 'Industrie',
    dir: 'Industrie',
    intro:
      'Industrie- und Architekturfotografie vor Ort – Technik, Material und Produktionswelten in Szene gesetzt.',
    items: [
      '07.jpg',
      '08.jpg',
      '08b.jpg',
      '09.jpg',
      '09b.jpg',
      '10.jpg',
      '11.jpg',
      '11b.jpg',
      '11c.jpg',
      '13.jpg',
      '14.jpg',
      '15.jpg',
      '16.jpg',
      '17.jpg',
    ],
  },
  {
    slug: 'produktfotos',
    title: 'Produktfotos',
    dir: 'Produkte',
    intro:
      'Produktfotografie mit Liebe zum Detail – freigestellt oder inszeniert, immer mit höchster Brillanz.',
    items: [
      '01.jpg',
      '02.jpg',
      '03.jpg',
      '04.jpg',
      '05.jpg',
      '06.jpg',
      '07.jpg',
      '08.jpg',
      '10.jpg',
      '11.jpg',
      '12.jpg',
      '13.jpg',
      '14.jpg',
      '15.jpg',
    ],
  },
  {
    slug: 'tiere',
    title: 'Tiere',
    dir: 'Tiere',
    intro:
      'Tierfotografie mit Charakter – Hunde, Katzen und Pferde, eingefangen im richtigen Moment.',
    items: [
      '01199767_sw.jpg',
      '09181789 .jpg',
      'hund 01063308.jpg',
      'hund 09025804.jpg',
      'katze 07045028.jpg',
      'katze 07045065.jpg',
      'katzencollage.jpg',
      'pferdecollage.jpg',
    ],
  },
  {
    slug: 'werbung',
    title: 'Werbung',
    dir: 'Werbung',
    intro:
      'Werbefotografie, die Geschichten erzählt – Bildwelten für Marken, Kampagnen und Auftritte.',
    items: [
      '01062016.jpg',
      '01063072.jpg',
      '01194011-hdr_opt.jpg',
      '03066765 titel.jpg',
      '07060931.jpg',
      '07061312.jpg',
      '07188103-5.jpg',
      '07188313-hdr.jpg',
      '11033323.jpg',
      '11183950_extquer_opt.jpg',
      '11183964_detailopt.jpg',
      'b3012_08167200.jpg',
      'dsc_0277.jpg',
      'ente.jpg',
      'h3051_08167243jpg.jpg',
      'orbitalschweigert.jpg',
      'pano_opt_web.jpg',
      'pic16.jpg',
      'schsselanhnger03052410.jpg',
      'schwamm.jpg',
    ],
  },
];

export function getGallery(slug: string): Gallery | undefined {
  return galleries.find((g) => g.slug === slug);
}
