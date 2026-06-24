import type { PublicationLink, PublicationLinkKind } from "../../config/publications";

/**
 * 🔗 Publication link buttons
 * =============================================================================
 * Renders a publication's external resources (full text, PDF, DOI, code, data)
 * as a consistent row of icon buttons. Shared between the Publications listing
 * cards (`variant="compact"`) and the full detail page (`variant="full"`) so
 * the link styling lives in exactly one place.
 */

type Variant = "compact" | "full";

type PublicationLinkButtonsProps = {
  id: string;
  links: PublicationLink[];
  variant?: Variant;
};

// 🎨 Small inline icon per link kind keeps each action instantly recognizable.
function LinkIcon({ kind }: { kind: PublicationLinkKind }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    className: "h-4 w-4 shrink-0",
  };

  switch (kind) {
    case "pdf":
      return (
        <svg {...common}>
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
          <path d="M14 3v5h5" />
          <path d="M12 18v-6" />
          <path d="m9 15 3 3 3-3" />
        </svg>
      );
    case "code":
      return (
        <svg {...common}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "data":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
          <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
        </svg>
      );
    case "doi":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8h.01" />
          <path d="M11 12h1v4h1" />
        </svg>
      );
    case "html":
    case "external":
    default:
      return (
        <svg {...common}>
          <path d="M15 3h6v6" />
          <path d="M10 14 21 3" />
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        </svg>
      );
  }
}

function PublicationLinkButtons({ id, links, variant = "full" }: PublicationLinkButtonsProps) {
  const sizing =
    variant === "full" ? "px-5 py-2.5 text-sm" : "px-3.5 py-2 text-[13px]";

  return (
    <div id={id} className="flex flex-wrap gap-2.5">
      {links.map((link) => (
        <a
          key={link.href}
          id={`${id}-${link.kind}`}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className={`group/link inline-flex items-center gap-2 rounded-full font-Montserrat font-semibold tracking-[0.02em] transition-colors ${sizing} ${
            link.primary
              ? "bg-wriMoss text-wriCanopy hover:bg-wriMossClicked"
              : "bg-white text-wriForest ring-1 ring-wriForest/20 hover:bg-wriSmokeFog hover:ring-wriForest/40"
          }`}
        >
          <LinkIcon kind={link.kind} />
          {link.label}
        </a>
      ))}
    </div>
  );
}

export default PublicationLinkButtons;
