import type { DomainSection } from "../../config/domains";
import { renderBoldText } from "../../utils/renderBoldText";
import MossDivider from "./MossDivider";

const measureTitleClassName =
  "font-Montserrat text-[clamp(1.05rem,1.8vw,1.35rem)] font-bold uppercase leading-tight tracking-[0.06em] text-wriSage";

type Props = {
  id: string;
  section: DomainSection;
  /** Overrides `section.photo`. */
  photo?: string;
  /**
   * Tailwind aspect-ratio utility for the row photo. Defaults to
   * `aspect-square`, which matches the near-square trimmed HIM sources.
   */
  photoAspectClassName?: string;
};

/**
 * One row of a domain detail page — Canva spec:
 *   - HIM photo on the far LEFT (~square aspect)
 *   - Title (Status / Resistance / Recovery) Montserrat Bold Sage
 *   - Body text Poppins 17 Canopy
 *   - Example Dataset block:
 *       Box: Forest #2F5D3A outline (4px), centered contents, ~300px wide,
 *       left-aligned within the text column (NOT full-width)
 *       Label: Poppins Normal ~22 Forest
 *       Detail: Poppins italic ~17 Canopy
 */
function MeasureSection({
  id,
  section,
  photo,
  photoAspectClassName = "aspect-square",
}: Props) {
  const effectivePhoto = photo ?? section.photo;
  return (
    <section
      id={id}
      className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(180px,320px)_minmax(0,1fr)] md:items-start md:gap-10"
    >
      {effectivePhoto ? (
        <img
          id={`${id}-photo`}
          src={effectivePhoto}
          alt=""
          className={`${photoAspectClassName} mx-auto w-full max-w-[320px] rounded-sm object-cover md:mx-0`}
        />
      ) : (
        <div aria-hidden />
      )}
      <div id={`${id}-body`}>
        <div id={`${id}-header-row`} className="flex items-start gap-4">
          <div id={`${id}-header-text`} className="flex-1">
            <h3 id={`${id}-title`} className={measureTitleClassName}>
              {section.title}
            </h3>
            <MossDivider
              id={`${id}-divider`}
              className="mb-3 mt-2"
              widthClassName="w-14"
            />
          </div>
        </div>
        <p
          id={`${id}-description`}
          className="mt-4 max-w-prose font-Poppins text-[clamp(16px,1.5vw,19px)] leading-relaxed text-wriCanopy"
        >
          {renderBoldText(section.description)}
        </p>
        {(section.example || section.examples) && (
          <div id={`${id}-example`} className="mt-6">
            <div className="mb-3 font-Montserrat text-xl font-bold text-wriSage">
              Example Dataset
            </div>
            <div id={`${id}-example-cards`} className="flex flex-wrap gap-5">
              {(
                section.examples ?? (section.example ? [section.example] : [])
              ).map((ex, i) => (
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
