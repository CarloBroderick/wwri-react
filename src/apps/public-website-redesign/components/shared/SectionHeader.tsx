import type { ReactNode } from "react";

type Props = {
  id?: string;
  eyebrow?: ReactNode;
  title: ReactNode;
  /** Adds a short olive underline above the eyebrow/title, matching the PDF. */
  divider?: boolean;
  className?: string;
};

/**
 * Standard section heading used across all redesign pages: short olive rule + small
 * dark-green eyebrow + larger sage-green title.
 */
function SectionHeader({ id, eyebrow, title, divider = true, className = "" }: Props) {
  return (
    <header id={id} className={`font-[Be_Vietnam_Pro,system-ui,sans-serif] ${className}`}>
      {divider && (
        <div
          id={id ? `${id}-divider` : undefined}
          className="mb-4 h-[3px] w-14 rounded-full bg-[#b3c167]"
        />
      )}
      {eyebrow && (
        <div
          id={id ? `${id}-eyebrow` : undefined}
          className="text-3xl font-light text-[#22402c] md:text-4xl"
        >
          {eyebrow}
        </div>
      )}
      <h2
        id={id ? `${id}-title` : undefined}
        className="mt-1 text-3xl font-bold leading-tight text-[#779062] md:text-4xl"
      >
        {title}
      </h2>
    </header>
  );
}

export default SectionHeader;
