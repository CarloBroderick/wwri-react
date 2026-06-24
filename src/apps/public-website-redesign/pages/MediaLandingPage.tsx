import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import MossDivider from "../components/shared/MossDivider";
import { REDESIGN_ROUTES } from "../routes/routeConfig";
import heroGoldenGrassland from "../../../assets/public-website-redesign/images/media/field-index-education.png";

/**
 * Media landing page — modern editorial redesign that mirrors the About,
 * Domains, and Contact pages:
 *   • Hero: full-bleed photo with a forest gradient wash, eyebrow, headline,
 *     intro copy, and CTAs.
 *   • Section directory: three large, icon-led cards (News & Features,
 *     Outreach, Publications) that link into each Media sub-section.
 *   • Keep-exploring footer: a primary map CTA plus quick links out to the
 *     other main pages.
 */

// 📚 The three Media sub-sections, shown as the page's featured directory cards.
const MEDIA_SECTIONS: ReadonlyArray<{
  id: string;
  label: string;
  description: string;
  to: string;
  cue: string;
  icon: ReactNode;
}> = [
  {
    id: "news",
    label: "News & Features",
    description:
      "Articles, press, and announcements covering the Wildfire Resilience Index across the West.",
    to: REDESIGN_ROUTES.news,
    cue: "Read the stories",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M4 5h12v14H5a1 1 0 0 1-1-1V5Z" strokeLinejoin="round" />
        <path d="M16 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 9h6M7 12h6M7 15h4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "outreach",
    label: "Outreach",
    description:
      "Public talks, webinar recordings, and community events where you can learn about the Index.",
    to: REDESIGN_ROUTES.outreach,
    cue: "See events",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M3 10v4a1 1 0 0 0 1 1h2l5 4V5L6 9H4a1 1 0 0 0-1 1Z" strokeLinejoin="round" />
        <path d="M16 8.5a4 4 0 0 1 0 7" strokeLinecap="round" />
        <path d="M18.5 6a7 7 0 0 1 0 12" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "publications",
    label: "Publications",
    description:
      "Peer-reviewed papers and technical reports behind the science of the Index.",
    to: REDESIGN_ROUTES.publications,
    cue: "Browse papers",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M6 3h8l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" strokeLinejoin="round" />
        <path d="M13 3v5h5" strokeLinejoin="round" />
        <path d="M8 13h8M8 16.5h6" strokeLinecap="round" />
      </svg>
    ),
  },
];

