import type { ReactNode } from "react";
import MossDivider from "../components/shared/MossDivider";

/**
 * Connect with Us — modern editorial layout that mirrors the About and
 * Domains pages: a section header (eyebrow + title + divider) above clean
 * contact cards (email + LinkedIn) with circular icon badges and hover motion.
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
      {/* ===== Ways to reach us ======================================== */}
      <section
        id="public-website-redesign-contact-connect-methods"
        className="scroll-mt-24"
      >
        <header id="public-website-redesign-contact-connect-methods-header">
          <p className="font-Montserrat text-xs font-semibold uppercase tracking-[0.3em] text-wriSage">
            Get in touch
          </p>
          <h2 className="mt-3 font-Poppins text-[clamp(1.9rem,3.5vw,2.5rem)] font-bold leading-tight text-wriForest">
            Ways to reach us
          </h2>
          <MossDivider className="my-5" widthClassName="w-16" />
        </header>

        <div
          id="public-website-redesign-contact-connect-methods-grid"
          className="mt-4 grid gap-5 sm:grid-cols-2"
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
    </div>
  );
}

export default ContactConnectPage;
