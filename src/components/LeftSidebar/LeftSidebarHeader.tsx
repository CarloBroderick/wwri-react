import { Country } from "components/App";
import { UnifiedGeoLevel } from "config/api";
import { getRegionAbbreviation } from "data/StateNameToAbbrevsMap";

interface LeftSidebarHeaderProps {
  selectedGeoId: string;
  selectedRegionName: string; // County/Division name
  selectedStateName: string; // State/Province name
  selectedCountry: Country;
  selectedGeoLevel: UnifiedGeoLevel;
}

/**
 * Formats the tract/subdivision ID for display.
 * US tracts: show last portion after county FIPS (e.g., "06037101100" -> "1011.00")
 * Canada subdivisions: show the full ID or name as-is
 */
function formatTractId(geoId: string, country: Country): string {
  if (country === "us" && geoId.length >= 11) {
    // US tract GEOID format: SSCCCTTTTTT (2 state + 3 county + 6 tract)
    // Extract tract portion and format with decimal (TTTT.TT)
    const tractPortion = geoId.slice(-6);
    const beforeDecimal = tractPortion.slice(0, 4).replace(/^0+/, "") || "0";
    const afterDecimal = tractPortion.slice(4);
    return `${beforeDecimal}.${afterDecimal}`;
  }
  // For Canada or other, just return the ID
  return geoId;
}

/**
 * Formats the US Congressional District geoid (state_fips + cd_num zero-padded)
 * into the canonical "ST-NN" shorthand used by election trackers, e.g.
 *   "0612" -> "CA-12", "0200" -> "AK-AL" (at-large).
 * Returns null for malformed geoids so callers can fall back gracefully.
 */
function formatCongressionalDistrictShorthand(geoId: string, stateName: string): string | null {
  if (geoId.length < 4) return null;
  const cdNum = geoId.slice(-2);
  const stateAbbrev = getRegionAbbreviation(stateName);
  if (!stateAbbrev) return null;
  const cdLabel = cdNum === "00" ? "AL" : String(parseInt(cdNum, 10));
  return `${stateAbbrev}-${cdLabel}`;
}

/**
 * Builds the display text for the selected region based on geographic level.
 * - Tract:    "Census Tract 1234.56" / "County, ST"
 * - County:   "County, ST"
 * - District: "CA-12" / "California"  (ridings: "Riding Name" / "BC")
 * - State:    "State"
 */
function buildRegionDisplayText(
  geoId: string,
  regionName: string,
  stateName: string,
  country: Country,
  geoLevel: UnifiedGeoLevel,
): { line1: string; line2?: string } {
  const stateAbbrev = getRegionAbbreviation(stateName);

  switch (geoLevel) {
    case "tract": {
      const tractLabel = country === "canada" ? "Census Subdivision" : "Census Tract";
      const tractId = formatTractId(geoId, country);
      // Primary label = most specific entity (the tract); secondary = broader context
      const line1 = `${tractLabel} ${tractId}`;
      const line2 = regionName && stateName 
        ? `${regionName}, ${stateAbbrev}` 
        : stateName ? stateAbbrev : "";
      return { line1, line2: line2 || undefined };
    }
    case "county": {
      if (regionName && stateName) {
        return { line1: `${regionName}, ${stateAbbrev}` };
      } else if (regionName) {
        return { line1: regionName };
      }
      return { line1: geoId };
    }
    case "district": {
      if (country === "us") {
        // US: "CA-12" / "California" — election-tracker shorthand on top,
        // full state name underneath for context.
        const shorthand = formatCongressionalDistrictShorthand(geoId, stateName);
        const line1 = shorthand ?? regionName ?? geoId;
        return { line1, line2: stateName || undefined };
      }
      // Canada: riding name (regionName) on top, province abbrev underneath.
      // stateName here carries the province; getRegionAbbreviation maps both
      // US states and Canadian provinces.
      if (regionName) {
        return { line1: regionName, line2: stateAbbrev || stateName || undefined };
      }
      return { line1: geoId };
    }
    case "state": {
      return { line1: stateName || geoId };
    }
    default:
      return { line1: geoId };
  }
}

export function LeftSidebarHeader({
  selectedGeoId,
  selectedRegionName,
  selectedStateName,
  selectedCountry,
  selectedGeoLevel,
}: LeftSidebarHeaderProps) {
  const hasSelection = selectedGeoId !== "";

  const displayText = hasSelection
    ? buildRegionDisplayText(
        selectedGeoId,
        selectedRegionName,
        selectedStateName,
        selectedCountry,
        selectedGeoLevel,
      )
    : null;

  return (
    <div
      id="left-sidebar-header"
      className="relative flex min-h-[89px] w-full items-center border-b-[1px] border-solid border-leftSidebarHeaderBottomBorder bg-leftSidebarHeaderBackground pl-[18px] pr-[10px]"
    >
      <div>
        <h1 className="font-Montserrat text-sm font-bold text-leftSidebarHeaderLabelTextColor">
          SELECTED REGION
        </h1>
        {!hasSelection ? (
          <h2 className="min-h-[49px] max-w-[95%] font-Montserrat text-base font-bold text-leftSidebarHeaderLabelTextColor">
            Click on a region to view data
          </h2>
        ) : (
          <h2 className="font-Montserrat text-base font-bold leading-snug">
            {displayText?.line1}
            {displayText?.line2 && (
              <>
                <br />
                {displayText.line2}
              </>
            )}
          </h2>
        )}
      </div>
    </div>
  );
}
