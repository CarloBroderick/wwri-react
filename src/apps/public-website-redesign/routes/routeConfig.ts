import type { DomainSlug } from "../config/domains";

/** Base path for the redesign app (sibling to `public-website-legacy`). */
export const REDESIGN_ROUTE_PREFIX = "/redesign";

export const REDESIGN_ROUTES = {
  home: REDESIGN_ROUTE_PREFIX,
  about: `${REDESIGN_ROUTE_PREFIX}/about`,

  // Domains
  domains: `${REDESIGN_ROUTE_PREFIX}/domains`,
  domain: (slug: DomainSlug) => `${REDESIGN_ROUTE_PREFIX}/domains/${slug}`,

  // Methodology
  methodology: `${REDESIGN_ROUTE_PREFIX}/methodology`,
  methodologyDeepDive: `${REDESIGN_ROUTE_PREFIX}/methodology/deep-dive`,
  methodologyHowToUse: `${REDESIGN_ROUTE_PREFIX}/methodology/how-to-use`,

  // Media
  media: `${REDESIGN_ROUTE_PREFIX}/media`,
  news: `${REDESIGN_ROUTE_PREFIX}/media/news`,
  outreach: `${REDESIGN_ROUTE_PREFIX}/media/outreach`,
  publications: `${REDESIGN_ROUTE_PREFIX}/media/publications`,
  resources: `${REDESIGN_ROUTE_PREFIX}/media/resources`,

  // Contact
  contact: `${REDESIGN_ROUTE_PREFIX}/contact`,
  contactTeam: `${REDESIGN_ROUTE_PREFIX}/contact/team`,
  contactConnect: `${REDESIGN_ROUTE_PREFIX}/contact/connect`,
  contactFaqs: `${REDESIGN_ROUTE_PREFIX}/contact/faqs`,

  /** Link out to the legacy interactive index map (for the "Explore the Index" CTA). */
  exploreIndex: "/",
} as const;
