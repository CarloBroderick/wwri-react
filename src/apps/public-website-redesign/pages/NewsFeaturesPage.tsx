import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import whenWriMeetsAi from "../../../assets/public-website-redesign/images/media/when-wri-meets-ai.png";
import fromDataToAction from "../../../assets/public-website-redesign/images/media/from-data-to-action.jpeg";
import newsFireAdapted from "../../../assets/public-website-redesign/images/media/news-fire-adapted-communities.png";
import newsUcsbCurrent from "../../../assets/public-website-redesign/images/media/news-ucsb-current-wildfire.jpeg";
import newsTaskForce from "../../../assets/public-website-redesign/images/media/news-wildfire-task-force.png";
import newsKcbx from "../../../assets/public-website-redesign/images/media/news-kcbx-prescribed-burn.png";
import newsHero from "../../../assets/public-website-redesign/images/hero/home-hero.jpg";
import MossDivider from "../components/shared/MossDivider";
import { REDESIGN_ROUTES } from "../routes/routeConfig";

type Article = {
  id: string;
  /** Writing organization (Montserrat Bold Sage 14.2 — Canva spec). */
  source: string;
  /** Publication date (Montserrat Sage 14.2). */
  date: string;
  /** Article title (Montserrat Bold Moss 20.8). */
  title: string;
  /** Hero image shown inside the Forest-outlined card. */
  image: string;
  /** External URL the whole card links to. */
  href: string;
  /** Call-to-action verb in the card footer (default "Read"; e.g. "Listen" for audio). */
  cta?: string;
};

// 📰 Most recent first. Card shows org (above), title, then publication date. ===
const ARTICLES: Article[] = [
  {
    id: "fire-adapted-communities-lookup-score",
    source: "Fire Adapted Communities",
    date: "May 7, 2026",
    title: "You Can Now Look Up Your Community's Wildfire Resilience Score",
    image: newsFireAdapted,
    href: "https://fireadaptednetwork.org/wildfire-resilience-index/",
  },
  {
    id: "edhat-resilience-now-a-number",
    source: "EdHat",
    date: "May 7, 2026",
    title: "Wildfire resilience has always been the goal. Now it's a number",
    image: newsUcsbCurrent,
    href: "https://www.edhat.com/news/wildfire-resilience-has-always-been-the-goal-now-its-a-number/",
  },
  {
    id: "task-force-index-now-live",
    source: "The California Wildfire & Forest Resilience Task Force",
    date: "May 5, 2026",
    title:
      "Wildfire Resilience Index is Now Live — Providing a New Interactive Tool to Support Communities and Landscapes Living with Wildfire",
    image: newsTaskForce,
    href: "https://wildfiretaskforce.org/wildfire-resilience-index-is-now-live-providing-a-new-interactive-tool-to-support-communities-and-landscapes-living-with-wildfire/",
  },
  {
    id: "ucsb-current-resilience-now-a-number",
    source: "The Current UCSB",
    date: "May 5, 2026",
    title: "Wildfire resilience has always been the goal. Now it's a number",
    image: newsUcsbCurrent,
    href: "https://news.ucsb.edu/2026/022548/wildfire-resilience-has-always-been-goal-now-its-number",
  },
  {
    id: "kcbx-new-tool-scores-communities",
    source: "KCBX",
    date: "May 5, 2026",
    title: "New tool from UCSB scores communities on wildfire resilience",
    image: newsKcbx,
    href: "https://www.kcbx.org/environment-and-energy/2026-05-05/new-tool-from-ucsb-scores-communities-on-wildfire-resilience",
    cta: "Listen",
  },
  {
    id: "when-wildfire-meets-ai",
    source: "NCEAS",
    date: "October 16, 2025",
    title: "When Wildfire Resilience Meets Artificial Intelligence",
    image: whenWriMeetsAi,
    href: "https://www.nceas.ucsb.edu/news/when-wildfire-resilience-meets-artificial-intelligence",
  },
  {
    id: "from-data-to-action",
    source: "NCEAS",
    date: "May 22, 2023",
    title: "From data to action: announcing the Wildfire Resilience Index",
    image: fromDataToAction,
    href: "https://www.nceas.ucsb.edu/news/announcing-WWRI",
  },
];

