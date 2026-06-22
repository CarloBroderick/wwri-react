import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { DOMAINS_BY_SLUG, type DomainSlug } from "../config/domains";
import { PRIMARY_NAV } from "../config/navigation";
import SiteFooter from "./layout/SiteFooter";
import SiteHeader from "./layout/SiteHeader";

const SITE_TITLE = "Wildfire Resilience Index";

/**
 * Resolves a descriptive document title for the current route so each page is
 * uniquely titled (WCAG 2.4.2). Reuses the nav config as the single source of
 * truth and falls back to the domain label for dynamic `/domains/:slug` pages.
 */
function titleForPathname(pathname: string): string {
  if (pathname === "/") return SITE_TITLE;

  const domainMatch = pathname.match(/^\/domains\/([^/]+)$/);
  if (domainMatch) {
    const domain = DOMAINS_BY_SLUG[domainMatch[1] as DomainSlug];
    if (domain) return `${domain.label} | ${SITE_TITLE}`;
  }

  for (const item of PRIMARY_NAV) {
    if (item.to === pathname) return `${item.label} | ${SITE_TITLE}`;
    for (const child of item.children ?? []) {
      if (child.to === pathname) return `${child.label} | ${SITE_TITLE}`;
    }
  }

  return SITE_TITLE;
}

function RedesignLayout() {
  const { pathname } = useLocation();
  const mainRef = useRef<HTMLElement>(null);
  const isFirstRender = useRef(true);

  // On navigation: reset scroll, set a descriptive title, and move keyboard /
  // screen-reader focus to <main> so users are informed a new page loaded.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    document.title = titleForPathname(pathname);

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    mainRef.current?.focus();
  }, [pathname]);

  return (
    <div
      id="public-website-redesign-layout"
      className="flex min-h-screen flex-col bg-wriSmokeFog font-Poppins text-wriCanopy"
    >
      <a
        id="public-website-redesign-skip-link"
        href="#public-website-redesign-main"
        className="sr-only rounded bg-wriForest px-4 py-2 text-wriSmokeFog focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100]"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <main
        id="public-website-redesign-main"
        ref={mainRef}
        tabIndex={-1}
        className="flex-1 outline-none"
      >
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

export default RedesignLayout;
