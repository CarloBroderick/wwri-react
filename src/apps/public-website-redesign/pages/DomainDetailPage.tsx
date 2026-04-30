import { Navigate, useParams } from "react-router-dom";
import ExploreAnotherDomain from "../components/shared/ExploreAnotherDomain";
import MeasureSection from "../components/shared/MeasureSection";
import MossDivider from "../components/shared/MossDivider";
import {
  DOMAIN_DETAIL_PAGE_SHELL_CLASSNAME,
  DOMAIN_DETAIL_TEXT_COLUMN_CLASSNAME,
} from "../layout/domainDetailPage";
import {
  DOMAINS_BY_SLUG,
  senseOfPlaceIconicPlacesHero,
  type DomainSlug,
} from "../config/domains";
import { REDESIGN_ROUTES } from "../routes/routeConfig";
import { renderBoldText } from "../utils/renderBoldText";

const mainSectionLabelClassName =
  "font-Poppins text-[clamp(1.75rem,3vw,2.5rem)] font-normal leading-tight text-wriForest";

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
  /** Standard domains share Infrastructure layout: top banner + separate Why it matters (no side hero grid). */
  const useStandardDomainLayout = !isSenseOfPlace;

  return (
    <div
      id={`public-website-redesign-domain-${domain.slug}-page`}
      className="pb-16"
    >
      {useStandardDomainLayout && (
        <section
          id={`public-website-redesign-domain-${domain.slug}-top-media`}
          className={`${DOMAIN_DETAIL_PAGE_SHELL_CLASSNAME} pt-6 md:pt-8`}
        >
          <div
            id={`public-website-redesign-domain-${domain.slug}-top-media-frame`}
            className={`relative ${DOMAIN_DETAIL_TEXT_COLUMN_CLASSNAME} overflow-hidden rounded-lg`}
          >
            <img
              id={`public-website-redesign-domain-${domain.slug}-top-media-image`}
              src={domain.hero}
              alt={`${domain.label} top media`}
              className="h-[140px] w-full object-cover md:h-[180px]"
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
                className="inline-block rounded-md bg-white/70 px-5 py-2 font-Poppins text-[clamp(2rem,5vw,4rem)] font-semibold leading-none text-wriForest backdrop-blur-[1px]"
              >
                {domain.label}
              </h2>
            </div>
          </div>
        </section>
      )}

      {/* ===== Why it matters (standard domains: banner title above; Sense of Place: grid + inline title) */}
      <section
        id={`public-website-redesign-domain-${domain.slug}-hero`}
        className={
          useStandardDomainLayout
            ? `${DOMAIN_DETAIL_PAGE_SHELL_CLASSNAME} pt-6 md:pt-8`
            : "mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-0 px-0 md:grid-cols-[minmax(260px,420px)_minmax(0,1fr)] md:items-start md:gap-10 md:px-6 md:pt-10"
        }
      >
        {!useStandardDomainLayout && (
          <img
            id={`public-website-redesign-domain-${domain.slug}-hero-photo`}
            src={domain.hero}
            alt={`${domain.label} hero`}
            className="mx-auto aspect-square w-full max-w-[420px] object-cover md:rounded-sm"
          />
        )}
        <div
          id={`public-website-redesign-domain-${domain.slug}-hero-body`}
          className={
            useStandardDomainLayout
              ? `${DOMAIN_DETAIL_TEXT_COLUMN_CLASSNAME} py-6 md:py-8`
              : "px-6 py-8 md:px-0 md:py-0"
          }
        >
          <div id={`public-website-redesign-domain-${domain.slug}-hero-header`}>
            {!useStandardDomainLayout && (
              <>
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
              </>
            )}
            <h2
              id={`public-website-redesign-domain-${domain.slug}-why`}
              className={mainSectionLabelClassName}
            >
              Why it matters
            </h2>
            <MossDivider
              id={`public-website-redesign-domain-${domain.slug}-why-divider`}
              className="my-3"
              widthClassName="w-14"
            />
          </div>
          <div
            id={`public-website-redesign-domain-${domain.slug}-why-content`}
            className={
              useStandardDomainLayout
                ? "mt-4 flex items-start gap-3 md:mt-5 md:gap-4"
                : "mt-4 flex items-start gap-4 md:mt-5 md:gap-5"
            }
          >
            <img
              id={`public-website-redesign-domain-${domain.slug}-why-icon`}
              src={domain.iconNoText}
              alt={`${domain.label} icon`}
              className="h-20 w-20 shrink-0 rounded-md object-cover md:h-24 md:w-24"
            />
            <div
              id={`public-website-redesign-domain-${domain.slug}-why-copy-wrapper`}
              className={
                useStandardDomainLayout
                  ? "flex items-start pt-0.5"
                  : "flex min-h-20 items-center md:min-h-24"
              }
            >
              <p
                id={`public-website-redesign-domain-${domain.slug}-why-copy`}
                className={
                  useStandardDomainLayout
                    ? "max-w-prose font-Poppins text-[clamp(15px,1.05vw,17px)] leading-[1.45] text-wriCanopy"
                    : "max-w-prose font-Poppins text-[clamp(17px,1.55vw,21px)] leading-relaxed text-wriCanopy"
                }
              >
                {renderBoldText(domain.whyItMatters)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== How it's measured (only for non-SOP domains) ========== */}
      {!isSenseOfPlace && (
        <div
          id={`public-website-redesign-domain-${domain.slug}-measures`}
          className={`${DOMAIN_DETAIL_PAGE_SHELL_CLASSNAME} mt-14`}
        >
          <div
            id={`public-website-redesign-domain-${domain.slug}-measures-inner`}
            className={`flex ${DOMAIN_DETAIL_TEXT_COLUMN_CLASSNAME} flex-col gap-8`}
          >
            <div
              id={`public-website-redesign-domain-${domain.slug}-measured-heading`}
            >
              <h2
                id={`public-website-redesign-domain-${domain.slug}-measured-label`}
                className={`${mainSectionLabelClassName} whitespace-nowrap`}
              >
                How it’s measured
              </h2>
              <MossDivider
                id={`public-website-redesign-domain-${domain.slug}-measured-divider`}
                className="my-3"
                widthClassName="w-14"
              />
            </div>
            <div
              id={`public-website-redesign-domain-${domain.slug}-measure-cards`}
              className="flex flex-col gap-14"
            >
              <MeasureSection
                id={`public-website-redesign-domain-${domain.slug}-status`}
                section={domain.status}
              />
              <MeasureSection
                id={`public-website-redesign-domain-${domain.slug}-resistance`}
                section={domain.resistance}
              />
              <MeasureSection
                id={`public-website-redesign-domain-${domain.slug}-recovery`}
                section={domain.recovery}
              />
            </div>
          </div>
        </div>
      )}

      {/* ===== Sense of Place: Iconic Places block =================== */}
      {isSenseOfPlace && (
        <div
          id={`public-website-redesign-domain-${domain.slug}-iconic-places`}
          className={`${DOMAIN_DETAIL_PAGE_SHELL_CLASSNAME} mt-14 flex flex-col gap-14`}
        >
          <section
            id={`public-website-redesign-domain-${domain.slug}-ip-intro`}
            className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(220px,360px)_minmax(0,1fr)] md:items-start md:gap-10"
          >
            <img
              id={`public-website-redesign-domain-${domain.slug}-ip-hero`}
              src={senseOfPlaceIconicPlacesHero}
              alt="Iconic places hero"
              className="mx-auto aspect-square w-full max-w-[360px] rounded-sm object-cover md:mx-0"
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
                className={`${mainSectionLabelClassName} mb-4`}
              >
                Why it matters
              </h3>
              <p>
                There are areas that are culturally significant for a variety of
                reasons — such as landmarks, monuments, parks, and/or protected
                areas.
              </p>
              <p className="mt-4">
                The resilience for structural and natural places is evaluated
                differently.
              </p>
            </div>
          </section>
          <div
            id={`public-website-redesign-domain-${domain.slug}-ip-measure-cards`}
            className="flex flex-col gap-14"
          >
            <MeasureSection
              id={`public-website-redesign-domain-${domain.slug}-ip-status`}
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
              section={domain.resistance}
              overline="Iconic Places"
              photoAspectClassName="aspect-[2/1]"
            />
            <MeasureSection
              id={`public-website-redesign-domain-${domain.slug}-ip-recovery`}
              section={domain.recovery}
              overline="Iconic Places"
              photoAspectClassName="aspect-[2/1]"
            />
          </div>
        </div>
      )}

      {/* ===== Sense of Place: Iconic Species block ================== */}
      {isSenseOfPlace && domain.extra && (
        <div
          id={`public-website-redesign-domain-${domain.slug}-iconic-species`}
          className={`${DOMAIN_DETAIL_PAGE_SHELL_CLASSNAME} mt-20 flex flex-col gap-14`}
        >
          <section
            id={`public-website-redesign-domain-${domain.slug}-is-intro`}
            className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(220px,360px)_minmax(0,1fr)] md:items-start md:gap-10"
          >
            {domain.extra.hero && (
              <img
                id={`public-website-redesign-domain-${domain.slug}-is-hero`}
                src={domain.extra.hero}
                alt="Iconic species hero"
                className="mx-auto aspect-square w-full max-w-[360px] rounded-sm object-cover md:mx-0"
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
                className={`${mainSectionLabelClassName} mb-4`}
              >
                Why it matters
              </h3>
              <p>{domain.extra.whyItMatters}</p>
            </div>
          </section>
          <div
            id={`public-website-redesign-domain-${domain.slug}-is-measure-cards`}
            className="flex flex-col gap-14"
          >
            <MeasureSection
              id={`public-website-redesign-domain-${domain.slug}-is-status`}
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
              section={domain.extra.resistance}
              overline="Iconic Species"
            />
            <MeasureSection
              id={`public-website-redesign-domain-${domain.slug}-is-recovery`}
              section={domain.extra.recovery}
              overline="Iconic Species"
            />
          </div>
        </div>
      )}

      <ExploreAnotherDomain currentSlug={domain.slug} />
    </div>
  );
}

export default DomainDetailPage;
