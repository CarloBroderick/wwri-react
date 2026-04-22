import { REDESIGN_ROUTES } from "../routes/routeConfig";
import { DOMAINS } from "./domains";

export type NavChild = { label: string; to: string };
export type NavItem = { label: string; to: string; children?: NavChild[] };

export const PRIMARY_NAV: NavItem[] = [
  { label: "About", to: REDESIGN_ROUTES.about },
  {
    label: "Domains",
    to: REDESIGN_ROUTES.domains,
    children: [
      { label: "Overview", to: REDESIGN_ROUTES.domains },
      ...DOMAINS.map((d) => ({ label: d.label, to: REDESIGN_ROUTES.domain(d.slug) })),
    ],
  },
  { label: "Methology", to: REDESIGN_ROUTES.methodology },
  {
    label: "Media",
    to: REDESIGN_ROUTES.news,
    children: [
      { label: "News & Features", to: REDESIGN_ROUTES.news },
      { label: "Outreach", to: REDESIGN_ROUTES.outreach },
      { label: "Publications", to: REDESIGN_ROUTES.publications },
      { label: "Resources", to: REDESIGN_ROUTES.resources },
    ],
  },
  { label: "Contact", to: REDESIGN_ROUTES.contact },
];
