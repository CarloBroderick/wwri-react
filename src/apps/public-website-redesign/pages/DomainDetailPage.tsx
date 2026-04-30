import { useState } from "react";
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

const subdomainEyebrowClassName =
  "font-Montserrat text-[11px] font-semibold uppercase tracking-[0.18em] text-wriSage";

const subdomainTitleClassName =
  "font-Montserrat text-[clamp(1.9rem,3vw,2.4rem)] font-bold uppercase leading-[1.1] tracking-[0.04em] text-wriForest";

/**
 * Single-domain detail page — Canva spec pages 9–16 / change-requests doc.
 *   1. Domain title + hero video/image banner
 *   2. Why it matters (icon + copy)
 *   3. How it's measured heading
 *   4. Status / Resistance / Recovery rows (HIM photos on far left)
 *   5. (Sense of Place only) Iconic Places + Iconic Species subdomain blocks,
 *      each with their own intro, "How it's measured", and measure rows
 *   6. Explore Another Domain grid (current dimmed, next highlighted Sage)
 */
function DomainDetailPage() {
  const { slug } = useParams<{ slug: DomainSlug }>();
  const domain = slug ? DOMAINS_BY_SLUG[slug as DomainSlug] : undefined;
  const [loadedTopVideoSrc, setLoadedTopVideoSrc] = useState("");

  if (!domain) {
    return <Navigate to={REDESIGN_ROUTES.domains} replace />;
  }

  const isSenseOfPlace = domain.slug === "sense-of-place";
  const isTopVideoReady = Boolean(domain.heroVideo) && loadedTopVideoSrc === domain.heroVideo;

  return (
    <div
      id={`public-website-redesign-domain-${domain.slug}-page`}
      className="pb-16"
    >
      {/* ===== Top media: title + hero video/image (all domains including SoP) */}
      <section
        id={`public-website-redesign-domain-${domain.slug}-top-media`}
        className={`${DOMAIN_DETAIL_PAGE_SHELL_CLASSNAME} pt-6 md:pt-8`}
      >
        <div
          id={`public-website-redesign-domain-${domain.slug}-top-media-content`}
          className={DOMAIN_DETAIL_TEXT_COLUMN_CLASSNAME}
        >
          <h1
            id={`public-website-redesign-domain-${domain.slug}-top-media-title`}
            className="text-left font-Poppins text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-none text-wriForest"
          >
            {domain.label}
          </h1>
          <div
            id={`public-website-redesign-domain-${domain.slug}-top-media-frame`}
            className="relative mt-4 aspect-video overflow-hidden rounded-lg bg-wriCanopy/10"
          >
            {domain.heroVideo ? (
              <>
                {!isTopVideoReady && (
                  <div
                    id={`public-website-redesign-domain-${domain.slug}-top-media-loading-state`}
                    className="absolute inset-0 flex items-center justify-center bg-wriCanopy/10"
                    aria-live="polite"
                  >
                    <div
                      id={`public-website-redesign-domain-${domain.slug}-top-media-loading-indicator`}
                      className="flex items-center gap-3 rounded-md bg-white/85 px-4 py-2 text-sm font-medium text-wriForest shadow-sm"
                    >
                      <span
                        id={`public-website-redesign-domain-${domain.slug}-top-media-loading-spinner`}
                        className="h-4 w-4 animate-spin rounded-full border-2 border-wriSage border-t-transparent"
                        aria-hidden
                      />
                      <span id={`public-website-redesign-domain-${domain.slug}-top-media-loading-label`}>
                        Loading video…
                      </span>
                    </div>
                  </div>
                )}
                <video
                  key={`public-website-redesign-domain-${domain.slug}-top-media-video`}
                  id={`public-website-redesign-domain-${domain.slug}-top-media-video`}
                  src={domain.heroVideo}
                  poster={domain.hero}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onCanPlay={() => {
                    if (domain.heroVideo) {
                      setLoadedTopVideoSrc(domain.heroVideo);
                    }
                  }}
                  aria-label={`${domain.label} domain overview video`}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-200 ${
                    isTopVideoReady ? "opacity-100" : "opacity-0"
                  }`}
                />
              </>
            ) : (
              <img
                id={`public-website-redesign-domain-${domain.slug}-top-media-image`}
                src={domain.hero}
                alt={`${domain.label} top media`}
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
          </div>
        </div>
      </section>

      {/* ===== Why it matters (all domains) */}
      <section
        id={`public-website-redesign-domain-${domain.slug}-hero`}
        className={`${DOMAIN_DETAIL_PAGE_SHELL_CLASSNAME} pt-6 md:pt-8`}
      >
        <div
          id={`public-website-redesign-domain-${domain.slug}-hero-body`}
          className={`${DOMAIN_DETAIL_TEXT_COLUMN_CLASSNAME} py-6 md:py-8`}
        >
          <div id={`public-website-redesign-domain-${domain.slug}-hero-header`}>
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
            className="mt-4 flex items-start gap-3 md:mt-5 md:gap-4"
          >
            <img
              id={`public-website-redesign-domain-${domain.slug}-why-icon`}
              src={domain.iconNoText}
              alt={`${domain.label} icon`}
              className="h-20 w-20 shrink-0 rounded-md object-cover md:h-24 md:w-24"
            />
            <div
              id={`public-website-redesign-domain-${domain.slug}-why-copy-wrapper`}
              className="flex items-start pt-0.5"
            >
              <p
                id={`public-website-redesign-domain-${domain.slug}-why-copy`}
                className="max-w-prose font-Poppins text-[19px] leading-[1.45] text-wriCanopy"
              >
                {renderBoldText(domain.whyItMatters)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== How it's measured (non-SoP domains) =================== */}
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
                How it{"\u2019"}s measured
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

      {/* ===== Sense of Place: Iconic Places subdomain =============== */}
      {isSenseOfPlace && (
        <div
          id={`public-website-redesign-domain-${domain.slug}-iconic-places`}
          className={`${DOMAIN_DETAIL_PAGE_SHELL_CLASSNAME} mt-14`}
        >
          <div
            id={`public-website-redesign-domain-${domain.slug}-ip-wrapper`}
            className={`${DOMAIN_DETAIL_TEXT_COLUMN_CLASSNAME} flex flex-col gap-8`}
          >
            {/* Subdomain intro: hero photo + heading + why-it-matters */}
            <section
              id={`public-website-redesign-domain-${domain.slug}-ip-intro`}
              className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(180px,320px)_minmax(0,1fr)] md:items-start md:gap-10"
            >
              <img
                id={`public-website-redesign-domain-${domain.slug}-ip-hero`}
                src={senseOfPlaceIconicPlacesHero}
                alt="Iconic places hero"
                className="aspect-square mx-auto w-full max-w-[320px] rounded-sm object-cover md:mx-0"
              />
              <div
                id={`public-website-redesign-domain-${domain.slug}-ip-intro-body`}
                className="border-l-4 border-wriSage/45 pl-4 md:pl-6"
              >
                <p
                  id={`public-website-redesign-domain-${domain.slug}-ip-eyebrow`}
                  className={subdomainEyebrowClassName}
                >
                  Sense of Place Subdomain
                </p>
                <h2
                  id={`public-website-redesign-domain-${domain.slug}-ip-title`}
                  className={`${subdomainTitleClassName} mt-2`}
                >
                  Iconic Places
                </h2>
                <MossDivider
                  id={`public-website-redesign-domain-${domain.slug}-ip-divider`}
                  className="my-3"
                  widthClassName="w-14"
                />
                <p
                  id={`public-website-redesign-domain-${domain.slug}-ip-why-copy`}
                  className="max-w-prose font-Poppins text-[clamp(16px,1.5vw,19px)] leading-relaxed text-wriCanopy"
                >
                  There are areas that are culturally significant for a variety
                  of reasons — such as landmarks, monuments, parks, and/or
                  protected areas. The resilience for structural and natural
                  places is evaluated differently.
                </p>
              </div>
            </section>

            {/* "How it's measured" heading for Iconic Places */}
            <div id={`public-website-redesign-domain-${domain.slug}-ip-measured-heading`}>
              <h3
                id={`public-website-redesign-domain-${domain.slug}-ip-measured-label`}
                className={`${mainSectionLabelClassName} whitespace-nowrap`}
              >
                How it{"\u2019"}s measured
              </h3>
              <MossDivider
                id={`public-website-redesign-domain-${domain.slug}-ip-measured-divider`}
                className="my-3"
                widthClassName="w-14"
              />
            </div>

            {/* Iconic Places measure cards */}
            <div
              id={`public-website-redesign-domain-${domain.slug}-ip-measure-cards`}
              className="flex flex-col gap-14"
            >
              <MeasureSection
                id={`public-website-redesign-domain-${domain.slug}-ip-status`}
                section={domain.status}
              />
              <MeasureSection
                id={`public-website-redesign-domain-${domain.slug}-ip-resistance`}
                section={domain.resistance}
              />
              <MeasureSection
                id={`public-website-redesign-domain-${domain.slug}-ip-recovery`}
                section={domain.recovery}
              />
            </div>
          </div>
        </div>
      )}

      {/* ===== Sense of Place: Iconic Species subdomain ============== */}
      {isSenseOfPlace && domain.extra && (
        <div
          id={`public-website-redesign-domain-${domain.slug}-iconic-species`}
          className={`${DOMAIN_DETAIL_PAGE_SHELL_CLASSNAME} mt-20`}
        >
          <div
            id={`public-website-redesign-domain-${domain.slug}-is-wrapper`}
            className={`${DOMAIN_DETAIL_TEXT_COLUMN_CLASSNAME} flex flex-col gap-8`}
          >
            {/* Subdomain intro: hero photo + heading + why-it-matters */}
            <section
              id={`public-website-redesign-domain-${domain.slug}-is-intro`}
              className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(180px,320px)_minmax(0,1fr)] md:items-start md:gap-10"
            >
              {domain.extra.hero && (
                <img
                  id={`public-website-redesign-domain-${domain.slug}-is-hero`}
                  src={domain.extra.hero}
                  alt="Iconic species hero"
                  className="aspect-square mx-auto w-full max-w-[320px] rounded-sm object-cover md:mx-0"
                />
              )}
              <div
                id={`public-website-redesign-domain-${domain.slug}-is-intro-body`}
                className="border-l-4 border-wriSage/45 pl-4 md:pl-6"
              >
                <p
                  id={`public-website-redesign-domain-${domain.slug}-is-eyebrow`}
                  className={subdomainEyebrowClassName}
                >
                  Sense of Place Subdomain
                </p>
                <h2
                  id={`public-website-redesign-domain-${domain.slug}-is-title`}
                  className={`${subdomainTitleClassName} mt-2`}
                >
                  Iconic Species
                </h2>
                <MossDivider
                  id={`public-website-redesign-domain-${domain.slug}-is-divider`}
                  className="my-3"
                  widthClassName="w-14"
                />
                <p
                  id={`public-website-redesign-domain-${domain.slug}-is-why-copy`}
                  className="max-w-prose font-Poppins text-[clamp(16px,1.5vw,19px)] leading-relaxed text-wriCanopy"
                >
                  {domain.extra.whyItMatters}
                </p>
              </div>
            </section>

            {/* "How it's measured" heading for Iconic Species */}
            <div id={`public-website-redesign-domain-${domain.slug}-is-measured-heading`}>
              <h3
                id={`public-website-redesign-domain-${domain.slug}-is-measured-label`}
                className={`${mainSectionLabelClassName} whitespace-nowrap`}
              >
                How it{"\u2019"}s measured
              </h3>
              <MossDivider
                id={`public-website-redesign-domain-${domain.slug}-is-measured-divider`}
                className="my-3"
                widthClassName="w-14"
              />
            </div>

            {/* Iconic Species measure cards */}
            <div
              id={`public-website-redesign-domain-${domain.slug}-is-measure-cards`}
              className="flex flex-col gap-14"
            >
              <MeasureSection
                id={`public-website-redesign-domain-${domain.slug}-is-status`}
                section={domain.extra.status}
              />
              <MeasureSection
                id={`public-website-redesign-domain-${domain.slug}-is-resistance`}
                section={domain.extra.resistance}
              />
              <MeasureSection
                id={`public-website-redesign-domain-${domain.slug}-is-recovery`}
                section={domain.extra.recovery}
              />
            </div>
          </div>
        </div>
      )}

      <ExploreAnotherDomain currentSlug={domain.slug} />
    </div>
  );
}

export default DomainDetailPage;
