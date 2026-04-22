import { Navigate, useParams } from "react-router-dom";
import ExploreAnotherDomain from "../components/shared/ExploreAnotherDomain";
import MeasureSection from "../components/shared/MeasureSection";
import SectionHeader from "../components/shared/SectionHeader";
import { DOMAINS_BY_SLUG, type DomainSlug } from "../config/domains";
import { REDESIGN_ROUTES } from "../routes/routeConfig";

/**
 * Single-domain detail page — matches PDF pages 9–16 layout:
 *   - Hero photo + "Why it matters"
 *   - How it's measured (status | resistance | recovery) rows
 *   - "Explore Another Domain" grid at the bottom
 * Sense of Place (page 12) also renders a second sub-block for Iconic Species.
 */
function DomainDetailPage() {
  const { slug } = useParams<{ slug: DomainSlug }>();
  const domain = slug ? DOMAINS_BY_SLUG[slug as DomainSlug] : undefined;

  if (!domain) {
    return <Navigate to={REDESIGN_ROUTES.domains} replace />;
  }

  const chipTextColor = domain.textOn === "dark" ? "text-[#22402c]" : "text-white";

  return (
    <div id={`public-website-redesign-domain-${domain.slug}-page`} className="pb-16">
      {/* Hero photo row + Why it matters */}
      <section
        id={`public-website-redesign-domain-${domain.slug}-hero`}
        className="mx-auto grid max-w-[1100px] grid-cols-1 gap-0 px-0 md:grid-cols-[1fr_1.1fr] md:gap-10 md:px-6 md:pt-10"
      >
        <img
          id={`public-website-redesign-domain-${domain.slug}-hero-photo`}
          src={domain.hero}
          alt={`${domain.label} hero`}
          className="aspect-[4/5] w-full object-cover md:max-w-[520px] md:rounded-sm"
        />
        <div
          id={`public-website-redesign-domain-${domain.slug}-hero-body`}
          className="px-6 py-10 md:px-0"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h1
                id={`public-website-redesign-domain-${domain.slug}-title`}
                className="text-4xl font-light leading-tight text-[#22402c] md:text-5xl"
              >
                {domain.label}
              </h1>
              <div className="mt-3 h-[3px] w-14 rounded-full bg-[#b3c167]" />
              <h2
                id={`public-website-redesign-domain-${domain.slug}-why`}
                className="mt-4 text-2xl font-bold text-[#779062] md:text-3xl"
              >
                Why it matters
              </h2>
            </div>
            <span
              id={`public-website-redesign-domain-${domain.slug}-hero-icon`}
              className={`inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-sm ${chipTextColor}`}
              style={{ backgroundColor: domain.color }}
              aria-hidden
            >
              <img
                src={domain.icon}
                alt=""
                className="h-9 w-9"
                style={{
                  filter: domain.textOn === "dark" ? undefined : "brightness(0) invert(1)",
                }}
              />
            </span>
          </div>
          <p
            id={`public-website-redesign-domain-${domain.slug}-why-copy`}
            className="mt-5 max-w-prose text-[15px] leading-relaxed text-[#333]"
          >
            {domain.whyItMatters}
          </p>
        </div>
      </section>

      {/* Measured sections */}
      <div
        id={`public-website-redesign-domain-${domain.slug}-measures`}
        className="mx-auto mt-10 max-w-[1100px] space-y-12 px-6"
      >
        <SectionHeader
          id={`public-website-redesign-domain-${domain.slug}-measures-heading`}
          eyebrow="How it’s"
          title="measured"
        />
        <MeasureSection
          id={`public-website-redesign-domain-${domain.slug}-status`}
          domain={domain}
          section={domain.status}
        />
        <MeasureSection
          id={`public-website-redesign-domain-${domain.slug}-resistance`}
          domain={domain}
          section={domain.resistance}
        />
        <MeasureSection
          id={`public-website-redesign-domain-${domain.slug}-recovery`}
          domain={domain}
          section={domain.recovery}
        />
      </div>

      {/* Optional sub-domain (Sense of Place → Iconic Species) */}
      {domain.extra && (
        <div
          id={`public-website-redesign-domain-${domain.slug}-extra`}
          className="mx-auto mt-16 max-w-[1100px] space-y-12 px-6"
        >
          <SectionHeader
            id={`public-website-redesign-domain-${domain.slug}-extra-heading`}
            eyebrow={domain.label}
            title={domain.extra.subheading}
          />
          <div>
            <div id={`public-website-redesign-domain-${domain.slug}-extra-why-divider`} className="mb-3 h-[3px] w-14 rounded-full bg-[#b3c167]" />
            <h3 className="text-2xl font-bold text-[#779062]">Why it matters</h3>
            <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-[#333]">
              {domain.extra.whyItMatters}
            </p>
          </div>
          <MeasureSection
            id={`public-website-redesign-domain-${domain.slug}-extra-status`}
            domain={domain}
            section={domain.extra.status}
          />
          <MeasureSection
            id={`public-website-redesign-domain-${domain.slug}-extra-resistance`}
            domain={domain}
            section={domain.extra.resistance}
          />
          <MeasureSection
            id={`public-website-redesign-domain-${domain.slug}-extra-recovery`}
            domain={domain}
            section={domain.extra.recovery}
          />
        </div>
      )}

      <ExploreAnotherDomain currentSlug={domain.slug} />
    </div>
  );
}

export default DomainDetailPage;
