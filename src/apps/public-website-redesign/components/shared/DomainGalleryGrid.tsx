import { Link } from "react-router-dom";
import { DOMAINS, type DomainSlug } from "../../config/domains";
import { REDESIGN_ROUTES } from "../../routes/routeConfig";

type Props = {
  id?: string;
  /**
   * Tailwind grid-template-columns utilities controlling how many tiles sit per
   * row. Defaults to the Domains overview layout (8-across on large screens) so
   * the gallery looks identical wherever it appears.
   */
  columnsClassName?: string;
  /**
   * When set, that domain renders as a dimmed, non-clickable "you are here"
   * tile (used on domain detail pages to mark the current domain).
   */
  currentSlug?: DomainSlug;
};

const cardBaseClassName =
  "group relative block aspect-square overflow-hidden rounded-2xl shadow-sm ring-1 ring-wriCanopy/5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_24px_45px_-18px_rgba(31,42,35,0.75)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-wriMoss/60";

/**
 * Photographic 8-domain gallery — the shared visual centerpiece used by both the
 * Domains overview ("Explore the eight domains") and the "Explore Another Domain"
 * footer on each domain detail page, so the two stay perfectly in sync.
 *   • Each tile is the full-color domain-square PNG, hyperlinked to its detail page.
 *   • Subtle hover lift + image zoom + gradient sheen mirror the rest of the site.
 *   • `currentSlug` dims the active domain into a non-interactive "you're here" chip.
 */
function DomainGalleryGrid({
  id = "public-website-redesign-domain-gallery-grid",
  columnsClassName = "grid-cols-2 sm:grid-cols-4 lg:grid-cols-8",
  currentSlug,
}: Props) {
  return (
    <div id={id} className={`grid ${columnsClassName} items-start gap-4 md:gap-5`}>
      {DOMAINS.map((domain) => {
        const isCurrent = domain.slug === currentSlug;

        // 📍 Current domain: full-color, non-clickable tile with an external
        //    "you're here" marker sitting just beneath it (in normal flow so it
        //    never overlaps neighboring tiles on multi-row layouts).
        if (isCurrent) {
          return (
            <div
              key={domain.slug}
              id={`public-website-redesign-domain-gallery-card-${domain.slug}`}
              aria-current="page"
              className="flex flex-col items-center"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl ring-2 ring-wriForest ring-offset-2 ring-offset-wriSmokeFog">
                <img
                  src={domain.tile}
                  alt={`${domain.label} domain (current page)`}
                  className="absolute inset-0 h-full w-full object-cover"
                  draggable={false}
                />
              </div>
              <span className="mt-3 inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-wriForest px-3 py-1 font-Montserrat text-[10px] font-bold uppercase tracking-[0.1em] text-white shadow-sm">
                <span aria-hidden>▲</span>
                You{"\u2019"}re here
              </span>
            </div>
          );
        }

        // 🌲 Every other domain: full-color photographic link card.
        return (
          <Link
            key={domain.slug}
            id={`public-website-redesign-domain-gallery-card-${domain.slug}`}
            to={REDESIGN_ROUTES.domain(domain.slug)}
            aria-label={`${domain.label} domain`}
            className={cardBaseClassName}
          >
            <img
              src={domain.tile}
              alt={`${domain.label} domain`}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.024]"
              draggable={false}
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-wriCanopy/25 via-transparent to-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 transition-colors duration-300 group-hover:ring-white/50"
            />
          </Link>
        );
      })}
    </div>
  );
}

export default DomainGalleryGrid;
