// --- Hero (WIM = "wide image main") photos --------------------------------
import airHero from "../../../assets/public-website-redesign/images/domains/air/wim.png";
import communitiesHero from "../../../assets/public-website-redesign/images/domains/communities/wim.png";
import habitatsHero from "../../../assets/public-website-redesign/images/domains/habitats/wim.png";
import infrastructureHero from "../../../assets/public-website-redesign/images/domains/infrastructure/wim.png";
import livelihoodsHero from "../../../assets/public-website-redesign/images/domains/livelihoods/wim.png";
import senseOfPlaceIconicPlacesHero from "../../../assets/public-website-redesign/images/domains/sense-of-place/wim-iconic-places.png";
import senseOfPlaceIconicSpeciesHero from "../../../assets/public-website-redesign/images/domains/sense-of-place/wim-iconic-species.png";
import senseOfPlaceHero from "../../../assets/public-website-redesign/images/domains/sense-of-place/wim.png";
import speciesHero from "../../../assets/public-website-redesign/images/domains/species/wim.png";
import waterHero from "../../../assets/public-website-redesign/images/domains/water/wim.png";
import airHeroVideo from "../../../assets/public-website-redesign/videos/air.mp4";
import communitiesHeroVideo from "../../../assets/public-website-redesign/videos/communities.mp4";
import habitatsHeroVideo from "../../../assets/public-website-redesign/videos/habitats.mp4";
import infrastructureHeroVideo from "../../../assets/public-website-redesign/videos/infrastructure.mp4";
import livelihoodsHeroVideo from "../../../assets/public-website-redesign/videos/livelihoods.mp4";
import senseOfPlaceHeroVideo from "../../../assets/public-website-redesign/videos/sense-of-place.mp4";
import speciesHeroVideo from "../../../assets/public-website-redesign/videos/species.mp4";
import waterHeroVideo from "../../../assets/public-website-redesign/videos/water.mp4";

// --- HIM ("horizontal image matters") photos for each measured row --------
import airHim1 from "../../../assets/public-website-redesign/images/domains/air/him/him-1.png";
import airHim2 from "../../../assets/public-website-redesign/images/domains/air/him/him-2.png";
import airHim3 from "../../../assets/public-website-redesign/images/domains/air/him/him-3.png";
import communitiesHim1 from "../../../assets/public-website-redesign/images/domains/communities/him/him-1.png";
import communitiesHim2 from "../../../assets/public-website-redesign/images/domains/communities/him/him-2.png";
import communitiesHim3 from "../../../assets/public-website-redesign/images/domains/communities/him/him-3.png";
import habitatsHim1 from "../../../assets/public-website-redesign/images/domains/habitats/him/him-1.png";
import habitatsHim2 from "../../../assets/public-website-redesign/images/domains/habitats/him/him-2.png";
import habitatsHim3 from "../../../assets/public-website-redesign/images/domains/habitats/him/him-3.png";
import infrastructureHim1 from "../../../assets/public-website-redesign/images/domains/infrastructure/him/him-1.png";
import infrastructureHim2 from "../../../assets/public-website-redesign/images/domains/infrastructure/him/him-2.png";
import infrastructureHim3 from "../../../assets/public-website-redesign/images/domains/infrastructure/him/him-3.png";
import livelihoodsHim1 from "../../../assets/public-website-redesign/images/domains/livelihoods/him/him-1.png";
import livelihoodsHim2 from "../../../assets/public-website-redesign/images/domains/livelihoods/him/him-2.png";
import livelihoodsHim3 from "../../../assets/public-website-redesign/images/domains/livelihoods/him/him-3.png";
import sopIpHim1 from "../../../assets/public-website-redesign/images/domains/sense-of-place/him/ip-him-1.png";
import sopIpHim2 from "../../../assets/public-website-redesign/images/domains/sense-of-place/him/ip-him-2.png";
import sopIpHim3 from "../../../assets/public-website-redesign/images/domains/sense-of-place/him/ip-him-3.png";
import sopIsHim1 from "../../../assets/public-website-redesign/images/domains/sense-of-place/him/is-him-1.png";
import sopIsHim2 from "../../../assets/public-website-redesign/images/domains/sense-of-place/him/is-him-2.png";
import sopIsHim3 from "../../../assets/public-website-redesign/images/domains/sense-of-place/him/is-him-3.png";
import speciesHim1 from "../../../assets/public-website-redesign/images/domains/species/him/him-1.png";
import speciesHim2 from "../../../assets/public-website-redesign/images/domains/species/him/him-2.png";
import speciesHim3 from "../../../assets/public-website-redesign/images/domains/species/him/him-3.png";
import waterHim1 from "../../../assets/public-website-redesign/images/domains/water/him/him-1.png";
import waterHim2 from "../../../assets/public-website-redesign/images/domains/water/him/him-2.png";
import waterHim3 from "../../../assets/public-website-redesign/images/domains/water/him/him-3.png";

