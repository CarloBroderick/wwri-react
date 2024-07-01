import chroma from "chroma-js";
import domainHierarchy from "data/domainHierarchy";
import { useEffect, useState } from "react";
import SelectedMetricIdObject from "types/componentStatetypes";
import { Domain } from "types/domainTypes";
import DownArrow from "../assets/DownArrow.svg";
import HierarchyArrows from "../assets/HierarchyArrows.svg";
import RightSideArrow from "../assets/RightSideArrow.svg";
import SearchIcon from "../assets/SearchIcon.svg";
import SubHierarchyArrows from "../assets/SubHierarchyArrows.svg";
import flattenDomainHierarchy, {
  IndicatorObject,
} from "../utils/flattenDomainHierarchyForSearch";

interface RightSidebarProps {
  selectedMetricIdObject: SelectedMetricIdObject | null;
  setSelectedMetricIdObject: (metric: SelectedMetricIdObject) => void;
}

const stateMap = [
  ["AK", "", "", "", "", "", "", "", "", "", "ME"],
  ["", "", "", "", "", "", "", "", "NY", "VT", "NH"],
  ["WA", "", "MT", "ND", "MN", "WI", "MI", "", "NJ", "CT", "NH"],
  ["OR", "ID", "WY", "SD", "IL", "IN", "OH", "PA", "MD", "RI", ""],
  ["CA", "NV", "UT", "NE", "IA", "KY", "WV", "VA", "DC", "", ""],
  ["", "AZ", "CO", "KS", "MO", "TN", "NC", "SC", "DE", "", ""],
  ["", "", "NM", "OK", "AR", "MS", "AL", "GA", "", "", ""],
  ["HI", "", "", "TX", "LA", "", "", "", "FL", "", ""],
];

const stateBGColorMapPossibilities: string[] = [
  "bg-[#DFE3D5]",
  "bg-[#DFE2D2]",
  "bg-[#7D9FA7]",
  "bg-[#445D7A]",
  "bg-[#5E7B8B]",
  "bg-[#162836]",
];

const getHexFromClass = (colorClass: string) => {
  return colorClass.slice(4, -1); // Remove "bg-[" from the beginning and "]" from the end
};

const isDarkColor = (colorClass: string) => {
  const hexColor = getHexFromClass(colorClass);
  return chroma(hexColor).luminance() < 0.5;
};

const getColorBasedOnIndex = (index: number, colorArray: string[]) => {
  const colorIndex = index % colorArray.length;
  return colorArray[colorIndex];
};

const highlightMatches = (text: string, searchTerm: string) => {
  const parts = text.split(new RegExp(`(${searchTerm})`, "gi"));
  return parts.map((part, index) =>
    part.toLowerCase() === searchTerm.toLowerCase() ? (
      <strong key={index}>{part}</strong>
    ) : (
      part
    ),
  );
};

