import { useMemo, useRef, useState } from "react";
import burntForest from "../../../assets/public-website-redesign/images/about/burnt-forest.jpg";
import whyIndexBanffTown from "../../../assets/public-website-redesign/images/about/why-is-the-index-useful-banf-town.png";
import whyIndexNewPineGrowth from "../../../assets/public-website-redesign/images/about/why-is-the-index-useful-new-pine-growth.png";
import regionMap from "../../../assets/public-website-redesign/icons/Location Map for WRI, 1 What is the WRI (1).png";
import overviewHowToUseIt from "../../../assets/public-website-redesign/videos/overview-3-how-to-use-it.mp4";
import overviewHowWeBuiltIt from "../../../assets/public-website-redesign/videos/overview-2-how-we-built-it.mp4";
import overviewInterpretScore from "../../../assets/public-website-redesign/videos/overview-4-interpret-your-score.mp4";
import overviewWhatIsIt from "../../../assets/public-website-redesign/videos/overview-1-what-is-it.mp4";
import DownArrow from "../../../assets/DownArrow.svg";
import RightSideArrow from "../../../assets/RightSideArrow.svg";

const ABOUT_VIDEO_ITEMS = [
  {
    id: "what-is-the-wri",
    label: "What is the Wildfire Resilience Index?",
    src: overviewWhatIsIt,
  },
  {
    id: "how-was-index-built",
    label: "How was the index built?",
    src: overviewHowWeBuiltIt,
  },
  {
    id: "how-do-i-use-index",
    label: "How do I use the index?",
    src: overviewHowToUseIt,
  },
  {
    id: "how-do-i-interpret-score",
    label: "How do I interpret my score?",
    src: overviewInterpretScore,
  },
] as const;

const DATA_DRIVEN_COPY = [
  "The Wildfire Resilience Index (WRI) is an interactive tool designed to support communities and landscapes living with wildfire in 12 Western US states, British Columbia, and the Yukon Territory (see image on the right).",
  "Wildfire is natural and inevitable across the western United States and Canada. Living with it requires a shared understanding of how systems-both ecological and human-resist harm and recover after fire. Together, these abilities define resilience.",
  "Because wildfire resilience spans ecological, social, and infrastructural factors, it can be difficult to measure and compare. The index addresses this challenge by combining many types of data into a single, easy-to-understand measure. Grounded in the latest research, it integrates spatial data and expert knowledge to assess resilience across different locations.",
  "The index brings together multiple indicators-organized into 8 key topic areas called domains-to create a composite score. This approach allows diverse information to be translated into a shared framework, helping everyone talk about wildfire resilience in a consistent and meaningful way.",
] as const;

const ACTIONABLE_INSIGHT_COPY = [
  "The index is designed to inform land management, policy planning, and community preparedness by supporting evidence-based decisions that enhance safety and ecosystem sustainability.",
  "Rather than prescribing one solution, the index offers flexible insights that communities can adapt to their unique needs. It highlights where resilience can be strengthened-whether through vegetation management, infrastructure planning, community preparedness, or other targeted actions.",
  "Because the index and its underlying datasets are open source (free to all), it is accessible to a wide range of users. It can be applied at multiple scales, from local communities to regional landscapes, helping identify areas of higher vulnerability and prioritize effective interventions.",
  "By creating a shared, data-driven understanding of wildfire resilience, the index supports collaboration among land managers, scientists, policymakers, and the public.",
  "This common foundation enables more informed, transparent decision-making-helping communities and ecosystems live more sustainably with wildfire while allowing fire to continue playing its natural role. The index provides a shared framework for action and understanding.",
] as const;

