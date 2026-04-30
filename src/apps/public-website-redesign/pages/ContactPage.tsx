import { Link } from "react-router-dom";
import SectionHeader from "../components/shared/SectionHeader";
import { REDESIGN_ROUTES } from "../routes/routeConfig";

const LINKS = [
  {
    id: "meet-the-team",
    label: "Meet the Team",
    to: REDESIGN_ROUTES.contactTeam,
    copy: "The researchers, designers, and engineers behind the index.",
  },
  {
    id: "connect-with-us",
    label: "Connect with Us",
    to: REDESIGN_ROUTES.contactConnect,
    copy: "Reach out with questions, feedback, or partnership inquiries.",
  },
  {
    id: "faqs",
    label: "Explore the FAQs",
    to: REDESIGN_ROUTES.contactFaqs,
    copy: "Answers to the most common questions about the WRI.",
  },
];

/** Contact hub (change-requests doc "Contact" section). */
function ContactPage() {
  return (
    <div id="public-website-redesign-contact-page" className="mx-auto max-w-[1100px] px-6 py-16">
      <SectionHeader id="public-website-redesign-contact-heading" eyebrow="Contact" />
      <div id="public-website-redesign-contact-links" className="mt-10 grid gap-4 sm:grid-cols-3">
        {LINKS.map((l) => (
          <Link
            key={l.id}
            id={`public-website-redesign-contact-link-${l.id}`}
            to={l.to}
            className="group flex flex-col justify-between rounded-sm border-[3px] border-wriForest/30 bg-wriSmokeFog p-6 transition-colors hover:border-wriForest"
          >
            <div className="font-Montserrat text-xl font-bold text-wriForest group-hover:text-wriSage">
              {l.label}
            </div>
            <div className="mt-2 font-Poppins text-sm text-wriCanopy/80">{l.copy}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ContactPage;
