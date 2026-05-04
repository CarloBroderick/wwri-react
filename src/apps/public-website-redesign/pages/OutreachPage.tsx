import sciencePubImage from "../../../assets/public-website-redesign/images/media/science-pub-building-wildfire-resilience.jpg";
import scienceByThePintImage from "../../../assets/public-website-redesign/images/media/science-pub-event.jpg";
import wriFlameImage from "../../../assets/public-website-redesign/icons/wri-logo-flame-only.png";
import wildfireCommonsLogoImage from "../../../../data/incoming/wri-drive-2026-04-23/Media/Wildfire Commons Logo, Upcoming Events_Index Education.png";
import MossDivider from "../components/shared/MossDivider";
import SectionHeader from "../components/shared/SectionHeader";

type Event = {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
};

type UpcomingEvent = {
  id: string;
  title: string;
  subtitle?: string;
  secondarySubtitle?: string;
  date: string;
  time: string;
  description: string;
  registrationUrl: string;
  logoVariant: "wri" | "commons";
};

const INDEX_WEBINAR_DESCRIPTION =
  "Get your questions about the Wildfire Resilience Index answered! In this informational webinar, the index team will introduce you to the index, show you how to use it, and help you understand how to interpret your score. There will be time for Q & A afterwards.";

const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    id: "informational-webinar-may-12",
    title: "Informational Webinar",
    subtitle: "Learn more about the index",
    date: "Tuesday, May 12 2026",
    time: "1:00 - 2:00 PM PDT",
    description: INDEX_WEBINAR_DESCRIPTION,
    registrationUrl: "https://ucsb.zoom.us/s/85763054615",
    logoVariant: "wri",
  },
  {
    id: "wildfire-commons-webinar-may-19",
    title: "Wildfire Commons Webinar",
    subtitle: "Measuring What Matters:",
    secondarySubtitle: "Inside the Wildfire Resilience Index",
    date: "Tuesday, May 19 2026",
    time: "12:00 - 1:00 PM PDT",
    description:
      "As wildfires grow more frequent, severe, and costly across North America, the need for clear, data-driven tools to guide land management and policy decisions has never been greater. The Wildfire Resilience Index (WRI) - launching in 2026 - will be the open-access, holistic tool designed to measure wildfire resilience. In this webinar, the WRI team will share their most recent findings and provide an overview for how data experts and modelers could incorporate their findings.",
    registrationUrl: "https://ucsd.zoom.us/meeting/register/kL0lRwzJTyCpanCasgBDKQ#/",
    logoVariant: "commons",
  },
];

const PREVIOUS_EVENTS: Event[] = [
  {
    id: "science-by-the-pint",
    title: "Science By the Pint",
    date: "March 11, 2026",
    description:
      "NCEAS Research Associate Cat Fong presented her work on the Wildfire Resilience Index at Draughtsmen Aleworks in Goleta, CA. She gave the audience background on how and why the Index was built and how it can be used. Science by the Pint is a collaboration with the UCSB Undergraduate Research Symposium Committee highlighting cutting-edge UCSB research.",
    image: scienceByThePintImage,
  },
  {
    id: "science-pub-building-wildfire-resilience",
    title: "Science Pub: Building Wildfire Resilience",
    date: "December 8, 2025",
    description:
      "NCEAS Research Associate Cat Fong showcased the Wildfire Resilience Index at Dargan’s Pub in Santa Barbara, CA — walking the audience through its data-driven approach and how it helps local leaders plan smarter, empowers communities living with fire, and supports a safer, more resilient future for Santa Barbara County and beyond. The Santa Barbara Museum of Natural History Science Pub series consists of free science talks held on the second Monday of every month.",
    image: sciencePubImage,
  },
];

function EventLogo({ event }: { event: UpcomingEvent }) {
  if (event.logoVariant === "commons") {
    return (
      <div
        id={`public-website-redesign-outreach-upcoming-${event.id}-commons-logo`}
        className="flex aspect-square w-full max-w-[220px] items-center justify-center"
      >
        <img
          id={`public-website-redesign-outreach-upcoming-${event.id}-commons-logo-image`}
          src={wildfireCommonsLogoImage}
          alt="Wildfire Commons"
          className="h-full w-full object-contain"
        />
      </div>
    );
  }

  return (
    <div
      id={`public-website-redesign-outreach-upcoming-${event.id}-wri-logo`}
      className="flex w-full max-w-[260px] items-center gap-4"
      aria-label="Wildfire Resilience Index"
    >
      <img
        id={`public-website-redesign-outreach-upcoming-${event.id}-wri-logo-flame`}
        src={wriFlameImage}
        alt=""
        className="h-32 w-28 object-contain"
      />
      <span
        id={`public-website-redesign-outreach-upcoming-${event.id}-wri-logo-text`}
        className="font-Montserrat text-2xl font-bold uppercase leading-tight text-wriForest"
      >
        Wildfire
        <br />
        Resilience
        <br />
        Index
      </span>
    </div>
  );
}