function AboutPage() {
  const [expandedVideoId, setExpandedVideoId] = useState<(typeof ABOUT_VIDEO_ITEMS)[number]["id"] | null>(
    ABOUT_VIDEO_ITEMS[0].id,
  );
  const [playingVideoId, setPlayingVideoId] = useState<(typeof ABOUT_VIDEO_ITEMS)[number]["id"] | null>(null);
  const videoRefs = useRef<
    Partial<Record<(typeof ABOUT_VIDEO_ITEMS)[number]["id"], HTMLVideoElement | null>>
  >({});

  const expandedVideoIndex = useMemo(
    () => ABOUT_VIDEO_ITEMS.findIndex((item) => item.id === expandedVideoId),
    [expandedVideoId],
  );

  const goToAdjacentVideo = (direction: "previous" | "next") => {
    const movement = direction === "previous" ? -1 : 1;
    const nextIndex = expandedVideoIndex + movement;
    const nextVideo = ABOUT_VIDEO_ITEMS[nextIndex];

    if (nextVideo) {
      setExpandedVideoId(nextVideo.id);
      setPlayingVideoId(null);
    }
  };

  return (
    <div id="public-website-redesign-about-page" className="mx-auto max-w-[1200px] px-6 py-16">
      <section id="public-website-redesign-about-getting-started-section">
        <h1
          id="public-website-redesign-about-getting-started-title"
          className="font-Poppins text-[clamp(2.25rem,4.3vw,2.75rem)] font-bold leading-tight text-wriForest"
        >
          Getting Started
        </h1>
        <div
          id="public-website-redesign-about-getting-started-divider"
          className="mt-3 h-[4px] w-24 rounded-full bg-wriMoss"
        />
        <p
          id="public-website-redesign-about-getting-started-copy"
          className="mt-6 max-w-4xl font-Poppins text-[clamp(1.05rem,2.1vw,1.25rem)] font-normal leading-relaxed text-wriCanopy"
        >
          Explore the sequence of videos below to discover and understand your community's score:
        </p>
      </section>

      <section id="public-website-redesign-about-video-accordion-section" className="mt-10 space-y-5">
        {ABOUT_VIDEO_ITEMS.map((videoItem, index) => {
          const isExpanded = videoItem.id === expandedVideoId;
          const accordionPanelId = `public-website-redesign-about-video-panel-${videoItem.id}`;
          const showBackButton = isExpanded && index > 0;
          const showNextButton = isExpanded && index < ABOUT_VIDEO_ITEMS.length - 1;

          return (
            <article
              key={videoItem.id}
              id={`public-website-redesign-about-video-accordion-item-${videoItem.id}`}
              className="rounded-sm border-[5px] border-wriMoss bg-white"
            >
              <button
                id={`public-website-redesign-about-video-accordion-trigger-${videoItem.id}`}
                type="button"
                aria-expanded={isExpanded}
                aria-controls={accordionPanelId}
                onClick={() => {
                  setExpandedVideoId(isExpanded ? null : videoItem.id);
                  setPlayingVideoId(null);
                }}
                className="flex w-full items-center justify-between gap-4 px-5 py-3 text-left md:px-6 md:py-3.5"
              >
                <span
                  id={`public-website-redesign-about-video-accordion-label-${videoItem.id}`}
                  className="font-Montserrat text-[clamp(1.15rem,2vw,1.7625rem)] font-bold leading-tight text-wriSage"
                >
                  {videoItem.label}
                </span>
                <img
                  id={`public-website-redesign-about-video-accordion-chevron-${videoItem.id}`}
                  src={isExpanded ? DownArrow : RightSideArrow}
                  alt=""
                  aria-hidden
                  className="h-5 w-5 shrink-0"
                />
              </button>

              <div
                id={`public-website-redesign-about-video-panel-transition-wrap-${videoItem.id}`}
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div
                  id={accordionPanelId}
                  aria-hidden={!isExpanded}
                  className={`overflow-hidden border-t-[3px] border-wriMoss px-2 py-6 transition-opacity duration-200 ease-in-out md:px-4 ${
                    isExpanded ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  <div
                    id={`public-website-redesign-about-video-stage-${videoItem.id}`}
                    className="mx-auto grid w-full max-w-[1140px] grid-cols-1 items-center gap-4 md:grid-cols-[110px_minmax(0,1fr)_110px]"
                  >
                    <div
                      id={`public-website-redesign-about-video-navigation-left-slot-${videoItem.id}`}
                      className="hidden h-full items-center justify-center md:flex"
                    >
                      {showBackButton ? (
                        <button
                          id={`public-website-redesign-about-video-navigation-back-${videoItem.id}`}
                          type="button"
                          onClick={() => goToAdjacentVideo("previous")}
                          className="inline-flex items-center gap-2 font-Montserrat text-base font-bold uppercase tracking-[0.08em] text-wriForest"
                        >
                          <span aria-hidden className="text-[26px] leading-none">
                            &larr;
                          </span>
                          Back
                        </button>
                      ) : null}
                    </div>

                    <div
                      id={`public-website-redesign-about-video-player-wrap-${videoItem.id}`}
                      className="mx-auto w-full max-w-[760px] border-[3px] border-wriMoss p-3 md:p-4"
                    >
                      <div
                        id={`public-website-redesign-about-video-player-frame-${videoItem.id}`}
                        className="relative"
                      >
                        <video
                          id={`public-website-redesign-about-video-player-${videoItem.id}`}
                          ref={(node) => {
                            videoRefs.current[videoItem.id] = node;
                          }}
                          src={videoItem.src}
                          controls
                          playsInline
                          preload="metadata"
                          onPlay={() => setPlayingVideoId(videoItem.id)}
                          onPause={() => setPlayingVideoId(null)}
                          onEnded={() => setPlayingVideoId(null)}
                          className="aspect-video w-full rounded-sm bg-black"
                        />
                        {playingVideoId !== videoItem.id ? (
                          <button
                            id={`public-website-redesign-about-video-big-play-button-${videoItem.id}`}
                            type="button"
                            onClick={() => {
                              const videoElement = videoRefs.current[videoItem.id];
                              if (videoElement) {
                                videoElement.play();
                                setPlayingVideoId(videoItem.id);
                              }
                            }}
                            aria-label={`Play ${videoItem.label}`}
                            className="absolute inset-0 flex items-center justify-center"
                          >
                            <span
                              id={`public-website-redesign-about-video-big-play-button-circle-${videoItem.id}`}
                              className="flex h-20 w-20 items-center justify-center rounded-full bg-wriForest/90 text-white shadow-lg transition-transform hover:scale-105"
                            >
                              <span
                                id={`public-website-redesign-about-video-big-play-button-icon-${videoItem.id}`}
                                aria-hidden
                                className="ml-1 text-[34px] leading-none"
                              >
                                ▶
                              </span>
                            </span>
                          </button>
                        ) : null}
                      </div>
                    </div>

                    <div
                      id={`public-website-redesign-about-video-navigation-right-slot-${videoItem.id}`}
                      className="hidden h-full items-center justify-center md:flex"
                    >
                      {showNextButton ? (
                        <button
                          id={`public-website-redesign-about-video-navigation-next-${videoItem.id}`}
                          type="button"
                          onClick={() => goToAdjacentVideo("next")}
                          className="inline-flex items-center gap-2 font-Montserrat text-base font-bold uppercase tracking-[0.08em] text-wriForest"
                        >
                          Next
                          <span aria-hidden className="text-[26px] leading-none">
                            &rarr;
                          </span>
                        </button>
                      ) : null}
                    </div>
                  </div>

                  <div
                    id={`public-website-redesign-about-video-navigation-mobile-${videoItem.id}`}
                    className="mt-3 flex items-center justify-between md:hidden"
                  >
                    <div id={`public-website-redesign-about-video-navigation-mobile-left-slot-${videoItem.id}`}>
                      {showBackButton ? (
                        <button
                          id={`public-website-redesign-about-video-navigation-mobile-back-${videoItem.id}`}
                          type="button"
                          onClick={() => goToAdjacentVideo("previous")}
                          className="inline-flex items-center gap-2 font-Montserrat text-sm font-bold uppercase tracking-[0.08em] text-wriForest"
                        >
                          <span aria-hidden className="text-[20px] leading-none">
                            &larr;
                          </span>
                          Back
                        </button>
                      ) : null}
                    </div>
                    <div id={`public-website-redesign-about-video-navigation-mobile-right-slot-${videoItem.id}`}>
                      {showNextButton ? (
                        <button
                          id={`public-website-redesign-about-video-navigation-mobile-next-${videoItem.id}`}
                          type="button"
                          onClick={() => goToAdjacentVideo("next")}
                          className="inline-flex items-center gap-2 font-Montserrat text-sm font-bold uppercase tracking-[0.08em] text-wriForest"
                        >
                          Next
                          <span aria-hidden className="text-[20px] leading-none">
                            &rarr;
                          </span>
                        </button>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section
        id="public-website-redesign-about-data-driven-section"
        className="mt-20 grid gap-10 md:grid-cols-[1fr_1fr]"
      >
        <div id="public-website-redesign-about-data-driven-text">
          <h2
            id="public-website-redesign-about-data-driven-page-heading"
            className="font-Poppins text-[clamp(2.25rem,4.3vw,2.75rem)] font-normal leading-tight text-wriForest"
          >
            About
          </h2>
          <h3
            id="public-website-redesign-about-data-driven-title"
            className="mt-2 font-Montserrat text-[clamp(1.75rem,3.7vw,2.5625rem)] font-bold leading-tight text-wriSage"
          >
            What is the Wildfire Resilience Index?
          </h3>
          <h4
            id="public-website-redesign-about-data-driven-subtitle"
            className="mt-6 font-Montserrat text-[clamp(1.25rem,2.2vw,1.75rem)] font-bold leading-tight text-wriForest"
          >
            A Data-Driven View of Wildfire Resilience
          </h4>
          <div
            id="public-website-redesign-about-data-driven-copy"
            className="mt-6 space-y-4 font-Poppins text-[clamp(16px,1.5vw,20px)] leading-relaxed text-wriCanopy"
          >
            {DATA_DRIVEN_COPY.map((paragraph, index) => (
              <p id={`public-website-redesign-about-data-driven-copy-paragraph-${index + 1}`} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div
          id="public-website-redesign-about-region-map-wrap"
          className="mx-auto w-full max-w-[420px] md:relative md:h-full md:max-w-none"
        >
          <img
            id="public-website-redesign-about-region-map"
            src={regionMap}
            alt="Map of 12 Western US states, British Columbia, and the Yukon Territory"
            className="w-full object-contain md:absolute md:inset-0 md:h-full md:object-bottom"
          />
        </div>
      </section>

      <section
        id="public-website-redesign-about-data-driven-image-section"
        className="mt-14 grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-start"
      >
        <img
          id="public-website-redesign-about-challenge-photo"
          src={burntForest}
          alt="Burned forest with yellow wildflowers returning after wildfire"
          className="aspect-square w-full rounded-sm object-cover"
        />
        <img
          id="public-website-redesign-about-challenge-photo-secondary"
          src={whyIndexBanffTown}
          alt="Mountain town with snowy peaks in the background"
          className="aspect-square w-full rounded-sm object-cover"
        />
      </section>

      <section
        id="public-website-redesign-about-index-useful-section"
        className="mt-20 grid gap-10 md:grid-cols-2 md:items-start"
      >
        <div id="public-website-redesign-about-index-useful-text">
          <h3
            id="public-website-redesign-about-index-useful-title"
            className="font-Montserrat text-[clamp(1.75rem,3.7vw,2.5625rem)] font-bold leading-tight text-wriSage"
          >
            How is the index useful?
          </h3>
          <h4
            id="public-website-redesign-about-turning-data-title"
            className="mt-6 font-Montserrat text-[clamp(1.25rem,2.2vw,1.75rem)] font-bold leading-tight text-wriForest"
          >
            Turning Data into Actionable Insight
          </h4>
          <div
            id="public-website-redesign-about-index-useful-copy"
            className="mt-6 space-y-4 font-Poppins text-[clamp(16px,1.5vw,20px)] leading-relaxed text-wriCanopy"
          >
            {ACTIONABLE_INSIGHT_COPY.map((paragraph, index) => (
              <p id={`public-website-redesign-about-index-useful-copy-paragraph-${index + 1}`} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div
          id="public-website-redesign-about-actionable-insight-photo-wrap"
          className="relative aspect-square w-full min-w-0 overflow-hidden rounded-sm"
        >
          <img
            id="public-website-redesign-about-actionable-insight-photo"
            src={whyIndexNewPineGrowth}
            alt="Young conifer regenerating in a forest clearing"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
