# Rebuild Specification & Agent Prompt: Fotostudio Roland Grün Webpage Redesign

This document contains a comprehensive prompt and detailed page-by-page specification designed for a coding agent to rebuild the "Fotostudio Roland Grün" website. It contains the complete structure, page hierarchy, copy texts, image assets, navigation menus, and functional requirements of the original curled website.

---

## Redesign Prompt for the Coding Agent

### Goal
Rebuild the website for **Fotostudio Roland Grün** (Atelier für Fotografie im Handwerk in Hanau-Großauheim) into a modern, responsive, high-performance, and visually stunning web application. 

### Source Materials & Assets
The source files and assets are located in the `foto-gruen/foto-gruen.de` subdirectory of the workspace. All original image files (e.g., logo, header slider images, gallery thumbnails, and informational diagrams) are located in the `images` subdirectory inside it and must be copied/referenced in the new project.

---

## 1. Design & Aesthetic Guidelines (User Section)

> [!IMPORTANT]
> **[USER_DESIGN_SECTION_PLACEHOLDER]**

### 1.1 Design Aesthetic & Philosophy
*   **Style:** Editorial Minimalism meets Editorial Avant-Garde. The website must look like a high-end fashion, architecture, or art magazine. It should use ample whitespace (negative space), asymmetrical grids, and oversized typographic elements.
*   **Core Goal:** The interface must frame the photography, never compete with it. Transitions must feel fluid, tactile, and premium.

### 1.2 Color Palette (Strict Implementation)
*   **Primary Background (Base):** Clean, crisp White (`#FFFFFF`) or an ultra-light muted off-white (`#F9F9F9`) to give the photography maximum clarity.
*   **Secondary/Grounding Tone:** Deep Forest Green / Matte Olive (`#1B3322` or `#122217`). Use this for dark-mode sections (like the footer or a full-bleed contact page), prominent text blocks, or structured container outlines.
*   **Accent Color (High Restraint):** Cyber Red / Crimson (`#E42323`). Use this strictly for fine details: hover states, active pagination dots, small UI badges, or a thin running line cursor. It should never cover large surface areas.

### 1.3 Typography & Hierarchy
*   **Headers & Titles:** Display Serif or a Geometric, high-contrast Sans-Serif (e.g., 'Syne', 'Clash Display', or 'Playfair Display'). Letter-spacing should be tight for large headings, and font sizing should scale up aggressively for hero sections.
*   **Body & UI Text:** Clean, highly legible Neo-Grotesque Sans-Serif (e.g., 'Inter', 'Plus Jakarta Sans', or 'Satoshi') set at a highly readable weight and generous line-height (`1.6`).

### 1.4 Key Layout & Interactive Behaviors
*   **The Grid:** Utilize an asymmetric, broken CSS grid for image galleries. Avoid uniform rows; photos should stagger elegantly, allowing different aspect ratios (vertical and horizontal) to live together seamlessly.
*   **Transitions & Micro-interactions:**
    *   Implement smooth scrolling (`scroll-behavior: smooth`) throughout the app.
    *   On image hover: A subtle, slow scale-up (`scale: 1.03`) combined with a soft change in exposure or greyscale-to-color transition over 400ms.
    *   Buttons and navigation links should use a crisp underline animation that expands from the center or shifts color gracefully using CSS transitions.

---

## 2. Core Site Layout & Structural Requirements

The application should have a consistent, modern layout structure comprising the following global components:

### Header
- **Logo/Branding**: Clear brand name "Fotostudio Roland Grün" (Meisterbetrieb). Refers to the logo asset: `images/Logowstudio fr web small.jpg`.
- **Dynamic Header Image Slider**: A cycling image slideshow displaying the following slides sequentially with a smooth fade/cross-dissolve transition (every 5 seconds):
  - `images/bilder/headerslider/01_Header_Slider_Bewerbung.jpg`
  - `images/bilder/headerslider/02_Header_Slider_Produkte.jpg`
  - `images/bilder/headerslider/03_Header_Slider_Familie.jpg`
  - `images/bilder/headerslider/04_Header_Slider_Industrie.jpg`
  - `images/bilder/headerslider/05_Header_Slider_Hochzeit.jpg`
  - `images/bilder/headerslider/07_Header_Slider_Werbung.jpg`
  - `images/bilder/headerslider/09_Header_Slider_gruen.jpg`
  - `images/bilder/headerslider/Header_Slider_Wir_ziehen_um.jpg`

### Main Navigation Bar
- **Home**
- **Spektrum** (Dropdown/Submenu):
  - Freisteller
  - Werbefotografie
  - Gif-Animationen
  - Hochzeitsfotos *(External link to `https://www.hochzeitsfotos-hanau.de/`)*
- **Produkte** (Dropdown/Submenu):
  - 1A Produkte
  - Leinwandfotos
  - Fotos auf Echtglas
  - Fotos auf Stein
  - 3D Laserfoto
  - Fototassen
  - Fotofunartikel
