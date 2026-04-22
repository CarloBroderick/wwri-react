import infrastructureHero from "../../../assets/public-website-redesign/images/domains/infrastructure-hero.jpg";
import communitiesHero from "../../../assets/public-website-redesign/images/domains/communities-hero.jpg";
import livelihoodsHero from "../../../assets/public-website-redesign/images/domains/livelihoods-hero.jpg";
import senseOfPlaceHero from "../../../assets/public-website-redesign/images/domains/sense-of-place-hero.jpg";
import speciesHero from "../../../assets/public-website-redesign/images/domains/species-hero.jpg";
import habitatsHero from "../../../assets/public-website-redesign/images/domains/habitats-hero.jpg";
import waterHero from "../../../assets/public-website-redesign/images/domains/water-hero.jpg";
import airHero from "../../../assets/public-website-redesign/images/domains/air-hero.jpg";

import infrastructureIcon from "../../../assets/public-website-redesign/icons/domain-infrastructure.svg";
import communitiesIcon from "../../../assets/public-website-redesign/icons/domain-communities.svg";
import livelihoodsIcon from "../../../assets/public-website-redesign/icons/domain-livelihoods.svg";
import senseOfPlaceIcon from "../../../assets/public-website-redesign/icons/domain-sense-of-place.svg";
import speciesIcon from "../../../assets/public-website-redesign/icons/domain-species.svg";
import habitatsIcon from "../../../assets/public-website-redesign/icons/domain-habitats.svg";
import waterIcon from "../../../assets/public-website-redesign/icons/domain-water.svg";
import airIcon from "../../../assets/public-website-redesign/icons/domain-air.svg";

export type DomainSlug =
  | "infrastructure"
  | "communities"
  | "livelihoods"
  | "sense-of-place"
  | "species"
  | "habitats"
  | "water"
  | "air";

export type DomainSection = {
  title: string;
  description: string;
  statusLabel?: string; // "N/A" or undefined for a measured status
  example?: { label: string; detail: string };
};

