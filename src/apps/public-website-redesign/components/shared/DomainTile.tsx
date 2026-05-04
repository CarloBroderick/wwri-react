import { Link } from "react-router-dom";
import type { Domain } from "../../config/domains";
import { REDESIGN_ROUTES } from "../../routes/routeConfig";

type Props = {
  domain: Domain;
  size?: "sm" | "md";
  /** Render the selected/current-domain slot. */
  muted?: boolean;
  /** Highlight this tile as the selected/suggested domain. */
  next?: boolean;
};

/**
 * Square Canva-PNG tile that links to a domain detail page.
 *   • Default: full-color PNG, hyperlinked, subtle hover lift
 *   • muted:   applies a forest-green selected treatment, disables pointer events
 *   • next:    renders with a 4px forest-green outline for the selected/suggested tile
 */
function DomainTile({ domain, size = "md", muted = false, next = false }: Props) {
  const sizeClass = "w-full";
  const img = muted ? (
    <div
      id={`public-website-redesign-domain-tile-${domain.slug}-image-selected-wrapper`}
      className="relative aspect-square w-full rounded-[10px] bg-wriForest"
    >
      <img
        id={`public-website-redesign-domain-tile-${domain.slug}-image-selected`}
        src={domain.tileDim}
        alt={`${domain.label} domain`}
        className="absolute inset-0 h-full w-full rounded-[10px] object-cover opacity-75 mix-blend-multiply"
        draggable={false}
      />
      <div
        id={`public-website-redesign-domain-tile-${domain.slug}-image-selected-tint`}
        className="absolute inset-0 rounded-[10px] bg-wriMoss/35"
        aria-hidden
      />
    </div>
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
    ? `block overflow-hidden rounded-[10px] outline outline-[4px] outline-wriForest ring-offset-2 ring-offset-wriSmokeFog ${sizeClass}`
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
