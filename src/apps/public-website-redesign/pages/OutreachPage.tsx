import { Link } from "react-router-dom";
import eventImage from "../../../assets/public-website-redesign/images/media/science-pub-event.jpg";
import MossDivider from "../components/shared/MossDivider";
import SectionHeader from "../components/shared/SectionHeader";
import { REDESIGN_ROUTES } from "../routes/routeConfig";

type Event = {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
};

const PREVIOUS_EVENTS: Event[] = [
  {
    id: "science-by-the-pint",
    title: "Science By the Pint",
    date: "March 11, 2026",
    description:
      "NCEAS Research Associate Cat Fong presented her work on the Wildfire Resilience Index at Draughtsmen Aleworks in Goleta, CA. She gave the audience background on how and why the Index was built and how it can be used. Science by the Pint is a collaboration with the UCSB Undergraduate Research Symposium Committee highlighting cutting-edge UCSB research.",
    image: eventImage,
  },
  {
    id: "science-pub-building-wildfire-resilience",
    title: "Science Pub: Building Wildfire Resilience",
    date: "December 8, 2025",
    description:
      "NCEAS Research Associate Cat Fong showcased the Wildfire Resilience Index at Dargan’s Pub in Santa Barbara, CA — walking the audience through its data-driven approach and how it helps local leaders plan smarter, empowers communities living with fire, and supports a safer, more resilient future for Santa Barbara County and beyond. The Santa Barbara Museum of Natural History Science Pub series consists of free science talks held on the second Monday of every month.",
    image: eventImage,
  },
];

/** Outreach (PDF page 19) — upcoming + previous events list. */
function OutreachPage() {
  return (
    <div id="public-website-redesign-outreach-page" className="mx-auto max-w-[1200px] px-6 py-16">
      <SectionHeader id="public-website-redesign-outreach-heading" eyebrow="Outreach" />
      <p
        id="public-website-redesign-outreach-blurb"
        className="mt-6 max-w-3xl font-Poppins text-[clamp(16px,1.5vw,20px)] leading-relaxed text-wriCanopy"
      >
        Discover opportunities to learn more about the index — from public talks to webinar
        trainings.
      </p>
      <p
        id="public-website-redesign-outreach-resources-note"
        className="mt-2 max-w-3xl font-Poppins text-[clamp(16px,1.5vw,20px)] leading-relaxed text-wriCanopy"
      >
        Missed an event? Check out recordings and more on our{" "}
        <Link
          id="public-website-redesign-outreach-resources-link"
          to={REDESIGN_ROUTES.resources}
          className="font-bold text-wriMoss underline underline-offset-4 hover:text-wriForest"
        >
          Resources
        </Link>{" "}
        page!
      </p>

      <section id="public-website-redesign-outreach-upcoming" className="mt-14">
        <h2 className="font-Montserrat text-2xl font-bold text-wriSage md:text-3xl">
          Upcoming Events
        </h2>
        <MossDivider
          id="public-website-redesign-outreach-upcoming-divider"
          className="mt-2"
          widthClassName="w-14"
        />
        <p
          id="public-website-redesign-outreach-upcoming-empty"
          className="mt-6 font-Poppins text-[15px] italic text-wriCanopy/70"
        >
          No upcoming events scheduled yet — check back soon.
        </p>
      </section>

      <section id="public-website-redesign-outreach-previous" className="mt-14 space-y-12">
        <div>
          <h2 className="font-Montserrat text-2xl font-bold text-wriSage md:text-3xl">
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
              <h3 className="font-Montserrat text-2xl font-bold leading-tight text-wriSage">
                {ev.title}
              </h3>
              <div className="mt-1 font-Poppins text-lg italic text-wriSage/80">{ev.date}</div>
              <p className="mt-4 font-Poppins text-[clamp(16px,1.5vw,20px)] leading-relaxed text-wriCanopy">
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