const RightSidebar: React.FC<RightSidebarProps> = ({
  selectedMetricIdObject,
  setSelectedMetricIdObject,
}) => {
  const [showIndicatorSuggestions, setShowIndicatorSuggestions] =
    useState(false);
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [statusLabel, setStatusLabel] = useState<string | null>(null);
  const [resistanceLabel, setResistanceLabel] = useState<string | null>(null);
  const [recoveryLabel, setRecoveryLabel] = useState<string | null>(null);
  const [selectedIndicator, setSelectedIndicator] = useState<string | null>(
    "Water Pollutants Resistance",
  );
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({
    water: true,
    air: false,
    ecosystems: false,
    biodiversity: false,
    infrastructure: false,
    social: false,
    economy: false,
    culture: false,
    carbon: false,
  });

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<
    IndicatorObject[]
  >([]);

  const hierarchicalStrings = flattenDomainHierarchy(domainHierarchy);

  useEffect(() => {
    if (searchTerm) {
      const lowerCaseTerm = searchTerm.toLowerCase();
      const filtered = hierarchicalStrings.filter(
        (indicatorObject: IndicatorObject) =>
          indicatorObject.traversedPathForSearchSuggestions
            .toLowerCase()
            .includes(lowerCaseTerm),
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  }, [searchTerm]);

  const toggleSection = (section: string) => {
    setExpandedSections((prevState) => {
      const newState: { [key: string]: boolean } = {};
      for (const key in prevState) {
        if (key === section) {
          newState[key] = !prevState[key];
        } else {
          newState[key] = false;
        }
      }
      return newState;
    });
  };

  return (
    <div
      id="right-sidebar"
      className="h-[calc(100vh-60px)] min-w-[470px] max-w-[470px] overflow-scroll border-l-[1px] border-t-[1px] border-solid border-rightSidebarBorder px-4 pb-2 pt-[0.8rem]"
    >
      <h1
        id="indicator-navigation-header"
        className="mb-1 font-BeVietnamPro text-xl font-medium"
      >
        Indicator Navigation
      </h1>
      <div
        id="indicator-search-box"
        className={`relative mb-2 flex w-full flex-row border-[1px] border-rightSidebarSearchBoxGray px-2 py-1 ${
          showIndicatorSuggestions ? "rounded-t-lg" : "rounded-lg rounded-b-lg"
        }`}
      >
        <img src={SearchIcon} alt="" />
        <input
          type="text"
          placeholder="Search or select a topic to update the map..."
          className="ml-2 w-full border-none bg-transparent text-rightSidebarSearchBoxGray outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onInput={(e) =>
            setShowIndicatorSuggestions(
              (e.target as HTMLInputElement).value !== "",
            )
          }
          onFocus={(e) => {
            if (e.target.value) {
              setShowIndicatorSuggestions(true);
            }
          }}
          onBlur={() => setShowIndicatorSuggestions(false)}
        />
        {showIndicatorSuggestions && (
          <div
            id="indicator-search-suggestions"
            className="absolute left-[-1px] top-[2rem] z-20 max-h-48 min-h-[10rem] w-[calc(100%+2px)] overflow-y-auto rounded-b-lg border-b border-l border-r border-t border-rightSidebarSearchBoxGray border-t-gray-200 bg-white"
          >
            {filteredSuggestions.map((suggestion, index) => (
              <div
                key={index}
                className="cursor-pointer py-1 pl-9 hover:bg-gray-200"
                onMouseDown={() => {
                  setActiveButton(
                    `${suggestion.domainId}-${suggestion.metricId}`,
                  );
                  toggleSection(suggestion.domainId);
                  setSelectedIndicator(suggestion.label);
                  setSelectedMetricIdObject({
                    domainId: suggestion.domainId,
                    metricId: suggestion.metricId,
                    label: suggestion.label,
                    description: suggestion.description,
                    colorGradient: suggestion.colorGradient,
                  });
                  setSearchTerm("");
                  setShowIndicatorSuggestions(false);
                }}
              >
                <span className="font-be-vietnam-pro text-base text-rightSidebarSearchBoxGray">
                  {highlightMatches(
                    suggestion.traversedPathForSearchSuggestions,
                    searchTerm,
                  )}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div id="overall-resilience" className="relative mb-1 ml-[0.35rem]">
        <div className="flex items-center">
          <button
            id="overall_resilience"
            onClick={() => {
              setActiveButton("overall_resilience");
              setSelectedIndicator("Overall Resilience");
              setSelectedMetricIdObject({
                domainId: "overall_resilience",
                metricId: "overall_resilience",
                label: "Overall Score",
                description:
                  "The overall resilience score to wildfires. This score is calculated from the resilience scores of each domain (e.g. Water, Air, etc.).",
                colorGradient: {
                  startColor: { r: 250, g: 250, b: 244 },
                  endColor: { r: 26, g: 41, b: 60 },
                },
              });
            }}
            className={`mr-2 h-6 w-6 rounded-[0.2rem] border-[1px] ${
              activeButton === "overall_resilience"
                ? "border-metricSelectorBoxesBorderDefault bg-selectedMetricBGColorDefault"
                : "border-metricSelectorBoxesBorderDefault bg-metricSelectorBoxesDefault"
            }`}
          ></button>
          <span className="font-bold">Overall Score</span>
        </div>
        {domainHierarchy.map((domain: Domain) => (
          <div
            id={domain.id}
            className="ml-[calc(2.05rem-0.35rem)] mt-1"
            key={domain.id}
          >
            <div className="flex w-[39%] items-center justify-between">
              <div className="flex items-center">
                <button
                  id={domain.id}
                  onClick={() => {
                    setActiveButton(domain.id);
                    setSelectedIndicator(domain.label);
                    setSelectedMetricIdObject({
                      domainId: domain.id,
                      metricId: domain.id,
                      label: domain.label,
                      description: domain.description,
                      colorGradient: domain.colorGradient,
                    });
                  }}
                  className={`mr-2 h-[20px] w-[20px] justify-self-start rounded-[0.2rem] border-[1px] ${
                    activeButton === domain.id
                      ? "border-metricSelectorBoxesBorderDefault bg-selectedMetricBGColorDefault"
                      : "border-metricSelectorBoxesBorderDefault bg-metricSelectorBoxesDefault"
                  }`}
                ></button>
                <span className="font-bold">{domain.label}</span>
              </div>
              <button
                onClick={() => toggleSection(domain.id)}
                className="ml-2 text-[lightgray]"
              >
                {expandedSections[domain.id] ? (
                  <img
                    src={DownArrow}
                    alt="down-arrow"
                    className="min-h-3 min-w-3"
                  />
                ) : (
                  <img
                    src={RightSideArrow}
                    alt="right-side-arrow"
                    className="min-h-3 min-w-3"
                  />
                )}
              </button>
            </div>
            {expandedSections[domain.id] && (
              <div
                id="subdomain-container"
                className="ml-[0.95rem] mt-1 h-[9.5rem]"
              >
                <div
                  id="arrows-first-two-sub-domains-container"
                  className="ml-2 h-5 flex-shrink-0"
                >
                  <img
                    src={HierarchyArrows}
                    alt="arrows-first-two-sub-domains"
                    className="ml-3 h-full w-auto"
                  />
                </div>
                <div className="flex max-w-[390px] flex-1 justify-between">
                  <div
                    id="status"
                    className="ml-[0.9rem] mr-3 flex flex-shrink-0 flex-col items-start"
                  >
                    <div className="flex items-center">
                      <button
                        id={domain.status.id}
                        onClick={() => {
                          setActiveButton(`${domain.id}-${domain.status.id}`);
                          setSelectedIndicator(
                            `${domain.label} ${domain.status.label}`,
                          );
                          setSelectedMetricIdObject({
                            domainId: domain.id,
                            metricId: domain.status.id,
                            label: `${domain.status.label}`,
                            description: domain.status.description,
                            colorGradient: domain.colorGradient,
                          });
                        }}
                        className={`mr-1 h-4 w-4 rounded-[0.2rem] border-[1px] ${
                          activeButton === `${domain.id}-${domain.status.id}`
                            ? "border-metricSelectorBoxesBorderDefault bg-selectedMetricBGColorDefault"
                            : "border-metricSelectorBoxesBorderDefault bg-metricSelectorBoxesDefault"
                        }`}
                      ></button>
                      <span>{domain.status.label}</span>
                    </div>
                    <div className="ml-[1.14rem] grid grid-cols-5 gap-x-1 gap-y-1">
                      {domain.status.metrics.map((metric, index) => (
                        <button
                          key={`${domain.id}-${metric.id}`}
                          id={`${domain.id}-${metric.id}`}
                          onMouseEnter={() => setStatusLabel(metric.label)}
                          onMouseLeave={() => setStatusLabel(null)}
                          onClick={() => {
                            setActiveButton(`${domain.id}-${metric.id}`);
                            setSelectedMetricIdObject({
                              domainId: domain.id,
                              metricId: metric.id,
                              label: `${domain.label} ${metric.label}`,
                              description: metric.description,
                              colorGradient: domain.colorGradient,
                            });
                            setSelectedIndicator(
                              `${domain.label} ${metric.label}`,
                            );
                          }}
                          className={`h-3.5 w-3.5 rounded-sm border-[1px] ${
                            activeButton === `${domain.id}-${metric.id}`
                              ? "border-metricSelectorBoxesBorderDefault bg-selectedMetricBGColorDefault"
                              : "border-metricSelectorBoxesBorderDefault bg-metricSelectorBoxesDefault"
                          }`}
                        ></button>
                      ))}
                    </div>
                    {statusLabel && (
                      <span className="ml-[1.125rem] mt-1 block max-w-[6rem] font-BeVietnamPro text-xs text-selectedMetricTextLabel">
                        {statusLabel}
                      </span>
                    )}
                  </div>
                  <div
                    id="resilience"
                    className="ml-2 flex w-[60%] flex-shrink-0 flex-col items-center"
                  >
                    <div className="ml-[4.4rem] flex items-center self-start">
                      <button
                        id={`${domain.id}-${domain.resilience.id}`}
                        onClick={() => {
                          setActiveButton(
                            `${domain.id}-${domain.resilience.id}`,
                          );
                          setSelectedIndicator(
                            `${domain.label} ${domain.resilience.label}`,
                          );
                          setSelectedMetricIdObject({
                            domainId: domain.id,
                            metricId: domain.resilience.id,
                            label: `${domain.resilience.label}`,
                            description: domain.resilience.description,
                            colorGradient: domain.colorGradient,
                          });
                        }}
                        className={`mr-1 h-4 w-4 rounded-[0.2rem] border-[1px] ${
                          activeButton ===
                          `${domain.id}-${domain.resilience.id}`
                            ? "border-metricSelectorBoxesBorderDefault bg-selectedMetricBGColorDefault"
                            : "border-metricSelectorBoxesBorderDefault bg-metricSelectorBoxesDefault"
                        }`}
                      ></button>
                      <span>{domain.resilience.label}</span>
                    </div>
                    <div
                      id="arrows-for-resilience"
                      className="ml-[0.6rem] h-5 flex-shrink-0 self-start"
                    >
                      <img
                        src={SubHierarchyArrows}
                        alt="arrows-first-two-sub-domains"
                        className="h-full w-auto"
                      />
                    </div>
                    <div
                      id="resilience-content"
                      className="flex w-full flex-row justify-between"
                    >
                      <div
                        id="resistance"
                        className="ml-1 flex w-[45%] flex-shrink-0 flex-col items-start"
                      >
                        <div className="flex items-center">
                          <button
                            id={`${domain.id}-${domain.resilience.resistance.id}`}
                            onClick={() => {
                              setActiveButton(
                                `${domain.id}-${domain.resilience.resistance.id}`,
                              );
                              setSelectedIndicator(
                                `${domain.label} ${domain.resilience.resistance.label}`,
                              );
                              setSelectedMetricIdObject({
                                domainId: domain.id,
                                metricId: domain.resilience.resistance.id,
                                label: `${domain.resilience.resistance.label}`,
                                description:
                                  domain.resilience.resistance.description,
                                colorGradient: domain.colorGradient,
                              });
                            }}
                            className={`mr-1 h-4 w-4 rounded-[0.2rem] border-[1px] ${
                              activeButton ===
                              `${domain.id}-${domain.resilience.resistance.id}`
                                ? "border-metricSelectorBoxesBorderDefault bg-selectedMetricBGColorDefault"
                                : "border-metricSelectorBoxesBorderDefault bg-metricSelectorBoxesDefault"
                            }`}
                          ></button>
                          {/* TODO: increase the font size later */}
                          <span>{domain.resilience.resistance.label}</span>
                        </div>
                        <div className="ml-[1.14rem] grid grid-cols-5 gap-x-1 gap-y-1">
                          {domain.resilience.resistance.metrics.map(
                            (metric, index) => (
                              <button
                                key={`${domain.id}-${metric.id}`}
                                id={`${domain.id}-${metric.id}`}
                                onMouseEnter={() => {
                                  setResistanceLabel(metric.label);
                                }}
                                onMouseLeave={() => {
                                  setResistanceLabel(null);
                                }}
                                onClick={() => {
                                  setActiveButton(`${domain.id}-${metric.id}`);
                                  setSelectedMetricIdObject({
                                    domainId: domain.id,
                                    metricId: metric.id,
                                    label: `${domain.label} ${metric.label}`,
                                    description: metric.description,
                                    colorGradient: domain.colorGradient,
                                  });
                                  setSelectedIndicator(
                                    `${domain.label} ${metric.label}`,
                                  );
                                }}
                                className={`h-3.5 w-3.5 rounded-sm border-[1px] ${
                                  activeButton === `${domain.id}-${metric.id}`
                                    ? "border-metricSelectorBoxesBorderDefault bg-selectedMetricBGColorDefault"
                                    : "border-metricSelectorBoxesBorderDefault bg-metricSelectorBoxesDefault"
                                }`}
                              ></button>
                            ),
                          )}
                        </div>
                        {resistanceLabel && (
                          <span className="ml-[1.125rem] mt-1 block font-BeVietnamPro text-xs text-selectedMetricTextLabel">
                            {resistanceLabel}
                          </span>
                        )}
                      </div>
                      <div
                        id="recovery"
                        className="ml-5 flex min-w-[50%] flex-col items-start"
                      >
                        <div className="flex items-center">
                          <button
                            id={`${domain.id}-${domain.resilience.recovery.id}`}
                            onClick={() => {
                              setActiveButton(
                                `${domain.id}-${domain.resilience.recovery.id}`,
                              );
                              setSelectedIndicator(
                                `${domain.label} ${domain.resilience.recovery.label}`,
                              );
                              setSelectedMetricIdObject({
                                domainId: domain.id,
                                metricId: domain.resilience.recovery.id,
                                label: `${domain.resilience.recovery.label}`,
                                description:
                                  domain.resilience.recovery.description,
                                colorGradient: domain.colorGradient,
                              });
                            }}
                            className={`mr-1 h-4 w-4 rounded-[0.2rem] border-[1px] ${
                              activeButton ===
                              `${domain.id}-${domain.resilience.recovery.id}`
                                ? "border-metricSelectorBoxesBorderDefault bg-selectedMetricBGColorDefault"
                                : "border-metricSelectorBoxesBorderDefault bg-metricSelectorBoxesDefault"
                            }`}
                          ></button>
                          <span>{domain.resilience.recovery.label}</span>
                        </div>
                        <div className="ml-[1.14rem] grid grid-cols-5 gap-x-1 gap-y-1">
                          {domain.resilience.recovery.metrics.map(
                            (metric, index) => (
                              <button
                                key={`${domain.id}-${metric.id}`}
                                id={`${domain.id}-${metric.id}`}
                                onClick={() => {
                                  setActiveButton(`${domain.id}-${metric.id}`);
                                  setSelectedMetricIdObject({
                                    domainId: domain.id,
                                    metricId: metric.id,
                                    label: `${domain.label} ${metric.label}`,
                                    description: metric.description,
                                    colorGradient: domain.colorGradient,
                                  });
                                  setSelectedIndicator(
                                    `${domain.label} ${metric.label}`,
                                  );
                                }}
                                onMouseEnter={() => {
                                  setRecoveryLabel(metric.label);
                                }}
                                onMouseLeave={() => {
                                  setRecoveryLabel(null);
                                }}
                                className={`h-3.5 w-3.5 rounded-sm border-[1px] ${
                                  activeButton === `${domain.id}-${metric.id}`
                                    ? "border-metricSelectorBoxesBorderDefault bg-selectedMetricBGColorDefault"
                                    : "border-metricSelectorBoxesBorderDefault bg-metricSelectorBoxesDefault"
                                }`}
                              ></button>
                            ),
                          )}
                        </div>
                        {recoveryLabel && (
                          <span className="ml-[1.125rem] mt-1 block font-BeVietnamPro text-xs text-selectedMetricTextLabel">
                            {recoveryLabel}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div
        id="selected-indicator-right-sidebar"
        className="relative -ml-4 -mr-4 mt-3 flex w-[calc(100%+2rem)] flex-col bg-subheaderBackground p-2"
      >
        <h1 className="ml-2 text-sm font-bold text-selectedIndicatorTextColor">
          SELECTED INDICATOR
        </h1>
        <div id="box-holder" className="ml-2 flex flex-row items-center">
          <button
            id="selected-indicator-box"
            className="flex h-5 w-5 items-center justify-center rounded-[0.2rem] border-[1px] border-black bg-[#2693C4]"
          >
            <div className="h-full w-full rounded-sm"></div>
          </button>
          <span className="ml-2 font-BeVietnamPro font-semibold">
            {selectedMetricIdObject
              ? selectedMetricIdObject.label
              : "Water Pollutants Resistance"}
          </span>
        </div>
      </div>
      <h1 className="font-BeVietnamePro mt-1 text-lg font-medium text-geopgrahicContextLabelTextColor">
        Geographic Context
      </h1>
      <h3 className="text-sm text-geopgrahicContextDescriptionTextColor">
        Select an area to focus the map.
      </h3>
      <div id="state-navigation-bottom-bar" className="ml-8 mt-4 max-w-[280px]">
        <div className="grid grid-cols-11 grid-rows-7 gap-1">
          {stateMap.flat().map((state, index) => {
            const bgColorClass = getColorBasedOnIndex(
              index,
              stateBGColorMapPossibilities,
            );
            const textColorClass =
              state && isDarkColor(bgColorClass) ? "text-white" : "text-black";
            return (
              <button
                key={index}
                className={`flex h-[20px] w-[20px] items-center justify-center text-[10px] font-semibold ${textColorClass} ${state ? bgColorClass : ""}`}
              >
                {state}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
