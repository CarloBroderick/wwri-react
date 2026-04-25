import { type DomainSlug } from "../../config/domains";
import DomainGrid from "./DomainGrid";
import SectionHeader from "./SectionHeader";

/**
 * Footer CTA at the bottom of every domain detail page.
 *   • Title: "Domain / Explore Another" (Poppins eyebrow + Montserrat title)
 *   • Grid: 8 full-color Canva squares with the current slug dimmed and
 *     outlined in Sage (6px) to match the current page context.
 */
function ExploreAnotherDomain({ currentSlug }: { currentSlug: DomainSlug }) {
  return (
    <section
      id={`public-website-redesign-explore-another-${currentSlug}`}
      className="mx-auto mt-20 max-w-[1200px] px-6"
    >
      <SectionHeader
        id="public-website-redesign-explore-another-heading"
        eyebrow={
          <>
            Explore Another
            <br />
            Domain
          </>
        }
      />
      <div className="mt-8">
        <DomainGrid mutedSlug={currentSlug} nextSlug={currentSlug} size="sm" />
      </div>
    </section>
  );
}

export default ExploreAnotherDomain;
