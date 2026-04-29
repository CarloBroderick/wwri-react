import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import wriLogoFlameOnly from "../../../../assets/public-website-redesign/icons/wri-logo-flame-only.png";
import { PRIMARY_NAV, type NavItem } from "../../config/navigation";
import { REDESIGN_ROUTES } from "../../routes/routeConfig";

/**
 * Top navigation bar — Canva spec:
 *   • Container: Forest #2F5D3A
 *   • Logo: WRI mark icon + "Wildfire Resilience Index" wordmark text
 *   • Nav items: Poppins Normal size 24, Smoke Fog color, Sage underline (5px) when
 *     the current page is selected, Poppins Bold text on selection
 *   • Dropdowns: Forest container, Moss outline, Moss Menu Highlight on hover
 *   • CTA: "EXPLORE THE INDEX" transparent pill with Moss outline (5px); flips to
 *     filled Moss-clicked on active
 *   • Separation line under bar: 1px Smoke Fog
 */
function SiteHeader() {
  return (
    <header
      id="public-website-redesign-site-header"
      className="sticky top-0 z-40 w-full border-b border-wriSmokeFog/90 bg-wriForest font-Poppins text-wriSmokeFog shadow-sm"
    >
      <div
        id="public-website-redesign-header-inner"
        className="mx-auto flex h-24 max-w-[1400px] items-center justify-between gap-6 px-6"
      >
        <Link
          id="public-website-redesign-header-home-link"
          to={REDESIGN_ROUTES.home}
          className="flex items-center gap-3"
          aria-label="Wildfire Resilience Index — home"
        >
          <span id="public-website-redesign-header-brand-lockup" className="inline-flex items-center gap-2">
            <img
              id="public-website-redesign-header-logo"
              src={wriLogoFlameOnly}
              alt="Wildfire Resilience Index flame icon"
              className="h-14 w-auto object-contain md:h-16"
            />
            <span
              id="public-website-redesign-header-wordmark"
              className="flex h-14 flex-col justify-between font-Poppins py-[2px] text-[11px] font-bold uppercase leading-none tracking-[0.08em] text-wriSmokeFog md:h-16 md:text-[17px]"
            >
              <span
                id="public-website-redesign-header-wordmark-line-wildfire"
                className="block leading-[0.86] [leading-trim:both] [text-edge:cap_alphabetic] [text-box-trim:trim-both] [text-box-edge:cap_alphabetic]"
              >
                Wildfire
              </span>
              <span
                id="public-website-redesign-header-wordmark-line-resilience"
                className="block leading-[0.86] [leading-trim:both] [text-edge:cap_alphabetic] [text-box-trim:trim-both] [text-box-edge:cap_alphabetic]"
              >
                Resilience
              </span>
              <span
                id="public-website-redesign-header-wordmark-line-index"
                className="block leading-[0.86] [leading-trim:both] [text-edge:cap_alphabetic] [text-box-trim:trim-both] [text-box-edge:cap_alphabetic]"
              >
                Index
              </span>
            </span>
          </span>
        </Link>
        <nav
          id="public-website-redesign-header-nav"
          className="hidden items-center gap-6 md:flex lg:gap-10"
          aria-label="Primary"
        >
          {PRIMARY_NAV.map((item) => (
            <HeaderNavItem key={item.label} item={item} />
          ))}
        </nav>

        <ExploreIndexButton />
      </div>
    </header>
  );
}

/**
 * CTA pill: transparent + Moss outline by default; once the user navigates to
 * the index map, the button flips to a filled "clicked" Moss state per spec.
 */
function ExploreIndexButton() {
  const { pathname } = useLocation();
  const isActive = pathname === REDESIGN_ROUTES.exploreIndex;
  const base =
    "hidden whitespace-nowrap rounded-full px-6 py-2 text-[clamp(16px,1.4vw,22px)] leading-none tracking-wide transition-colors md:inline-block";
  const styles = isActive
    ? "border-[5px] border-wriMossClicked bg-wriMossClicked font-bold text-wriSmokeFog"
    : "border-[5px] border-wriMoss font-normal text-wriSmokeFog hover:bg-wriMossClicked hover:border-wriMossClicked";
  return (
    <Link
      id="public-website-redesign-header-cta"
      to={REDESIGN_ROUTES.exploreIndex}
      className={`${base} ${styles}`}
    >
      EXPLORE THE INDEX
    </Link>
  );
}

function HeaderNavItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const hasChildren = !!item.children?.length;
  const id = `public-website-redesign-header-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <div
      id={`${id}-wrapper`}
      className="relative"
      onMouseEnter={() => hasChildren && setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <NavLink
        id={id}
        to={item.to}
        className={({ isActive }) =>
          `relative flex items-center text-[clamp(16px,1.6vw,24px)] uppercase tracking-[0.06em] transition-colors duration-200 ease-out ${
            isActive ? "" : "font-[500] hover:text-wriSmokeFog/85"
          }`
        }
        end={item.to === REDESIGN_ROUTES.home}
      >
        {({ isActive }) => (
          <span
            id={`${id}-label`}
            data-label={item.label}
            className={`relative inline-block before:block before:h-0 before:overflow-hidden before:font-[700] before:content-[attr(data-label)] before:invisible after:absolute after:inset-x-0 after:-bottom-2 after:h-[5px] after:origin-left after:bg-wriSage after:transition-[transform,opacity] after:duration-200 after:ease-out ${
              isActive
                ? "font-[700] after:scale-x-100 after:opacity-100"
                : "font-[500] after:scale-x-0 after:opacity-0"
            }`}
          >
            {item.label}
          </span>
        )}
      </NavLink>
      {hasChildren && open && (
        <div
          id={`${id}-dropdown-hover-target`}
          className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3"
        >
          <div
            id={`${id}-dropdown`}
            className="min-w-[240px] overflow-hidden rounded-sm border-2 border-wriSmokeFog bg-wriForest shadow-xl"
            role="menu"
          >
            {item.children!.map((child, idx) => (
              <NavLink
                key={child.to}
                id={`${id}-child-${idx}`}
                to={child.to}
                end
                role="menuitem"
                className={({ isActive }) =>
                  `block px-6 py-3 text-center transition-colors ${
                    isActive
                      ? "text-[21px] font-bold text-wriSmokeFog"
                      : "text-[19px] font-normal text-wriSmokeFog hover:bg-wriMossMenuHighlight hover:text-[21px] hover:font-bold"
                  }`
                }
              >
                {child.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SiteHeader;
