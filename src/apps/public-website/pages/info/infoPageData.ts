import { PUBLIC_ROUTES } from "../../routes/routeConfig";

export type InfoPageKey =
  | "about"
  | "whyResilience"
  | "whyIndex"
  | "howItWorks"
  | "team"
  | "resources"
  | "news";

export interface InfoPageSection {
  heading: string;
  paragraphs: string[];
}

export interface InfoPageLink {
  key: InfoPageKey;
  label: string;
  route: string;
  description: string;
}

export interface InfoPageContent {
  key: InfoPageKey;
  title: string;
  subtitle: string;
  introParagraphs: [string, string];
  sections: [InfoPageSection, InfoPageSection, InfoPageSection];
  featuredModules?: {
    title: string;
    description: string;
    items: [
      {
        key: string;
        title: string;
        description: string;
        status: string;
        icon: "documents" | "news" | "people";
        examples: [string, string];
      },
      {
        key: string;
        title: string;
        description: string;
        status: string;
        icon: "documents" | "news" | "people";
        examples: [string, string];
      },
      {
        key: string;
        title: string;
        description: string;
        status: string;
        icon: "documents" | "news" | "people";
        examples: [string, string];
      }
    ];
  };
}

export const INFO_PAGE_LINKS: Record<InfoPageKey, InfoPageLink> = {
  about: {
    key: "about",
    label: "About",
    route: PUBLIC_ROUTES.about,
    description:
      "Who we are, why the index exists, and how this work supports shared wildfire resilience decisions.",
  },
  whyResilience: {
    key: "whyResilience",
    label: "Why Resilience",
    route: PUBLIC_ROUTES.whyResilience,
    description:
      "Why resilience is the right framing for living with fire across ecological and community systems.",
  },
  whyIndex: {
    key: "whyIndex",
    label: "Why an Index",
    route: PUBLIC_ROUTES.whyIndex,
    description:
      "How a structured index creates shared language and comparable evidence for planning conversations.",
  },
  howItWorks: {
    key: "howItWorks",
    label: "How It Works",
    route: PUBLIC_ROUTES.howItWorks,
    description:
      "How data, domain scores, and maps come together to support practical analysis and communication.",
  },
  team: {
    key: "team",
    label: "Meet the Team",
    route: PUBLIC_ROUTES.team,
    description:
      "The interdisciplinary contributors building, validating, and improving the wildfire resilience index.",
  },
  resources: {
    key: "resources",
    label: "Resources",
    route: PUBLIC_ROUTES.resources,
    description:
      "Links, reference materials, and background documents for deeper context and implementation support.",
  },
  news: {
    key: "news",
    label: "In the News",
    route: PUBLIC_ROUTES.news,
    description:
      "Stories, updates, and external coverage related to wildfire resilience and the index effort.",
  },
};

