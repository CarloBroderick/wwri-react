import { useEffect, useRef, useState } from "react";
import homeHeroVideo from "../../../assets/public-website-redesign/videos/home-hero.mp4";
import homeHeroPoster from "../../../assets/public-website-redesign/images/hero/home-hero.jpg";
import nceasLogoWhite from "../../../assets/public-website-redesign/images/logos/nceas-white.png";
import mooreLogoWhite from "../../../assets/public-website-redesign/images/logos/moore-white.png";
import overviewWhatIsIt from "../../../assets/public-website-redesign/videos/overview-1-what-is-it.mp4";
import overviewHowWeBuiltIt from "../../../assets/public-website-redesign/videos/overview-2-how-we-built-it.mp4";
import overviewHowToUseIt from "../../../assets/public-website-redesign/videos/overview-3-how-to-use-it.mp4";
import overviewInterpretScore from "../../../assets/public-website-redesign/videos/overview-4-interpret-your-score.mp4";
import MossDivider from "../components/shared/MossDivider";
import CTAButton from "../components/shared/CTAButton";
import { REDESIGN_ROUTES } from "../routes/routeConfig";

const OVERVIEW_ACCORDION_ITEMS = [
  {
    id: "what-is-it",
    src: overviewWhatIsIt,
    title: "What is the Wildfire Resilience Index?",
  },
  {
    id: "how-we-built-it",
    src: overviewHowWeBuiltIt,
    title: "How was the index built?",
  },
  {
    id: "how-to-use-it",
    src: overviewHowToUseIt,
    title: "How do I use the index?",
  },
  {
    id: "interpret-score",
    src: overviewInterpretScore,
    title: "How do I interpret my score?",
  },
] as const;

/**
 * Homepage — Canva spec pages 1–2.
 *   • Hero: full-viewport looping muted video, heading, subtitle, CTA, partner logos
 *   • Overview: accordion overview videos with smooth expand/collapse
 */
