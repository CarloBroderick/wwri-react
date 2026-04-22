import { Link } from "react-router-dom";
import SectionHeader from "../components/shared/SectionHeader";
import { REDESIGN_ROUTES } from "../routes/routeConfig";

/**
 * Landing page for the Media section (PDF page 17 shows only the dropdown; this
 * page provides a directory of the four sub-sections for direct URL landings).
 */
function MediaLandingPage() {
  const links = [
    {
      label: "News & Features",
      to: REDESIGN_ROUTES.news,
      copy: "Articles and announcements about the Wildfire Resilience Index.",
    },
    {
      label: "Outreach",
      to: REDESIGN_ROUTES.outreach,
      copy: "Public talks, webinars, and community events.",
    },
    {
      label: "Publications",
      to: REDESIGN_ROUTES.publications,
      copy: "Peer-reviewed papers and technical reports.",
    },
    {
      label: "Resources",
      to: REDESIGN_ROUTES.resources,
      copy: "Recordings, datasets, and teaching materials.",
    },
  ];

  return (
    <div id="public-website-redesign-media-landing" className="mx-auto max-w-[1100px] px-6 py-16">
      <SectionHeader id="public-website-redesign-media-heading" title="Media" />
      <div id="public-website-redesign-media-links" className="mt-10 grid gap-4 sm:grid-cols-2">
        {links.map((l) => (
          <Link
            key={l.to}
            id={`public-website-redesign-media-link-${l.label.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
            to={l.to}
            className="group flex flex-col justify-between rounded-sm border border-[#35553f]/30 bg-white/60 p-6 transition-colors hover:border-[#35553f] hover:bg-white"
          >
            <div className="text-xl font-bold text-[#22402c] group-hover:text-[#779062]">{l.label}</div>
            <div className="mt-2 text-sm text-[#555]">{l.copy}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MediaLandingPage;
