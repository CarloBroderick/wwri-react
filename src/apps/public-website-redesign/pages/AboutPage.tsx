import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import regionMap from "../../../assets/public-website-redesign/icons/Location Map for WRI, 1 What is the WRI (1).png";
import burntForest from "../../../assets/public-website-redesign/images/about/burnt-forest.jpg";
import whyIndexBanffTown from "../../../assets/public-website-redesign/images/about/why-is-the-index-useful-banf-town.png";
import whyIndexNewPineGrowth from "../../../assets/public-website-redesign/images/about/why-is-the-index-useful-new-pine-growth.png";
import overviewWhatIsIt from "../../../assets/public-website-redesign/videos/overview-1-what-is-it.mp4";
import overviewHowWeBuiltIt from "../../../assets/public-website-redesign/videos/overview-2-how-we-built-it.mp4";
import overviewHowToUseIt from "../../../assets/public-website-redesign/videos/overview-3-how-to-use-it.mp4";
import overviewInterpretScore from "../../../assets/public-website-redesign/videos/overview-4-interpret-your-score.mp4";

const ABOUT_VIDEO_ITEMS = [
  {
    id: "what-is-the-wri",
    label: "What is the Wildfire Resilience Index?",
    src: overviewWhatIsIt,
    transcript:
      "In the American West, fire is a natural and necessary part of the landscape. Many ecosystems evolved with periodic burning. Yet when fire reaches our communities, the consequences can be severe. The Wildfire Resilience Index, or WRI, is a free tool that measures resilience across eight socio-ecological domains. Explore your state, county, or neighborhood to see how resilience varies across the West. Understand wildfire resilience. Explore the map.",
  },
  {
    id: "how-was-index-built",
    label: "How was the index built?",
    src: overviewHowWeBuiltIt,
    transcript:
      "The Index combines 8 socio-ecological domains into a single framework to describe wildfire resilience. Each domain includes indicators that relate to the ability to resist wildfire impacts and recover afterward. The Index includes close to 100 indicators that are publicly available on our website to create a holistic assessment of wildfire resilience. Built on transparent data. See how your area scores.",
  },
  {
    id: "how-do-i-use-index",
    label: "How do I use the index?",
    src: overviewHowToUseIt,
    transcript:
      "The Index isn't just numbers; it's a tool communities can use to plan and prepare. Scores are available at the state, county, and census tract levels so agencies, NGOs, and community organizers can plan and prioritize. Communities can better understand strengths as well as areas for improvement. From statewide strategy to neighborhood planning, see what your community can do across eight domains. Prioritize action. What can you do?",
  },
  {
    id: "how-do-i-interpret-score",
    label: "How do I interpret my score?",
    src: overviewInterpretScore,
    transcript:
      "Your Index score is a starting point — not a grade, not a ranking. Scores are out of 100 and show how prepared your area is and where there's room to grow. Every community has strengths. Every community has opportunities to improve. The Index can be used to create regional profiles for planning and prioritization. The Index is not prescriptive. It can provide insight so communities can determine what works best for them. Know your score. Build resilience.",
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
        requires a shared understanding of how systems—both ecological and human—<strong>resist harm</strong>{" "}
        and <strong>recover</strong> after fire. Together, these abilities define <strong>resilience</strong>.
      </>,
    ],
  },
  {
    id: "measurement-challenge",
    heading: "Measuring What's Hard to Measure",
    image: {
      src: burntForest,
      alt: "Burned forest with yellow wildflowers returning after wildfire",
    },
    imagePosition: "left",
    paragraphs: [
      <>
        Because wildfire <strong>resilience</strong> spans ecological, social, and infrastructural factors, it
        can be difficult to measure and compare. The index addresses this challenge by combining many types of
        data into a single, easy-to-understand measure. Grounded in the latest research, it integrates spatial
        data and expert knowledge to assess <strong>resilience</strong> across different locations.
      </>,
      <>
        The index brings together multiple indicators—organized into eight key topic areas called{" "}
        <strong>domains</strong>—to create a composite score. This approach allows diverse information to be
        translated into a shared framework, helping everyone talk about wildfire <strong>resilience</strong> in
        a consistent and meaningful way.
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
        their unique needs. It highlights where <strong>resilience</strong> can be strengthened—whether through
        vegetation management, infrastructure planning, community preparedness, or other targeted actions.
      </>,
    ],
  },
  {
    id: "open-source-collaboration",
    heading: "Open Data for Shared Action",
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
        common foundation enables more informed, transparent decision-making—helping communities and ecosystems
        live more sustainably with wildfire while allowing fire to continue playing its natural role. The index
        provides a shared framework for action and understanding.
      </>,
    ],
  },
] as const;

