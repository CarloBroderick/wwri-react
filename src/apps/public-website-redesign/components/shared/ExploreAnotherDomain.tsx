import type { DomainSlug } from "../../config/domains";
import DomainGrid from "./DomainGrid";
import SectionHeader from "./SectionHeader";

/** Footer CTA that appears at the bottom of every domain detail page. */
function ExploreAnotherDomain({ currentSlug }: { currentSlug: DomainSlug }) {
  return (
    <section
      id={`public-website-redesign-explore-another-${currentSlug}`}
      className="mx-auto mt-20 max-w-[1100px] px-6"
    >
      <SectionHeader
        id="public-website-redesign-explore-another-heading"
        title="Explore Another"
        eyebrow="Domain"
      />
      <div className="mt-8">
        <DomainGrid mutedSlug={currentSlug} size="sm" />
      </div>
    </section>
  );
}

export default ExploreAnotherDomain;