// 🧭 "Keep exploring" quick links so a reader at the bottom can branch out to the
// other main pages instead of scrolling back up to the nav (mirrors About/Domains).
const MEDIA_NEXT_LINKS: ReadonlyArray<{
  id: string;
  label: string;
  description: string;
  to: string;
  icon: ReactNode;
}> = [
  {
    id: "about",
    label: "About the Index",
    description: "Learn what the Wildfire Resilience Index is and why it matters.",
    to: REDESIGN_ROUTES.about,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v5" strokeLinecap="round" />
        <circle cx="12" cy="7.75" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: "domains",
    label: "Explore the Domains",
    description: "Tour the eight socio-ecological domains that shape every Index score.",
    to: REDESIGN_ROUTES.domains,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    id: "methodology",
    label: "Methodology",
    description: "Dig into the data, indicators, and methods behind the Index.",
    to: REDESIGN_ROUTES.methodology,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M9 3v6.5L4.3 17a2 2 0 0 0 1.7 3h12a2 2 0 0 0 1.7-3L15 9.5V3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 3h8" strokeLinecap="round" />
        <path d="M8 14h8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "team",
    label: "Meet the Team",
    description: "Get to know the researchers building the Index.",
    to: REDESIGN_ROUTES.contactTeam,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19a5.5 5.5 0 0 1 11 0" strokeLinecap="round" />
        <path d="M16 5.2a3 3 0 0 1 0 5.6" strokeLinecap="round" />
        <path d="M17 14.2a5.5 5.5 0 0 1 3.5 4.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

function MediaLandingPage() {
  return (
    <div id="public-website-redesign-media-landing" className="mx-auto max-w-[1400px] px-6 py-12 md:py-16">
      {/* ===== Hero ===================================================== */}
      <section
        id="public-website-redesign-media-hero"
        className="relative overflow-hidden rounded-[28px] bg-wriCanopy shadow-[0_30px_80px_-40px_rgba(31,42,35,0.6)]"
      >
        <img
          id="public-website-redesign-media-hero-image"
          src={heroGoldenGrassland}
          alt="Golden sunrise over a misty grassland valley in the American West"
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
        <div
          id="public-website-redesign-media-hero-scrim"
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-wriCanopy/95 via-wriCanopy/70 to-wriForest/20"
        />
        <div
          id="public-website-redesign-media-hero-content"
          className="relative px-7 py-8 md:px-14 md:py-9 lg:py-10"
        >
          <div className="max-w-2xl">
            <p
              id="public-website-redesign-media-hero-eyebrow"
              className="font-Montserrat text-xs font-semibold uppercase tracking-[0.3em] text-wriMoss"
            >
              Media
            </p>
            <h1
              id="public-website-redesign-media-hero-title"
              className="mt-3 font-Poppins text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.04] text-wriSmokeFog"
            >
              News, events &amp; publications
            </h1>
            <MossDivider
              id="public-website-redesign-media-hero-divider"
              className="mt-5"
              widthClassName="w-20"
            />
          </div>
        </div>
      </section>

      {/* ===== Section directory ======================================= */}
      <section id="public-website-redesign-media-sections" className="mt-16 scroll-mt-24 md:mt-24">
        <header id="public-website-redesign-media-sections-header" className="max-w-2xl">
          <p className="font-Montserrat text-xs font-semibold uppercase tracking-[0.3em] text-wriSage">
            Explore the Media section
          </p>
          <h2 className="mt-3 font-Poppins text-[clamp(1.9rem,3.5vw,2.5rem)] font-bold leading-tight text-wriForest">
            Three ways to dive in
          </h2>
          <MossDivider className="my-5" widthClassName="w-16" />
          <p className="font-Poppins text-[clamp(1rem,1.5vw,1.15rem)] leading-relaxed text-wriCanopy/80">
            Pick a section below to read the latest stories, catch up on talks and webinars, or
            review the published research.
          </p>
        </header>

        <div
          id="public-website-redesign-media-sections-grid"
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {MEDIA_SECTIONS.map((section) => (
            <Link
              key={section.id}
              id={`public-website-redesign-media-section-${section.id}`}
              to={section.to}
              className="group flex flex-col rounded-2xl bg-white p-7 ring-1 ring-wriCanopy/10 transition-all hover:-translate-y-0.5 hover:shadow-md hover:shadow-wriCanopy/10 hover:ring-wriMoss focus:outline-none focus-visible:ring-2 focus-visible:ring-wriMoss focus-visible:ring-offset-2"
            >
              <span
                id={`public-website-redesign-media-section-icon-${section.id}`}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-wriForest/10 text-wriForest transition-colors group-hover:bg-wriForest group-hover:text-white [&_svg]:h-6 [&_svg]:w-6"
              >
                {section.icon}
              </span>
              <span
                id={`public-website-redesign-media-section-label-${section.id}`}
                className="mt-5 font-Montserrat text-xl font-semibold leading-snug text-wriForest"
              >
                {section.label}
              </span>
              <span
                id={`public-website-redesign-media-section-description-${section.id}`}
                className="mt-2 font-Poppins text-sm leading-relaxed text-wriCanopy/70"
              >
                {section.description}
              </span>
              <span
                id={`public-website-redesign-media-section-cue-${section.id}`}
                aria-hidden
                className="mt-5 inline-flex items-center gap-1.5 font-Montserrat text-xs font-bold uppercase tracking-[0.08em] text-wriMossMenuHighlight"
              >
                {section.cue}
                <span className="text-sm leading-none transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== Keep exploring footer =================================== */}
      <section
        id="public-website-redesign-media-keep-exploring-section"
        className="mt-24 sm:mt-28"
      >
        <div
          id="public-website-redesign-media-keep-exploring-cta"
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-wriForest to-wriMossMenuHighlight px-7 py-9 sm:px-10 sm:py-11"
        >
          <span
            id="public-website-redesign-media-keep-exploring-eyebrow"
            className="inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 font-Montserrat text-xs font-bold uppercase tracking-[0.14em] text-white"
          >
            Keep Exploring
          </span>
          <div
            id="public-website-redesign-media-keep-exploring-cta-body"
            className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          >
            <div className="max-w-2xl">
              <h2
                id="public-website-redesign-media-keep-exploring-title"
                className="font-Montserrat text-[clamp(1.5rem,3vw,2.125rem)] font-semibold leading-tight text-white"
              >
                See how your community scores
              </h2>
              <p
                id="public-website-redesign-media-keep-exploring-copy"
                className="mt-3 font-Poppins text-[clamp(15px,1.1vw,17px)] leading-relaxed text-white/85"
              >
                The Index is free and open. Jump into the interactive map to explore resilience
                across states, counties, and neighborhoods.
              </p>
            </div>
            <Link
              id="public-website-redesign-media-keep-exploring-button"
              to={REDESIGN_ROUTES.exploreIndex}
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 font-Montserrat text-sm font-bold uppercase tracking-[0.08em] text-wriForest shadow-sm transition-all hover:bg-wriSmokeFog hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-wriForest"
            >
              Explore the Index
              <span aria-hidden className="text-base leading-none transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        <div
          id="public-website-redesign-media-keep-exploring-links"
          className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {MEDIA_NEXT_LINKS.map((nextLink) => (
            <Link
              key={nextLink.id}
              id={`public-website-redesign-media-next-link-${nextLink.id}`}
              to={nextLink.to}
              className="group flex flex-col rounded-2xl bg-white p-6 ring-1 ring-wriCanopy/10 transition-all hover:-translate-y-0.5 hover:shadow-md hover:shadow-wriCanopy/10 hover:ring-wriMoss focus:outline-none focus-visible:ring-2 focus-visible:ring-wriMoss focus-visible:ring-offset-2"
            >
              <span
                id={`public-website-redesign-media-next-link-icon-${nextLink.id}`}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-wriForest/10 text-wriForest transition-colors group-hover:bg-wriForest group-hover:text-white [&_svg]:h-5 [&_svg]:w-5"
              >
                {nextLink.icon}
              </span>
              <span
                id={`public-website-redesign-media-next-link-label-${nextLink.id}`}
                className="mt-4 font-Montserrat text-[1.0625rem] font-semibold leading-snug text-wriForest"
              >
                {nextLink.label}
              </span>
              <span
                id={`public-website-redesign-media-next-link-description-${nextLink.id}`}
                className="mt-2 font-Poppins text-sm leading-relaxed text-wriCanopy/70"
              >
                {nextLink.description}
              </span>
              <span
                id={`public-website-redesign-media-next-link-cue-${nextLink.id}`}
                aria-hidden
                className="mt-4 inline-flex items-center gap-1.5 font-Montserrat text-xs font-bold uppercase tracking-[0.08em] text-wriMossMenuHighlight"
              >
                Visit page
                <span className="text-sm leading-none transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MediaLandingPage;
