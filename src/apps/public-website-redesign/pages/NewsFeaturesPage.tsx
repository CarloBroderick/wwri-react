import eventImage from "../../../assets/public-website-redesign/images/media/science-pub-event.jpg";
import forestRegrowth from "../../../assets/public-website-redesign/images/about/forest-regrowth.jpg";
import SectionHeader from "../components/shared/SectionHeader";

type Article = {
  id: string;
  source: string;
  date: string;
  title: string;
  image: string;
};

const ARTICLES: Article[] = [
  {
    id: "when-wildfire-meets-ai",
    source: "NCEAS",
    date: "October 16, 2025",
    title: "When Wildfire Resilience Meets Artificial Intelligence",
    image: forestRegrowth,
  },
  {
    id: "from-data-to-action",
    source: "NCEAS",
    date: "May 22, 2023",
    title: "From data to action: announcing the Wildfire Resilience Index",
    image: eventImage,
  },
];

/** News & Features (PDF page 18). Two featured article cards. */
function NewsFeaturesPage() {
  return (
    <div id="public-website-redesign-news-page" className="mx-auto max-w-[1100px] px-6 py-16">
      <SectionHeader
        id="public-website-redesign-news-heading"
        title={
          <>
            News &amp;
            <br />
            Features
          </>
        }
      />
      <div
        id="public-website-redesign-news-grid"
        className="mt-10 grid gap-8 sm:grid-cols-2 md:gap-10"
      >
        {ARTICLES.map((a) => (
          <article
            key={a.id}
            id={`public-website-redesign-news-article-${a.id}`}
            className="overflow-hidden rounded-sm border border-[#35553f]"
          >
            <div className="relative">
              <img
                id={`public-website-redesign-news-article-${a.id}-image`}
                src={a.image}
                alt=""
                className="aspect-[4/3] w-full object-cover"
              />
              <span
                id={`public-website-redesign-news-article-${a.id}-source`}
                className="absolute bottom-0 left-0 bg-[#dee6c5] px-4 py-1 text-sm font-bold text-[#22402c]"
              >
                {a.source}
              </span>
            </div>
            <div id={`public-website-redesign-news-article-${a.id}-body`} className="space-y-3 p-6">
              <h3 className="text-xl font-bold leading-snug text-[#779062] md:text-2xl">
                {a.title}
              </h3>
              <time className="block text-sm text-[#555]">{a.date}</time>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default NewsFeaturesPage;
