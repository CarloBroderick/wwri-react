import { useLayoutEffect, useRef, useState } from "react";
import { Rgb } from "types/rgb";
import getColor from "utils/getColor";

interface MapLegendProps {
  label: string;
  startColor: Rgb;
  endColor: Rgb;
  /** Minimum value to display on legend (default: 0) */
  minValue?: number;
  /** Maximum value to display on legend (default: 100) */
  maxValue?: number;
}

/** Max pixel width any single (unbreakable) word in the title may occupy. */
const TITLE_MAX_WORD_WIDTH_PX = 100;
/** Preferred font size used when the label fits on one line at full size. */
const TITLE_PREFERRED_FONT_SIZE_PX = 18;
/**
 * Upper bound on font size when the label has to wrap (i.e., can't fit on
 * one line within 100px). This keeps multi-line labels visually close in
 * size to long single-word labels that get shrunk to fit, avoiding a
 * jarring big-vs-small contrast across labels.
 */
const TITLE_WRAP_FONT_SIZE_CAP_PX = 14;
/** Floor for auto-fit font sizing so the title never gets unreadably small. */
const TITLE_MIN_FONT_SIZE_PX = 11;

const MapLegend: React.FC<MapLegendProps> = ({
  label,
  startColor,
  endColor,
  minValue = 0,
  maxValue = 100,
}) => {
  const normalizedLabel = label.trim();

  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const [titleFontSize, setTitleFontSize] = useState<number>(
    TITLE_PREFERRED_FONT_SIZE_PX,
  );

  useLayoutEffect(() => {
    const node = titleRef.current;
    if (!node) return;

    const measureAndApply = () => {
      const ctx = document.createElement("canvas").getContext("2d");
      if (!ctx) return;

      const computed = window.getComputedStyle(node);
      const fontStyle = computed.fontStyle || "normal";
      const fontWeight = computed.fontWeight || "700";
      const fontFamily = computed.fontFamily || "sans-serif";

      const words = normalizedLabel.split(/\s+/).filter(Boolean);
      if (words.length === 0) {
        setTitleFontSize(TITLE_PREFERRED_FONT_SIZE_PX);
        return;
      }

      let size = TITLE_PREFERRED_FONT_SIZE_PX;
      while (size > TITLE_MIN_FONT_SIZE_PX) {
        ctx.font = `${fontStyle} ${fontWeight} ${size}px ${fontFamily}`;
        const longestWordWidth = Math.max(
          ...words.map((w) => ctx.measureText(w).width),
        );
        const wholeLabelWidth = ctx.measureText(normalizedLabel).width;
        const longestWordFits = longestWordWidth <= TITLE_MAX_WORD_WIDTH_PX;
        const fitsOnOneLine = wholeLabelWidth <= TITLE_MAX_WORD_WIDTH_PX;
        // Stop once: (a) the longest word fits within 100px, AND
        // (b) either the whole label fits on a single line, or we've
        // already shrunk down to the wrap cap. The cap keeps wrapped
        // multi-word labels visually close to shrunken single-word labels.
        if (
          longestWordFits &&
          (fitsOnOneLine || size <= TITLE_WRAP_FONT_SIZE_CAP_PX)
        ) {
          break;
        }
        size -= 1;
      }
      setTitleFontSize(size);
    };

    measureAndApply();

    // Re-measure once webfonts (e.g., Montserrat) finish loading, since
    // fallback fonts can mis-report widths on the first paint.
    let cancelled = false;
    if (typeof document !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(() => {
        if (!cancelled) measureAndApply();
      });
    }
    return () => {
      cancelled = true;
    };
  }, [normalizedLabel]);

  // Generate 10 color steps from 1.0 (max) down to 0.0 (min/start color)
  const legendColors = Array.from({ length: 10 }, (_, i) =>
    getColor(startColor, endColor, (9 - i) / 9),
  );

  const midValue = Math.round((minValue + maxValue) / 2);

  return (
    <div
      id="map-legend"
      className="absolute bottom-1 right-1 z-20 flex w-[124px] flex-col rounded-lg bg-white px-2 py-2 shadow-lg"
    >
      <div
        id="map-legend-title-container"
        className="mb-2 flex items-center justify-center px-1"
      >
        <h2
          ref={titleRef}
          id="map-legend-title"
          className="break-words text-center font-Montserrat font-bold leading-tight"
          style={{ fontSize: `${titleFontSize}px` }}
        >
          {normalizedLabel}
        </h2>
      </div>
      <div id="map-legend-scale-container" className="ml-4 flex justify-center">
        <div id="map-legend-scale-row" className="flex flex-row gap-1">
          <div
            id="map-legend-gradient"
            className="flex flex-col justify-between overflow-hidden rounded-md border border-gray-200"
          >
            {legendColors.map((color, index) => (
              <div
                key={index}
                className="min-h-7 w-12"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
          <div
            id="map-legend-value-labels"
            className="flex flex-col justify-between text-xs"
          >
            <span id="map-legend-max-value" className="mt-[-0.2rem]">
              {maxValue}
            </span>
            <span id="map-legend-mid-value">{midValue}</span>
            <span id="map-legend-min-value" className="mb-[-0.2rem]">
              {minValue}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapLegend;