export const INFO_PAGE_CONTENT: Record<InfoPageKey, InfoPageContent> = {
  about: {
    key: "about",
    title: "About",
    subtitle:
      "The Wildfire Resilience Index brings social, ecological, and infrastructure signals into one practical framework for decision-making.",
    introParagraphs: [
      "The index was created to support people who need to make complex choices under real constraints. It helps teams compare places consistently, align stakeholders around shared evidence, and prioritize actions with transparency.",
      "Our approach is intentionally collaborative and iterative. We combine open data, domain expertise, and practitioner feedback so the index remains useful for planning conversations before, during, and after wildfire events.",
    ],
    sections: [
      {
        heading: "What the index is designed to do",
        paragraphs: [
          "The WRI is not a single-risk score meant to replace local judgment. It is a structured lens that surfaces where resistance and recovery conditions appear stronger or weaker across places.",
          "By organizing indicators into a common framework, it helps teams ask better questions, identify trade-offs, and communicate priorities to technical and non-technical audiences.",
        ],
      },
      {
        heading: "Who uses this work",
        paragraphs: [
          "The index is built for land managers, community leaders, researchers, philanthropic partners, and policy teams who need a shared baseline for wildfire resilience strategy.",
          "Each audience can use the same foundation while applying local context, community values, and operational realities to determine what action makes sense next.",
        ],
      },
      {
        heading: "How we improve over time",
        paragraphs: [
          "This project evolves through feedback, better data, and field-level learning. We expect language, visuals, and emphasis to mature as users test the framework in real decisions.",
          "That iterative cycle is a feature, not a flaw. It keeps the index connected to changing conditions and grounded in practical use.",
        ],
      },
    ],
  },
  whyResilience: {
    key: "whyResilience",
    title: "Why Resilience",
    subtitle:
      "Wildfire cannot be fully eliminated. The practical goal is improving how people and ecosystems withstand fire impacts and recover over time.",
    introParagraphs: [
      "Resilience framing acknowledges that wildfire is part of many landscapes. Instead of treating fire only as a failure to prevent, we evaluate whether systems can absorb stress, maintain function, and adapt after disturbance.",
      "This perspective supports long-horizon thinking. It helps teams avoid short-term fixes that look good immediately but reduce recovery potential later.",
    ],
    sections: [
      {
        heading: "Why a resistance + recovery lens matters",
        paragraphs: [
          "Some interventions reduce near-term harm, while others support long-term rebound. Measuring both prevents one-sided planning and reveals where additional support is needed.",
          "A resilience lens also improves communication by linking immediate preparedness decisions to durable outcomes communities care about.",
        ],
      },
      {
        heading: "Why this matters for communities",
        paragraphs: [
          "Wildfire impacts are uneven. Exposure, vulnerability, and access to support vary widely across populations and geographies.",
          "Resilience framing helps decision-makers identify who may need targeted assistance and where capacity-building investments can create more equitable outcomes.",
        ],
      },
      {
        heading: "Why this matters for landscapes",
        paragraphs: [
          "Ecological resilience affects water, habitat, species persistence, and long-term land productivity. These systems are interconnected with social and economic resilience.",
          "A shared framework helps teams see those interdependencies and avoid decisions that improve one system while harming another.",
        ],
      },
    ],
  },
  whyIndex: {
    key: "whyIndex",
    title: "Why an Index",
    subtitle:
      "An index creates common structure for complex evidence so people can compare places, discuss trade-offs, and prioritize action coherently.",
    introParagraphs: [
      "Wildfire resilience decisions often involve fragmented data and mixed methods. Without structure, teams can struggle to compare options or explain why a priority changed.",
      "The index provides a transparent framework that organizes indicators consistently while still preserving room for local interpretation and expertise.",
    ],
    sections: [
      {
        heading: "Shared language across stakeholders",
        paragraphs: [
          "Different groups often use different terms for similar concerns. The index helps align conversations by defining domains and indicators in a common way.",
          "That shared language reduces friction in planning sessions and improves continuity from technical analysis to public communication.",
        ],
      },
      {
        heading: "Comparable evidence across places",
        paragraphs: [
          "Comparable structure makes it easier to identify patterns, highlight outliers, and track where conditions improve or worsen.",
          "This supports more consistent prioritization, especially when funding, staffing, and timelines require clear justification.",
        ],
      },
      {
        heading: "Transparent assumptions and updates",
        paragraphs: [
          "Indexes make assumptions explicit: what is included, how indicators are grouped, and how interpretation should be bounded.",
          "That transparency helps teams revisit decisions as data quality improves, rather than rebuilding analysis from scratch each cycle.",
        ],
      },
    ],
  },
  howItWorks: {
    key: "howItWorks",
    title: "How It Works",
    subtitle:
      "The WRI combines domain-based indicators, map exploration, and clear outputs to support real-world planning workflows.",
    introParagraphs: [
      "Users explore resilience patterns across geographies and domains, then drill into indicator context to understand what is driving a score.",
      "Outputs are designed for practical use: proposal support, stakeholder communication, prioritization workshops, and internal planning reviews.",
    ],
    sections: [
      {
        heading: "Data ingestion and domain structure",
        paragraphs: [
          "Indicators are organized into eight domains so ecological, social, and built-system factors can be interpreted together rather than in isolation.",
          "The structure is explicit and reviewable, which supports confidence in interpretation and easier collaboration across teams.",
        ],
      },
      {
        heading: "Exploration in the interface",
        paragraphs: [
          "Users can navigate maps and compare places at multiple scales. This enables teams to move from broad patterns to locally relevant detail.",
          "Consistent interaction patterns make it easier to run repeatable analysis as priorities, geographies, or stakeholder questions change.",
        ],
      },
      {
        heading: "Decision support outputs",
        paragraphs: [
          "The platform supports communication artifacts such as summaries and report-ready context that can be shared with non-technical audiences.",
          "These outputs help bridge technical evidence and action planning, especially when teams need to make trade-offs transparent.",
        ],
      },
    ],
  },
  team: {
    key: "team",
    title: "Meet the Team",
    subtitle:
      "People from ecology, social science, geospatial analysis, and product design collaborate to keep this work rigorous and usable.",
    introParagraphs: [
      "This section uses placeholder team profiles so the site has a familiar science-communication layout while final names, headshots, and biographies are being prepared.",
      "Each profile card will eventually link to fuller biographies, current projects, and contact pathways for collaboration requests.",
    ],
    featuredModules: {
      title: "Team Directory (Placeholder)",
      description: "Replace these cards with real staff details, portraits, and publication links as soon as final assets are approved.",
      items: [
        {
          key: "science-lead",
          title: "Science Lead",
          description:
            "Placeholder profile for the person responsible for methodology stewardship, scientific review, and cross-domain quality checks.",
          status: "Bio and photo coming soon",
          icon: "people",
          examples: ["Focus area: resilience metrics and indicator validity", "Latest activity: methodology refresh planning memo"],
        },
        {
          key: "data-lead",
          title: "Data and Modeling Lead",
          description:
            "Placeholder profile for the person coordinating data pipelines, validation routines, and updates to indicator documentation.",
          status: "Bio and photo coming soon",
          icon: "people",
          examples: ["Focus area: geospatial processing and data quality control", "Latest activity: metadata schema update draft"],
        },
        {
          key: "engagement-lead",
          title: "Partnerships and Engagement Lead",
          description:
            "Placeholder profile for the person supporting partner onboarding, workshops, and communication with external collaborators.",
          status: "Bio and photo coming soon",
          icon: "people",
          examples: ["Focus area: partner workshops and training support", "Latest activity: regional briefing outline"],
        },
      ],
    },
    sections: [
      {
        heading: "Who is represented on this page",
        paragraphs: [
          "A typical science communication team page includes research leadership, technical implementation roles, and communications partners.",
          "This placeholder structure keeps the page useful now and makes future updates straightforward when approved content is ready.",
        ],
      },
      {
        heading: "How team content will be maintained",
        paragraphs: [
          "When finalized details are available, each profile card can include areas of expertise, selected publications, and current focus areas.",
          "Consistent profile formatting supports trust, readability, and easy scanning for site visitors looking for domain-specific contacts.",
        ],
      },
      {
        heading: "Next content additions planned",
        paragraphs: [
          "Upcoming additions include headshots with accessibility text, short bios, and links to organization pages where relevant.",
          "Optional expansions may include advisor acknowledgements and a contributors list for partner institutions.",
        ],
      },
    ],
  },
  resources: {
    key: "resources",
    title: "Resources",
    subtitle:
      "Reference material, downloads, and implementation guides will live here in a format designed for rapid reuse by practitioners.",
    introParagraphs: [
      "This page now uses structured placeholder categories that mirror common science communication websites: guides, data references, and downloadable assets.",
      "As documents are approved, each card will convert from placeholder state to direct links with version and date metadata.",
    ],
    featuredModules: {
      title: "Resource Library (Placeholder)",
      description: "These collections are staged to keep navigation stable while the final PDF, spreadsheet, and template assets are assembled.",
      items: [
        {
          key: "guides",
          title: "Methods and Guides",
          description:
            "Placeholder location for methodology briefs, indicator definitions, and plain-language explainers for new stakeholders.",
          status: "Downloads coming soon",
          icon: "documents",
          examples: ["Example file: WRI_Methods_Overview_v0.1.pdf", "Example file: Indicator_Glossary_v0.1.pdf"],
        },
        {
          key: "datasets",
          title: "Data and Metadata",
          description:
            "Placeholder location for source inventories, processing notes, and metadata snapshots tied to each release cycle.",
          status: "Downloads coming soon",
          icon: "documents",
          examples: ["Example file: Data_Sources_Register_v0.1.xlsx", "Example file: Release_Metadata_Notes_v0.1.pdf"],
        },
        {
          key: "toolkits",
          title: "Presentation Toolkit",
          description:
            "Placeholder location for slide templates, visual assets, and communication talking points for workshops and briefings.",
          status: "Downloads coming soon",
          icon: "documents",
          examples: ["Example file: WRI_Stakeholder_Slides_v0.1.pptx", "Example file: One_Page_Talking_Points_v0.1.docx"],
        },
      ],
    },
    sections: [
      {
        heading: "How to use this page",
        paragraphs: [
          "Visitors should be able to find practical material quickly by browsing category cards and then filtering by intended use.",
          "For science communication websites, this structure reduces time-to-find and keeps technical and non-technical resources clearly separated.",
        ],
      },
      {
        heading: "How files will be organized",
        paragraphs: [
          "Each final resource entry should include a concise description, file format, publish date, and owner for maintenance.",
          "That metadata pattern helps users evaluate relevance quickly and helps maintainers identify outdated files.",
        ],
      },
      {
        heading: "What to expect next",
        paragraphs: [
          "Future updates can add filtering controls, pinned featured resources, and a simple changelog by release.",
          "A lightweight governance process is recommended so new resources stay consistent in tone, quality, and accessibility.",
        ],
      },
    ],
  },
  news: {
    key: "news",
    title: "In the News",
    subtitle:
      "Coverage highlights, project announcements, and event recaps will be published here to show momentum and public visibility.",
    introParagraphs: [
      "This section now follows a standard newsroom-style placeholder structure with featured stories, media mentions, and event updates.",
      "Each item is currently a content placeholder and can be replaced with publication-ready links, source names, and publish dates.",
    ],
    featuredModules: {
      title: "Newsroom Feed (Placeholder)",
      description: "Use these placeholders until approved story links are available from communications and partner teams.",
      items: [
        {
          key: "featured-story",
          title: "Featured Story",
          description:
            "Placeholder for the most recent long-form update about the project, written for a broad public and partner audience.",
          status: "Story link coming soon",
          icon: "news",
          examples: ["Sample headline: Regional Wildfire Resilience Pilot Launches", "Sample date: March 2026"],
        },
        {
          key: "press-mentions",
          title: "Press Mentions",
          description:
            "Placeholder list for third-party media coverage, interviews, and references to wildfire resilience framing in related outlets.",
          status: "Story links coming soon",
          icon: "news",
          examples: ["Sample source: Public Lands Journal", "Sample source: Community Adaptation Brief"],
        },
        {
          key: "events-and-briefings",
          title: "Events and Briefings",
          description:
            "Placeholder for conference updates, webinar recordings, and workshop recaps connected to index adoption or research findings.",
          status: "Event updates coming soon",
          icon: "news",
          examples: ["Sample event: Spring Resilience Roundtable", "Sample asset: Webinar recap and slides"],
        },
      ],
    },
    sections: [
      {
        heading: "Editorial structure",
        paragraphs: [
          "A strong science communication news page separates owned announcements, external coverage, and event reporting for clarity.",
          "That separation helps readers quickly understand whether a story is authored internally or references external publication context.",
        ],
      },
      {
        heading: "Publishing workflow",
        paragraphs: [
          "Each future article should include a date, source attribution, and short abstract so users can scan headlines efficiently.",
          "Publishing from a shared template improves consistency and reduces rework across communications and product teams.",
        ],
      },
      {
        heading: "Future enhancements",
        paragraphs: [
          "Potential future enhancements include topic tags, archive filters, and RSS support for external subscribers.",
          "Those additions can be staged incrementally once real stories are being published on a regular cadence.",
        ],
      },
    ],
  },
};