// --- Colored / dimmed domain-square PNGs (used for tiles & nav chips) -----
import airTile from "../../../assets/public-website-redesign/images/domain-squares/air.png";
import communitiesTile from "../../../assets/public-website-redesign/images/domain-squares/communities.png";
import habitatsTile from "../../../assets/public-website-redesign/images/domain-squares/habitats.png";
import infrastructureTile from "../../../assets/public-website-redesign/images/domain-squares/infrastructure.png";
import livelihoodsTile from "../../../assets/public-website-redesign/images/domain-squares/livelihoods.png";
import senseOfPlaceTile from "../../../assets/public-website-redesign/images/domain-squares/sense-of-place.png";
import speciesTile from "../../../assets/public-website-redesign/images/domain-squares/species.png";
import waterTile from "../../../assets/public-website-redesign/images/domain-squares/water.png";

export type DomainSlug =
  | "infrastructure"
  | "communities"
  | "livelihoods"
  | "sense-of-place"
  | "species"
  | "habitats"
  | "water"
  | "air";

export type DomainExample = { label: string; detail: string; heading?: string };

export type DomainSection = {
  title: string;
  description: string;
  /** Photo shown to the left of this measured row (HIM 1/2/3 from the Canva spec). */
  photo?: string;
  statusLabel?: string; // "N/A" or undefined for a measured status
  /** Single example dataset (most domains). */
  example?: DomainExample;
  /** Multiple example datasets side-by-side (Sense of Place Iconic Places). */
  examples?: DomainExample[];
};

export type Domain = {
  slug: DomainSlug;
  label: string;
  /** Brand color pulled from the Canva palette — retained for accents/divider fallbacks. */
  color: string;
  hero: string;
  /** Optional domain-level hero video (used on the top media section). */
  heroVideo?: string;
  /** Full-color square PNG used in nav/tile grids and the why-it-matters block. */
  tile: string;
  whyItMatters: string;
  status: DomainSection;
  resistance: DomainSection;
  recovery: DomainSection;
  /** Optional second sub-theme (Sense of Place → Iconic Species). */
  extra?: {
    subheading: string;
    hero?: string;
    whyItMatters: string;
    status: DomainSection;
    resistance: DomainSection;
    recovery: DomainSection;
  };
};

