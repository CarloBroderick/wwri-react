import chroma from "chroma-js";
import { useState } from "react";
import DownArrow from "../assets/DownArrow.svg";
import HierarchyArrows from "../assets/HierarchyArrows.svg";
import RightSideArrow from "../assets/RightSideArrow.svg";
import SearchIcon from "../assets/SearchIcon.svg";
import SubHierarchyArrows from "../assets/SubHierarchyArrows.svg";

const RightSidebar = () => {
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

  const toggleSection = (section: string) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
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
    console.log(hexColor, chroma(hexColor).luminance());
    console.log("hexColor", hexColor, chroma(hexColor).luminance() < 0.5);
    return chroma(hexColor).luminance() < 0.5;
  };

  const getRandomItem = (array: string[]) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  return (
    <div className="h-[calc(100vh-89px)] min-w-[523px] max-w-[523px] overflow-scroll border-l-[1px] border-t-[1px] border-solid border-rightSidebarBorder p-4">
      <h1 className="mb-1 font-BeVietnamPro text-xl font-medium">
        Indicator Navigation
      </h1>
      <div className="mb-4 flex w-full flex-row rounded-lg border-[1px] border-rightSidebarSearchBoxGray px-2 py-1">
        <img src={SearchIcon} alt="" />
        <input
          type="text"
          placeholder="Search or select a topic to update the map..."
          className="ml-2 w-full border-none bg-transparent text-rightSidebarSearchBoxGray outline-none"
        />
      </div>
      <div id="overall-resilience" className="relative mb-1 ml-[0.35rem]">
        <div className="flex items-center">
          <button className="mr-2 h-6 w-6 rounded-[0.2rem] border-[1px] border-metricSelectorBoxesBorderDefault bg-metricSelectorBoxesDefault focus:bg-selectedMetricBGColorDefault"></button>
          <span className="font-bold">Overall Resilience</span>
        </div>
        <div id="water" className="mb-1 ml-[calc(2.05rem-0.35rem)] mt-1">
          <div className="flex w-[36%] items-center justify-between">
            <div className="flex items-center">
              <button className="mr-2 h-[22px] w-[22px] justify-self-start rounded-[0.2rem] border-[1px] border-metricSelectorBoxesBorderDefault bg-metricSelectorBoxesDefault focus:bg-selectedMetricBGColorDefault"></button>
              <span className="font-bold">Water</span>
            </div>
            <button
              onClick={() => toggleSection("Water")}
              className="ml-2 text-[lightgray]"
            >
              {expandedSections.Water ? (
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
          {expandedSections.Water && (
            <div id="subdomain-container" className="ml-[0.95rem] mt-2">
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
                    <button className="mr-1 h-4 w-4 rounded-[0.2rem] border-[1px] border-metricSelectorBoxesBorderDefault bg-metricSelectorBoxesDefault focus:bg-selectedMetricBGColorDefault"></button>
                    <span>Status</span>
                  </div>
                  <div className="ml-[1.14rem] grid grid-cols-5 gap-x-1 gap-y-1">
                    {[...Array(12)].map((_, index) => (
                      <button
                        key="index"
                        className="h-3.5 w-3.5 rounded-sm border-[1px] border-metricSelectorBoxesBorderDefault bg-metricSelectorBoxesDefault focus:bg-selectedMetricBGColorDefault"
                      ></button>
                    ))}
                  </div>
                </div>
                <div
                  id="resilience"
                  className="ml-8 flex w-[60%] flex-shrink-0 flex-col items-center"
                >
                  <div className="ml-[4.4rem] flex items-center self-start">
                    <button className="mr-1 h-4 w-4 rounded-[0.2rem] border-[1px] border-metricSelectorBoxesBorderDefault bg-metricSelectorBoxesDefault focus:bg-selectedMetricBGColorDefault"></button>
                    <span>Resilience</span>
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
                        <button className="mr-1 h-4 w-4 rounded-[0.2rem] border-[1px] border-metricSelectorBoxesBorderDefault bg-metricSelectorBoxesDefault focus:bg-selectedMetricBGColorDefault"></button>
                        <span>Resistance</span>
                      </div>
                      <div className="ml-[1.14rem] grid grid-cols-5 gap-x-1 gap-y-1">
                        {[...Array(12)].map((_, index) => (
                          <button
                            key="index"
                            className="h-3.5 w-3.5 rounded-sm border-[1px] border-metricSelectorBoxesBorderDefault bg-metricSelectorBoxesDefault focus:bg-selectedMetricBGColorDefault"
                          ></button>
                        ))}
                      </div>
                      <span className="ml-[1.125rem] mt-1 block font-BeVietnamPro text-xs text-selectedMetricTextLabel">
                        Water pollutants resistance
                      </span>
                    </div>
                    <div
                      id="recovery"
                      className="ml-5 flex min-w-[45%] flex-col items-start"
                    >
                      <div className="flex items-center">
                        <button className="mr-1 h-4 w-4 rounded-[0.2rem] border-[1px] border-metricSelectorBoxesBorderDefault bg-metricSelectorBoxesDefault focus:bg-selectedMetricBGColorDefault"></button>
                        <span>Recovery</span>
                      </div>
                      <div className="ml-[1.14rem] grid grid-cols-5 gap-x-1 gap-y-1">
                        {[...Array(12)].map((_, index) => (
                          <button
                            key="index"
                            className="h-3.5 w-3.5 rounded-sm border-[1px] border-metricSelectorBoxesBorderDefault bg-metricSelectorBoxesDefault focus:bg-selectedMetricBGColorDefault"
                          ></button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {[
          "Air",
          "Ecosystems",
          "Biodiversity",
          "Infrastructure",
          "Social",
          "Economy",
          "Culture",
          "Carbon",
        ].map((category, index) => (
          <div
            key={index}
            id={category.toLowerCase()}
            className="mb-1 ml-[calc(2.05rem-0.35rem)] flex items-center"
          >
            <div className="flex w-[36%] items-center justify-between">
              <div className="flex items-center">
                <button className="mr-2 h-[22px] w-[22px] justify-self-start rounded-[0.2rem] border-[1px] border-metricSelectorBoxesBorderDefault bg-metricSelectorBoxesDefault focus:bg-selectedMetricBGColorDefault"></button>
                <span className="font-bold">{category}</span>
              </div>
              <button
                onClick={() => toggleSection("Water")}
                className="ml-2 text-[lightgray]"
              >
                {expandedSections.Water ? (
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
            {expandedSections[category] && (
              <div className="ml-6 mt-2 flex">
                <div
                  id={`${category.toLowerCase()}-status`}
                  className="mr-8 flex flex-col items-center"
                >
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Status</span>
                  </div>
                  <div className="ml-6 mt-2 grid grid-cols-4 gap-2">
                    {[...Array(12)].map((_, index) => (
                      <div
                        key={index}
                        className="h-6 w-6 border border-gray-400"
                      ></div>
                    ))}
                  </div>
                </div>
                <div
                  id={`${category.toLowerCase()}-resilience`}
                  className="flex flex-col items-center"
                >
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Resilience</span>
                  </div>
                  <div className="mt-2 flex">
                    <div
                      id={`${category.toLowerCase()}-resistance`}
                      className="mr-8 flex flex-col items-center"
                    >
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>Resistance</span>
                      </div>
                      <div className="ml-6 mt-2 grid grid-cols-4 gap-2">
                        {[...Array(12)].map((_, index) => (
                          <div
                            key={index}
                            className={`h-6 w-6 border border-gray-400 ${
                              index === 5 ? "bg-blue-500" : ""
                            }`}
                          ></div>
                        ))}
                      </div>
                      <span className="ml-6 mt-1 block">
                        Water pollutants resistance
                      </span>
                    </div>
                    <div
                      id={`${category.toLowerCase()}-recovery`}
                      className="flex flex-col items-center"
                    >
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>Recovery</span>
                      </div>
                      <div className="ml-6 mt-2 grid grid-cols-4 gap-2">
                        {[...Array(12)].map((_, index) => (
                          <div
                            key={index}
                            className="h-6 w-6 border border-gray-400"
                          ></div>
                        ))}
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
        className="relative -ml-4 -mr-4 mt-4 flex w-[calc(100%+2rem)] flex-col bg-subheaderBackground p-2"
      >
        <h1 className="text-selectedIndicatorTextColor ml-2 text-sm font-bold">
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
            Water pollutants resistance
          </span>
        </div>
      </div>
      <h1 className="font-BeVietnamePro text-geopgrahicContextLabelTextColor mt-1 text-lg font-medium">
        Geographic Context
      </h1>
      <h3 className="text-geopgrahicContextDescriptionTextColor text-sm">
        Select an area to focus the map.
      </h3>
      <div id="state-navigation-bottom-bar" className="ml-6 mt-4 max-w-[280px]">
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
