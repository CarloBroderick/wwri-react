# Redesign Asset Manifest

All assets live under `src/assets/public-website-redesign/`.
Source PDF: `/Users/wthompson/Downloads/Updated WRI Website.pdf`.

| Asset path (relative to repo root) | Source | Used by | Used for | Notes |
|---|---|---|---|---|
| `src/assets/public-website-redesign/images/hero/home-hero.jpg` | PDF raw image `img-065` (Yosemite valley landscape) | `pages/HomePage.tsx` | Full-bleed hero photo behind title + CTA | Temporary poster; replace with a looping MP4 (see `TODO(video)` in `HomePage.tsx`). |
| `src/assets/public-website-redesign/images/about/burnt-forest.jpg` | PDF raw image `img-024` | `pages/AboutPage.tsx` | §1 "What is WRI?" accompanying photo | |
| `src/assets/public-website-redesign/images/about/mountain-town.jpg` | PDF raw image `img-049` | `pages/AboutPage.tsx` | §2 "Why is the Index Useful?" accompanying photo | |
| `src/assets/public-website-redesign/images/about/forest-regrowth.jpg` | PDF raw image `img-083` (Sequoia grove) | `pages/AboutPage.tsx`, `pages/NewsFeaturesPage.tsx` | About §3 photo, News article thumbnail | |
| `src/assets/public-website-redesign/images/domains/infrastructure-hero.jpg` | Cropped from PDF page 9 "Why it matters" | `config/domains.ts` → `DomainDetailPage.tsx` | Infrastructure domain hero photo | |
| `src/assets/public-website-redesign/images/domains/communities-hero.jpg` | Cropped from PDF page 10 | `config/domains.ts` → `DomainDetailPage.tsx` | Communities domain hero photo | |
| `src/assets/public-website-redesign/images/domains/livelihoods-hero.jpg` | Cropped from PDF page 11 | `config/domains.ts` → `DomainDetailPage.tsx` | Livelihoods domain hero photo | |
| `src/assets/public-website-redesign/images/domains/sense-of-place-hero.jpg` | Cropped from PDF page 12 | `config/domains.ts` → `DomainDetailPage.tsx` | Sense of Place hero photo | |
| `src/assets/public-website-redesign/images/domains/species-hero.jpg` | Cropped from PDF page 13 | `config/domains.ts` → `DomainDetailPage.tsx` | Species domain hero photo | |
| `src/assets/public-website-redesign/images/domains/habitats-hero.jpg` | Cropped from PDF page 14 | `config/domains.ts` → `DomainDetailPage.tsx` | Habitats domain hero photo | |
| `src/assets/public-website-redesign/images/domains/water-hero.jpg` | Cropped from PDF page 15 | `config/domains.ts` → `DomainDetailPage.tsx` | Water domain hero photo | |
| `src/assets/public-website-redesign/images/domains/air-hero.jpg` | Cropped from PDF page 16 | `config/domains.ts` → `DomainDetailPage.tsx` | Air domain hero photo | |
| `src/assets/public-website-redesign/images/media/science-pub-event.jpg` | PDF raw image `img-106` | `pages/OutreachPage.tsx`, `pages/NewsFeaturesPage.tsx` | Outreach event photo; second news article placeholder | |
| `src/assets/public-website-redesign/icons/logo.svg` | Hand-built hex + flame SVG | `components/layout/SiteHeader.tsx`, `components/layout/SiteFooter.tsx` | Brand mark | Stylized match to the PDF hex-with-flame logo. |
| `src/assets/public-website-redesign/icons/domain-infrastructure.svg` | Hand-built outline icon | `DomainTile`, `MeasureSection` chip | Infrastructure iconography | |
| `src/assets/public-website-redesign/icons/domain-communities.svg` | Hand-built outline icon | `DomainTile`, `MeasureSection` chip | Communities iconography | |
| `src/assets/public-website-redesign/icons/domain-livelihoods.svg` | Hand-built outline icon | `DomainTile`, `MeasureSection` chip | Livelihoods iconography | |
| `src/assets/public-website-redesign/icons/domain-sense-of-place.svg` | Hand-built outline icon | `DomainTile`, `MeasureSection` chip | Sense of Place iconography | |
| `src/assets/public-website-redesign/icons/domain-species.svg` | Hand-built outline icon | `DomainTile`, `MeasureSection` chip | Species iconography | |
| `src/assets/public-website-redesign/icons/domain-habitats.svg` | Hand-built outline icon | `DomainTile`, `MeasureSection` chip | Habitats iconography | |
| `src/assets/public-website-redesign/icons/domain-water.svg` | Hand-built outline icon | `DomainTile`, `MeasureSection` chip | Water iconography | |
| `src/assets/public-website-redesign/icons/domain-air.svg` | Hand-built outline icon | `DomainTile`, `MeasureSection` chip | Air iconography | |
| `src/assets/public-website-redesign/icons/domain-stack.svg` | Hand-built isometric stack | `pages/DomainsPage.tsx` | Domains overview "stack of layers" visual | Stand-in for the PDF's 3D isometric layers illustration. |
| `src/assets/public-website-redesign/icons/composite-donut.svg` | Hand-built SVG | `pages/DomainsPage.tsx` | Example composite score donut (the "73" diagram) | Stand-in for the real dashboard screenshot. |
| `src/assets/public-website-redesign/icons/region-map.svg` | Hand-built stylized map | `pages/AboutPage.tsx` | Highlighted 12 Western US states + British Columbia + Yukon | Not cartographically accurate. Replace with real geodata later. |
| `src/assets/public-website-redesign/videos/` (empty) | — | — | Reserved for the home-hero loop MP4 | `TODO(video)` marker in `HomePage.tsx`. |
