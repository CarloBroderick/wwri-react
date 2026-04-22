import type { DomainSlug } from "../config/domains";

/** Base path for the redesign app (sibling to `public-website-legacy`). */
export const REDESIGN_ROUTE_PREFIX = "/redesign";

export const REDESIGN_ROUTES = {
  home: REDESIGN_ROUTE_PREFIX,
  about: `${REDESIGN_ROUTE_PREFIX}/about`,
  methodology: `${REDESIGN_ROUTE_PREFIX}/methodology`,
  contact: `${REDESIGN_ROUTE_PREFIX}/contact`,
  domains: `${REDESIGN_ROUTE_PREFIX}/domains`,
  domain: (slug: DomainSlug) => `${REDESIGN_ROUTE_PREFIX}/domains/${slug}`,
  media: `${REDESIGN_ROUTE_PREFIX}/media`,
  news: `${REDESIGN_ROUTE_PREFIX}/media/news`,
  outreach: `${REDESIGN_ROUTE_PREFIX}/media/outreach`,
  publications: `${REDESIGN_ROUTE_PREFIX}/media/publications`,
  resources: `${REDESIGN_ROUTE_PREFIX}/media/resources`,
  /** Link out to the legacy interactive index map (for the "Explore the Index" CTA). */
  exploreIndex: "/",
} as const;
