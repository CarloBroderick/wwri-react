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
| `src/assets/public-website-redesign/images/media/science-pub-event.jpg` | Source asset `Science by the Pint_Previous Events_Index Education.jpeg` | `pages/OutreachPage.tsx` | Science by the Pint previous event photo | |
| `src/assets/public-website-redesign/images/media/science-pub-building-wildfire-resilience.jpg` | Converted from source asset `Science Pub_Previous Events_Index Education.HEIC` | `pages/OutreachPage.tsx` | Science Pub: Building Wildfire Resilience "In the Community" event photo | Converted from HEIC to JPEG with `sips`. |
| `src/assets/public-website-redesign/images/media/wildfire-commons-logo.png` | Source asset `Wildfire Commons Logo_Outreach.png` | `pages/OutreachPage.tsx` | Wildfire Commons Webinar recording thumbnail (Webinar Recordings section) | Same artwork previously used for the Upcoming Events commons logo. |
| `src/assets/public-website-redesign/images/media/launch-webinar.png` | Source asset `Launch Webinar_Outreach.png` | `pages/OutreachPage.tsx` | Informational Webinar recording thumbnail (Webinar Recordings section) | Displayed with a Smoke Fog (`#F4F6F3`) border per spec. |
| `src/assets/public-website-redesign/images/media/news-fire-adapted-communities.jpg` | Fire Adapted Communities article share (OG) image, `fireadaptednetwork.org` | `pages/NewsFeaturesPage.tsx` | "You Can Now Look Up Your Community's Wildfire Resilience Score" news card | |
| `src/assets/public-website-redesign/images/media/news-ucsb-current-wildfire.jpeg` | UCSB *The Current* article share (OG) image, `news.ucsb.edu` | `pages/NewsFeaturesPage.tsx` | EdHat + The Current UCSB "Now it's a number" news cards | Shared by both cards (same underlying story). |
| `src/assets/public-website-redesign/images/media/news-wildfire-task-force.png` | CA Wildfire & Forest Resilience Task Force article share (OG) image, `wildfiretaskforce.org` | `pages/NewsFeaturesPage.tsx` | "Wildfire Resilience Index is Now Live" news card | |
| `src/assets/public-website-redesign/images/media/news-kcbx-prescribed-burn.png` | KCBX article share (OG) image (NPR Brightspot CDN) | `pages/NewsFeaturesPage.tsx` | "New tool from UCSB scores communities on wildfire resilience" news card | |
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
| `src/assets/public-website-redesign/icons/Location Map for WRI, 1 What is the WRI (1).png` | Provided cropped reference map asset | `pages/AboutPage.tsx` | Highlighted 12 Western US states + British Columbia + Yukon | Cropped variant replacing the earlier full-frame export for better visual fit. |
| `src/assets/public-website-redesign/videos/` (empty) | — | — | Reserved for the home-hero loop MP4 | `TODO(video)` marker in `HomePage.tsx`. |
