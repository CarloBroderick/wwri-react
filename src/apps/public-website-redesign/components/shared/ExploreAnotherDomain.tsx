import { type DomainSlug } from "../../config/domains";
import { DOMAIN_DETAIL_PAGE_SHELL_CLASSNAME } from "../../layout/domainDetailPage";
import DomainGrid from "./DomainGrid";
import SectionHeader from "./SectionHeader";

/**
 * Footer CTA at the bottom of every domain detail page.
 *   • Title: "Domain / Explore Another" (Poppins eyebrow + Montserrat title)
 *   • Grid: compact 8-tile navigation with the current slug selected in palette green.
 */
function ExploreAnotherDomain({ currentSlug }: { currentSlug: DomainSlug }) {
  return (
    <section
      id={`public-website-redesign-explore-another-${currentSlug}`}
      className={`${DOMAIN_DETAIL_PAGE_SHELL_CLASSNAME} mt-20`}
    >
      <SectionHeader
        id="public-website-redesign-explore-another-heading"
        eyebrow="Explore Another Domain"
      />
      <div
        id={`public-website-redesign-explore-another-${currentSlug}-tiles`}
        className="mt-8 w-full max-w-[360px] md:max-w-[620px]"
      >
        <DomainGrid mutedSlug={currentSlug} nextSlug={currentSlug} size="sm" />
      </div>
    </section>
  );
}

export default ExploreAnotherDomain;
