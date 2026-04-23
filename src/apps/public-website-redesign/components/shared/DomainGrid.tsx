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
  return (
    <div id={id} className={`grid ${colClass} gap-3 md:gap-4`}>
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
