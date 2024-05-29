import chroma from "chroma-js";
import domainHierarchy from "data/domainHierarchy";
import { useState } from "react";
import { Domain } from "types/domainTypes";
import DownArrow from "../assets/DownArrow.svg";
import HierarchyArrows from "../assets/HierarchyArrows.svg";
import RightSideArrow from "../assets/RightSideArrow.svg";
import SearchIcon from "../assets/SearchIcon.svg";
import SubHierarchyArrows from "../assets/SubHierarchyArrows.svg";

interface RightSidebarProps {
  setSelectedMetric: (metric: string) => void;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ setSelectedMetric }) => {
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
    Water: true,
    Air: false,
    Ecosystems: false,
    Biodiversity: false,
    Infrastructure: false,
    Social: false,
    Economy: false,
    Culture: false,
    Carbon: false,
  });

  /** Function to toggle the expanded state of a section and collapse the rest
   */
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

  const getRandomItem = (array: string[]) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  return (
    <div className="h-[calc(100vh-60px)] min-w-[523px] max-w-[523px] overflow-scroll border-l-[1px] border-t-[1px] border-solid border-rightSidebarBorder px-4 pb-2 pt-[0.8rem]">
      <h1 className="mb-1 font-BeVietnamPro text-xl font-medium">
        Indicator Navigation
      </h1>
      <div className="mb-2 flex w-full flex-row rounded-lg border-[1px] border-rightSidebarSearchBoxGray px-2 py-1">
        <img src={SearchIcon} alt="" />
        <input
          type="text"
          placeholder="Search or select a topic to update the map..."
          className="ml-2 w-full border-none bg-transparent text-rightSidebarSearchBoxGray outline-none"
        />
      </div>
      <div id="overall-resilience" className="relative mb-1 ml-[0.35rem]">
        <div className="flex items-center">
          <button
            id="overall_resilience"
            onClick={() => {
              setActiveButton("overall_resilience");
              setSelectedIndicator("Overall Resilience");
            }}
            className={`mr-2 h-6 w-6 rounded-[0.2rem] border-[1px] ${
              activeButton === "overall_resilience"
                ? "border-metricSelectorBoxesBorderDefault bg-selectedMetricBGColorDefault"
                : "border-metricSelectorBoxesBorderDefault bg-metricSelectorBoxesDefault"
            }`}
          ></button>
          <span className="font-bold">Overall Resilience</span>
        </div>
        {domainHierarchy.map((domain: Domain) => (
          <div id={domain.id} className="ml-[calc(2.05rem-0.35rem)] mt-1">
            <div className="flex w-[36%] items-center justify-between">
              <div className="flex items-center">
                <button
                  id={domain.id}
                  onClick={() => {
                    setActiveButton(domain.id);
                    setSelectedIndicator(domain.label);
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
                onClick={() => toggleSection(domain.label)}
                className="ml-2 text-[lightgray]"
              >
                {expandedSections[domain.label] ? (
                  <img src={DownArrow} alt="down-arrow" className="h-3 w-3" />
                ) : (
                  <img
                    src={RightSideArrow}
                    alt="right-side-arrow"
                    className="h-3 w-3"
                  />
                )}
              </button>
            </div>
            {expandedSections[domain.label] && (
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
                <div className="flex flex-1 justify-between">
                  <div
                    id="status"
                    className="ml-[0.9rem] mr-3 flex flex-shrink-0 flex-col items-start"
                  >
                    <div className="flex items-center">
                      <button
                        id={domain.status.id}
                        onClick={() => {
                          setActiveButton(domain.status.id);
                          setSelectedIndicator(
                            `${domain.label} ${domain.status.label}`,
                          );
                        }}
                        className={`mr-1 h-4 w-4 rounded-[0.2rem] border-[1px] ${
                          activeButton === domain.status.id
                            ? "border-metricSelectorBoxesBorderDefault bg-selectedMetricBGColorDefault"
                            : "border-metricSelectorBoxesBorderDefault bg-metricSelectorBoxesDefault"
                        }`}
                      ></button>
                      <span>Status</span>
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
                            setSelectedMetric(`${domain.id}-${metric.id}`);
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
                    className="ml-8 flex w-[60%] flex-shrink-0 flex-col items-center"
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
                            }}
                            className={`mr-1 h-4 w-4 rounded-[0.2rem] border-[1px] ${
                              activeButton ===
                              `${domain.id}-${domain.resilience.resistance.id}`
                                ? "border-metricSelectorBoxesBorderDefault bg-selectedMetricBGColorDefault"
                                : "border-metricSelectorBoxesBorderDefault bg-metricSelectorBoxesDefault"
                            }`}
                          ></button>
                          <span>Resistance</span>
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
                                  setSelectedMetric(
                                    `${domain.id}-${metric.id}`,
                                  );
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
                            }}
                            className={`mr-1 h-4 w-4 rounded-[0.2rem] border-[1px] ${
                              activeButton ===
                              `${domain.id}-${domain.resilience.recovery.id}`
                                ? "border-metricSelectorBoxesBorderDefault bg-selectedMetricBGColorDefault"
                                : "border-metricSelectorBoxesBorderDefault bg-metricSelectorBoxesDefault"
                            }`}
                          ></button>
                          <span>Recovery</span>
                        </div>
                        <div className="ml-[1.14rem] grid grid-cols-5 gap-x-1 gap-y-1">
                          {domain.resilience.recovery.metrics.map(
                            (metric, index) => (
                              <button
                                key={`${domain.id}-${metric.id}`}
                                id={`${domain.id}-${metric.id}`}
                                onClick={() => {
                                  setActiveButton(`${domain.id}-${metric.id}`);
                                  setSelectedMetric(
                                    `${domain.id}-${metric.id}`,
                                  );
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
            {selectedIndicator}
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
            const bgColorClass = getRandomItem(stateBGColorMapPossibilities);
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
