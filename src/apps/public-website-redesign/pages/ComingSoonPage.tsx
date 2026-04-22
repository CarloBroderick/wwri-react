import SectionHeader from "../components/shared/SectionHeader";

type Props = { title: string; id: string; body?: string };

/**
 * Generic placeholder used for pages listed in the nav but not visually specified
 * in the source PDF (Methodology, Contact, Publications, Resources).
 */
function ComingSoonPage({ title, id, body }: Props) {
  return (
    <div id={id} className="mx-auto max-w-[900px] px-6 py-24 text-center">
      <SectionHeader
        id={`${id}-heading`}
        title={title}
        eyebrow="Coming soon"
        className="flex flex-col items-center"
      />
      <p id={`${id}-body`} className="mx-auto mt-8 max-w-prose text-[15px] leading-relaxed text-[#333]">
        {body ??
          "This page isn’t included in the current visual spec. A detailed layout will be added in a future design pass."}
      </p>
    </div>
  );
}

export default ComingSoonPage;