function UpcomingEventCard({ event }: { event: UpcomingEvent }) {
  return (
    <article
      id={`public-website-redesign-outreach-upcoming-${event.id}`}
      className="rounded-sm border-[3px] border-wriMoss/20 bg-wriSmokeFog px-6 py-8 shadow-sm md:px-8"
    >
      <div
        id={`public-website-redesign-outreach-upcoming-${event.id}-content-grid`}
        className="grid gap-8 lg:grid-cols-[260px_1fr] lg:items-center"
      >
        <div
          id={`public-website-redesign-outreach-upcoming-${event.id}-logo-column`}
          className="flex justify-center lg:justify-start"
        >
          <EventLogo event={event} />
        </div>
        <div id={`public-website-redesign-outreach-upcoming-${event.id}-details`}>
          <div
            id={`public-website-redesign-outreach-upcoming-${event.id}-headline-row`}
            className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center"
          >
            <div id={`public-website-redesign-outreach-upcoming-${event.id}-headline-copy`}>
              <h3
                id={`public-website-redesign-outreach-upcoming-${event.id}-title`}
                className="font-Montserrat text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-wriSage"
              >
                {event.title}
              </h3>
              {event.subtitle && (
                <p
                  id={`public-website-redesign-outreach-upcoming-${event.id}-subtitle`}
                  className="mt-1 font-Poppins text-[clamp(1.5rem,3vw,2.25rem)] leading-tight text-wriSage/80"
                >
                  {event.subtitle}
                </p>
              )}
              {event.secondarySubtitle && (
                <p
                  id={`public-website-redesign-outreach-upcoming-${event.id}-secondary-subtitle`}
                  className="mt-1 font-Poppins text-[clamp(1.5rem,3vw,2.25rem)] italic leading-tight text-wriSage/80"
                >
                  {event.secondarySubtitle}
                </p>
              )}
            </div>
            <a
              id={`public-website-redesign-outreach-upcoming-${event.id}-register-link`}
              href={event.registrationUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-w-48 items-center justify-center rounded-full bg-wriMoss px-10 py-3 font-Poppins text-xl uppercase leading-none tracking-wide text-wriSmokeFog transition-colors hover:bg-wriMossClicked hover:font-bold active:bg-wriMossClicked active:font-bold"
            >
              Register
            </a>
          </div>
          <div
            id={`public-website-redesign-outreach-upcoming-${event.id}-schedule`}
            className="mt-5 font-Poppins text-[clamp(1.5rem,3vw,2.25rem)] leading-tight text-wriForest"
          >
            <p id={`public-website-redesign-outreach-upcoming-${event.id}-date`}>
              {event.date}
            </p>
            <p id={`public-website-redesign-outreach-upcoming-${event.id}-time`}>
              {event.time}
            </p>
          </div>
          <p
            id={`public-website-redesign-outreach-upcoming-${event.id}-description`}
            className="mt-8 font-Poppins text-[clamp(16px,1.6vw,22px)] leading-relaxed text-wriCanopy"
          >
            {event.description}
          </p>
        </div>
      </div>
    </article>
  );
}

/** Outreach (PDF page 19) — upcoming + previous events list. */
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

      <section id="public-website-redesign-outreach-upcoming" className="mt-14">
        <h2
          id="public-website-redesign-outreach-upcoming-heading"
          className="font-Montserrat text-2xl font-normal text-wriSage md:text-3xl"
        >
          Upcoming Events
        </h2>
        <MossDivider
          id="public-website-redesign-outreach-upcoming-divider"
          className="mt-2"
          widthClassName="w-14"
        />
        <div id="public-website-redesign-outreach-upcoming-events" className="mt-8 space-y-8">
          {UPCOMING_EVENTS.map((event) => (
            <UpcomingEventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      <section id="public-website-redesign-outreach-previous" className="mt-14 space-y-12">
        <div>
          <h2
            id="public-website-redesign-outreach-previous-heading"
            className="font-Montserrat text-2xl font-normal text-wriSage md:text-3xl"
          >
            Previous Events
          </h2>
          <MossDivider
            id="public-website-redesign-outreach-previous-divider"
            className="mt-2"
            widthClassName="w-14"
          />
        </div>
        {PREVIOUS_EVENTS.map((ev) => (
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
