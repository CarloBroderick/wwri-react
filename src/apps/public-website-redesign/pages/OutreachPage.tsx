import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import sciencePubImage from "../../../assets/public-website-redesign/images/media/science-pub-building-wildfire-resilience.jpg";
import scienceByThePintImage from "../../../assets/public-website-redesign/images/media/science-pub-event.jpg";
import wildfireCommonsRecordingImage from "../../../assets/public-website-redesign/images/media/wildfire-commons-logo.png";
import launchWebinarImage from "../../../assets/public-website-redesign/images/media/launch-webinar.png";
import heroCommunityEvent from "../../../assets/public-website-redesign/images/media/science-pub-event.jpg";
import MossDivider from "../components/shared/MossDivider";
import { REDESIGN_ROUTES } from "../routes/routeConfig";

type Event = {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
};

type Recording = {
  id: string;
  title: string;
  /** Optional non-italic line directly under the title. */
  subtitle?: string;
  /** Optional italic line under the title (matches Canva mock). */
  italicSubtitle?: string;
  date: string;
  description: ReactNode;
  /** YouTube recording opened by the "Watch the Recording" button. */
  recordingUrl: string;
  image: string;
};

// 🎥 Webinar Recordings =====================================================
const RECORDINGS: Recording[] = [
  {
    id: "wildfire-commons-webinar",
    title: "Wildfire Commons Webinar",
    subtitle: "Measuring What Matters:",
    italicSubtitle: "Inside the Wildfire Resilience Index",
    date: "May 19, 2026",
    description: (
      <>
        In this webinar for the{" "}
        <a
          href="https://www.wildfirecommons.org/"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-wriMossMenuHighlight underline underline-offset-2 hover:text-wriForest"
        >
          Wildfire Science &amp; Technology Commons
        </a>
        , Dr. Cat Fong shared the Wildfire Resilience Index, its applications, and recent findings.
      </>
    ),
    recordingUrl: "https://youtu.be/c0Mje806aEI?si=j5q9fjfDaa6m6VmK",
    image: wildfireCommonsRecordingImage,
  },
  {
    id: "informational-webinar",
    title: "Informational Webinar",
    italicSubtitle: "Learn more about the index",
    date: "May 12, 2026",
    description:
      "Following the website launch, the index team hosted an introductory webinar exploring how the dashboard works, how it was developed, and how it can be used.",
    recordingUrl: "https://www.youtube.com/watch?v=zI3zl3r0x7s",
    image: launchWebinarImage,
  },
];

// 🌲 In the Community (in-person events) =====================================
const COMMUNITY_EVENTS: Event[] = [
  {
    id: "science-by-the-pint",
    title: "Science By the Pint",
    date: "March 11, 2026",
    description:
      "Dr. Cat Fong presented the Wildfire Resilience Index at Draughtsmen Aleworks in Goleta, sharing how the tool helps communities better understand and plan for wildfire resilience. Science by the Pint is a collaboration with the UCSB Undergraduate Research Symposium Committee highlighting cutting-edge UCSB research.",
    image: scienceByThePintImage,
  },
  {
    id: "science-pub-building-wildfire-resilience",
    title: "Science Pub: Building Wildfire Resilience",
    date: "December 8, 2025",
    description:
      "Dr. Cat Fong showcased the Wildfire Resilience Index at Dargan’s Pub in Santa Barbara, CA. She introduced the index and discussed how data-driven tools can support safer, more resilient communities in Santa Barbara County and beyond. The Santa Barbara Museum of Natural History Science Pub series consists of free science talks held on the second Monday of every month.",
    image: sciencePubImage,
  },
];

// ▶️ Small play glyph reused on every webinar thumbnail.
function PlayBadge({ id }: { id?: string }) {
  return (
    <span
      id={id}
      aria-hidden
      className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-wriForest shadow-lg ring-1 ring-black/5 backdrop-blur transition-transform duration-300 group-hover:scale-110"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-7 w-7" aria-hidden>
        <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.5-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14Z" />
      </svg>
    </span>
  );
}

