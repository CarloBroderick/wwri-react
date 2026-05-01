import { ReactNode, useMemo, useRef, useState } from "react";
import DownArrow from "../../../assets/DownArrow.svg";
import regionMap from "../../../assets/public-website-redesign/icons/Location Map for WRI, 1 What is the WRI (1).png";
import burntForest from "../../../assets/public-website-redesign/images/about/burnt-forest.jpg";
import whyIndexBanffTown from "../../../assets/public-website-redesign/images/about/why-is-the-index-useful-banf-town.png";
import whyIndexNewPineGrowth from "../../../assets/public-website-redesign/images/about/why-is-the-index-useful-new-pine-growth.png";
import overviewWhatIsIt from "../../../assets/public-website-redesign/videos/overview-1-what-is-it.mp4";
import overviewHowWeBuiltIt from "../../../assets/public-website-redesign/videos/overview-2-how-we-built-it.mp4";
import overviewHowToUseIt from "../../../assets/public-website-redesign/videos/overview-3-how-to-use-it.mp4";
import overviewInterpretScore from "../../../assets/public-website-redesign/videos/overview-4-interpret-your-score.mp4";
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

const ABOUT_CONTENT_ROWS: ReadonlyArray<{
  id: string;
  heading?: string;
  image: {
    src: string;
    alt: string;
  };
  imagePosition: "left" | "right";
  paragraphs: ReadonlyArray<ReactNode>;
}> = [
  {
    id: "map-overview",
    image: {
      src: regionMap,
      alt: "Map of 12 Western US states, British Columbia, and the Yukon Territory",
    },
    imagePosition: "right",
    paragraphs: [
      <>
        The <strong>Wildfire Resilience Index (WRI)</strong> is an interactive tool designed to support
        communities and landscapes living with wildfire in 12 Western US states, British Columbia, and the
        Yukon Territory (see image on the right).
      </>,
      <>
        Wildfire is natural and inevitable across the western United States and Canada. Living with it
        requires a shared understanding of how systems-both ecological and human-<strong>resist harm</strong>{" "}
        and <strong>recover</strong> after fire. Together, these abilities define <strong>resilience</strong>.
      </>,
    ],
  },
  {
    id: "measurement-challenge",
    image: {
      src: burntForest,
      alt: "Burned forest with yellow wildflowers returning after wildfire",
    },
    imagePosition: "left",
    paragraphs: [
      <>
        Because wildfire resilience spans ecological, social, and infrastructural factors, it can be difficult
        to measure and compare. The index addresses this challenge by combining many types of data into a
        single, easy-to-understand measure. Grounded in the latest research, it integrates spatial data and
        expert knowledge to assess <strong>resilience</strong> across different locations.
      </>,
      <>
        The index brings together multiple indicators-organized into eight key topic areas called{" "}
        <strong>domains</strong>-to create a composite score. This approach allows diverse information to be
        translated into a shared framework, helping everyone talk about wildfire resilience in a consistent and
        meaningful way.
      </>,
    ],
  },
  {
    id: "actionable-insight-overview",
    heading: "Turning Data into Actionable Insight",
    image: {
      src: whyIndexBanffTown,
      alt: "Mountain town with snowy peaks in the background",
    },
    imagePosition: "right",
    paragraphs: [
      <>
        The index is designed to inform land management, policy planning, and community preparedness by
        supporting evidence-based decisions that enhance safety and ecosystem sustainability.
      </>,
      <>
        Rather than prescribing one solution, the index offers flexible insights that communities can adapt to
        their unique needs. It highlights where resilience can be strengthened-whether through vegetation
        management, infrastructure planning, community preparedness, or other targeted actions.
      </>,
    ],
  },
  {
    id: "open-source-collaboration",
    image: {
      src: whyIndexNewPineGrowth,
      alt: "Young conifer regenerating in a forest clearing",
    },
    imagePosition: "left",
    paragraphs: [
      <>
        Because the index and its underlying datasets are open source (free to all), it is accessible to a
        wide range of users. It can be applied at multiple scales, from local communities to regional
        landscapes, helping identify areas of higher vulnerability and prioritize effective interventions.
      </>,
      <>
        By creating a <strong>shared, data-driven understanding</strong> of wildfire <strong>resilience</strong>,
        the index supports collaboration among land managers, scientists, policymakers, and the public. This
        common foundation enables more informed, transparent decision-making-helping communities and ecosystems
        live more sustainably with wildfire while allowing fire to continue playing its natural role. The index
        provides a shared framework for action and understanding.
      </>,
    ],
  },
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
    <div id="public-website-redesign-about-page" className="mx-auto max-w-[1400px] px-6 py-16">
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
                  className={`overflow-hidden transition-[opacity,padding,border-width] duration-200 ease-in-out ${
                    isExpanded
                      ? "border-t-[3px] border-wriMoss px-2 py-6 opacity-100 md:px-4"
                      : "pointer-events-none border-t-0 px-0 py-0 opacity-0"
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

      <section id="public-website-redesign-about-copy-and-images-section" className="mt-20 space-y-14">
        <article id="public-website-redesign-about-intro-heading-block">
          <div id="public-website-redesign-about-intro-heading-divider" className="h-[4px] w-20 rounded-full bg-wriMoss" />
          <h2
            id="public-website-redesign-about-intro-heading-title"
            className="mt-6 font-Poppins text-[clamp(2.25rem,4.3vw,2.75rem)] font-semibold leading-tight text-wriForest"
          >
            About
          </h2>
          <h3
            id="public-website-redesign-about-intro-heading-subtitle"
            className="mt-2 font-Montserrat text-[clamp(1.75rem,3.7vw,2.5625rem)] font-medium leading-tight text-wriSage"
          >
            A Data-Driven View of Wildfire Resilience
          </h3>
        </article>

        {ABOUT_CONTENT_ROWS.map((contentRow, rowIndex) => {
          const isImageLeft = contentRow.imagePosition === "left";

          return (
            <article
              id={`public-website-redesign-about-content-row-${contentRow.id}`}
              key={contentRow.id}
              className="grid gap-8 md:grid-cols-2 md:items-start md:gap-10"
            >
              <div
                id={`public-website-redesign-about-content-row-image-wrap-${contentRow.id}`}
                className={`${isImageLeft ? "md:order-1" : "md:order-2"}`}
              >
                <img
                  id={`public-website-redesign-about-content-row-image-${contentRow.id}`}
                  src={contentRow.image.src}
                  alt={contentRow.image.alt}
                  className={`w-full rounded-sm ${
                    contentRow.id === "map-overview"
                      ? "mx-auto max-w-[350px] object-contain md:max-h-375px]"
                      : "aspect-square object-cover"
                  }`}
                />
              </div>

              <div
                id={`public-website-redesign-about-content-row-text-wrap-${contentRow.id}`}
                className={`${isImageLeft ? "md:order-2" : "md:order-1"}`}
              >
                {rowIndex > 0 ? (
                  <div
                    id={`public-website-redesign-about-content-row-divider-${contentRow.id}`}
                    className="mb-5 h-[4px] w-20 rounded-full bg-wriMoss"
                  />
                ) : null}
                {contentRow.heading ? (
                  <h4
                    id={`public-website-redesign-about-content-row-heading-${contentRow.id}`}
                    className="mb-5 font-Montserrat text-[clamp(1.7rem,3.5vw,2.5rem)] font-medium leading-tight text-wriSage"
                  >
                    {contentRow.heading}
                  </h4>
                ) : null}
                <div
                  id={`public-website-redesign-about-content-row-copy-${contentRow.id}`}
                  className="space-y-4 font-Poppins text-[clamp(16px,1.5vw,20px)] leading-relaxed text-wriCanopy"
                >
                  {contentRow.paragraphs.map((paragraph, paragraphIndex) => (
                    <p
                      id={`public-website-redesign-about-content-row-copy-paragraph-${contentRow.id}-${paragraphIndex + 1}`}
                      key={`${contentRow.id}-${paragraphIndex + 1}`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}

export default AboutPage;
