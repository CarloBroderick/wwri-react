import { Navigate, useParams } from "react-router-dom";
import ExploreAnotherDomain from "../components/shared/ExploreAnotherDomain";
import MeasureSection from "../components/shared/MeasureSection";
import MossDivider from "../components/shared/MossDivider";
import {
  DOMAINS_BY_SLUG,
  senseOfPlaceIconicPlacesHero,
  type DomainSlug,
} from "../config/domains";
import { REDESIGN_ROUTES } from "../routes/routeConfig";

/**
 * Single-domain detail page — Canva spec pages 9–16 / change-requests doc.
 *   1. Why it matters (WIM hero + copy + domain-square chip)
 *   2. How it's measured heading
 *   3. Status / Resistance / Recovery rows (HIM photos on far left)
 *   4. (Sense of Place only) Iconic Places block + Iconic Species block
 *   5. Explore Another Domain grid (current dimmed, next highlighted Sage)
 */
function DomainDetailPage() {
  const { slug } = useParams<{ slug: DomainSlug }>();
  const domain = slug ? DOMAINS_BY_SLUG[slug as DomainSlug] : undefined;

  if (!domain) {
    return <Navigate to={REDESIGN_ROUTES.domains} replace />;
  }

  const isSenseOfPlace = domain.slug === "sense-of-place";
  const isInfrastructure = domain.slug === "infrastructure";

  return (
    <div id={`public-website-redesign-domain-${domain.slug}-page`} className="pb-16">
      {isInfrastructure && (
        <section
          id={`public-website-redesign-domain-${domain.slug}-top-media`}
          className="mx-auto max-w-[1200px] px-0 pt-6 md:px-6 md:pt-8"
        >
          <div
            id={`public-website-redesign-domain-${domain.slug}-top-media-frame`}
            className="relative overflow-hidden rounded-2xl"
          >
            <img
              id={`public-website-redesign-domain-${domain.slug}-top-media-image`}
              src={domain.hero}
              alt={`${domain.label} top media`}
              className="h-[180px] w-full object-cover md:h-[240px]"
            />
            <div
              id={`public-website-redesign-domain-${domain.slug}-top-media-scrim`}
              className="absolute inset-0 bg-black/20"
            />
            <div
              id={`public-website-redesign-domain-${domain.slug}-top-media-title-wrapper`}
              className="absolute inset-x-6 top-1/2 -translate-y-1/2 md:inset-x-12"
            >
              <h2
                id={`public-website-redesign-domain-${domain.slug}-top-media-title`}
                className="inline-block rounded-xl bg-white/70 px-5 py-2 font-Poppins text-[clamp(2rem,5vw,4rem)] font-semibold leading-none text-wriForest backdrop-blur-[1px]"
              >
                {domain.label}
              </h2>
            </div>
          </div>
        </section>
      )}

      {/* ===== Why it matters hero row =============================== */}
      <section
        id={`public-website-redesign-domain-${domain.slug}-hero`}
        className={`mx-auto grid max-w-[1200px] grid-cols-1 gap-0 px-0 md:grid-cols-[1fr_1.1fr] md:items-start md:gap-10 md:px-6 ${isInfrastructure ? "pt-6 md:pt-8" : "md:pt-10"}`}
      >
        <img
          id={`public-website-redesign-domain-${domain.slug}-hero-photo`}
          src={domain.hero}
          alt={`${domain.label} hero`}
          className="aspect-square w-full object-cover md:rounded-sm"
        />
        <div
          id={`public-website-redesign-domain-${domain.slug}-hero-body`}
          className="px-6 py-10 md:px-0"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h1
                id={`public-website-redesign-domain-${domain.slug}-title`}
                className="font-Poppins text-[clamp(2.25rem,5vw,2.75rem)] font-normal leading-tight text-wriForest"
              >
                {domain.label}
              </h1>
              <MossDivider
                id={`public-website-redesign-domain-${domain.slug}-hero-divider`}
                className="my-3"
                widthClassName="w-16"
              />
              <h2
                id={`public-website-redesign-domain-${domain.slug}-why`}
                className="font-Montserrat text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight text-wriSage"
              >
                Why it matters
              </h2>
            </div>
            <img
              id={`public-website-redesign-domain-${domain.slug}-hero-chip`}
              src={domain.tile}
              alt=""
              aria-hidden
              className="h-24 w-24 shrink-0 rounded-2xl object-cover md:h-28 md:w-28"
            />
          </div>
          <p
            id={`public-website-redesign-domain-${domain.slug}-why-copy`}
            className="mt-5 max-w-prose font-Poppins text-[clamp(16px,1.5vw,19px)] leading-relaxed text-wriCanopy"
          >
            {domain.whyItMatters}
          </p>
        </div>
      </section>

      {/* ===== How it's measured (only for non-SOP domains) ========== */}
      {!isSenseOfPlace && (
        <div
          id={`public-website-redesign-domain-${domain.slug}-measures`}
          className="mx-auto mt-16 max-w-[1200px] space-y-16 px-6"
        >
          <MeasureSection
            id={`public-website-redesign-domain-${domain.slug}-status`}
            domain={domain}
            section={domain.status}
            measureLabel={
              <>
                How it’s
                <br />
                measured
              </>
            }
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
      )}

      {/* ===== Sense of Place: Iconic Places block =================== */}
      {isSenseOfPlace && (
        <div
          id={`public-website-redesign-domain-${domain.slug}-iconic-places`}
          className="mx-auto mt-16 max-w-[1200px] space-y-16 px-6"
        >
          <section
            id={`public-website-redesign-domain-${domain.slug}-ip-intro`}
            className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_1.1fr] md:items-start md:gap-10"
          >
            <img
              id={`public-website-redesign-domain-${domain.slug}-ip-hero`}
              src={senseOfPlaceIconicPlacesHero}
              alt="Iconic places hero"
              className="aspect-square w-full rounded-sm object-cover"
            />
            <div
              id={`public-website-redesign-domain-${domain.slug}-ip-intro-body`}
              className="font-Poppins text-[clamp(16px,1.5vw,19px)] leading-relaxed text-wriCanopy"
            >
              <div className="font-Poppins text-base font-normal uppercase tracking-[0.08em] text-wriForest/80">
                Iconic Places
              </div>
              <MossDivider
                id={`public-website-redesign-domain-${domain.slug}-ip-divider`}
                className="my-3"
                widthClassName="w-14"
              />
              <h3
                id={`public-website-redesign-domain-${domain.slug}-ip-why`}
                className="mb-4 font-Montserrat text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight text-wriSage"
              >
                Why it matters
              </h3>
              <p>
                There are areas that are culturally significant for a variety of reasons — such as
                landmarks, monuments, parks, and/or protected areas.
              </p>
              <p className="mt-4">
                The resilience for structural and natural places is evaluated differently.
              </p>
            </div>
          </section>
          <MeasureSection
            id={`public-website-redesign-domain-${domain.slug}-ip-status`}
            domain={domain}
            section={domain.status}
            overline="Iconic Places"
            measureLabel={
              <>
                How it’s
                <br />
                measured
              </>
            }
          />
          <MeasureSection
            id={`public-website-redesign-domain-${domain.slug}-ip-resistance`}
            domain={domain}
            section={domain.resistance}
            overline="Iconic Places"
            photoAspectClassName="aspect-[2/1]"
          />
          <MeasureSection
            id={`public-website-redesign-domain-${domain.slug}-ip-recovery`}
            domain={domain}
            section={domain.recovery}
            overline="Iconic Places"
            photoAspectClassName="aspect-[2/1]"
          />
        </div>
      )}

      {/* ===== Sense of Place: Iconic Species block ================== */}
      {isSenseOfPlace && domain.extra && (
        <div
          id={`public-website-redesign-domain-${domain.slug}-iconic-species`}
          className="mx-auto mt-20 max-w-[1200px] space-y-16 px-6"
        >
          <section
            id={`public-website-redesign-domain-${domain.slug}-is-intro`}
            className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_1.1fr] md:items-start md:gap-10"
          >
            {domain.extra.hero && (
              <img
                id={`public-website-redesign-domain-${domain.slug}-is-hero`}
                src={domain.extra.hero}
                alt="Iconic species hero"
                className="aspect-square w-full rounded-sm object-cover"
              />
            )}
            <div
              id={`public-website-redesign-domain-${domain.slug}-is-intro-body`}
              className="font-Poppins text-[clamp(16px,1.5vw,19px)] leading-relaxed text-wriCanopy"
            >
              <div className="font-Poppins text-base font-normal uppercase tracking-[0.08em] text-wriForest/80">
                Iconic Species
              </div>
              <MossDivider
                id={`public-website-redesign-domain-${domain.slug}-is-divider`}
                className="my-3"
                widthClassName="w-14"
              />
              <h3
                id={`public-website-redesign-domain-${domain.slug}-is-why`}
                className="mb-4 font-Montserrat text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight text-wriSage"
              >
                Why it matters
              </h3>
              <p>{domain.extra.whyItMatters}</p>
            </div>
          </section>
          <MeasureSection
            id={`public-website-redesign-domain-${domain.slug}-is-status`}
            domain={domain}
            section={domain.extra.status}
            overline="Iconic Species"
            measureLabel={
              <>
                How it’s
                <br />
                measured
              </>
            }
          />
          <MeasureSection
            id={`public-website-redesign-domain-${domain.slug}-is-resistance`}
            domain={domain}
            section={domain.extra.resistance}
            overline="Iconic Species"
          />
          <MeasureSection
            id={`public-website-redesign-domain-${domain.slug}-is-recovery`}
            domain={domain}
            section={domain.extra.recovery}
            overline="Iconic Species"
          />
        </div>
      )}

      <ExploreAnotherDomain currentSlug={domain.slug} />
    </div>
  );
}

export default DomainDetailPage;