export type Domain = {
  slug: DomainSlug;
  label: string;
  color: string; // background tile color
  textOn: "light" | "dark"; // text color on tile
  hero: string;
  icon: string;
  whyItMatters: string;
  status: DomainSection;
  resistance: DomainSection;
  recovery: DomainSection;
  /** Optional second “sub-theme” used by Sense of Place (Iconic Places + Iconic Species). */
  extra?: {
    subheading: string;
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
    textOn: "light",
    hero: infrastructureHero,
    icon: infrastructureIcon,
    whyItMatters:
      "Infrastructure forms the foundation of communities—shaping where we live, work, and interact. Buildings and other structures provide shelter, safety, and access to essential resources.",
    status: {
      title: "Status N/A",
      description:
        "This domain does not assess status, as there is no single “ideal” amount or distribution of infrastructure. Instead, it evaluates where structures are.",
      statusLabel: "N/A",
    },
    resistance: {
      title: "Resistance",
      description: "Reflects features that help infrastructure avoid damage and support recovery.",
      example: {
        label: "Building Codes",
        detail: "Design and construction standards that influence fire resistance",
      },
    },
    recovery: {
      title: "Recovery",
      description: "Captures the ability to rebuild after a wildfire.",
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
    textOn: "light",
    hero: communitiesHero,
    icon: communitiesIcon,
    whyItMatters:
      "Communities are shaped by social, cultural, and geographic connections that influence how people prepare for, respond to, and recover from wildfire.",
    status: {
      title: "Status N/A",
      description:
        "This domain does not assess status, and instead focuses on where people and communities are located.",
      statusLabel: "N/A",
    },
    resistance: {
      title: "Resistance",
      description: "Reflects the ability to safely respond to wildfire, including evacuation.",
      example: {
        label: "Vehicle Access",
        detail: "Limited access can make evacuation more difficult",
      },
    },
    recovery: {
      title: "Recovery",
      description: "Captures the ability of communities to rebuild after wildfire.",
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
    textOn: "light",
    hero: livelihoodsHero,
    icon: livelihoodsIcon,
    whyItMatters:
      "Livelihoods reflect how people make a living and maintain well-being. Wildfire can disrupt jobs, income, and local economies.",
    status: {
      title: "Status",
      description: "Captures economic conditions that support well-being.",
      example: { label: "Unemployment", detail: "Higher rates can indicate economic vulnerability" },
    },
    resistance: {
      title: "Resistance",
      description: "Reflects how vulnerable jobs are to wildfire disruption.",
      example: { label: "Job Vulnerability", detail: "Some industries are more affected by wildfire" },
    },
    recovery: {
      title: "Recovery",
      description: "Reflects how economies rebound after wildfire.",
      example: { label: "Job Diversity", detail: "More diverse economies recover more easily" },
    },
  },
  {
    slug: "sense-of-place",
    label: "Sense of Place",
    color: "#8cd2b2",
    textOn: "dark",
    hero: senseOfPlaceHero,
    icon: senseOfPlaceIcon,
    whyItMatters:
      "Sense of Place encompasses the cultural, spiritual, and aesthetic connections people have to landscapes. These connections can be shaped by the presence of distinctive species or the character of the landscape itself. Wildfire can reshape both landscapes and the meanings people attach to them. Therefore this domain considers iconic places and iconic species that hold special significance to people.",
    status: {
      title: "Iconic Places — Status N/A",
      description:
        "There are areas that are culturally significant for a variety of reasons—such as landmarks, monuments, parks, and/or protected areas. The resilience for structural and natural places is evaluated differently. This domain does not assess status, as there is no single way to define an “ideal” special place. Instead, they are evaluated by their physical presence.",
      statusLabel: "N/A",
    },
    resistance: {
      title: "Iconic Places — Resistance",
      description: "Reflects what helps places avoid damage.",
      example: {
        label: "Structural: Access",
        detail: "Access via roads affects firefighter response",
      },
    },
    recovery: {
      title: "Iconic Places — Recovery",
      description: "Captures the ability to restore important places.",
      example: {
        label: "Natural: Bark Thickness",
        detail: "Thicker bark increases the likelihood of tree survival",
      },
    },
    extra: {
      subheading: "Iconic Species",
      whyItMatters:
        "These are plants, animals, and fungi that are of special, iconic importance to people that are closely tied to culture and identity. Animals like the bald eagle are an example of an iconic species.",
      status: {
        title: "Iconic Species — Status",
        description: "Captures species' threat of extinction and population health.",
        example: { label: "Conservation Status", detail: "Threat of extinction" },
      },
      resistance: {
        title: "Iconic Species — Resistance",
        description: "Traits that help species survive wildfire.",
        example: { label: "Traits — Wings", detail: "Ability to relocate during a wildfire" },
      },
      recovery: {
        title: "Iconic Species — Recovery",
        description: "Traits that support population recovery.",
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
    textOn: "light",
    hero: speciesHero,
    icon: speciesIcon,
    whyItMatters:
      "People value the existence of a diverse array of species both for their intrinsic qualities and for the natural services, such as pollination, they provide. Species that survive and recover from fire help maintain healthy ecosystems.",
    status: {
      title: "Status",
      description:
        "Captures species conservation status, reflecting the diversity of plants, animals, and fungi within an area.",
      example: { label: "Conservation Status", detail: "Threat of extinction" },
    },
    resistance: {
      title: "Resistance",
      description: "Reflects traits that help species to avoid harm during a wildfire.",
      example: {
        label: "Traits — Gills",
        detail: "The ability to breathe underwater helps animals avoid wildfire",
      },
    },
    recovery: {
      title: "Recovery",
      description: "Measures the ability of species populations to return after wildfire.",
      example: {
        label: "Range",
        detail: "Species with populations outside burn areas recover more easily",
      },
    },
  },
  {
    slug: "habitats",
    label: "Habitats",
    color: "#2c7a6f",
    textOn: "light",
    hero: habitatsHero,
    icon: habitatsIcon,
    whyItMatters:
      "Habitats such as forests, grasslands, and shrublands support landscapes and communities. Their condition influences how wildfire behaves and how ecosystems recover.",
    status: {
      title: "Status",
      description: "Represents current habitat condition compared to a historical baseline.",
      example: {
        label: "Protection Status",
        detail: "Protections impact how habitats are maintained",
      },
    },
    resistance: {
      title: "Resistance",
      description: "Captures how well habitats can withstand wildfire.",
      example: { label: "Traits — Tree Height", detail: "Taller trees are less likely to catch fire" },
    },
    recovery: {
      title: "Recovery",
      description: "Measures how habitats regenerate after wildfire.",
      example: { label: "Rainfall", detail: "Frequent precipitation supports plant regrowth" },
    },
  },
  {
    slug: "water",
    label: "Water",
    color: "#1f3c63",
    textOn: "light",
    hero: waterHero,
    icon: waterIcon,
    whyItMatters:
      "Water reflects the availability and stability of freshwater resources that are essential for community well-being. Wildfires can affect water availability, timing, and quality.",
    status: {
      title: "Status",
      description: "Captures water availability compared to historical conditions.",
      example: { label: "Quantity", detail: "How much water is available at a given time" },
    },
    resistance: {
      title: "Resistance",
      description: "Reflects how water systems are protected from wildfire impacts.",
      example: {
        label: "Water Treatment Plants",
        detail:
          "Helps communities maintain safe drinking water in the event of a wildfire-related disruption",
      },
    },
    recovery: {
      title: "Recovery N/A",
      description: "Not included due to limited data on post-wildfire recovery processes.",
      statusLabel: "N/A",
    },
  },
  {
    slug: "air",
    label: "Air",
    color: "#2a1f3d",
    textOn: "light",
    hero: airHero,
    icon: airIcon,
    whyItMatters:
      "Air quality is one of the most immediate ways people experience wildfire. Smokey air can have widespread health impacts.",
    status: {
      title: "Status",
      description: "Captures exposure to poor air quality.",
      example: {
        label: "Number of Days of Poor Air Quality",
        detail: "Air quality can quickly become poor during wildfire events",
      },
    },
    resistance: {
      title: "Resistance",
      description: "Reflects the ability to reduce harm from smoke exposure.",
      example: {
        label: "Hospital Access",
        detail:
          "Individuals with access to hospitals are more likely to have resources that can reduce harm from poor air quality, such as masks",
      },
    },
    recovery: {
      title: "Recovery N/A",
      description: "Not included due to limited data linking recovery to long-term health outcomes.",
      statusLabel: "N/A",
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
