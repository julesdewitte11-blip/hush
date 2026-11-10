# HUSH — landingspagina

Statische one-pager voor **HUSH**, een fictief parfummerk (subtiele skin scent). Schoolproject.
Puur HTML + CSS + een beetje vanilla JS, geen framework of build-stap.

## Structuur

```
hush/
├── index.html            # de pagina
├── css/style.css         # alle stijl (mobile-first)
├── js/main.js            # mobiel menu, actieve nav-link, fade-in
├── assets/
│   ├── favicon.svg
│   └── images/
│       ├── hush_hero.jpg   # hero (Amber-fles op steen)
│       ├── hush_sage.jpg   # geurkaart Sage
│       ├── hush_amber.jpg  # geurkaart Amber
│       ├── hush_iris.jpg   # geurkaart Iris
│       ├── hush_story.jpg  # About-sectie (vaas in nis)
│       └── og.jpg          # Open Graph-beeld (1200×630)
└── .nojekyll
```

Secties (in volgorde): **Hero** → **Scents** (`#scents`) → **About** (`#about`) → **Join** (`#join`, sign-up) → Footer.
De nav bevat ankerlinks naar Scents · About · Join, met smooth scroll en een onderlijn onder de actieve sectie.

## Kleuren

| Token | Waarde | Gebruik |
|---|---|---|
| `--color-text` | `#2E2E2E` | hoofdtekst, logo, knoppen |
| `--sage-light` | `#EEEFE8` | basisachtergrond |
| `--sage-bg` | `#DCE0D0` | About-vlak, Sage-kaart |
| `--sage-mid` | `#A3AA8C` | footerlijnen (geen tekst) |
| `--sage-dark` | `#5F6853` | kleine/secundaire tekst, enkel op `--sage-light` |
| `--amber-bg` | `#E5D9CA` | Amber-kaart |
| `--iris-bg` | `#DEDAE2` | Iris-kaart |
| `--hero-bg` | `#CDB89F` | hero-achtergrond, afgestemd op de foto |

Gecontroleerd contrast (WCAG AA ≥ 4.5:1): `#2E2E2E` op alle achtergronden 6.2–11.7:1, `#5F6853` op `#EEEFE8` 5.05:1.
`--sage-dark` haalt op de gekleurde kaarten géén 4.5:1, daarom staat de tekst daar in `--color-text`.

## Fonts

- **Bebas Neue** (Google Fonts): logo, titels, knoppen en links, met ruime letter-spacing.
- **Jost** 300/400 (Google Fonts): body en kleine tekst, licht gewicht, regelhoogte 1.7.

## GitHub Pages aanzetten

1. Maak op GitHub een nieuwe (publieke) repository, bv. `hush`.
2. Koppel en push deze map:
   ```bash
   git remote add origin https://github.com/<jouw-gebruikersnaam>/hush.git
   git push -u origin main
   ```
3. Ga op GitHub naar **Settings → Pages**.
4. Kies bij *Build and deployment* → *Source*: **Deploy from a branch**.
5. Kies branch **main** en map **/ (root)** en klik **Save**.
6. Na ±1 minuut staat de site op `https://<jouw-gebruikersnaam>.github.io/hush/`.

Alle paden zijn relatief, dus de site werkt ook in die submap.

## Wat je nog moet invullen

1. **MailerLite-formulier controleren.** De embed is ingebouwd: het Universal-script staat in de `<head>` (account `2735577`) en het formulier (`data-form="vK5C1k"`) staat in de Join-sectie. Velden, checkboxtekst en succesboodschap pas je aan in MailerLite zelf. De Hush-stijl staat in het blok *MailerLite overrides* in `css/style.css`. Doe na publicatie één echte test-inschrijving en controleer of die in MailerLite binnenkomt. Voeg in MailerLite eventueel je GitHub Pages-domein toe als toegestane site.
2. **Eigen beelden in hoge resolutie.** De hero-, Sage-, Amber- en About-beelden zijn uitsneden uit het design-mockup (max. ±600 px breed). Op grote schermen zijn ze daardoor wat zacht. Vervang ze door de originele beelden met dezelfde bestandsnamen. Houd ze onder ±300 KB (webp of jpg ±75 %).
3. **Open Graph-URL.** `og:image` is nu relatief (`assets/images/og.jpg`). Sommige platformen (Facebook, LinkedIn) willen een absolute URL. Vervang hem na publicatie door `https://<gebruikersnaam>.github.io/hush/assets/images/og.jpg` en voeg eventueel een `og:url` toe.
4. *(Optioneel)* Video: zet een bestand in `assets/video/` en voeg het toe met `autoplay muted loop playsinline` en een `poster`.

## Aannames

- **Projectmap.** De site staat in een eigen map `hush/` met een eigen git-repo, zodat de bestaande bestanden in de bovenliggende map (vorig project) niet overschreven worden.
- **Volgorde van de secties** volgt het design: Hero → Scents → About ("Find your quiet") → Join. De briefing noemt Story vóór Scents, maar het design zet de scents eerst.
- **About = "Find your quiet".** De copy uit het design is aangevuld met één zin over de skin scent (stilte, subtiliteit, dicht bij de huid). Totaal ±55 woorden.
- **Join-sectie** is nieuw t.o.v. het design: titel "Not loud. Just Hush." en subregel "Sign up for news from Hush."
- **CTA-teksten.** De briefing vraagt dat de hero-knop naar het formulier scrolt, daarom heet hij "Join Hush" in plaats van "Explore the collection". De knop "Shop the collection" in de About-sectie is om dezelfde reden ook "Join Hush" geworden (er is geen shop).
- **"Discover Sage/Amber/Iris"-links** scrollen naar het sign-up-formulier, omdat er geen productpagina's zijn.
- **Winkelmandje-icoon** uit het design is weggelaten (geen shop). Op die plek staat op mobiel de menuknop.
- **Kenmerken onder elke geur** (Fresh · Natural · Understated, enz.) komen uit het design. Het zijn sfeerwoorden, geen geurnoten.
- **Footer-tagline** "Fragrance for the quietly confident" komt uit het design.
- **Formulier**: de velden, de opt-in-tekst en de knoptekst komen uit je MailerLite-formulier. De standaardkop van MailerLite is verborgen, omdat de sectie al de titel "Not loud. Just Hush." heeft.
- **Iris-beeld** is de aangeleverde productfoto (`Edit_perfume_product_photo…jpg`). Die is ook gebruikt voor het OG-beeld.
- **Kaartachtergronden.** Het design toont de flesjes zonder kaart. De briefing vraagt een eigen achtergrondkleur per geur, dus elke geur zit in een kaart in `--sage-bg`, `--amber-bg` of `--iris-bg`. Het beeld wordt daarin ingemengd (`mix-blend-mode: multiply` + zachte randen).
- **Hero-achtergrond** (`--hero-bg`) is een warme beigetint die uit de foto is genomen, zodat de foto aan de linkerkant naadloos overvloeit. Ze valt buiten het opgegeven palet.
- **Secundair font**: Jost (licht), gekozen omdat het het dichtst bij de geometrische sans uit het design ligt.
- **H1** is "Discover the silence". "HUSH" staat in het logo en zit als verborgen tekst in de h1 voor screenreaders en SEO.
- **Favicon**: een eenvoudige "H" in `#2E2E2E` op `#EEEFE8` (SVG).
