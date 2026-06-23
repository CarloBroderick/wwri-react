import whenWriMeetsAi from "../../../assets/public-website-redesign/images/media/when-wri-meets-ai.png";
import fromDataToAction from "../../../assets/public-website-redesign/images/media/from-data-to-action.jpeg";
import newsFireAdapted from "../../../assets/public-website-redesign/images/media/news-fire-adapted-communities.png";
import newsUcsbCurrent from "../../../assets/public-website-redesign/images/media/news-ucsb-current-wildfire.jpeg";
import newsTaskForce from "../../../assets/public-website-redesign/images/media/news-wildfire-task-force.png";
import newsKcbx from "../../../assets/public-website-redesign/images/media/news-kcbx-prescribed-burn.png";
import SectionHeader from "../components/shared/SectionHeader";

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

/**
 * News & Features (PDF page 18 / change-requests doc).
 *   Header "News & Features" reuses SectionHeader (Poppins eyebrow + Moss rule).
 *   Responsive 1/2/3-column card grid. Each card:
 *     • Soft rounded-2xl panel, hairline Forest border + ring, hover lift/shadow
 *     • 16/9 hero (object-cover, gentle zoom on hover). 16/9 ≈ the ~1.91:1 OG
 *       share images, so the sides are no longer heavily cropped.
 *     • Source badge over the image (Montserrat Bold, Forest on frosted white)
 *     • Article title (Montserrat Bold Canopy, clamped to 3 lines)
 *     • Footer: publication date + "Read →" affordance
 *   Each card is hyperlinked to its external article URL.
 */
function NewsFeaturesPage() {
  return (
    <div id="public-website-redesign-news-page" className="mx-auto max-w-[1400px] px-6 py-16">
      <SectionHeader
        id="public-website-redesign-news-heading"
        eyebrow={
          <span id="public-website-redesign-news-heading-label" className="whitespace-nowrap font-bold">
            News &amp; Features
          </span>
        }
      />
      <div
        id="public-website-redesign-news-grid"
        className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
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
    </div>
  );
}

export default NewsFeaturesPage;
