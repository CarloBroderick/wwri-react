import type { ReactNode } from "react";

/**
 * Converts `**text**` markers in a plain string into `<strong>` elements.
 * Returns the original string unchanged when no markers are present.
 */
export function renderBoldText(text: string): ReactNode {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : (
      part
    ),
  );
}
