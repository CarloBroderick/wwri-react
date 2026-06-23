import type { ReactNode } from "react";
import sciencePubImage from "../../../assets/public-website-redesign/images/media/science-pub-building-wildfire-resilience.jpg";
import scienceByThePintImage from "../../../assets/public-website-redesign/images/media/science-pub-event.jpg";
import wildfireCommonsRecordingImage from "../../../assets/public-website-redesign/images/media/wildfire-commons-logo.png";
import launchWebinarImage from "../../../assets/public-website-redesign/images/media/launch-webinar.png";
import MossDivider from "../components/shared/MossDivider";
import SectionHeader from "../components/shared/SectionHeader";

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
  /** Extra classes for the thumbnail (e.g. the launch graphic's Smoke Fog frame). */
  imageClassName?: string;
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
    imageClassName: "border-[6px] border-wriSmokeFog",
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

function RecordingCard({ recording }: { recording: Recording }) {
  return (
    <article
      id={`public-website-redesign-outreach-recording-${recording.id}`}
      className="grid gap-6 md:grid-cols-[minmax(0,360px)_1fr] md:items-start md:gap-10"
    >
      <div
        id={`public-website-redesign-outreach-recording-${recording.id}-media`}
        className="flex flex-col gap-4"
      >
        <img
          id={`public-website-redesign-outreach-recording-${recording.id}-image`}
          src={recording.image}
          alt=""
          className={`w-full rounded-sm object-contain ${recording.imageClassName ?? ""}`}
        />
        <a
          id={`public-website-redesign-outreach-recording-${recording.id}-watch-link`}
          href={recording.recordingUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center rounded-full bg-wriMoss px-6 py-3 text-center font-Poppins text-lg uppercase leading-none tracking-wide text-wriSmokeFog transition-colors hover:bg-wriMossClicked hover:font-bold active:bg-wriMossClicked active:font-bold sm:text-xl"
        >
          Watch the Recording
        </a>
      </div>
      <div id={`public-website-redesign-outreach-recording-${recording.id}-details`}>
        <h3
          id={`public-website-redesign-outreach-recording-${recording.id}-title`}
          className="font-Montserrat text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-wriSage"
        >
          {recording.title}
        </h3>
        {recording.subtitle && (
          <p
            id={`public-website-redesign-outreach-recording-${recording.id}-subtitle`}
            className="mt-1 font-Poppins text-[clamp(1.5rem,3vw,2.25rem)] leading-tight text-wriSage/80"
          >
            {recording.subtitle}
          </p>
        )}
        {recording.italicSubtitle && (
          <p
            id={`public-website-redesign-outreach-recording-${recording.id}-italic-subtitle`}
            className="mt-1 font-Poppins text-[clamp(1.5rem,3vw,2.25rem)] italic leading-tight text-wriSage/80"
          >
            {recording.italicSubtitle}
          </p>
        )}
        <p
          id={`public-website-redesign-outreach-recording-${recording.id}-date`}
          className="mt-3 font-Poppins text-[clamp(1.5rem,3vw,2.25rem)] leading-tight text-wriForest"
        >
          {recording.date}
        </p>
        <p
          id={`public-website-redesign-outreach-recording-${recording.id}-description`}
          className="mt-6 font-Poppins text-[clamp(16px,1.6vw,22px)] leading-relaxed text-wriCanopy"
        >
          {recording.description}
        </p>
      </div>
    </article>
  );
}

/** Outreach (PDF page 19) — upcoming events, webinar recordings, in-person events. */
function OutreachPage() {
  return (
    <div id="public-website-redesign-outreach-page" className="mx-auto max-w-[1400px] px-6 py-16">
      <SectionHeader
        id="public-website-redesign-outreach-heading"
        eyebrow={<span className="font-bold">Outreach</span>}
      />
      <p
        id="public-website-redesign-outreach-blurb"
        className="mt-6 max-w-3xl font-Poppins text-[clamp(16px,1.5vw,20px)] leading-relaxed text-wriCanopy"
      >
        Discover opportunities to learn more about the index — from public talks to webinar
        trainings.
      </p>

      <section
        id="public-website-redesign-outreach-upcoming"
        className="mt-16 border-t border-wriMoss/40 pt-12"
      >
        <h2
          id="public-website-redesign-outreach-upcoming-heading"
          className="font-Montserrat text-[clamp(1.5rem,2.5vw,2rem)] font-bold uppercase tracking-wide text-wriForest"
        >
          Upcoming Events
        </h2>
        <MossDivider
          id="public-website-redesign-outreach-upcoming-divider"
          className="mt-2"
          widthClassName="w-14"
        />
        <p
          id="public-website-redesign-outreach-upcoming-empty"
          className="mx-auto mt-10 max-w-3xl text-center font-Poppins text-[clamp(18px,2vw,24px)] italic leading-relaxed text-wriCanopy"
        >
          Currently we do not have any upcoming events, check back soon!
          <br />
          Explore our recent webinar recordings below.
        </p>
      </section>

      <section
        id="public-website-redesign-outreach-recordings"
        className="mt-16 border-t border-wriMoss/40 pt-12"
      >
        <h2
          id="public-website-redesign-outreach-recordings-heading"
          className="font-Montserrat text-[clamp(1.5rem,2.5vw,2rem)] font-bold uppercase tracking-wide text-wriForest"
        >
          Webinar Recordings
        </h2>
        <MossDivider
          id="public-website-redesign-outreach-recordings-divider"
          className="mt-2"
          widthClassName="w-14"
        />
        <div
          id="public-website-redesign-outreach-recordings-list"
          className="mt-8 space-y-16"
        >
          {RECORDINGS.map((recording) => (
            <RecordingCard key={recording.id} recording={recording} />
          ))}
        </div>
      </section>

      <section
        id="public-website-redesign-outreach-community"
        className="mt-16 space-y-12 border-t border-wriMoss/40 pt-12"
      >
        <div>
          <h2
            id="public-website-redesign-outreach-community-heading"
            className="font-Montserrat text-[clamp(1.5rem,2.5vw,2rem)] font-bold uppercase tracking-wide text-wriForest"
          >
            In the Community
          </h2>
          <MossDivider
            id="public-website-redesign-outreach-community-divider"
            className="mt-2"
            widthClassName="w-14"
          />
        </div>
        {COMMUNITY_EVENTS.map((ev) => (
          <article
            key={ev.id}
            id={`public-website-redesign-outreach-event-${ev.id}`}
            className="grid gap-6 md:grid-cols-[1fr_1.4fr] md:items-start md:gap-10"
          >
            <img
              id={`public-website-redesign-outreach-event-${ev.id}-image`}
              src={ev.image}
              alt=""
              className="aspect-[4/3] w-full rounded-sm object-cover"
            />
            <div id={`public-website-redesign-outreach-event-${ev.id}-body`}>
              <h3
                id={`public-website-redesign-outreach-event-${ev.id}-title`}
                className="font-Montserrat text-2xl font-bold leading-tight text-wriSage"
              >
                {ev.title}
              </h3>
              <div
                id={`public-website-redesign-outreach-event-${ev.id}-date`}
                className="mt-1 font-Poppins text-lg italic text-wriSage/80"
              >
                {ev.date}
              </div>
              <p
                id={`public-website-redesign-outreach-event-${ev.id}-description`}
                className="mt-4 font-Poppins text-[clamp(16px,1.5vw,20px)] leading-relaxed text-wriCanopy"
              >
                {ev.description}
              </p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default OutreachPage;
