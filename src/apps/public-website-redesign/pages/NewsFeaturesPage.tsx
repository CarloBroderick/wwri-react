import whenWriMeetsAi from "../../../assets/public-website-redesign/images/media/when-wri-meets-ai.png";
import fromDataToAction from "../../../assets/public-website-redesign/images/media/from-data-to-action.jpeg";
import newsFireAdapted from "../../../assets/public-website-redesign/images/media/news-fire-adapted-communities.jpg";
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
 *   Header "News & Features" (Poppins eyebrow implied by reused SectionHeader
 *   convention — here we only render the title row). Each card:
 *     • Box: Forest #2F5D3A outline 4px, Smoke Fog inner
 *     • Picture above text
 *     • Writing org (top-left): Montserrat Bold Sage, 14.2
 *     • Article title (center): Montserrat Bold Moss, 20.8
 *     • Date (bottom-left): Montserrat Sage, 14.2
 *   Each card is hyperlinked to an NCEAS article URL.
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
        className="mt-10 grid gap-8 sm:grid-cols-2 md:gap-10"
      >
        {ARTICLES.map((a) => (
          <a
            key={a.id}
            id={`public-website-redesign-news-article-${a.id}`}
            href={a.href}
            target="_blank"
            rel="noreferrer"
            className="group block overflow-hidden rounded-sm border-[4px] border-wriForest bg-wriSmokeFog transition-transform hover:-translate-y-0.5 hover:shadow-md"
          >
            <img
              id={`public-website-redesign-news-article-${a.id}-image`}
              src={a.image}
              alt=""
              className="aspect-[4/3] w-full object-cover"
            />
            <div
              id={`public-website-redesign-news-article-${a.id}-body`}
              className="flex flex-col gap-3 p-5"
            >
              <div
                id={`public-website-redesign-news-article-${a.id}-source`}
                className="font-Montserrat text-[14.2px] font-bold uppercase tracking-wide text-wriSage"
              >
                {a.source}
              </div>
              <h3
                id={`public-website-redesign-news-article-${a.id}-title`}
                className="font-Montserrat text-[20.8px] font-bold leading-snug text-wriMoss"
              >
                {a.title}
              </h3>
              <time
                id={`public-website-redesign-news-article-${a.id}-date`}
                className="font-Montserrat text-[14.2px] text-wriSage"
              >
                {a.date}
              </time>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default NewsFeaturesPage;
