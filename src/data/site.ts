export const site = {
  name: 'Fotostudio Roland Grün',
  tagline: 'Atelier für Fotografie im Handwerk',
  city: 'Hanau-Großauheim',
  meister: 'Meisterbetrieb',
  url: 'https://www.foto-gruen.de',
  description:
    'Fotostudio Roland Grün, Atelier für Fotografie im Handwerk in Hanau - Großauheim.',
  keywords:
    'Foto, Fotostudio, Grün, Fotograf, Fotoatelier, Portraitfoto, Hanau, Passbild, Bewerbungsfoto, Businessportrait, Industriefotografie, Werbefotografie',
};

export const contact = {
  studio: 'Fotostudio Roland Grün',
  street: 'Lise-Meitner-Straße 36',
  zip: '63457',
  town: 'Hanau-Großauheim',
  phone: '06181 956292',
  phoneHref: 'tel:+496181956292',
  fax: '06181 956293',
  web: 'https://www.foto-gruen.de',
  webLabel: 'www.foto-gruen.de',
};

export type NavChild = { label: string; href: string; external?: boolean };
export type NavItem = {
  label: string;
  href?: string;
  external?: boolean;
  children?: NavChild[];
};

export const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Spektrum',
    href: '/spektrum/freisteller',
    children: [
      { label: 'Freisteller', href: '/spektrum/freisteller' },
      { label: 'Werbefotografie', href: '/spektrum/werbefotografie' },
      { label: 'Gif-Animationen', href: '/spektrum/gif-animationen' },
      {
        label: 'Hochzeitsfotos',
        href: 'https://www.hochzeitsfotos-hanau.de/',
        external: true,
      },
    ],
  },
  {
    label: 'Produkte',
    href: '/produkte/1a-produkte',
    children: [
      { label: '1A Produkte', href: '/produkte/1a-produkte' },
      { label: 'Leinwandfotos', href: '/produkte/leinwandfotos' },
      { label: 'Fotos auf Echtglas', href: '/produkte/fotos-auf-echtglas' },
      { label: 'Fotos auf Stein', href: '/produkte/fotos-auf-stein' },
      { label: '3D Laserfoto', href: '/produkte/3d-laserfoto' },
      { label: 'Fototassen', href: '/produkte/fototassen' },
      { label: 'Fotofunartikel', href: '/produkte/fotofunartikel' },
    ],
  },
  { label: 'Öffnungszeiten', href: '/oeffnungszeiten' },
  { label: 'Anfahrt', href: '/anfahrt' },
  {
    label: 'Bildgalerien',
    href: '/bildgalerien/bewerbung',
    children: [
      { label: 'Bewerbung', href: '/bildgalerien/bewerbung' },
      { label: 'Industrie', href: '/bildgalerien/industrie' },
      { label: 'Produktfotos', href: '/bildgalerien/produktfotos' },
      { label: 'Tiere', href: '/bildgalerien/tiere' },
      { label: 'Werbung', href: '/bildgalerien/werbung' },
    ],
  },
  { label: 'Kontakt', href: '/kontakt' },
];

export const serviceLinks: NavChild[] = [
  { label: 'Passbild', href: '/passbild' },
  { label: 'Visa-Bilder', href: '/visa-bilder' },
  { label: 'Bildbestellung', href: '/bildbestellung' },
  {
    label: 'Online-Galerie Login',
    href: 'https://foto-gruen.fotograf.de/login',
    external: true,
  },
];

export type NewsItem = {
  title: string;
  body: string;
  href?: string;
  external?: boolean;
  highlight?: boolean;
};

export const news: NewsItem[] = [
  {
    title: 'Umzug in neue Geschäftsräume',
    body: 'Ab dem 14.4.26 bieten wir unsere Portraitarbeiten nach Terminvereinbarung in der Lise-Meitner-Straße 36, Hanau-Großauheim an. Telefon: 06181 956292.',
    highlight: true,
  },
  {
    title: 'Betriebsurlaub / Schließung',
    body: 'Unser Studio bleibt aufgrund von Umzugsarbeiten in der Woche vom 7. – 11.4.26 geschlossen.',
  },
  {
    title: 'Terminvergabe',
    body: 'Um unnötige Wartezeiten zu vermeiden, bitten wir unsere Kundschaft, jegliche Anliegen zunächst telefonisch unter 06181 956292 anzumelden.',
  },
  {
    title: 'Veranstaltungsgalerie',
    body: "Faschingsumzug Großauheim '26 — jetzt online ansehen.",
    href: 'https://bilder.foto-gruen.de/Veranstaltung/Umzug0226_webgal/',
    external: true,
  },
];

export const partners = [
  {
    name: 'Professional Photographers Cooperation',
    src: 'bilder/Logos/Logo_PPC_rgb.jpg',
  },
  { name: 'Nikon NPS', src: 'bilder/Logos/Nikon_NPS.jpg' },
  {
    name: 'Handwerkskammer Meisterbetrieb',
    src: 'bilder/Logos/HDW_Meisterbetrieb-Logo_0914.jpg',
  },
];

export const headerSlides = [
  { src: 'bilder/headerslider/01_Header_Slider_Bewerbung.jpg', alt: 'Bewerbungsfotografie' },
  { src: 'bilder/headerslider/02_Header_Slider_Produkte.jpg', alt: 'Produktfotografie' },
  { src: 'bilder/headerslider/03_Header_Slider_Familie.jpg', alt: 'Familienfotografie' },
  { src: 'bilder/headerslider/04_Header_Slider_Industrie.jpg', alt: 'Industriefotografie' },
  { src: 'bilder/headerslider/05_Header_Slider_Hochzeit.jpg', alt: 'Hochzeitsfotografie' },
  { src: 'bilder/headerslider/07_Header_Slider_Werbung.jpg', alt: 'Werbefotografie' },
  { src: 'bilder/headerslider/09_Header_Slider_gruen.jpg', alt: 'Fotostudio Roland Grün' },
  { src: 'bilder/headerslider/Header_Slider_Wir_ziehen_um.jpg', alt: 'Wir ziehen um' },
];
