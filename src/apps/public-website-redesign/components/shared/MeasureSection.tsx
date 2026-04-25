import type { ReactNode } from "react";
import type { Domain, DomainSection } from "../../config/domains";
import MossDivider from "./MossDivider";

type Props = {
  id: string;
  domain: Domain;
  section: DomainSection;
  /** Overrides `section.photo`. */
  photo?: string;
  /** Optional sub-label above the section title (e.g. "Iconic Places"). */
  overline?: string;
  /**
   * Large "How it's measured"-style label rendered at the TOP of the text
   * column, above the Moss divider + section title. Used on the first Status
   * row of each domain (and the first row of the Iconic Places / Iconic
   * Species blocks on Sense of Place). Canva spec pairs this label with the
   * Status photo rather than giving it its own full-width row.
   */
  measureLabel?: ReactNode;
  /**
   * Tailwind aspect-ratio utility for the row photo. Defaults to
   * `aspect-square`, which matches the near-square trimmed HIM sources. Rows
   * with ultrawide source photos (e.g. Iconic Places Resistance/Recovery)
   * should pass a wider ratio like `aspect-[2/1]` to avoid heavy side crops.
   */
  photoAspectClassName?: string;
};

/**
 * One row of a domain detail page — Canva spec:
 *   • HIM photo on the far LEFT of the text (~4:3 landscape aspect)
 *   • Domain-square chip on the far RIGHT of the text column, aligned with
 *     the section title (matches the hero row on every measured row)
 *   • Optional "How it's measured" label stacked above the short Moss divider
 *   • Title (Status / Resistance / Recovery / …) Montserrat Bold Sage
 *   • Body text Poppins 17 Canopy
 *   • Example Dataset block:
 *       - Heading "Example Dataset" Montserrat Bold Sage
 *       - Box: Forest #2F5D3A outline (4px), centered contents, ~300px wide,
 *         left-aligned within the text column (NOT full-width)
 *       - Label: Poppins Normal ~22 Forest
 *       - Detail: Poppins italic ~17 Canopy
 */
function MeasureSection({
  id,
  domain,
  section,
  photo,
  overline,
  measureLabel,
  photoAspectClassName = "aspect-square",
}: Props) {
  const effectivePhoto = photo ?? section.photo;
  return (
    <section
      id={id}
      className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_1.1fr] md:items-start md:gap-10"
    >
      {effectivePhoto ? (
        <img
          id={`${id}-photo`}
          src={effectivePhoto}
          alt=""
          className={`${photoAspectClassName} w-full rounded-sm object-cover`}
        />
      ) : (
        <div aria-hidden />
      )}
      <div id={`${id}-body`}>
        <div id={`${id}-header-row`} className="flex items-start justify-between gap-4">
          <div id={`${id}-header-text`} className="flex-1">
            {measureLabel && (
              <div
                id={`${id}-measure-label`}
                className="font-Poppins text-[clamp(1.75rem,3vw,2.5rem)] font-normal leading-tight text-wriForest"
              >
                {measureLabel}
              </div>
            )}
            {overline && (
              <div
                id={`${id}-overline`}
                className="font-Poppins text-base font-normal uppercase tracking-[0.08em] text-wriForest/80"
              >
                {overline}
              </div>
            )}
            <MossDivider id={`${id}-divider`} className="my-3" widthClassName="w-14" />
            <h3
              id={`${id}-title`}
              className="font-Montserrat text-[clamp(1.5rem,3vw,2rem)] font-bold leading-tight text-wriSage"
            >
              {section.title}
            </h3>
          </div>
          <img
            id={`${id}-chip`}
            src={domain.tile}
            alt=""
            aria-hidden
            className="h-24 w-24 shrink-0 rounded-2xl object-cover md:h-28 md:w-28"
          />
        </div>
        <p
          id={`${id}-description`}
          className="mt-4 max-w-prose font-Poppins text-[clamp(16px,1.5vw,19px)] leading-relaxed text-wriCanopy"
        >
          {section.description}
        </p>
        {(section.example || section.examples) && (
          <div id={`${id}-example`} className="mt-6">
            <div className="mb-3 font-Montserrat text-xl font-bold text-wriSage">
              Example Dataset
            </div>
            <div
              id={`${id}-example-cards`}
              className="flex flex-wrap gap-5"
            >
              {(section.examples ?? (section.example ? [section.example] : [])).map((ex, i) => (
                <div
                  key={`${ex.label}-${i}`}
                  id={`${id}-example-card-${i}`}
                  className="flex w-full max-w-[320px] flex-col items-stretch"
                >
                  {ex.heading && (
                    <div className="mb-2 text-center font-Poppins text-sm font-semibold uppercase tracking-[0.08em] text-wriForest/80">
                      {ex.heading}
                    </div>
                  )}
                  <div className="rounded-sm border-[4px] border-wriForest px-6 py-5 text-center">
                    <div className="font-Poppins text-[clamp(20px,2.2vw,28px)] font-normal leading-tight text-wriForest">
                      {ex.label}
                    </div>
                    <div className="mt-2 font-Poppins text-[clamp(15px,1.5vw,19px)] italic leading-snug text-wriCanopy">
                      {ex.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default MeasureSection;
