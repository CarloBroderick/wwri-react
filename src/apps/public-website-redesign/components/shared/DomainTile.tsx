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
function DomainTile({ domain, size: _size, muted = false, next = false }: Props) {
  const image = muted ? domain.tileDim : domain.tile;
  const img = (
    <img
      id={`public-website-redesign-domain-tile-${domain.slug}-image`}
      src={image}
      alt={`${domain.label} domain`}
      className="aspect-square w-full rounded-sm object-cover"
      draggable={false}
    />
  );

  const frame = next
    ? "block overflow-hidden rounded-sm outline outline-[6px] outline-wriSage ring-offset-2 ring-offset-wriSmokeFog"
    : "block overflow-hidden rounded-sm";

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
      className={`${frame} transition-transform hover:-translate-y-0.5 hover:shadow-md`}
    >
      {img}
    </Link>
  );
}

export default DomainTile;
