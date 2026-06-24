import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import connectHeroImage from "../../../assets/public-website-redesign/images/contact/light-in-the-forest-connect-with-us.png";
import MossDivider from "../components/shared/MossDivider";
import { REDESIGN_ROUTES } from "../routes/routeConfig";

/**
 * Connect with Us — modern editorial layout that mirrors the About and
 * Domains pages: a slim forest hero carrying the page header, clean contact
 * cards (email + LinkedIn), and a closing "Meet the Team" CTA banner.
 */

const CONTACT_EMAIL = "wri@nceas.ucsb.edu";
const CONTACT_LINKEDIN_URL =
  "https://www.linkedin.com/company/the-wildfire-resilience-index/";

const CONTACT_METHODS: ReadonlyArray<{
  id: string;
  label: string;
  description: string;
  value: string;
  href: string;
  external: boolean;
  cue: string;
  icon: ReactNode;
}> = [
  {
    id: "email",
    label: "Email the team",
    description:
      "Have questions about the Index or want to collaborate? Drop us a line and we'll get back to you.",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    external: false,
    cue: "Send an email",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    label: "Follow on LinkedIn",
    description:
      "Keep up with the latest research, features, and milestones from the Wildfire Resilience Index.",
    value: "Wildfire Resilience Index",
    href: CONTACT_LINKEDIN_URL,
    external: true,
    cue: "Visit profile",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9V9Z" />
      </svg>
    ),
  },
] as const;

function ContactConnectPage() {
  return (
    <div
      id="public-website-redesign-contact-connect-page"
      className="mx-auto max-w-[1400px] px-6 py-12 md:py-16"
    >
      {/* ===== Skinny hero ============================================= */}
      <section
        id="public-website-redesign-contact-connect-hero"
        className="relative overflow-hidden rounded-[28px] bg-wriCanopy shadow-[0_30px_80px_-40px_rgba(31,42,35,0.6)]"
      >
        <img
          id="public-website-redesign-contact-connect-hero-image"
          src={connectHeroImage}
          alt="Sunlight filtering through a forest canopy"
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
        <div
          id="public-website-redesign-contact-connect-hero-scrim"
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-wriCanopy/95 via-wriCanopy/70 to-wriForest/20"
        />
        <div
          id="public-website-redesign-contact-connect-hero-content"
          className="relative px-7 py-10 md:px-14 md:py-14"
        >
          <p
            id="public-website-redesign-contact-connect-hero-eyebrow"
            className="font-Montserrat text-xs font-semibold uppercase tracking-[0.3em] text-wriMoss"
          >
            Get in touch
          </p>
          <h1
            id="public-website-redesign-contact-connect-hero-title"
            className="mt-3 font-Poppins text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.05] text-wriSmokeFog"
          >
            Ways to reach us
          </h1>
          <MossDivider
            id="public-website-redesign-contact-connect-hero-divider"
            className="mt-5"
            widthClassName="w-16"
          />
        </div>
      </section>

      {/* ===== Ways to reach us ======================================== */}
      <section
        id="public-website-redesign-contact-connect-methods"
        className="mt-12 scroll-mt-24 md:mt-16"
      >
        <div
          id="public-website-redesign-contact-connect-methods-grid"
          className="grid gap-5 sm:grid-cols-2"
        >
          {CONTACT_METHODS.map((method) => {
            const linkProps = method.external
              ? { target: "_blank", rel: "noreferrer" as const }
              : {};

            return (
              <a
                key={method.id}
                id={`public-website-redesign-contact-connect-method-${method.id}`}
                href={method.href}
                {...linkProps}
                className="group flex flex-col rounded-2xl bg-white p-7 ring-1 ring-wriCanopy/10 transition-all hover:-translate-y-0.5 hover:shadow-md hover:shadow-wriCanopy/10 hover:ring-wriMoss focus:outline-none focus-visible:ring-2 focus-visible:ring-wriMoss focus-visible:ring-offset-2"
              >
                <span
                  id={`public-website-redesign-contact-connect-method-icon-${method.id}`}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-wriForest/10 text-wriForest transition-colors group-hover:bg-wriForest group-hover:text-white [&_svg]:h-6 [&_svg]:w-6"
                >
                  {method.icon}
                </span>
                <span
                  id={`public-website-redesign-contact-connect-method-label-${method.id}`}
                  className="mt-5 font-Montserrat text-lg font-semibold leading-snug text-wriForest"
                >
                  {method.label}
                </span>
                <span
                  id={`public-website-redesign-contact-connect-method-description-${method.id}`}
                  className="mt-2 font-Poppins text-sm leading-relaxed text-wriCanopy/70"
                >
                  {method.description}
                </span>
                <span
                  id={`public-website-redesign-contact-connect-method-value-${method.id}`}
                  className="mt-5 font-Poppins text-[clamp(15px,1.3vw,17px)] font-bold text-wriMossMenuHighlight"
                >
                  {method.value}
                </span>
                <span
                  id={`public-website-redesign-contact-connect-method-cue-${method.id}`}
                  aria-hidden
                  className="mt-3 inline-flex items-center gap-1.5 font-Montserrat text-xs font-bold uppercase tracking-[0.08em] text-wriMossMenuHighlight"
                >
                  {method.cue}
                  <span className="text-sm leading-none transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </section>

      {/* ===== Meet the team ========================================== */}
      <section
        id="public-website-redesign-contact-connect-team-cta"
        className="mt-16 md:mt-20"
      >
        <div
          id="public-website-redesign-contact-connect-team-cta-card"
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-wriForest to-wriMossMenuHighlight px-7 py-9 sm:px-10 sm:py-11"
        >
          <span
            id="public-website-redesign-contact-connect-team-cta-eyebrow"
            className="inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 font-Montserrat text-xs font-bold uppercase tracking-[0.14em] text-white"
          >
            Meet the Team
          </span>
          <div
            id="public-website-redesign-contact-connect-team-cta-body"
            className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          >
            <div className="max-w-2xl">
              <h2
                id="public-website-redesign-contact-connect-team-cta-title"
                className="font-Montserrat text-[clamp(1.5rem,3vw,2.125rem)] font-semibold leading-tight text-white"
              >
                Meet the people behind the Index
              </h2>
              <p
                id="public-website-redesign-contact-connect-team-cta-copy"
                className="mt-3 font-Poppins text-[clamp(15px,1.1vw,17px)] leading-relaxed text-white/85"
              >
                Get to know the researchers, analysts, and working group of experts building the
                Wildfire Resilience Index.
              </p>
            </div>
            <Link
              id="public-website-redesign-contact-connect-team-cta-button"
              to={REDESIGN_ROUTES.contactTeam}
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 font-Montserrat text-sm font-bold uppercase tracking-[0.08em] text-wriForest shadow-sm transition-all hover:bg-wriSmokeFog hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-wriForest"
            >
              Meet the Team
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

export default ContactConnectPage;
