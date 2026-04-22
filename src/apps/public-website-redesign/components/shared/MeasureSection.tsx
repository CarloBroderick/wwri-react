import type { Domain, DomainSection } from "../../config/domains";

type Props = {
  id: string;
  domain: Domain;
  section: DomainSection;
  /** Optional photo for the section (only the "why it matters" section typically has one). */
  photo?: string;
};

/**
 * A row in a domain detail page: optional photo on the left, and heading + copy
 * + status pill + example dataset card on the right.
 */
function MeasureSection({ id, domain, section, photo }: Props) {
  const chipTextColor = domain.textOn === "dark" ? "text-[#22402c]" : "text-white";
  return (
    <section
      id={id}
      className="grid grid-cols-1 gap-6 border-t border-[#dcd6c5] pt-10 md:grid-cols-[1fr_1.1fr] md:gap-10"
    >
      {photo && (
        <img
          id={`${id}-photo`}
          src={photo}
          alt=""
          className="aspect-[4/5] w-full rounded-sm object-cover md:max-w-[500px]"
        />
      )}
      <div id={`${id}-body`} className={photo ? "" : "md:col-span-2"}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div id={`${id}-divider`} className="mb-3 h-[3px] w-14 rounded-full bg-[#b3c167]" />
            <h3
              id={`${id}-title`}
              className="text-2xl font-semibold leading-tight text-[#779062] md:text-3xl"
            >
              {section.title}
            </h3>
          </div>
          <span
            id={`${id}-icon`}
            className={`inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-sm ${chipTextColor}`}
            style={{ backgroundColor: domain.color }}
            aria-hidden
          >
            <img src={domain.icon} alt="" className="h-9 w-9" style={{ filter: domain.textOn === "dark" ? undefined : "brightness(0) invert(1)" }} />
          </span>
        </div>
        <p id={`${id}-description`} className="mt-4 max-w-prose text-[15px] leading-relaxed text-[#333]">
          {section.description}
        </p>
        {section.example && (
          <div id={`${id}-example`} className="mt-6">
            <div className="mb-2 text-lg font-semibold text-[#779062]">Example Dataset</div>
            <div
              id={`${id}-example-card`}
              className="inline-block rounded-sm border border-[#556b3d] px-6 py-4 text-center"
            >
              <div className="font-semibold text-[#22402c]">{section.example.label}</div>
              <div className="mt-1 max-w-[240px] text-sm italic text-[#555]">
                {section.example.detail}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default MeasureSection;
