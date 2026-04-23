import type { Domain, DomainSection } from "../../config/domains";

type Props = {
  id: string;
  domain: Domain;
  section: DomainSection;
  /** Overrides `section.photo`. */
  photo?: string;
  /** Small domain-square chip in the header (defaults to the full-color tile). */
  chipImage?: string;
  /** Optional sub-label above the section title (e.g. "Iconic Places"). */
  overline?: string;
};

/**
 * One row of a domain detail page — Canva spec:
 *   • HIM photo on the far LEFT of the text
 *   • Small domain-square chip in the top-right corner of the body
 *   • Title (Status / Resistance / Recovery / …) Montserrat Bold Sage
 *   • Body text Poppins 17 Canopy
 *   • Example Dataset block:
 *       - Heading "Example Dataset" Montserrat Bold Sage
 *       - Box: Forest #2F5D3A outline (4px), centered contents
 *       - Label: Poppins Normal ~22 Forest
 *       - Detail: Poppins italic ~17 Canopy
 */
function MeasureSection({ id, domain, section, photo, chipImage, overline }: Props) {
  const effectivePhoto = photo ?? section.photo;
  const chip = chipImage ?? domain.tile;
  return (
    <section
      id={id}
      className="grid grid-cols-1 gap-6 border-t border-wriMoss/40 pt-10 md:grid-cols-[1fr_1.1fr] md:gap-10"
    >
      {effectivePhoto ? (
        <img
          id={`${id}-photo`}
          src={effectivePhoto}
          alt=""
          className="aspect-[4/5] w-full rounded-sm object-cover md:max-w-[500px]"
        />
      ) : (
        <div aria-hidden />
      )}
      <div id={`${id}-body`}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            {overline && (
              <div
                id={`${id}-overline`}
                className="font-Poppins text-base font-normal uppercase tracking-[0.08em] text-wriForest/80"
              >
                {overline}
              </div>
            )}
            <div id={`${id}-divider`} className="my-3 h-[3px] w-14 rounded-full bg-wriMoss" />
            <h3
              id={`${id}-title`}
              className="font-Montserrat text-[clamp(1.5rem,3vw,2rem)] font-bold leading-tight text-wriSage"
            >
              {section.title}
            </h3>
          </div>
          <img
            id={`${id}-chip`}
            src={chip}
            alt=""
            aria-hidden
            className="h-16 w-16 shrink-0 rounded-sm object-cover"
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
              className={`flex flex-wrap gap-5 ${
                section.examples && section.examples.length > 1 ? "" : ""
              }`}
            >
              {(section.examples ?? (section.example ? [section.example] : [])).map((ex, i) => (
                <div
                  key={`${ex.label}-${i}`}
                  id={`${id}-example-card-${i}`}
                  className="flex min-w-[220px] flex-1 flex-col items-center text-center"
                >
                  {ex.heading && (
                    <div className="mb-2 font-Poppins text-sm font-semibold uppercase tracking-[0.08em] text-wriForest/80">
                      {ex.heading}
                    </div>
                  )}
                  <div className="inline-block w-full rounded-sm border-[4px] border-wriForest px-6 py-6">
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