- **Öffnungszeiten**
- **Anfahrt**
- **Bildgalerien** (Dropdown/Submenu):
  - Bewerbung
  - Industrie
  - Produktfotos
  - Tiere
  - Werbung
- **Kontakt**
- **Rechtliches** (Or footer-based):
  - Impressum
  - AGB
  - DSGVO

### Sidebar: Service (Quick Links)
- **Passbild**
- **Visa-Bilder**
- **Bildbestellung**
- **Online-Galerie Login** *(External link to `https://foto-gruen.fotograf.de/login`)*

### Sidebar: Termine & News (Aktuelles)
Display the following interactive notices/news updates:
1. **Umzug in neue Geschäftsräume**: ab dem 14.4.26 bieten wir unsere Portraitarbeiten nach Terminvereinbarung in der **Lise-Meitner-Straße 36, Hanau Großauheim** an. Telefon: `0 61 81 - 95 62 92`.
2. **Betriebsurlaub/Schließung**: Unser Studio bleibt aufgrund von Umzugsarbeiten in der Woche vom **7. - 11.4.26** geschlossen.
3. **Terminvergabe**: Um unnötige Wartezeiten zu vermeiden, bitten wir unsere Kundschaft, jegliche Anliegen zunächst telefonisch unter `06181 956292` anzumelden.
4. **Veranstaltungsgalerie**: Faschingsumzug Großauheim '26 *(External link to `https://bilder.foto-gruen.de/Veranstaltung/Umzug0226_webgal/`)*

### Footer & Partner Badges
- Display copyright, address, and telephone: `© Fotostudio Roland Grün, Lise-Meitner-Str. 36, 63457 Hanau, Tel.: 06181 956292`.
- Show partner logos (using the local images):
  - **PPC Logo**: `images/bilder/Logos/Logo_PPC_rgb.jpg`
  - **Nikon NPS Logo**: `images/bilder/Logos/Nikon_NPS.jpg`
  - **Handwerkskammer Meisterbetrieb Logo**: `images/bilder/Logos/HDW_Meisterbetrieb-Logo_0914.jpg`

---

## 3. Detailed Page Content Specs (German Copy)

### Page: Home (`index.html`)
- **Main Heading**: Fotostudio Roland Grün, Lise-Meitner-Str. 36, 63457 Hanau Großauheim
- **Keywords/Badges**: Bewerbungsfoto, Passfoto, Fotostudio, Werbefotografie
- **Main Image**: `images/bilder/beitraege/Fotostudio Grn.jpg`
- **Copy Text**:
  > Das Fotostudio Roland Grün ist Ihr Foto-Meisterbetrieb mit Sitz in Hanau Grossauheim. Wir bieten Ihnen umfangreiche Leistungen rund um das Foto und die Fotografie, sowie ein wahrlich meisterliches fotografisches "Auge".
  > 
  > Nicht nur bei den Themen Passfoto, professionelles Bewerbungsfoto, Portraitfoto und Bewerbungsportrait ist das Fotostudio Grün in Hanau Ihr kompetenter Ansprechpartner.
  > 
  > Firmenportraits, Homepagebebilderungen und Industriefotografie übernimmt Ihr Fotostudio Grün in Hanau ebenso zuverlässig, wie Fotoarbeiten vor Ort bei Veranstaltungen jeder Art.
  > 
  > Das Fotostudio Grün verfügt über modernste fototechnische Ausrüstung und bietet Ihnen alle Möglichkeiten der professionellen Bildnachbearbeitung.

---

### Section: Spektrum

#### Subpage: Freisteller (`spektrum/freisteller`)
- **Heading**: Freisteller (Werbefotografie)
- **Images**:
  - `images/bilder/beitraege/peoplefreisteller_kstchen.jpg`
  - `images/bilder/beitraege/11185162_peoplefreisteller.jpg`
  - `images/bilder/beitraege/Kaffeemaschine.png`
- **Copy Text**:
  > Freistellung bedeutet in der Fotografie die Befreiung eines Motivs von einem störenden Hintergrund. Die Maske zum Freistellen eines Bildes nennt man in der Fachsprache üblicherweise einen Freisteller.
  > 
  > Es gibt viele Gründe Freistellungstechniken in der Fotografie anzuwenden. Die wichtigsten sind die Konzentration auf das wesentliche Motiv und die Erstellung von Ausgangsbildmaterial für Fotomontagen. Auf diese Weise kann ein Motiv in vollkommen andere Bildzusammenhänge gebracht werden. So finden Freisteller ihre Hauptanwendung in der Werbung.
  > 
  > Aber auch in der Produktfotografie kann die Lösung vom Hintergrund und die damit verbundene Konzentration auf das Produkt selbst eine wesentliche Rolle spielen. So arbeiten namhafte Internetkaufhäuser fast ausschließlich mit dieser Technik, um die feilgebotene Ware in ihren Webshops zu präsentieren.