// 🧭 "Keep exploring" quick links so a reader who reaches the bottom of the feed
// can branch out to the sibling Media pages and other main sections instead of
// scrolling back up to the nav (mirrors the Media landing + Outreach pages).
const NEXT_LINKS: ReadonlyArray<{
  id: string;
  label: string;
  description: string;
  to: string;
  icon: ReactNode;
}> = [
  {
    id: "outreach",
    label: "Outreach",
    description: "Webinar recordings, public talks, and community events about the Index.",
    to: REDESIGN_ROUTES.outreach,
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
    description: "Peer-reviewed papers and reports behind the science of the Index.",
    to: REDESIGN_ROUTES.publications,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M6 3h8l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" strokeLinejoin="round" />
        <path d="M13 3v5h5" strokeLinejoin="round" />
        <path d="M8 13h8M8 16.5h6" strokeLinecap="round" />
      </svg>
    ),
  },
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
];

/**
 * News & Features (PDF page 18 / change-requests doc).
 *   Skinny image hero (mirrors the Media landing + Publications pages) opens the
 *   page with an eyebrow, title, moss rule, and short intro.
 *   Responsive 1/2/3-column card grid. Each card:
 *     • Soft rounded-2xl panel, hairline Forest border + ring, hover lift/shadow
 *     • 16/9 hero (object-cover, gentle zoom on hover). 16/9 ≈ the ~1.91:1 OG
 *       share images, so the sides are no longer heavily cropped.
 *     • Source badge over the image (Montserrat Bold, Forest on frosted white)
 *     • Article title (Montserrat Bold Canopy, clamped to 3 lines)
 *     • Footer: publication date + "Read →" affordance
 *   Each card is hyperlinked to its external article URL.
 *   An "end of page" divider then signals the feed is over, followed by a
 *   general-purpose "where to next?" redirect (map CTA + quick links to other
 *   sections) — a way to move on, not more news content.
 */
