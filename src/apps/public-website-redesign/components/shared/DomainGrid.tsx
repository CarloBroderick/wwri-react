import { DOMAINS, type DomainSlug } from "../../config/domains";
import DomainTile from "./DomainTile";

type Props = {
  /** Slug to render with the dimmed square (current domain on a detail page). */
  mutedSlug?: DomainSlug;
  /** Slug to render with the Sage "next up" outline. */
  nextSlug?: DomainSlug;
  size?: "sm" | "md";
  columns?: 2 | 4;
  id?: string;
};

/** 2- or 4-column grid of the 8 Canva domain squares. */
function DomainGrid({
  mutedSlug,
  nextSlug,
  size = "md",
  columns = 4,
  id = "public-website-redesign-domain-grid",
}: Props) {
  const colClass = columns === 2 ? "grid-cols-2" : "grid-cols-2 md:grid-cols-4";
  const spacingClass = size === "sm" ? "gap-4 md:gap-6" : "gap-3 md:gap-4";
  /** Detail-page grid: pin tiles to the column start so headings and grid share a left edge. */
  const layoutClass = size === "sm" ? "justify-items-start" : "";
  return (
    <div id={id} className={`grid ${colClass} ${spacingClass} ${layoutClass}`}>
      {DOMAINS.map((d) => (
        <DomainTile
          key={d.slug}
          domain={d}
          size={size}
          muted={mutedSlug === d.slug}
          next={nextSlug === d.slug}
        />
      ))}
    </div>
  );
}

export default DomainGrid;