#### Subpage: Gif-Animationen (`spektrum/gif-animationen`)
- **Heading**: Gif Animationen
- **Image**: `images/bilder/beitraege/Sonnendach_Animation.gif`
- **Copy Text**:
  > Gif-Animationen bringen Bewegung in Ihre Homepage ohne das aufwendige Einbetten von großen Videofiles. Häufig bringt die "einfache" Bewegung im stehenden Motiv Ihre Bildbotschaft auf den Punkt.

#### Subpage: Werbefotografie (`spektrum/werbung`)
- **Heading**: Werbefotografie
- **Action**: Add a video player placeholder or clean call-to-action redirecting to their YouTube content or showcasing advertising photography.

---

### Section: Produkte

#### Subpage: 3D Laserfoto (`produkte/3d-laserfoto`)
- **Heading**: 3D Laser Fotos
- **Images**:
  - `images/bilder/beitraege/3d_foto_gedreht.jpg`
  - `images/bilder/beitraege/3d_foto_familie.jpg`
  - `images/bilder/beitraege/3d_foto_herz.jpg`
  - `images/bilder/beitraege/3d_foto_hund.jpg`
- **Copy Text**:
  > LOOXIS bringt Ihr Foto in eine neue Dimension - das 3D Laser Foto!
  > 
  > Optisch reines Viamant® Glas, ohne Schlieren oder Schimmer, gibt Ihrem 3D Laser Foto die Ästhetik, die es so besonders macht.
  > 
  > **Vitrographie® - das Licht macht‘s möglich!**
  > Hochenergetisches Licht wird so gebündelt, dass im Fokus des Laserstrahls die dreidimensionale Struktur, Ihr 3D Foto, entsteht. Dies geschieht präzise und computergesteuert mit unserem speziellen Lasersystem, wir nennen den Vorgang Vitrographie®. Wir garantieren: Ihr 3D Laser Foto wird sich niemals farblich verändern oder verblassen.
  > 
  > Egal ob als außergewöhnliches Geschenk, dreidimensionale Erinnerung oder einmaliger Blickfang - machen Sie Ihr Foto einzigartig!
  > 
  > **So funktioniert´s:**
  > Die Grafiker von Looxis wissen intuitiv, wie ein flaches, zweidimensionales Foto in der dreidimensionalen Realität aussehen würde. Mit diesem intuitiven Wissen und einer eigens entwickelten Software geben unsere Grafiker Ihrem Foto die dritte Dimension.
  > 
  > Sehen Sie sich die Muster live bei uns im Atelier an oder bestellen Sie hier direkt über den Looxis Partnershop: [looxis.shop/foto-gruen](https://looxis.shop/foto-gruen)

#### Subpage: Fotofunartikel (`produkte/fotofunartikel`)
- **Heading**: Fotofunartikel
- **Images**:
  - `images/bilder/beitraege/Bildbrotdose_09193516_frei_614px.png` (Brotdose)
  - `images/bilder/beitraege/Schulfototasse_09193518_frei_614px.png` (Schultasse)
  - `images/bilder/beitraege/Mousepad_09193520_frei_614px.png` (Mousepad)
  - `images/bilder/beitraege/Fototasse_09193528_frei_614px.png` (Standard-Fototasse)
  - `images/bilder/beitraege/Alufototrinkflasche_09193512_frei_614px.png` (Trinkflasche Alu)
  - `images/bilder/beitraege/Schulfototrinkflasche_09193510_frei_614px.png` (Trinkflasche Kunststoff)
  - `images/bilder/beitraege/Lffelfototasse_09193503_frei_614px.png` (Tasse mit Löffel)
  - `images/bilder/beitraege/Fotobierkrug_09193534_frei_614px.png` (Bierkrug)
- **Copy Text**:
  > Nutzen Sie unsere Erfahrungen bei der Anfertigung von Fotofunartikeln. Diese Fotogeschenke erfreuen sich größter Beliebtheit, aber nicht jedes Bild passt auf jedes Produkt. Lassen Sie sich unverbindlich beraten, damit diese individuellen Fotopräsente die gewünschte Wirkung entfalten können.
  > 
  > Sie wollen Ihr Foto doch lieber selbst auf einem Funartikel gestalten? Dann geht´s hierlang zur Onlinebestellung im Looxis Partnershop: [looxis.shop/foto-gruen](https://looxis.shop/foto-gruen)

#### Subpage: Fotos auf Echtglas (`produkte/fotos-auf-echtglas`)
- **Heading**: Fotos auf Echtglas
- **Images**:
  - `images/bilder/beitraege/Echt_Glas 617 o Text.jpg`
  - `images/bilder/beitraege/Formglas 617 o Text.jpg`
  - `images/bilder/beitraege/Exklusive Formen 617 o Text.JPG`
  - `images/bilder/beitraege/Glas mit Alu-Fuss 617 ohne Text.JPG`
  - `images/bilder/beitraege/Quader 617 o Text.JPG`
- **Copy Text**:
  > Der Druck erfolgt in mehreren Durchgängen um eine optimale Brillanz zu erhalten. Dabei wird zunächst eine Haftschicht aufgedruckt und danach in mehreren Schichten die Farbe. Dieses aufwändige Druckverfahren gibt ein enormes Farbspektrum bei höchster Farbintensität und glänzender Farbkraft wieder. Die Bilder behalten eine gewisse Transparenz. Eine Beleuchtung von der Rückseite oder das Aufhängen der Bilder in Fenstern oder als Raumteiler bringt Ihre schönsten Momente zum Leuchten. Die Farbe ist UV-beständig und auch nach Jahren verblasst Ihr Glas-Bild nicht. Bedruckte Glasflächen können problemlos feucht gereinigt werden.
  > 
  > Wenn Sie auf Nummer sicher gehen möchten, dass der Glasdruck vor Kratzern geschützt wird, empfehlen wir Ihnen Ihr Bild mit Schutzlaminierung zu bestellen. Dabei wird die bedruckte Fläche mit einem transparenten Laminat versiegelt, so dass Ihr Druck auch gegen mechanische Beschädigungen geschützt ist.
  > 
  > **Form-Glas (Glasblöcke)**
  > Das ideale Geschenk für besondere Anlässe. Ob zur Geburt, Hochzeit, Einschulung oder vielen anderen besonderen Ereignissen: Ihr Foto auf einem 19 mm starken Glasblock findet immer Bewunderer. Der hochwertige Foto-Direktdruck in Fine-Art-Qualität verleiht Ihren Bildern eine besondere Brillanz. Vier verschiedene Formen stehen Ihnen zur Auswahl: Rechteck, Rund, Herz und Frame. Ausgehändigt werden die Form-Gläser in einer Geschenkbox. Eine Aufhängung oder Befestigung ist nicht notwendig, da die massiven Glasblöcke von selbst stehen.
  > 
  > **Sonderformen & Glasbilder mit Alu-Fuß**
  > Exklusive Sonderformen für Ihre exklusive Werbebotschaft oder Präsentation. Das hochwertige Weißglas und der dezente Aluminiumfuß vereint sich mit der strahlenden Farbbrillanz der UV-Direkt-Drucke, so dass Sie eine atemberaubende Optik für Ihre Bilder erhalten.
  > 
  > **Glasquader**
  > Glasquader sind der "Eyecatcher" auf Ihrem Regal, Messestand, Ausstellungsraum, Ladengeschäft oder in Ihrer Wohnung. Die dreidimensionale Tiefenwirkung des hochglanzpolierten Glasquaders zieht die Blicke auf sich. Geliefert wird dieser Artikel in einer Geschenkbox mit Magnetverschluss.

#### Subpage: Fotos auf Stein (`produkte/fotos-auf-stein`)
- **Heading**: Fotos auf Schieferstein
- **Image**: `images/bilder/beitraege/prospekttitel.jpg`
- **Description**: Add formatting to describe printing photos on high-quality natural slate (Schieferstein).

#### Subpage: Fototassen (`produkte/fototassen`)
- **Heading**: Großauheimer Koppche
- **Image**: `images/bilder/beitraege/Tassen_Auheimer_Koppche_.jpg`
- **Copy Text**:
  > Natürlich erstellen wir Ihnen auch gerne individualisierte Fototassen mit Ihrem Wunschmotiv. Sprechen Sie uns einfach an! ;)

#### Subpage: Leinwandfotos (`produkte/leinwandfotos`)
- **Heading**: Leinwandfotos auf Keilrahmen
- **Images**:
  - `images/bilder/beitraege/CanvasaufKeil.jpg`
  - `images/bilder/beitraege/CanvasaufKeil2.jpg`
- **Copy Text**:
  > So einfach kann man einem Raum eine individuelle Note geben. Im hochwertigen Druck auf Künstlerleinen kommen Fotos besonders gut zur Geltung. Leinwandfotos auf Keilrahmen sind ein stilvolles Produkt, das voll im Trend liegt. Die plastische Tiefenwirkung des Keilrahmens macht eine zusätzliche Rahmung meist unnötig. 
  > 
  > Der hochwertige Druck auf Künstlerleinen sorgt für brillante Farbwirkung und hohe Lichtstabilität. Die Farben sind lösungsmittelfrei und deshalb für Innenräume bestens geeignet. Mit einer umlaufenden Randbedruckung von 3 cm wird das Leinwandfoto auf einen stabilen Holzrahmen (Keilrahmen) aufgezogen. Auch ungewöhnliche Fotoformate wie Panoramas oder Quadrate sind realisierbar.

---

### Section: Öffnungszeiten (`oeffnungszeiten`)
- **Heading**: Öffnungszeiten von Foto Grün
- **Subtitle**: Bitte kündigen Sie Ihren Besuch vorab per Mail oder Telefon an. Besten Dank.
- **Image**: `images/bilder/beitraege/5 vor 12 flachbreitklein.jpg`
- **Hours Table**:
  | Wochentag | Abholzeiten / Öffnungszeiten |
  | :--- | :--- |
  | **Dienstags** | 14:30 Uhr - 18:00 Uhr |
  | **Donnerstags** | 14:30 Uhr - 18:00 Uhr |
  | **Andere Zeiten / Fototermine** | Nach telefonischer Terminierung unter **06181 956292** möglich! |
- **Services List**:
  - Sondertermine nach Vereinbarung
  - Portraitarbeiten
  - Wochenend- und Feiertagstermine
  - Begleitung bei Gesellschaften wie Kommunion, Konfirmation etc.
  - Vereinsfeiern und Betriebsfotografie
  - Dokumentationen & Reportagen

---

### Section: Anfahrt (`anfahrt`)
- **Heading**: Anfahrt zu Fotostudio Grün
- **Address**: Lise-Meitner-Straße 36, 63457 Hanau (Großauheim)
- **Copy Text**:
  > Sie finden das Fotostudio Grün in Hanau, Ortsteil Großauheim, sehr verkehrsgünstig gelegen mit optimalen Parkmöglichkeiten.
  > Bitte avisieren Sie uns zuvor Ihren Besuch in der Lise-Meitner-Straße 36 in 63457 Hanau.
- **Interactive Component**: Embed a modern OpenStreetMap, Leaflet, or Google Maps iframe placeholder/component displaying the location pin at Lise-Meitner-Straße 36, 63457 Hanau.

---

### Section: Kontakt (`kontakt`)
- **Heading**: Kontakt zu Foto Grün
- **Contact Details**:
  - **Adresse**: Lise-Meitner-Str. 36, 63457 Hanau - Großauheim
  - **Telefon**: 06181 956292
  - **Telefax**: 06181 956293
  - **Web**: [http://www.foto-gruen.de](http://www.foto-gruen.de)
- **Contact Form**: Add a fully styled form with fields:
  - Name (Required)
  - E-Mail (Required, email-validated)
  - Betreff (Required)
  - Nachricht (Required)
  - Captcha/Simple math verification (to replace the original `osolCaptcha`)
  - A checkbox for privacy agreement (DSGVO consent)
- **Image decoration**: `images/bilder/beitraege/AbdiePost620.jpg`

---

### Section: Service Quick-Links (Left Column Pages)

#### Page: Passbild (`passbild`)
- **Heading**: Biometrisches Passbild
- **Quote**: „Wenn man beginnt, seinem Passfoto ähnlich zu sehen, sollte man in den Urlaub fahren.“ — *Ephraim Kishon*
- **Images**:
  - `images/bilder/beitraege/passbildschablone.jpg`
  - `images/bilder/beitraege/normales_Passfoto.jpg`
  - `images/bilder/beitraege/Biopass.jpg`
- **Copy Text**:
  > Der aktuelle Personalausweis stellt neue Anforderungen: Das sogenannte "biometrische Passfoto" muss spezielle technische und aufnahmebedingte Eigenschaften haben - andernfalls wird es von den ausstellenden Behörden nicht akzeptiert. Herkömmliche Passbilder können hierfür nicht mehr verwendet werden und unterscheiden sich maßgeblich.
  > 
  > Wichtig ist insbesondere der Gesichtsausschnitt nach Schablone. Bevor Sie zweimal auf das Amt gehen: Kommen Sie am besten direkt zum Meisterbetrieb Fotostudio Grün.
  > 
  > - **Normales Passfoto**: kann für amtliche Dokumente nicht mehr verwendet werden.
  > - **Biometrisches Passfoto**: mit korrektem Gesichtsausschnitt, passend für Personalausweis, Reisepass und Führerschein.

#### Page: Visa-Bilder (`visa-bilder`)
- **Heading**: Fotos für indische, chinesische oder US-amerikanische Visa-Anträge
- **Image**: `images/bilder/beitraege/visafotovorgabe.jpg`
- **Copy Text**:
  > Antragsteller eines indischen, chinesischen oder US-Visums benötigen ein Foto nach genau beschriebenen Vorgaben. Bei Nichteinhaltung der folgenden Bestimmungen kann Ihr Antrag unter Umständen nicht bearbeitet werden.
  > 
  > **Wichtige Vorgaben im Überblick:**
  > - Das Foto darf nicht älter als 6 Monate sein.
  > - Das Foto muss exakt **5 x 5 cm** (50 x 50 mm) groß sein, ohne Rand.
  > - Der Kopf muss vertikal gemessen zwischen **2,5 und 3,5 cm** groß sein.
  > - Das Foto muss in Farbe sein und einen rein **weißen Hintergrund** haben (unruhig, dunkel oder gemusterte Hintergründe sind unzulässig).
  > - Frontalansicht (direkter Blick in die Kamera, Gesichtszentrierung ca. 50% des Bildes). Beide Ohren sollten vorzugsweise sichtbar sein.
  > - Kopfbedeckungen sind nur aus religiösen Gründen zulässig und dürfen das Gesicht nicht verdecken. Brillen sind nur aus medizinischen Gründen gestattet (keine getönten Gläser oder störende Reflexionen).
  > 
  > **Unzulässig sind:**
  > - Traditionelle Gesichtsmasken oder Burkas
  > - Mützen oder Kappen (außer religiös bedingt)
  > - Stammestrachten oder Nationalkostüme

#### Page: Bildbestellung (`bildbestellung`)
- **Heading**: Bildbestellung bei Foto Grün
- **Image**: `images/bilder/beitraege/AbdiePost620.jpg`
- **Copy Text**:
  > Das Fotostudio Grün bietet Ihnen praktische und bequeme Möglichkeiten der Bildbe- oder Nachbestellung:
  > 
  > #### 1. Nachbestellung von Studio- und Auftragsarbeiten
  > Über unser **Kontaktformular** können Sie Nachbestellungen von Studioarbeiten auslösen. Folgende Daten werden benötigt:
  > - Ihre Bildnummern (in der Regel 8 Ziffern)
  > - Die gewünschte Anzahl der Abzüge
  > - Das gewünschte Format / die Größe
  > *Wichtig: Um Falschbestellungen zu vermeiden, behalten wir uns vor, bei Online-Bestellungen ggf. telefonisch nachzufragen.*
  > 
  > #### 2. Online-Galerie für Erstbestellungen
  > Sofern mit uns vereinbart, können wir Musterbilder Ihrer Aufträge in unserem geschützten Webshop präsentieren. Hierfür erhalten Sie von uns ein individuelles Passwort, mit dem Sie sich einloggen können. Ihre Favoriten werden von uns in der Regel innerhalb von 14 Tagen per Bildoptimierung, Retusche und Fachabzug veredelt.
  > 
  > #### 3. Eigene private Aufnahmen über Bestellsoftware (i-port)
  > 1. Laden die **i-port Software** kostenlos auf Ihren PC herunter.
  > 2. Wählen Sie Ihre Bilddateien, gewünschten Formate, Stückzahlen oder Fun-Artikel aus.
  > 3. Senden Sie die Bestellung ab - nach wenigen Tagen liegt Ihre Bestellung im Fotostudio Grün zur Abholung bereit!
  > 
  > #### 4. Events & Kindergarten-Bestellsystem (fotograf.de)
  > Haben Sie bei einer Veranstaltung oder einem Fototag einen QR-Code erhalten? Nutzen Sie das Ordersystem unter: [foto-gruen.fotograf.de/login](https://foto-gruen.fotograf.de/login) um Fotoabzüge direkt nach Hause zu bestellen oder digitale Downloads zu beziehen.

---

### Section: Rechtliches (Legal)

#### Impressum (`Impressum`)
- **Anbieter**: Fotostudio Roland Grün, Lise-Meitner-Straße 36, 63457 Hanau
- **Telefon**: 06181 956292
- **Telefax**: 06181 956293
- **Inhaber**: Roland Grün
- **USt-IdNr.**: DE 157554112
- **Zuständige Behörde**: Gewerbeamt Hanau
- *Include full standard disclaimer copy (Haftungsausschluss: Haftung für Inhalte, Haftung für Links, Urheberrecht).*

#### AGB (`agb`)
- Full German conditions covering:
  - I. Allgemeines (Applicability)
  - II. Urheberrecht (Copyright of photo works, negative files remain with photographer)
  - III. Vergütung, Eigentumsvorbehalt (Billing details, payments within 14 days, retention of title)
  - IV. Haftung (Liability limits for file storage/damage)
  - V. Nebenpflichten (Customer ensures model rights / subject collection within 2 days)
  - VI. Leistungsstörung, Ausfallhonorar (Selection returns within 1 week / archive returns within 1 month)
  - VII. Datenschutz (Data collection for transaction execution)
  - VIII. Digitale Fotografie (Consent needed for digital storage/duplication)
  - IX. Bildbearbeitung (Retouching permissions & mandatory copyright metadata linking)
  - X. Nutzung und Verbreitung (Web distribution permissions)
  - XI. Erfüllungsort (Hanau)

#### DSGVO / Datenschutzerklärung (`dsgvo`)
- Provide a clean structured data privacy sheet.
- Key sections:
  1. Datenschutz auf einen Blick (General introduction, Data collection)
  2. Allgemeine Hinweise und Pflichtinformationen (Responsible party: Roland Grün, revocation options, complaint authority details: Prof. Dr. Michael Ronellenfitsch, Wiesbaden, SSL/TLS Encryption notice)
  3. Datenerfassung auf unserer Website (Cookies details, Server-Log Files)
  4. Webanalyse (Google Analytics Opt-Out, Google Conversion Tracking)
  5. Tools (Google Web Fonts, Google Maps API usage notice)

---

## 4. Bildgalerien (Portfolio Layouts)

The redesign should support a fast, grid-based image portfolio layout (responsive masonry or flex-grid) with a modern lightbox plugin (e.g. React Lightbox, Swiper, or standard modal viewer) allowing users to zoom in and click through.

The image assets are located under `images/phocagallery/{Category}/thumbs/`. Each thumbnail file has a medium (`phoca_thumb_m_...`) and large (`phoca_thumb_l_...`) version. Use the following lists to render the galleries dynamically:

### Category 1: Bewerbung (`bildgalerien/bewerbung`)
*Paths relative to: `images/phocagallery/Bewerbung/thumbs/`*
- `phoca_thumb_m_01116267.jpg` / `phoca_thumb_l_01116267.jpg`
- `phoca_thumb_m_01121405.jpg` / `phoca_thumb_l_01121405.jpg`
- `phoca_thumb_m_01126959_sw.jpg` / `phoca_thumb_l_01126959_sw.jpg`
- `phoca_thumb_m_01128206.jpg` / `phoca_thumb_l_01128206.jpg`
- `phoca_thumb_m_02051338felge.jpg` / `phoca_thumb_l_02051338felge.jpg`
- `phoca_thumb_m_02125076.jpg` / `phoca_thumb_l_02125076.jpg`
- `phoca_thumb_m_03128150sepia.jpg` / `phoca_thumb_l_03128150sepia.jpg`
- `phoca_thumb_m_04184576_quad.jpg` / `phoca_thumb_l_04184576_quad.jpg`
- `phoca_thumb_m_04184589_quer.jpg` / `phoca_thumb_l_04184589_quer.jpg`
- `phoca_thumb_m_12114537.jpg` / `phoca_thumb_l_12114537.jpg`
- `phoca_thumb_m_14.jpg` / `phoca_thumb_l_14.jpg`
- `phoca_thumb_m_15.jpg` / `phoca_thumb_l_15.jpg`

### Category 2: Industrie (`bildgalerien/industrie`)
*Paths relative to: `images/phocagallery/Industrie/thumbs/`*
- `phoca_thumb_m_07.jpg` / `phoca_thumb_l_07.jpg`
- `phoca_thumb_m_08.jpg` / `phoca_thumb_l_08.jpg`
- `phoca_thumb_m_08b.jpg` / `phoca_thumb_l_08b.jpg`
- `phoca_thumb_m_09.jpg` / `phoca_thumb_l_09.jpg`
- `phoca_thumb_m_09b.jpg` / `phoca_thumb_l_09b.jpg`
- `phoca_thumb_m_10.jpg` / `phoca_thumb_l_10.jpg`
- `phoca_thumb_m_11.jpg` / `phoca_thumb_l_11.jpg`
- `phoca_thumb_m_11b.jpg` / `phoca_thumb_l_11b.jpg`
- `phoca_thumb_m_11c.jpg` / `phoca_thumb_l_11c.jpg`
- `phoca_thumb_m_13.jpg` / `phoca_thumb_l_13.jpg`
- `phoca_thumb_m_14.jpg` / `phoca_thumb_l_14.jpg`
- `phoca_thumb_m_15.jpg` / `phoca_thumb_l_15.jpg`
- `phoca_thumb_m_16.jpg` / `phoca_thumb_l_16.jpg`
- `phoca_thumb_m_17.jpg` / `phoca_thumb_l_17.jpg`

### Category 3: Produktfotos (`bildgalerien/produktfotos`)
*Paths relative to: `images/phocagallery/Produkte/thumbs/`*
- `phoca_thumb_m_01.jpg` / `phoca_thumb_l_01.jpg`
- `phoca_thumb_m_02.jpg` / `phoca_thumb_l_02.jpg`
- `phoca_thumb_m_03.jpg` / `phoca_thumb_l_03.jpg`
- `phoca_thumb_m_04.jpg` / `phoca_thumb_l_04.jpg`
- `phoca_thumb_m_05.jpg` / `phoca_thumb_l_05.jpg`
- `phoca_thumb_m_06.jpg` / `phoca_thumb_l_06.jpg`
- `phoca_thumb_m_07.jpg` / `phoca_thumb_l_07.jpg`
- `phoca_thumb_m_08.jpg` / `phoca_thumb_l_08.jpg`
- `phoca_thumb_m_10.jpg` / `phoca_thumb_l_10.jpg`
- `phoca_thumb_m_11.jpg` / `phoca_thumb_l_11.jpg`
- `phoca_thumb_m_12.jpg` / `phoca_thumb_l_12.jpg`
- `phoca_thumb_m_13.jpg` / `phoca_thumb_l_13.jpg`
- `phoca_thumb_m_14.jpg` / `phoca_thumb_l_14.jpg`
- `phoca_thumb_m_15.jpg` / `phoca_thumb_l_15.jpg`

### Category 4: Tiere (`bildgalerien/tiere`)
*Paths relative to: `images/phocagallery/Tiere/thumbs/`*
- `phoca_thumb_m_01199767_sw.jpg` / `phoca_thumb_l_01199767_sw.jpg`
- `phoca_thumb_m_09181789 .jpg` / `phoca_thumb_l_09181789 .jpg`
- `phoca_thumb_m_hund 01063308.jpg` / `phoca_thumb_l_hund 01063308.jpg`
- `phoca_thumb_m_hund 09025804.jpg` / `phoca_thumb_l_hund 09025804.jpg`
- `phoca_thumb_m_katze 07045028.jpg` / `phoca_thumb_l_katze 07045028.jpg`
- `phoca_thumb_m_katze 07045065.jpg` / `phoca_thumb_l_katze 07045065.jpg`
- `phoca_thumb_m_katzencollage.jpg` / `phoca_thumb_l_katzencollage.jpg`
- `phoca_thumb_m_pferdecollage.jpg` / `phoca_thumb_l_pferdecollage.jpg`

### Category 5: Werbung (`bildgalerien/werbung`)
*Paths relative to: `images/phocagallery/Werbung/thumbs/`*
- `phoca_thumb_m_01062016.jpg` / `phoca_thumb_l_01062016.jpg`
- `phoca_thumb_m_01063072.jpg` / `phoca_thumb_l_01063072.jpg`
- `phoca_thumb_m_01194011-hdr_opt.jpg` / `phoca_thumb_l_01194011-hdr_opt.jpg`
- `phoca_thumb_m_03066765 titel.jpg` / `phoca_thumb_l_03066765 titel.jpg`
- `phoca_thumb_m_07060931.jpg` / `phoca_thumb_l_07060931.jpg`
- `phoca_thumb_m_07061312.jpg` / `phoca_thumb_l_07061312.jpg`
- `phoca_thumb_m_07188103-5.jpg` / `phoca_thumb_l_07188103-5.jpg`
- `phoca_thumb_m_07188313-hdr.jpg` / `phoca_thumb_l_07188313-hdr.jpg`
- `phoca_thumb_m_11033323.jpg` / `phoca_thumb_l_11033323.jpg`
- `phoca_thumb_m_11183950_extquer_opt.jpg` / `phoca_thumb_l_11183950_extquer_opt.jpg`
- `phoca_thumb_m_11183964_detailopt.jpg` / `phoca_thumb_l_11183964_detailopt.jpg`
- `phoca_thumb_m_b3012_08167200.jpg` / `phoca_thumb_l_b3012_08167200.jpg`
- `phoca_thumb_m_dsc_0277.jpg` / `phoca_thumb_l_dsc_0277.jpg`
- `phoca_thumb_m_ente.jpg` / `phoca_thumb_l_ente.jpg`
- `phoca_thumb_m_h3051_08167243jpg.jpg` / `phoca_thumb_l_h3051_08167243jpg.jpg`
- `phoca_thumb_m_orbitalschweigert.jpg` / `phoca_thumb_l_orbitalschweigert.jpg`
- `phoca_thumb_m_pano_opt_web.jpg` / `phoca_thumb_l_pano_opt_web.jpg`
- `phoca_thumb_m_pic16.jpg` / `phoca_thumb_l_pic16.jpg`
- `phoca_thumb_m_schsselanhnger03052410.jpg` / `phoca_thumb_l_schsselanhnger03052410.jpg`
- `phoca_thumb_m_schwamm.jpg` / `phoca_thumb_l_schwamm.jpg`

---

## 5. Technical Stack & SEO Requirements

- **Semantic Layout**: Use modern semantic tags (`<header>`, `<nav>`, `<aside>`, `<main>`, `<footer>`, `<section>`).
- **Responsive Layout**: Designed mobile-first. Sidebars should shift gracefully into drawer/bottom positions on mobile screens.
- **Routing**: Clean URLs without `.html` extensions or parameters. Implement query parameter support for legacy URLs (e.g. supporting redirect maps from `?rCH=-2` paths).
- **SEO Best Practices**:
  - Main H1 tag containing "Fotostudio Roland Grün - Ihr Foto-Meisterbetrieb in Hanau".
  - Meta tags for viewport, description (`Fotostudio Roland Grün, Atelier für Fotografie im Handwerk in Hanau - Großauheim`), and keywords (`Foto, Fotostudio, Grün, Fotograf, Fotoatelier, Portraitfoto, Hanau, Passbild, Bewerbungsfoto, Businessportrait, Industriefotografie, Werbefotografie`).
  - Correct alt attributes for images.
- **Privacy Consent Modal**: An aesthetic cookie consent banner matching the style specifications, asking to accept/decline non-essential cookies.
