import type { ReactNode } from "react";
import MossDivider from "./MossDivider";

type Props = {
  id?: string;
  /** Small dark-green eyebrow above the title (e.g. "About", "Domains"). */
  eyebrow?: ReactNode;
  /** Main sage-green section title (e.g. "What is the Wildfire Resilience Index?"). */
  title?: ReactNode;
  /** Show the short Moss underline between eyebrow and title (Canva default). */
  divider?: boolean;
  className?: string;
  titleClassName?: string;
};

/**
 * Canva-spec section heading. Supports two modes:
 *
 *   Two-level (eyebrow + title):
 *     eyebrow → Poppins Normal ~44 Forest (#2F5D3A)
 *     divider → Moss (#A3B86C) short rule
 *     title   → Montserrat Bold ~41 Sage  (#7FA68B)
 *
 *   Main-header only (pass only `eyebrow`, omit `title`):
 *     Single Poppins 44 Forest text followed by the Moss divider.
 *     Used for pages like "News & Features", "Outreach", "Explore Another
 *     Domain", and "How it's measured" where the spec calls for one header.
 */
function SectionHeader({
  id,
  eyebrow,
  title,
  divider = true,
  className = "",
  titleClassName = "font-bold",
}: Props) {
  return (
    <header id={id} className={className}>
      {eyebrow && (
        <div
          id={id ? `${id}-eyebrow` : undefined}
          className="font-Poppins text-[clamp(2.25rem,4.5vw,2.75rem)] font-normal leading-tight text-wriForest"
        >
          {eyebrow}
        </div>
      )}
      {divider && (
        <MossDivider
          id={id ? `${id}-divider` : undefined}
          className="my-3"
          widthClassName="w-16"
        />
      )}
      {title && (
        <h2
          id={id ? `${id}-title` : undefined}
          className={`font-Montserrat text-[clamp(1.75rem,4vw,2.5rem)] leading-tight text-wriSage ${titleClassName}`}
        >
          {title}
        </h2>
      )}
    </header>
  );
}

export default SectionHeader;