function HomePage() {
  const [openOverviewId, setOpenOverviewId] = useState<string | null>(null);
  const overviewVideoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  useEffect(() => {
    OVERVIEW_ACCORDION_ITEMS.forEach(({ id }) => {
      const el = overviewVideoRefs.current[id];
      if (!el) return;
      if (openOverviewId === id) {
        void el.play().catch(() => {});
      } else {
        el.pause();
        el.currentTime = 0;
      }
    });
  }, [openOverviewId]);

  return (
    <div id="public-website-redesign-home-page">
      {/* ===== Hero ===== */}
      <section
        id="public-website-redesign-home-hero"
        className="relative -mt-px h-[calc(100vh-6rem)] min-h-[620px] w-full overflow-hidden bg-wriCanopy"
      >
        <video
          id="public-website-redesign-home-hero-video"
          src={homeHeroVideo}
          poster={homeHeroPoster}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          id="public-website-redesign-home-hero-scrim"
          className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/55"
        />
        <div
          id="public-website-redesign-home-hero-content"
          className="relative z-10 mx-auto flex h-full max-w-[1280px] flex-col items-center justify-center px-6 text-center text-wriSmokeFog"
        >
          <h1
            id="public-website-redesign-home-hero-title"
            className="font-Montserrat text-[clamp(2.5rem,6vw,3.75rem)] font-bold leading-[1.05] text-wriSmokeFog drop-shadow-md"
          >
            The Wildfire Resilience Index
          </h1>
          <p
            id="public-website-redesign-home-hero-subtitle"
            className="mt-5 max-w-[60rem] font-Poppins text-[clamp(1.125rem,2vw,1.625rem)] italic text-wriSmokeFog drop-shadow"
          >
            Measuring wildfire resilience in communities and landscapes
          </p>
          <div id="public-website-redesign-home-hero-cta" className="mt-10">
            <CTAButton id="public-website-redesign-home-hero-cta-button" to={REDESIGN_ROUTES.exploreIndex}>
              <span className="text-[clamp(1rem,1.8vw,2rem)]">Explore the Index</span>
            </CTAButton>
          </div>
        </div>

        <div
          id="public-website-redesign-home-hero-partners"
          className="absolute bottom-6 right-6 z-10 flex items-center gap-6"
        >
          <img
            id="public-website-redesign-home-hero-partner-nceas"
            src={nceasLogoWhite}
            alt="NCEAS"
            className="h-10 w-auto object-contain opacity-95 drop-shadow md:h-12"
          />
          <img
            id="public-website-redesign-home-hero-partner-moore"
            src={mooreLogoWhite}
            alt="Gordon and Betty Moore Foundation"
            className="h-10 w-auto object-contain opacity-95 drop-shadow md:h-12"
          />
        </div>
      </section>

      {/* ===== Overview accordions ===== */}
      <section
        id="public-website-redesign-home-overview"
        className="mx-auto max-w-[1200px] px-6 py-16"
      >
        <h2
          id="public-website-redesign-home-overview-title"
          className="font-Montserrat text-[clamp(2rem,4vw,2.75rem)] font-bold text-wriForest"
        >
          Overview
        </h2>
        <MossDivider
          id="public-website-redesign-home-overview-divider"
          className="mt-3 mb-10"
          widthClassName="w-20"
        />
        <div
          id="public-website-redesign-home-overview-accordion-list"
          className="flex flex-col gap-3"
        >
          {OVERVIEW_ACCORDION_ITEMS.map((item) => {
            const isOpen = openOverviewId === item.id;
            return (
              <div
                key={item.id}
                id={`public-website-redesign-home-overview-accordion-${item.id}`}
                className="rounded-sm border border-wriSage bg-wriSmokeFog/40"
              >
                <button
                  type="button"
                  id={`public-website-redesign-home-overview-accordion-${item.id}-toggle`}
                  aria-expanded={isOpen}
                  aria-controls={`public-website-redesign-home-overview-accordion-${item.id}-panel`}
                  className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left font-Montserrat text-[clamp(1rem,2vw,1.25rem)] font-normal text-wriSage transition-colors duration-200 hover:bg-wriSage/10"
                  onClick={() =>
                    setOpenOverviewId(isOpen ? null : item.id)
                  }
                >
                  <span id={`public-website-redesign-home-overview-accordion-${item.id}-title`}>
                    {item.title}
                  </span>
                  <svg
                    id={`public-website-redesign-home-overview-accordion-${item.id}-chevron`}
                    className={`h-5 w-5 shrink-0 text-wriSage transition-transform duration-300 ease-in-out ${
                      isOpen ? "rotate-90" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M7 4l6 6-6 6" />
                  </svg>
                </button>

                <div
                  id={`public-website-redesign-home-overview-accordion-${item.id}-panel`}
                  role="region"
                  aria-labelledby={`public-website-redesign-home-overview-accordion-${item.id}-toggle`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div
                      id={`public-website-redesign-home-overview-accordion-${item.id}-content`}
                      className={`border-t border-wriSage px-4 pb-5 pt-4 ${
                        !isOpen ? "pointer-events-none" : ""
                      }`}
                      aria-hidden={!isOpen}
                    >
                      <div className="mb-4">
                        <button
                          type="button"
                          id={`public-website-redesign-home-overview-accordion-${item.id}-back`}
                          disabled={!isOpen}
                          tabIndex={isOpen ? 0 : -1}
                          className="inline-flex items-center gap-1.5 font-Poppins text-sm font-medium uppercase tracking-wide text-wriSage transition-colors duration-200 enabled:hover:text-wriForest disabled:opacity-0"
                          onClick={() => setOpenOverviewId(null)}
                        >
                          <span aria-hidden>←</span> Back
                        </button>
                      </div>
                      <div
                        id={`public-website-redesign-home-overview-accordion-${item.id}-video-wrap`}
                        className="mx-auto w-full max-w-5xl border border-wriSage bg-black/90"
                      >
                        <video
                          id={`public-website-redesign-home-overview-${item.id}-video`}
                          ref={(el) => {
                            overviewVideoRefs.current[item.id] = el;
                          }}
                          src={item.src}
                          muted
                          loop
                          playsInline
                          controls
                          preload="metadata"
                          className="h-[min(58vw,540px)] min-h-[320px] w-full object-cover sm:min-h-[380px] md:min-h-[440px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
