import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoSvg from "../../../../assets/public-website-redesign/icons/logo.svg";
import { PRIMARY_NAV, type NavItem } from "../../config/navigation";
import { REDESIGN_ROUTES } from "../../routes/routeConfig";

/** Top navigation bar matching the PDF spec: dark forest-green bar, hex logo, links, CTA pill. */
function SiteHeader() {
  return (
    <header
      id="public-website-redesign-site-header"
      className="sticky top-0 z-40 w-full bg-[#2f5a3d] font-[Be_Vietnam_Pro,system-ui,sans-serif] text-white shadow-sm"
    >
      <div
        id="public-website-redesign-header-inner"
        className="mx-auto flex h-20 max-w-[1280px] items-center justify-between gap-6 px-6"
      >
        <Link
          id="public-website-redesign-header-home-link"
          to={REDESIGN_ROUTES.home}
          className="flex items-center gap-3"
        >
          <img
            id="public-website-redesign-header-logo"
            src={logoSvg}
            alt="Wildfire Resilience Index"
            className="h-12 w-auto"
          />
          <span
            id="public-website-redesign-header-logo-text"
            className="max-w-[110px] text-[10px] font-bold uppercase leading-tight tracking-[0.08em]"
          >
            Wildfire
            <br />
            Resilience
            <br />
            Index
          </span>
        </Link>

        <nav
          id="public-website-redesign-header-nav"
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary"
        >
          {PRIMARY_NAV.map((item) => (
            <HeaderNavItem key={item.label} item={item} />
          ))}
        </nav>

        <Link
          id="public-website-redesign-header-cta"
          to={REDESIGN_ROUTES.exploreIndex}
          className="hidden whitespace-nowrap rounded-full border-2 border-[#a5be6c] px-5 py-2 text-sm font-bold uppercase tracking-wide text-[#a5be6c] transition-colors hover:bg-[#a5be6c] hover:text-[#22402c] md:inline-block"
        >
          Explore the Index
        </Link>
      </div>
    </header>
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
          `relative py-8 text-sm font-bold uppercase tracking-[0.12em] ${
            isActive ? "after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:bg-[#a5be6c]" : ""
          } hover:text-[#dde7c2]`
        }
        end={item.to === REDESIGN_ROUTES.home}
      >
        {item.label}
      </NavLink>
      {hasChildren && open && (
        <div
          id={`${id}-dropdown`}
          className="absolute left-1/2 top-full z-50 min-w-[220px] -translate-x-1/2 overflow-hidden rounded-md border border-[#22402c] bg-[#3a6b48] shadow-xl"
          role="menu"
        >
          {item.children!.map((child, idx) => (
            <NavLink
              key={child.to}
              id={`${id}-child-${idx}`}
              to={child.to}
              className={({ isActive }) =>
                `block px-5 py-2.5 text-center text-sm transition-colors ${
                  isActive || idx === 0
                    ? "bg-[#4a7a58] font-bold text-white"
                    : "text-[#eef3dc] hover:bg-[#4a7a58] hover:text-white"
                }`
              }
              end
              role="menuitem"
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
