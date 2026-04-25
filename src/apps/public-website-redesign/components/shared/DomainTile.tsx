import { Link } from "react-router-dom";
import type { Domain } from "../../config/domains";
import { REDESIGN_ROUTES } from "../../routes/routeConfig";

type Props = {
  domain: Domain;
  size?: "sm" | "md";
  /** Render the dimmed Canva square (current-domain slot). */
  muted?: boolean;
  /** Highlight this tile as the "next" suggested domain (Sage outline, thickness 6). */
  next?: boolean;
};

/**
 * Square Canva-PNG tile that links to a domain detail page.
 *   • Default: full-color PNG, hyperlinked, subtle hover lift
 *   • muted:   swaps to the dimmed PNG, disables pointer events (current page)
 *   • next:    renders with a 6px Sage outline per spec ("next page domain icon")
 */
function DomainTile({ domain, size = "md", muted = false, next = false }: Props) {
  const sizeClass = size === "sm" ? "w-full max-w-[170px]" : "w-full";
  const img = muted ? (
    <img
      id={`public-website-redesign-domain-tile-${domain.slug}-image-dimmed`}
      src={domain.tileDim}
      alt={`${domain.label} domain`}
      className="aspect-square w-full rounded-[10px] object-cover"
      draggable={false}
    />
  ) : (
    <div
      id={`public-website-redesign-domain-tile-${domain.slug}-image-wrapper`}
      className="relative aspect-square w-full rounded-[10px]"
    >
      <img
        id={`public-website-redesign-domain-tile-${domain.slug}-image-default`}
        src={domain.tile}
        alt={`${domain.label} domain`}
        className="absolute inset-0 h-full w-full rounded-[10px] object-cover opacity-100 transition-opacity duration-150 group-hover:opacity-0"
        draggable={false}
      />
      <img
        id={`public-website-redesign-domain-tile-${domain.slug}-image-hover-dimmed`}
        src={domain.tileDim}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full rounded-[10px] object-cover opacity-0 transition-opacity duration-150 group-hover:opacity-100"
        draggable={false}
      />
    </div>
  );

  const frame = next
    ? `block overflow-hidden rounded-[10px] outline outline-[6px] outline-wriSage ring-offset-2 ring-offset-wriSmokeFog ${sizeClass}`
    : `block overflow-hidden rounded-[10px] ${sizeClass}`;

  if (muted) {
    return (
      <div
        id={`public-website-redesign-domain-tile-${domain.slug}`}
        className={`${frame} pointer-events-none`}
      >
        {img}
      </div>
    );
  }

  return (
    <Link
      id={`public-website-redesign-domain-tile-${domain.slug}`}
      to={REDESIGN_ROUTES.domain(domain.slug)}
      className={`${frame} group`}
    >
      {img}
    </Link>
  );
}

export default DomainTile;