function AboutPage() {
  // The four "Getting Started" clips are a guided sequence, so the page always
  // has exactly one active step (no collapsed/empty state like the old accordion).
  const [activeVideoId, setActiveVideoId] = useState<(typeof ABOUT_VIDEO_ITEMS)[number]["id"]>(
    ABOUT_VIDEO_ITEMS[0].id,
  );
  const [isPlaying, setIsPlaying] = useState(false);
  // Selecting a step (intro dots, left-rail nav, or Previous/Next) makes the
  // freshly-mounted <video> start playing on its own. It stays false on first
  // load so the page doesn't autoplay before any user interaction.
  const [autoPlayOnMount, setAutoPlayOnMount] = useState(false);
  const activeVideoRef = useRef<HTMLVideoElement | null>(null);
  const videoPanelRef = useRef<HTMLDivElement | null>(null);

  const activeIndex = useMemo(
    () => ABOUT_VIDEO_ITEMS.findIndex((item) => item.id === activeVideoId),
    [activeVideoId],
  );
  const activeVideo = ABOUT_VIDEO_ITEMS[activeIndex];

  const selectVideo = (id: (typeof ABOUT_VIDEO_ITEMS)[number]["id"]) => {
    setActiveVideoId(id);
    setIsPlaying(false);
    // Clicking a step (or Previous/Next) should start playback automatically.
    setAutoPlayOnMount(true);
  };

  // Used by the intro step dots: jump to a step, scroll the player into view,
  // and let it autoplay. If the browser blocks autoplay the overlay play button
  // stays available because isPlaying remains false until onPlay fires.
  const playStep = (id: (typeof ABOUT_VIDEO_ITEMS)[number]["id"]) => {
    setActiveVideoId(id);
    setIsPlaying(false);
    setAutoPlayOnMount(true);
    videoPanelRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const goToAdjacentVideo = (direction: "previous" | "next") => {
    const nextVideo = ABOUT_VIDEO_ITEMS[activeIndex + (direction === "previous" ? -1 : 1)];
    if (nextVideo) selectVideo(nextVideo.id);
  };

  return (
    <div id="public-website-redesign-about-page" className="mx-auto max-w-[1400px] px-6 py-16">
      {/* Intro is wrapped in a soft "hero" band so the lead line no longer floats:
          an eyebrow badge frames it as a series and a step-dot cue points down
          into the numbered stepper/video that immediately follows. */}
      <section
        id="public-website-redesign-about-getting-started-section"
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-wriSmokeFog via-wriSmokeFog/60 to-white px-7 py-9 ring-1 ring-wriMoss/20 sm:px-10 sm:py-11"
      >
        <span
          id="public-website-redesign-about-getting-started-eyebrow"
          className="inline-flex items-center gap-2 rounded-full bg-wriForest/10 px-4 py-1.5 font-Montserrat text-xs font-bold uppercase tracking-[0.14em] text-wriForest"
        >
          <span
            aria-hidden
            className="flex h-5 w-5 items-center justify-center rounded-full bg-wriForest text-[11px] font-bold text-white"
          >
            4
          </span>
          Part Video Series
        </span>
        <h1
          id="public-website-redesign-about-getting-started-title"
          className="mt-5 font-Poppins text-[clamp(2.25rem,4.3vw,2.75rem)] font-bold leading-tight text-wriForest"
        >
          Getting Started
        </h1>
        <div
          id="public-website-redesign-about-getting-started-divider"
          className="mt-3 h-[4px] w-24 rounded-full bg-wriMoss"
        />
        <p
          id="public-website-redesign-about-getting-started-copy"
          className="mt-5 max-w-3xl font-Poppins text-[clamp(1.05rem,2.1vw,1.25rem)] font-normal leading-relaxed text-wriCanopy"
        >
          Follow this four-step series to discover and understand your community's score.
        </p>
        <div
          id="public-website-redesign-about-getting-started-cue"
          className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3"
        >
          <div
            id="public-website-redesign-about-getting-started-step-dots"
            className="flex items-center gap-2"
          >
            {ABOUT_VIDEO_ITEMS.map((videoItem, index) => {
              const isActive = videoItem.id === activeVideoId;

              return (
                <span key={videoItem.id} className="flex items-center gap-2">
                  <button
                    id={`public-website-redesign-about-getting-started-step-dot-${videoItem.id}`}
                    type="button"
                    onClick={() => playStep(videoItem.id)}
                    aria-label={`Play step ${index + 1}: ${videoItem.label}`}
                    className={`flex h-7 w-7 items-center justify-center rounded-full font-Montserrat text-sm font-bold transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-wriMoss focus-visible:ring-offset-2 ${
                      isActive
                        ? "bg-wriForest text-white"
                        : "bg-white text-wriForest ring-1 ring-wriMoss/40 hover:ring-wriMoss"
                    }`}
                  >
                    {index + 1}
                  </button>
                  {index < ABOUT_VIDEO_ITEMS.length - 1 ? (
                    <span aria-hidden className="h-[2px] w-5 rounded-full bg-wriMoss/40" />
                  ) : null}
                </span>
              );
            })}
          </div>
          <button
            id="public-website-redesign-about-getting-started-cue-text"
            type="button"
            onClick={() => playStep(ABOUT_VIDEO_ITEMS[0].id)}
            aria-label={`Play step 1: ${ABOUT_VIDEO_ITEMS[0].label}`}
            className="inline-flex items-center gap-1.5 font-Montserrat text-sm font-semibold uppercase tracking-[0.1em] text-wriCanopy/70 transition-colors hover:text-wriForest focus:outline-none focus-visible:ring-2 focus-visible:ring-wriMoss focus-visible:ring-offset-2"
          >
            Start with step one below
            <span aria-hidden className="text-base leading-none">
              &darr;
            </span>
          </button>
        </div>
      </section>

      {/* Stepper: numbered steps on the left, one square video on the right.
          Square player matches the 1:1 source footage so there are no black bars. */}
      <section
        id="public-website-redesign-about-video-stepper-section"
        className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,500px)_minmax(0,1fr)] lg:gap-12"
      >
        <nav
          id="public-website-redesign-about-video-step-list"
          aria-label="Getting started video steps"
          className="flex h-full flex-col justify-start gap-2 lg:mt-8"
        >
          {ABOUT_VIDEO_ITEMS.map((videoItem, index) => {
            const isActive = videoItem.id === activeVideoId;

            return (
              <button
                key={videoItem.id}
                id={`public-website-redesign-about-video-step-${videoItem.id}`}
                type="button"
                aria-current={isActive ? "step" : undefined}
                onClick={() => selectVideo(videoItem.id)}
                className={`group flex items-center gap-5 rounded-2xl px-6 py-5 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-wriMoss focus-visible:ring-offset-2 ${
                  isActive ? "bg-wriSmokeFog" : "hover:bg-wriSmokeFog/60"
                }`}
              >
                <span
                  id={`public-website-redesign-about-video-step-number-${videoItem.id}`}
                  aria-hidden
                  className={`flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-full font-Montserrat text-4xl font-bold transition-colors ${
                    isActive
                      ? "bg-wriForest text-white"
                      : "bg-white text-wriForest ring-1 ring-wriMoss/50 group-hover:ring-wriMoss"
                  }`}
                >
                  {index + 1}
                </span>
                <span
                  id={`public-website-redesign-about-video-step-label-${videoItem.id}`}
                  className={`font-Montserrat text-[clamp(1.5rem,1.9vw,1.8rem)] font-semibold leading-snug transition-colors ${
                    isActive ? "text-wriForest" : "text-wriCanopy/70 group-hover:text-wriCanopy"
                  }`}
                >
                  {videoItem.label}
                </span>
              </button>
            );
          })}
        </nav>

        <div
          id="public-website-redesign-about-video-panel"
          ref={videoPanelRef}
          className="mx-auto w-full max-w-[560px] scroll-mt-28"
        >
          <div
            id="public-website-redesign-about-video-frame"
            className="group relative aspect-square w-full overflow-hidden rounded-2xl bg-wriCanopy shadow-md ring-1 ring-black/5"
          >
            <video
              key={activeVideo.id}
              id="public-website-redesign-about-video-player"
              ref={activeVideoRef}
              src={activeVideo.src}
              controls
              playsInline
              autoPlay={autoPlayOnMount}
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              className="h-full w-full object-cover"
            />
            {!isPlaying ? (
              <button
                id="public-website-redesign-about-video-big-play-button"
                type="button"
                onClick={() => {
                  void activeVideoRef.current?.play();
                  setIsPlaying(true);
                }}
                aria-label={`Play: ${activeVideo.label}`}
                className="absolute inset-0 flex items-center justify-center bg-wriCanopy/10 transition-colors hover:bg-wriCanopy/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
              >
                <span
                  id="public-website-redesign-about-video-big-play-button-circle"
                  className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-white/95 text-wriForest shadow-lg transition-transform group-hover:scale-105"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-7 w-7">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
            ) : null}
          </div>

          <div
            id="public-website-redesign-about-video-controls"
            className="mt-5 flex items-center justify-between gap-4"
          >
            <button
              id="public-website-redesign-about-video-prev"
              type="button"
              onClick={() => goToAdjacentVideo("previous")}
              disabled={activeIndex === 0}
              className="inline-flex items-center gap-2 font-Montserrat text-sm font-bold uppercase tracking-[0.08em] text-wriForest transition-opacity hover:text-wriMossMenuHighlight disabled:pointer-events-none disabled:opacity-0"
            >
              <span aria-hidden className="text-[22px] leading-none">
                &larr;
              </span>
              Previous
            </button>

            <span
              id="public-website-redesign-about-video-step-indicator"
              className="font-Montserrat text-sm font-semibold uppercase tracking-[0.12em] text-wriCanopy/60"
            >
              Step {activeIndex + 1} of {ABOUT_VIDEO_ITEMS.length}
            </span>

            <button
              id="public-website-redesign-about-video-next"
              type="button"
              onClick={() => goToAdjacentVideo("next")}
              disabled={activeIndex === ABOUT_VIDEO_ITEMS.length - 1}
              className="inline-flex items-center gap-2 font-Montserrat text-sm font-bold uppercase tracking-[0.08em] text-wriForest transition-opacity hover:text-wriMossMenuHighlight disabled:pointer-events-none disabled:opacity-0"
            >
              Next
              <span aria-hidden className="text-[22px] leading-none">
                &rarr;
              </span>
            </button>
          </div>

          <details
            id="public-website-redesign-about-video-transcript"
            className="mt-5 border-t border-wriForest/15 pt-4"
          >
            <summary className="cursor-pointer font-Montserrat text-sm font-bold uppercase tracking-[0.08em] text-wriForest">
              Transcript
            </summary>
            <p className="mt-3 font-Poppins text-[15px] leading-relaxed text-wriCanopy">
              {activeVideo.transcript}
            </p>
          </details>
        </div>
      </section>

      <section id="public-website-redesign-about-copy-and-images-section" className="mt-20 space-y-14">
        <article id="public-website-redesign-about-intro-heading-block">
          <div id="public-website-redesign-about-intro-heading-divider" className="h-[4px] w-20 rounded-full bg-wriMoss" />
          <h3
            id="public-website-redesign-about-intro-heading-subtitle"
            className="mt-6 font-Montserrat text-[clamp(1.75rem,3.7vw,2.5625rem)] font-medium leading-tight text-wriSage"
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
                      ? "mx-auto max-w-[350px] object-contain md:max-h-[375px]"
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
