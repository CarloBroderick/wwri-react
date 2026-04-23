import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import wriLogoFull from "../../../../assets/public-website-redesign/images/logos/wri-full-white-trimmed.png";
import { PRIMARY_NAV, type NavItem } from "../../config/navigation";
import { REDESIGN_ROUTES } from "../../routes/routeConfig";

/**
 * Top navigation bar — Canva spec:
 *   • Container: Forest #2F5D3A
 *   • Logo: WRI Logo Full (white text + outline with transparent surrounding area)
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
          className="flex items-center"
          aria-label="Wildfire Resilience Index — home"
        >
          <img
            id="public-website-redesign-header-logo"
            src={wriLogoFull}
            alt="Wildfire Resilience Index"
            className="h-[4.75rem] w-auto object-contain md:h-20"
          />
        </Link>
        <div
          id="public-website-redesign-header-logo-divider"
          className="hidden h-9 w-px bg-wriSmokeFog/75 md:block"
          aria-hidden="true"
        />

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
          `relative block py-9 text-[clamp(16px,1.6vw,24px)] uppercase tracking-[0.06em] transition-colors ${
            isActive
              ? "font-bold after:absolute after:inset-x-0 after:-bottom-0 after:h-[5px] after:bg-wriSage"
              : "font-normal hover:text-wriSmokeFog/85"
          }`
        }
        end={item.to === REDESIGN_ROUTES.home}
      >
        {item.label}
      </NavLink>
      {hasChildren && open && (
        <div
          id={`${id}-dropdown`}
          className="absolute left-1/2 top-full z-50 min-w-[240px] -translate-x-1/2 overflow-hidden rounded-sm border-2 border-wriSmokeFog bg-wriForest shadow-xl"
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
      )}
    </div>
  );
}

export default SiteHeader;
