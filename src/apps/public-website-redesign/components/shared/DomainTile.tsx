import { Link } from "react-router-dom";
import type { Domain } from "../../config/domains";
import { REDESIGN_ROUTES } from "../../routes/routeConfig";

type Props = {
  domain: Domain;
  size?: "sm" | "md";
  /** Visually dim the tile (used in the current-domain position on a detail page). */
  muted?: boolean;
};

/** Square colored tile with label + icon, linking to the domain detail page. */
function DomainTile({ domain, size = "md", muted = false }: Props) {
  const textColor = domain.textOn === "dark" ? "text-[#22402c]" : "text-white";
  const sizeClasses =
    size === "sm"
      ? "aspect-square p-3 text-xs"
      : "aspect-square p-4 text-sm md:text-base";
  return (
    <Link
      id={`public-website-redesign-domain-tile-${domain.slug}`}
      to={REDESIGN_ROUTES.domain(domain.slug)}
      style={{ backgroundColor: domain.color }}
      className={`group relative flex flex-col justify-between rounded-sm transition-transform hover:-translate-y-0.5 hover:shadow-md ${sizeClasses} ${textColor} ${
        muted ? "opacity-30 pointer-events-none" : ""
      }`}
    >
      <span className="font-bold leading-tight">{domain.label}</span>
      <img
        src={domain.icon}
        alt=""
        aria-hidden
        className="mx-auto h-12 w-12 opacity-95 md:h-16 md:w-16"
        style={{ filter: domain.textOn === "dark" ? "invert(15%) sepia(8%) saturate(2000%) hue-rotate(80deg)" : "brightness(0) invert(1)" }}
      />
    </Link>
  );
}

export default DomainTile;
