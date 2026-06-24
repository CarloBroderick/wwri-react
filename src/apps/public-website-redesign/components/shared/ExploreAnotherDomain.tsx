import { type DomainSlug } from "../../config/domains";
import { DOMAIN_DETAIL_PAGE_SHELL_CLASSNAME } from "../../layout/domainDetailPage";
import DomainGalleryGrid from "./DomainGalleryGrid";
import MossDivider from "./MossDivider";

/**
 * Footer at the bottom of every domain detail page.
 *   • Header mirrors the Domains overview ("Choose your path" eyebrow + title).
 *   • Grid reuses the shared `DomainGalleryGrid`, laid out horizontally (all eight
 *     domains in a single row on large screens) so it matches the /domains page.
 *   • The current domain renders as a dimmed "you're here" tile.
 */
function ExploreAnotherDomain({ currentSlug }: { currentSlug: DomainSlug }) {
  return (
    <section
      id={`public-website-redesign-explore-another-${currentSlug}`}
      className={`${DOMAIN_DETAIL_PAGE_SHELL_CLASSNAME} mt-24`}
    >
      <header id="public-website-redesign-explore-another-heading">
        <p className="font-Montserrat text-xs font-semibold uppercase tracking-[0.3em] text-wriSage">
          Keep exploring
        </p>
        <h2 className="mt-3 font-Poppins text-[clamp(1.9rem,3.5vw,2.5rem)] font-bold leading-tight text-wriForest">
          Explore another domain
        </h2>
        <MossDivider className="mb-9 mt-5" widthClassName="w-16" />
      </header>
      <DomainGalleryGrid
        id={`public-website-redesign-explore-another-${currentSlug}-tiles`}
        currentSlug={currentSlug}
      />
    </section>
  );
}

export default ExploreAnotherDomain;