// 🏷️ Reusable section intro (eyebrow + Poppins headline + moss rule) matching
// the Media landing and About pages so Outreach feels part of the same family.
function SectionIntro({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header id={id}>
      <p className="font-Montserrat text-xs font-semibold uppercase tracking-[0.3em] text-wriSage">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-Poppins text-[clamp(1.9rem,3.5vw,2.5rem)] font-bold leading-tight text-wriForest">
        {title}
      </h2>
      <MossDivider className="my-5" widthClassName="w-16" />
      {children && (
        <p className="max-w-5xl font-Poppins text-[clamp(1rem,1.5vw,1.15rem)] leading-relaxed text-wriCanopy/80">
          {children}
        </p>
      )}
    </header>
  );
}

function RecordingCard({ recording }: { recording: Recording }) {
  return (
    <article
      id={`public-website-redesign-outreach-recording-${recording.id}`}
      className="group grid overflow-hidden rounded-2xl border border-wriForest/15 bg-white shadow-sm ring-1 ring-black/5 transition duration-300 ease-out hover:-translate-y-1 hover:border-wriForest/30 hover:shadow-xl sm:grid-cols-[minmax(0,340px)_1fr]"
    >
      {/* ▶️ Thumbnail links straight to the recording with a play overlay. */}
      <a
        id={`public-website-redesign-outreach-recording-${recording.id}-media`}
        href={recording.recordingUrl}
        target="_blank"
        rel="noreferrer"
        className="relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br from-wriForest/10 via-wriSmokeFog to-wriMoss/15 sm:aspect-auto sm:min-h-[210px]"
      >
        <img
          id={`public-website-redesign-outreach-recording-${recording.id}-image`}
          src={recording.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-contain p-6 transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <span className="absolute inset-0 flex items-center justify-center">
          <PlayBadge id={`public-website-redesign-outreach-recording-${recording.id}-play`} />
        </span>
      </a>

      {/* 📝 Details */}
      <div
        id={`public-website-redesign-outreach-recording-${recording.id}-details`}
        className="flex flex-1 flex-col p-6 md:p-8"
      >
        <span
          id={`public-website-redesign-outreach-recording-${recording.id}-date`}
          className="inline-flex w-fit items-center rounded-full bg-wriForest/10 px-3 py-1 font-Montserrat text-xs font-bold uppercase tracking-[0.12em] text-wriForest"
        >
          {recording.date}
        </span>
        <h3
          id={`public-website-redesign-outreach-recording-${recording.id}-title`}
          className="mt-4 font-Poppins text-[clamp(1.3rem,2.2vw,1.7rem)] font-bold leading-tight text-wriForest"
        >
          {recording.title}
        </h3>
        {recording.subtitle && (
          <p
            id={`public-website-redesign-outreach-recording-${recording.id}-subtitle`}
            className="mt-1 font-Poppins text-[clamp(1.1rem,2vw,1.4rem)] leading-tight text-wriSage"
          >
            {recording.subtitle}
          </p>
        )}
        {recording.italicSubtitle && (
          <p
            id={`public-website-redesign-outreach-recording-${recording.id}-italic-subtitle`}
            className="mt-1 font-Poppins text-[clamp(1.1rem,2vw,1.4rem)] italic leading-tight text-wriSage"
          >
            {recording.italicSubtitle}
          </p>
        )}
        <p
          id={`public-website-redesign-outreach-recording-${recording.id}-description`}
          className="mt-4 font-Poppins text-[clamp(15px,1.4vw,18px)] leading-relaxed text-wriCanopy/80"
        >
          {recording.description}
        </p>
        <a
          id={`public-website-redesign-outreach-recording-${recording.id}-watch-link`}
          href={recording.recordingUrl}
          target="_blank"
          rel="noreferrer"
          className="group/btn mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-wriMoss px-6 py-3 font-Montserrat text-sm font-bold uppercase tracking-[0.12em] text-wriCanopy transition-colors hover:bg-wriMossClicked"
        >
          Watch the recording
          <span
            aria-hidden
            className="text-base leading-none transition-transform duration-300 group-hover/btn:translate-x-1"
          >
            →
          </span>
        </a>
      </div>
    </article>
  );
}

/** Outreach (PDF page 19) — upcoming events, webinar recordings, in-person events. */
function OutreachPage() {
  return (
    <div
      id="public-website-redesign-outreach-page"
      className="mx-auto max-w-[1400px] px-6 py-12 md:py-16"
    >
      {/* ===== Hero ===================================================== */}
      <section
        id="public-website-redesign-outreach-hero"
        className="relative overflow-hidden rounded-[28px] bg-wriCanopy shadow-[0_30px_80px_-40px_rgba(31,42,35,0.6)]"
      >
        <img
          id="public-website-redesign-outreach-hero-image"
          src={heroCommunityEvent}
          alt="A packed community talk where Dr. Cat Fong presents the Wildfire Resilience Index"
          className="absolute inset-0 h-full w-full object-cover object-center"
          draggable={false}
        />
        <div
          id="public-website-redesign-outreach-hero-scrim"
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-wriCanopy/95 via-wriCanopy/70 to-wriForest/20"
        />
        <div
          id="public-website-redesign-outreach-hero-content"
          className="relative px-7 py-16 md:px-14 md:py-24 lg:py-28"
        >
          <div className="max-w-2xl">
            <p
              id="public-website-redesign-outreach-hero-eyebrow"
              className="font-Montserrat text-xs font-semibold uppercase tracking-[0.3em] text-wriMoss"
            >
              Media — Outreach
            </p>
            <h1
              id="public-website-redesign-outreach-hero-title"
              className="mt-4 font-Poppins text-[clamp(2.5rem,6vw,4.25rem)] font-bold leading-[1.02] text-wriSmokeFog"
            >
              Learn the Index, together
            </h1>
            <MossDivider
              id="public-website-redesign-outreach-hero-divider"
              className="my-6"
              widthClassName="w-20"
            />
            <p
              id="public-website-redesign-outreach-hero-body"
              className="font-Poppins text-[clamp(16px,1.6vw,20px)] leading-relaxed text-wriSmokeFog/90"
            >
              From public talks at the local pub to live webinar trainings, discover every way to dig
              into the <strong className="font-semibold text-white">Wildfire Resilience Index</strong>{" "}
              with the team behind it.
            </p>
            <div
              id="public-website-redesign-outreach-hero-ctas"
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <button
                type="button"
                id="public-website-redesign-outreach-hero-cta"
                onClick={() =>
                  document
                    .getElementById("public-website-redesign-outreach-recordings")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="group inline-flex items-center gap-2 rounded-full bg-wriMoss px-7 py-3 font-Montserrat text-sm font-semibold uppercase tracking-[0.12em] text-wriCanopy transition-colors hover:bg-wriMossClicked"
              >
                Watch the webinars
                <span
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-y-0.5"
                >
                  ↓
                </span>
              </button>
              <Link
                id="public-website-redesign-outreach-hero-cta-secondary"
                to={REDESIGN_ROUTES.exploreIndex}
                className="group inline-flex items-center gap-2 rounded-full border-2 border-wriSmokeFog/40 px-7 py-3 font-Montserrat text-sm font-semibold uppercase tracking-[0.12em] text-wriSmokeFog transition-colors hover:border-wriMoss hover:text-wriMoss"
              >
                Explore the map
                <span
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Upcoming Events ========================================= */}
      <section id="public-website-redesign-outreach-upcoming" className="mt-16 md:mt-24">
        <SectionIntro
          id="public-website-redesign-outreach-upcoming-intro"
          eyebrow="On the calendar"
          title="Upcoming events"
        />
        <div
          id="public-website-redesign-outreach-upcoming-empty"
          className="mt-8 flex flex-col items-center justify-center rounded-2xl border border-dashed border-wriMoss/50 bg-wriSmokeFog/60 px-7 py-12 text-center"
        >
          <span
            aria-hidden
            className="flex h-14 w-14 items-center justify-center rounded-full bg-wriForest/10 text-wriForest"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-7 w-7"
              aria-hidden
            >
              <rect x="3.5" y="5" width="17" height="16" rx="2" />
              <path d="M3.5 9.5h17M8 3v4M16 3v4" strokeLinecap="round" />
            </svg>
          </span>
          <p className="mt-5 max-w-xl font-Poppins text-[clamp(17px,1.8vw,21px)] font-semibold leading-relaxed text-wriForest">
            No upcoming events right now — check back soon!
          </p>
          <p className="mt-2 max-w-xl font-Poppins text-[clamp(15px,1.4vw,18px)] leading-relaxed text-wriCanopy/70">
            In the meantime, explore our recent webinar recordings below.
          </p>
        </div>
      </section>

      {/* ===== Webinar Recordings ====================================== */}
      <section
        id="public-website-redesign-outreach-recordings"
        className="mt-16 scroll-mt-24 md:mt-24"
      >
        <SectionIntro
          id="public-website-redesign-outreach-recordings-intro"
          eyebrow="Watch on demand"
          title="Webinar recordings"
        >
          Missed a live session? Catch up on full recordings of our index trainings and talks.
        </SectionIntro>
        <div
          id="public-website-redesign-outreach-recordings-list"
          className="mt-10 space-y-6"
        >
          {RECORDINGS.map((recording) => (
            <RecordingCard key={recording.id} recording={recording} />
          ))}
        </div>
      </section>

      {/* ===== In the Community ======================================== */}
      <section id="public-website-redesign-outreach-community" className="mt-16 md:mt-24">
        <SectionIntro
          id="public-website-redesign-outreach-community-intro"
          eyebrow="Out in the world"
          title="In the community"
        >
          Where we have brought the index to neighbors, pubs, and gatherings across the region.
        </SectionIntro>
        <div
          id="public-website-redesign-outreach-community-grid"
          className="mt-10 grid gap-6 md:grid-cols-2"
        >
          {COMMUNITY_EVENTS.map((ev) => (
            <article
              key={ev.id}
              id={`public-website-redesign-outreach-event-${ev.id}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-wriForest/15 bg-white shadow-sm ring-1 ring-black/5 transition duration-300 ease-out hover:-translate-y-1 hover:border-wriForest/30 hover:shadow-xl"
            >
              <div
                id={`public-website-redesign-outreach-event-${ev.id}-media`}
                className="relative aspect-[16/9] w-full overflow-hidden bg-wriSmokeFog"
              >
                <img
                  id={`public-website-redesign-outreach-event-${ev.id}-image`}
                  src={ev.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              <div
                id={`public-website-redesign-outreach-event-${ev.id}-body`}
                className="flex flex-1 flex-col p-5 md:p-6"
              >
                <span
                  id={`public-website-redesign-outreach-event-${ev.id}-date`}
                  className="inline-flex w-fit items-center rounded-full bg-wriForest/10 px-3 py-1 font-Montserrat text-xs font-bold uppercase tracking-[0.12em] text-wriForest"
                >
                  {ev.date}
                </span>
                <h3
                  id={`public-website-redesign-outreach-event-${ev.id}-title`}
                  className="mt-3 font-Poppins text-[clamp(1.15rem,1.9vw,1.45rem)] font-bold leading-tight text-wriForest"
                >
                  {ev.title}
                </h3>
                <p
                  id={`public-website-redesign-outreach-event-${ev.id}-description`}
                  className="mt-3 font-Poppins text-[clamp(15px,1.4vw,18px)] leading-relaxed text-wriCanopy/80"
                >
                  {ev.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===== Keep exploring CTA ====================================== */}
      <section id="public-website-redesign-outreach-cta-section" className="mt-16 md:mt-24">
        <div
          id="public-website-redesign-outreach-cta"
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-wriForest to-wriMossMenuHighlight px-7 py-9 sm:px-10 sm:py-11"
        >
          <span
            id="public-website-redesign-outreach-cta-eyebrow"
            className="inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 font-Montserrat text-xs font-bold uppercase tracking-[0.14em] text-white"
          >
            Keep Exploring
          </span>
          <div
            id="public-website-redesign-outreach-cta-body"
            className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          >
            <div className="max-w-2xl">
              <h2
                id="public-website-redesign-outreach-cta-title"
                className="font-Montserrat text-[clamp(1.5rem,3vw,2.125rem)] font-semibold leading-tight text-white"
              >
                See how your community scores
              </h2>
              <p
                id="public-website-redesign-outreach-cta-copy"
                className="mt-3 font-Poppins text-[clamp(15px,1.1vw,17px)] leading-relaxed text-white/85"
              >
                The Index is free and open. Jump into the interactive map to explore resilience
                across states, counties, and neighborhoods.
              </p>
            </div>
            <Link
              id="public-website-redesign-outreach-cta-button"
              to={REDESIGN_ROUTES.exploreIndex}
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 font-Montserrat text-sm font-bold uppercase tracking-[0.08em] text-wriForest shadow-sm transition-all hover:bg-wriSmokeFog hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-wriForest"
            >
              Explore the Index
              <span
                aria-hidden
                className="text-base leading-none transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OutreachPage;