function NewsFeaturesPage() {
  return (
    <div id="public-website-redesign-news-page" className="mx-auto max-w-[1400px] px-6 py-12 md:py-16">
      {/* ===== Hero (skinny variant matching Media landing / Publications) === */}
      <section
        id="public-website-redesign-news-hero"
        className="relative overflow-hidden rounded-[28px] bg-wriCanopy shadow-[0_30px_80px_-40px_rgba(31,42,35,0.6)]"
      >
        <img
          id="public-website-redesign-news-hero-image"
          src={newsHero}
          alt="Forested ridgeline of the American West at golden hour"
          className="absolute inset-0 h-full w-full object-cover object-center"
          draggable={false}
        />
        <div
          id="public-website-redesign-news-hero-scrim"
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-wriCanopy/95 via-wriCanopy/70 to-wriForest/20"
        />
        <div
          id="public-website-redesign-news-hero-content"
          className="relative px-7 py-8 md:px-14 md:py-9 lg:py-10"
        >
          <div className="max-w-2xl">
            <p
              id="public-website-redesign-news-hero-eyebrow"
              className="font-Montserrat text-xs font-semibold uppercase tracking-[0.3em] text-wriMoss"
            >
              Media — News &amp; Features
            </p>
            <h1
              id="public-website-redesign-news-hero-title"
              className="mt-3 font-Poppins text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[1.05] text-wriSmokeFog"
            >
              News &amp; Features
            </h1>
            <MossDivider
              id="public-website-redesign-news-hero-divider"
              className="mt-4"
              widthClassName="w-20"
            />
            <p
              id="public-website-redesign-news-hero-subtitle"
              className="mt-4 max-w-xl font-Poppins text-[clamp(15px,1.4vw,17px)] leading-relaxed text-wriSmokeFog/85"
            >
              Press, articles, and announcements covering the Wildfire Resilience Index and the
              communities it serves across the American West.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Article grid ============================================== */}
      <div
        id="public-website-redesign-news-grid"
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:mt-16"
      >
        {ARTICLES.map((a) => (
          <a
            key={a.id}
            id={`public-website-redesign-news-article-${a.id}`}
            href={a.href}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col overflow-hidden rounded-2xl border border-wriForest/15 bg-white shadow-sm ring-1 ring-black/5 transition duration-300 ease-out hover:-translate-y-1 hover:border-wriForest/30 hover:shadow-xl"
          >
            {/* 🖼️ Hero — 16/9 keeps wide OG share images from being side-cropped */}
            <div
              id={`public-website-redesign-news-article-${a.id}-media`}
              className="relative aspect-video w-full overflow-hidden bg-wriSmokeFog"
            >
              <img
                id={`public-website-redesign-news-article-${a.id}-image`}
                src={a.image}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <span
                id={`public-website-redesign-news-article-${a.id}-source`}
                className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 font-Montserrat text-[11px] font-bold uppercase tracking-wide text-wriForest shadow-sm backdrop-blur"
              >
                {a.source}
              </span>
            </div>

            {/* 📝 Body */}
            <div
              id={`public-website-redesign-news-article-${a.id}-body`}
              className="flex flex-1 flex-col gap-4 p-5"
            >
              <h3
                id={`public-website-redesign-news-article-${a.id}-title`}
                className="font-Montserrat text-[17px] font-bold leading-snug text-wriCanopy line-clamp-3 transition-colors group-hover:text-wriForest"
              >
                {a.title}
              </h3>
              <div className="mt-auto flex items-center justify-between border-t border-wriForest/10 pt-4">
                <time
                  id={`public-website-redesign-news-article-${a.id}-date`}
                  className="font-Montserrat text-[13px] text-wriSage"
                >
                  {a.date}
                </time>
                <span
                  id={`public-website-redesign-news-article-${a.id}-cta`}
                  className="inline-flex items-center gap-1 font-Montserrat text-[13px] font-bold text-wriForest"
                  aria-hidden="true"
                >
                  {a.cta ?? "Read"}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* ===== End-of-page divider ====================================== */}
      {/* 🚩 Hard visual break so the footer below reads as "you've reached the
          end of the news feed" — a general site redirect, not more news. */}
      <div
        id="public-website-redesign-news-end-divider"
        className="mt-20 flex items-center gap-4 sm:mt-24"
        aria-hidden
      >
        <span className="h-px flex-1 bg-wriForest/15" />
        <span className="font-Montserrat text-[11px] font-bold uppercase tracking-[0.18em] text-wriSage">
          You&apos;ve reached the end
        </span>
        <span className="h-px flex-1 bg-wriForest/15" />
      </div>

      {/* ===== Keep exploring footer ==================================== */}
      <section
        id="public-website-redesign-news-keep-exploring-section"
        className="mt-10 sm:mt-12"
      >
        <div
          id="public-website-redesign-news-keep-exploring-cta"
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-wriForest to-wriMossMenuHighlight px-7 py-9 sm:px-10 sm:py-11"
        >
          <span
            id="public-website-redesign-news-keep-exploring-eyebrow"
            className="inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 font-Montserrat text-xs font-bold uppercase tracking-[0.14em] text-white"
          >
            Where to next?
          </span>
          <div
            id="public-website-redesign-news-keep-exploring-cta-body"
            className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          >
            <div className="max-w-2xl">
              <h2
                id="public-website-redesign-news-keep-exploring-title"
                className="font-Montserrat text-[clamp(1.5rem,3vw,2.125rem)] font-semibold leading-tight text-white"
              >
                Ready to move on?
              </h2>
              <p
                id="public-website-redesign-news-keep-exploring-copy"
                className="mt-3 font-Poppins text-[clamp(15px,1.1vw,17px)] leading-relaxed text-white/85"
              >
                That&apos;s the news feed. Jump straight into the interactive map, or pick up one of
                the other sections below to keep exploring the Index.
              </p>
            </div>
            <Link
              id="public-website-redesign-news-keep-exploring-button"
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
          id="public-website-redesign-news-keep-exploring-links"
          className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {NEXT_LINKS.map((nextLink) => (
            <Link
              key={nextLink.id}
              id={`public-website-redesign-news-next-link-${nextLink.id}`}
              to={nextLink.to}
              className="group flex flex-col rounded-2xl bg-white p-6 ring-1 ring-wriCanopy/10 transition-all hover:-translate-y-0.5 hover:shadow-md hover:shadow-wriCanopy/10 hover:ring-wriMoss focus:outline-none focus-visible:ring-2 focus-visible:ring-wriMoss focus-visible:ring-offset-2"
            >
              <span
                id={`public-website-redesign-news-next-link-icon-${nextLink.id}`}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-wriForest/10 text-wriForest transition-colors group-hover:bg-wriForest group-hover:text-white [&_svg]:h-5 [&_svg]:w-5"
              >
                {nextLink.icon}
              </span>
              <span
                id={`public-website-redesign-news-next-link-label-${nextLink.id}`}
                className="mt-4 font-Montserrat text-[1.0625rem] font-semibold leading-snug text-wriForest"
              >
                {nextLink.label}
              </span>
              <span
                id={`public-website-redesign-news-next-link-description-${nextLink.id}`}
                className="mt-2 font-Poppins text-sm leading-relaxed text-wriCanopy/70"
              >
                {nextLink.description}
              </span>
              <span
                id={`public-website-redesign-news-next-link-cue-${nextLink.id}`}
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

export default NewsFeaturesPage;
