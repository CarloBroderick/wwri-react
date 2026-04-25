type MossDividerProps = {
  id?: string;
  className?: string;
  widthClassName?: string;
};

/**
 * Shared moss accent divider used across section headers and sub-sections.
 * Keeping width and spacing customizable allows Canva-aligned layouts while
 * maintaining one source of truth for color and thickness.
 */
function MossDivider({ id, className = "", widthClassName = "w-16" }: MossDividerProps) {
  return (
    <div
      id={id}
      aria-hidden
      className={`h-[4px] ${widthClassName} rounded-full bg-wriMoss ${className}`.trim()}
    />
  );
}

export default MossDivider;