export const DOMAINS: Domain[] = [
  {
    slug: "infrastructure",
    label: "Infrastructure",
    color: "#b0335a",
    hero: infrastructureHero,
    heroVideo: infrastructureHeroVideo,
    tile: infrastructureTile,
    whyItMatters:
      "**Infrastructure** forms the foundation of communities—shaping where we live, work, and interact. Buildings and other structures provide shelter, safety, and access to essential resources.",
    status: {
      title: "Status",
      description:
        "This domain does **not** assess status, as there is no single “ideal” amount or distribution of infrastructure. Instead, it evaluates where structures are.",
      photo: infrastructureHim1,
    },
    resistance: {
      title: "Resistance",
      description:
        "Reflects features that help infrastructure avoid damage and support recovery.",
      photo: infrastructureHim2,
      example: {
        label: "Building Codes",
        detail:
          "Design and construction standards that influence fire resistance",
      },
    },
    recovery: {
      title: "Recovery",
      description: "Captures the ability to rebuild after a wildfire.",
      photo: infrastructureHim3,
      example: {
        label: "Home Ownership",
        detail: "Owners may have greater access to rebuilding resources",
      },
    },
  },
  {
    slug: "communities",
    label: "Communities",
    color: "#e47a68",
    hero: communitiesHero,
    heroVideo: communitiesHeroVideo,
    tile: communitiesTile,
    whyItMatters:
      "**Communities** are shaped by social, cultural, and geographic connections that influence how people prepare for, respond to, and recover from wildfire.",
    status: {
      title: "Status",
      description:
        "This **domain** does not assess status, and instead focuses on where people and communities are located.",
      photo: communitiesHim1,
    },
    resistance: {
      title: "Resistance",
      description:
        "Reflects the ability to safely respond to wildfire, including evacuation.",
      photo: communitiesHim2,
      example: {
        label: "Vehicle Access",
        detail: "Limited access can make evacuation more difficult",
      },
    },
    recovery: {
      title: "Recovery",
      description:
        "Captures the ability of communities to rebuild after wildfire.",
      photo: communitiesHim3,
      example: {
        label: "Incorporation",
        detail: "Legal status can influence access to recovery resources",
      },
    },
  },
  {
    slug: "livelihoods",
    label: "Livelihoods",
    color: "#f0a85d",
    hero: livelihoodsHero,
    heroVideo: livelihoodsHeroVideo,
    tile: livelihoodsTile,
    whyItMatters:
      "**Livelihoods** (jobs) are important because they represent how people make a living. Beyond just income, though, livelihoods are deeply connected to dignity, security, identity, and well-being.",
    status: {
      title: "Status",
      description: "Captures the current conditions of how people make a living.",
      photo: livelihoodsHim1,
      example: {
        label: "Unemployment",
        detail: "High unemployment signals limited job opportunities.",
      },
    },
    resistance: {
      title: "Resistance",
      description:
        "Some jobs may be more vulnerable due to the disturbances that can be caused by wildfire.",
      photo: livelihoodsHim2,
      example: {
        label: "Job Vulnerability",
        detail: "Wildfires can displace workers and impact access to workplaces.",
      },
    },
    recovery: {
      title: "Recovery",
      description:
        "A diverse mix of jobs and industries enhances a region’s ability to recover from wildfire impacts.",
      photo: livelihoodsHim3,
      example: {
        label: "Job Diversity",
        detail:
          "More jobs mean that potentially vulnerable workers can find employment less impacted by wildfire.",
      },
    },
  },
  {
    slug: "sense-of-place",
    label: "Sense of Place",
    color: "#8cd2b2",
    hero: senseOfPlaceHero,
    heroVideo: senseOfPlaceHeroVideo,
    tile: senseOfPlaceTile,
    whyItMatters:
      "**Sense of Place** encompasses the cultural, spiritual, and aesthetic connections people have to landscapes. These connections can be shaped by the presence of distinctive species or the character of the landscape itself. Wildfire can reshape both landscapes and the meanings people attach to them. Therefore this domain considers **iconic places** and **iconic species** that hold special significance to people.",
    status: {
      title: "Status",
      description:
        "This **domain** does not assess status, as there is no single way to define an “ideal” special place. Instead, they are evaluated by their physical presence.",
      photo: sopIpHim1,
    },
    resistance: {
      title: "Resistance",
      description: "Reflects what helps places avoid damage.",
      photo: sopIpHim2,
      examples: [
        {
          heading: "Structural Iconic Places",
          label: "Access",
          detail: "Access via roads affects firefighter response",
        },
        {
          heading: "Natural Iconic Places",
          label: "Traits — Bark Thickness",
          detail: "Thicker bark increases the likelihood of tree survival",
        },
      ],
    },
    recovery: {
      title: "Recovery",
      description: "Captures the ability to restore important places.",
      photo: sopIpHim3,
      examples: [
        {
          heading: "Structural Iconic Places",
          label: "Extent of Significance",
          detail: "More recognized places may receive more support",
        },
        {
          heading: "Natural Iconic Places",
          label: "Traits — Seed Mass",
          detail: "Smaller seeds are more likely to regrow after wildfire",
        },
      ],
    },
    extra: {
      subheading: "Iconic Species",
      hero: senseOfPlaceIconicSpeciesHero,
      whyItMatters:
        "These are plants, animals, and fungi that are of special, iconic importance to people that are closely tied to culture and identity. Animals like the bald eagle are an example of an iconic species.",
      status: {
        title: "Status",
        description:
          "Captures species' threat of extinction and population health.",
        photo: sopIsHim1,
        example: {
          label: "Conservation Status",
          detail: "Threat of extinction",
        },
      },
      resistance: {
        title: "Resistance",
        description: "Traits that help species survive wildfire.",
        photo: sopIsHim2,
        example: {
          label: "Traits — Wings",
          detail: "Ability to relocate during a wildfire",
        },
      },
      recovery: {
        title: "Recovery",
        description: "Traits that support population recovery.",
        photo: sopIsHim3,
        example: {
          label: "Traits — Age to Maturity",
          detail:
            "Species that sexually mature quicker are able to restore populations after a wildfire event",
        },
      },
    },
  },
  {
    slug: "species",
    label: "Species",
    color: "#58b6a5",
    hero: speciesHero,
    heroVideo: speciesHeroVideo,
    tile: speciesTile,
    whyItMatters:
      "People value the existence of a diverse array of **species** both for their intrinsic qualities and for the natural services, such as pollination, they provide. **Species** that survive and recover from fire help maintain healthy ecosystems.",
    status: {
      title: "Status",
      description:
        "Captures species conservation status, reflecting the diversity of plants, animals, and fungi within an area.",
      photo: speciesHim1,
      example: { label: "Conservation Status", detail: "Threat of extinction" },
    },
    resistance: {
      title: "Resistance",
      description:
        "Reflects traits that help species to avoid harm during a wildfire.",
      photo: speciesHim2,
      example: {
        label: "Traits — Gills",
        detail:
          "The ability to breathe underwater helps animals avoid wildfire",
      },
    },
    recovery: {
      title: "Recovery",
      description:
        "Measures the ability of species populations to return after wildfire.",
      photo: speciesHim3,
      example: {
        label: "Range",
        detail:
          "With larger ranges, species are more likely to have a surviving population to recover.",
      },
    },
  },
  {
    slug: "habitats",
    label: "Habitats",
    color: "#2c7a6f",
    hero: habitatsHero,
    heroVideo: habitatsHeroVideo,
    tile: habitatsTile,
    whyItMatters:
      "**Habitats** such as forests, grasslands, and shrublands support landscapes and communities. Habitat influences how wildfire behaves and how ecosystems recover.",
    status: {
      title: "Status",
      description:
        "Represents current habitat extent compared to a historical baseline.",
      photo: habitatsHim1,
      example: {
        label: "Protection Status",
        detail:
          "Protection determines how well we are preserving habitats for future generations.",
      },
    },
    resistance: {
      title: "Resistance",
      description: "Captures how well habitats can withstand wildfire.",
      photo: habitatsHim2,
      example: {
        label: "Traits — Tree Height",
        detail: "Taller trees are less likely to catch fire",
      },
    },
    recovery: {
      title: "Recovery",
      description: "Measures how habitats regenerate after wildfire.",
      photo: habitatsHim3,
      example: {
        label: "Rainfall",
        detail: "Precipitation supports plant regrowth",
      },
    },
  },
  {
    slug: "water",
    label: "Water",
    color: "#1f3c63",
    hero: waterHero,
    heroVideo: waterHeroVideo,
    tile: waterTile,
    whyItMatters:
      "**Water** reflects the availability and stability of freshwater resources that are essential for community well-being. Wildfires can affect water availability, timing, and quality.",
    status: {
      title: "Status",
      description:
        "Captures water availability compared to historical conditions.",
      photo: waterHim1,
      example: {
        label: "Quantity",
        detail: "How much water is available at a given time",
      },
    },
    resistance: {
      title: "Resistance",
      description:
        "Reflects how water systems are protected from wildfire impacts.",
      photo: waterHim2,
      example: {
        label: "Water Treatment Plants",
        detail:
          "Helps communities maintain safe drinking water in the event of a wildfire-related disruption",
      },
    },
    recovery: {
      title: "Recovery",
      description:
        "Not included due to limited data on post-wildfire recovery processes.",
      photo: waterHim3,
    },
  },
  {
    slug: "air",
    label: "Air",
    color: "#2a1f3d",
    hero: airHero,
    heroVideo: airHeroVideo,
    tile: airTile,
    whyItMatters:
      "**Air** quality is one of the most immediate ways people experience wildfire. Smoky air can have widespread health impacts.",
    status: {
      title: "Status",
      description: "Captures exposure to poor air quality.",
      photo: airHim1,
      example: {
        label: "Number of Days of Poor Air Quality",
        detail: "Air quality can quickly become poor during wildfire events",
      },
    },
    resistance: {
      title: "Resistance",
      description: "Reflects the ability to reduce harm from smoke exposure.",
      photo: airHim2,
      example: {
        label: "Hospital Access",
        detail:
          "Individuals with access to hospitals are more likely to have resources that can reduce harm from poor air quality, such as masks",
      },
    },
    recovery: {
      title: "Recovery",
      description:
        "Not included due to limited data linking recovery to long-term health outcomes.",
      photo: airHim3,
    },
  },
];

export const DOMAINS_BY_SLUG: Record<DomainSlug, Domain> = DOMAINS.reduce(
  (acc, d) => ({ ...acc, [d.slug]: d }),
  {} as Record<DomainSlug, Domain>,
);

export function getDomain(slug: DomainSlug): Domain {
  return DOMAINS_BY_SLUG[slug];
}

/**
 * Maps a redesign domain slug to the mapping-app (dashboard) domain id, so the
 * "Explore the Index" CTA can deep-link the interactive map straight to that
 * domain (`/dashboard?domain=<id>`). The dashboard ids live in
 * `src/data/domainHierarchy.ts` and differ from the public slugs for a few
 * domains (e.g. species → biodiversity, habitats → natural_habitats).
 */
export const DASHBOARD_DOMAIN_ID_BY_SLUG: Record<DomainSlug, string> = {
  infrastructure: "infrastructure",
  communities: "communities",
  livelihoods: "livelihoods",
  "sense-of-place": "sense_of_place",
  species: "biodiversity",
  habitats: "natural_habitats",
  water: "water",
  air: "air_quality",
};

// Exported for the Iconic Places sub-block on the Sense of Place detail page.
export { senseOfPlaceIconicPlacesHero };
