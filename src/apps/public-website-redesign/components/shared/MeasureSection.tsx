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
  const examples = section.examples ?? (section.example ? [section.example] : []);
  const hasMultipleExamples = examples.length > 1;

  return (
    <section
      id={id}
      className="grid grid-cols-1 gap-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-wriCanopy/5 md:grid-cols-[minmax(200px,320px)_minmax(0,1fr)] md:items-stretch md:gap-10 md:p-6"
    >
      {effectivePhoto ? (
        <img
          id={`${id}-photo`}
          src={effectivePhoto}
          alt=""
          className={`${photoAspectClassName} mx-auto w-full max-w-[360px] rounded-xl object-cover md:mx-0`}
        />
      ) : (
        <div aria-hidden />
      )}
      <div id={`${id}-body`} className="md:flex md:h-full md:flex-col">
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
        {examples.length > 0 && (
          <div
            id={`${id}-example`}
            className={`mt-4 ${hasMultipleExamples ? "md:flex md:flex-1 md:flex-col" : ""}`}
          >
            <div
              id={`${id}-example-label`}
              className="mb-2 font-Montserrat text-xl font-bold text-wriSage"
            >
              Example Dataset
            </div>
            <div
              id={`${id}-example-cards`}
              className={`flex flex-wrap items-stretch gap-5 ${
                hasMultipleExamples ? "md:flex-1" : ""
              }`}
            >
              {examples.map((ex, i) => (
                <div
                  key={`${ex.label}-${i}`}
                  id={`${id}-example-card-${i}`}
                  className={`flex w-full max-w-[320px] flex-col items-stretch ${
                    hasMultipleExamples ? "md:h-full" : ""
                  }`}
                >
                  {ex.heading && (
                    <div
                      id={`${id}-example-card-${i}-heading`}
                      className="mb-1.5 text-center font-Poppins text-sm font-semibold uppercase tracking-[0.08em] text-wriForest/80"
                    >
                      {ex.heading}
                    </div>
                  )}
                  <div
                    id={`${id}-example-card-${i}-box`}
                    className="flex min-h-[140px] flex-1 flex-col justify-center rounded-xl border-[3px] border-wriForest bg-wriSmokeFog/60 px-6 py-3 text-center"
                  >
                    <div
                      id={`${id}-example-card-${i}-label`}
                      className="font-Poppins text-[clamp(20px,2.2vw,28px)] font-normal leading-tight text-wriForest"
                    >
                      {ex.label}
                    </div>
                    <div
                      id={`${id}-example-card-${i}-detail`}
                      className="mt-1.5 font-Poppins text-[clamp(15px,1.5vw,19px)] italic leading-snug text-wriCanopy"
                    >
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
