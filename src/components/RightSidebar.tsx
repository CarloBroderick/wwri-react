// export default function RightSidebar() {
//     return (
// <aside
//     id="right-sidebar"
//     className="w-[523px] h-[calc(100vh-89px)] border-l-[1px] border-solid border-rightSidebarBorder px-4 pt-3"
// >
//     <h1 className="font-BeVietnamPro text-xl font-medium mb-1">
//         Indicator Navigation
//     </h1>
//     <div className="w-[90%] flex flex-row border-[1px] border-rightSidebarSearchBoxGray py-1 px-2 rounded-lg">
//         <img
//             src={SearchIcon}
//             alt=""
//         />
//         <input
//             type="text"
//             placeholder="Search or select a topic to update the map..."
//             className="w-full ml-2 bg-transparent border-none outline-none text-rightSidebarSearchBoxGray"
//         />
//     </div>
// </aside>
//     );
// }

// import React from "react";

// NOTE THE COMPONENT BELOW IS ACTUALLY GETTING KIND OF CLOSE!!!!

// import React, { useState } from "react";

// const RightSidebar = () => {
//     const [expandedSections, setExpandedSections] = useState<{
//         [key: string]: boolean;
//     }>({
//         Water: false,
//         Air: false,
//         Ecosystems: false,
//         Biodiversity: false,
//         Infrastructure: false,
//         Social: false,
//         Economy: false,
//         Culture: false,
//         Carbon: false,
//     });

//     const toggleSection = (section: string) => {
//         setExpandedSections((prevState) => ({
//             ...prevState,
//             [section]: !prevState[section],
//         }));
//     };

//     return (
//         <div className="p-4 min-w-[523px] max-w-[523px] h-[calc(100vh-89px)]">
//             <div className="mb-4 relative">
//                 <div className="flex items-center">
//                     <input
//                         type="checkbox"
//                         className="mr-2"
//                     />
//                     <span className="font-bold">Overall Resilience</span>
//                 </div>
//                 <div className="ml-6 mt-2">
//                     <div className="flex items-center">
//                         <input
//                             type="checkbox"
//                             className="mr-2"
//                         />
//                         <span className="font-bold">Water</span>
//                         <button
//                             onClick={() => toggleSection("Water")}
//                             className="ml-2"
//                         >
//                             {expandedSections.Water ? "▲" : "▼"}
//                         </button>
//                     </div>
//                     {expandedSections.Water && (
//                         <div className="ml-6 mt-2">
//                             <div className="flex">
//                                 <div className="flex flex-col items-center mr-8">
//                                     <div className="flex items-center">
//                                         <input
//                                             type="checkbox"
//                                             className="mr-2"
//                                         />
//                                         <span>Status</span>
//                                     </div>
//                                     <div className="ml-6 grid grid-cols-4 gap-2 mt-2">
//                                         {[...Array(12)].map((_, index) => (
//                                             <div
//                                                 key={index}
//                                                 className="w-6 h-6 border border-gray-400"
//                                             ></div>
//                                         ))}
//                                     </div>
//                                 </div>
//                                 <div className="flex flex-col items-center">
//                                     <div className="flex items-center">
//                                         <input
//                                             type="checkbox"
//                                             className="mr-2"
//                                         />
//                                         <span>Resilience</span>
//                                     </div>
//                                     <div className="flex mt-2">
//                                         <div className="flex flex-col items-center mr-8">
//                                             <div className="flex items-center">
//                                                 <input
//                                                     type="checkbox"
//                                                     className="mr-2"
//                                                 />
//                                                 <span>Resistance</span>
//                                             </div>
//                                             <div className="ml-6 grid grid-cols-4 gap-2 mt-2">
//                                                 {[...Array(12)].map(
//                                                     (_, index) => (
//                                                         <div
//                                                             key={index}
//                                                             className={`w-6 h-6 border border-gray-400 ${
//                                                                 index === 5
//                                                                     ? "bg-blue-500"
//                                                                     : ""
//                                                             }`}
//                                                         ></div>
//                                                     )
//                                                 )}
//                                             </div>
//                                             <span className="ml-6 mt-1 block">
//                                                 Water pollutants resistance
//                                             </span>
//                                         </div>
//                                         <div className="flex flex-col items-center">
//                                             <div className="flex items-center">
//                                                 <input
//                                                     type="checkbox"
//                                                     className="mr-2"
//                                                 />
//                                                 <span>Recovery</span>
//                                             </div>
//                                             <div className="ml-6 grid grid-cols-4 gap-2 mt-2">
//                                                 {[...Array(12)].map(
//                                                     (_, index) => (
//                                                         <div
//                                                             key={index}
//                                                             className="w-6 h-6 border border-gray-400"
//                                                         ></div>
//                                                     )
//                                                 )}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//             {[
//                 "Air",
//                 "Ecosystems",
//                 "Biodiversity",
//                 "Infrastructure",
//                 "Social",
//                 "Economy",
//                 "Culture",
//                 "Carbon",
//             ].map((category, index) => (
//                 <div
//                     key={index}
//                     className="flex items-center mb-2"
//                 >
//                     <input
//                         type="checkbox"
//                         className="mr-2"
//                     />
//                     <span>{category}</span>
//                     <button
//                         onClick={() => toggleSection(category)}
//                         className="ml-2"
//                     >
//                         {expandedSections[category] ? "▲" : "▼"}
//                     </button>
//                     {expandedSections[category] && (
//                         <div className="ml-6 mt-2 flex">
//                             <div className="flex flex-col items-center mr-8">
//                                 <div className="flex items-center">
//                                     <input
//                                         type="checkbox"
//                                         className="mr-2"
//                                     />
//                                     <span>Status</span>
//                                 </div>
//                                 <div className="ml-6 grid grid-cols-4 gap-2 mt-2">
//                                     {[...Array(12)].map((_, index) => (
//                                         <div
//                                             key={index}
//                                             className="w-6 h-6 border border-gray-400"
//                                         ></div>
//                                     ))}
//                                 </div>
//                             </div>
//                             <div className="flex flex-col items-center">
//                                 <div className="flex items-center">
//                                     <input
//                                         type="checkbox"
//                                         className="mr-2"
//                                     />
//                                     <span>Resilience</span>
//                                 </div>
//                                 <div className="flex mt-2">
//                                     <div className="flex flex-col items-center mr-8">
//                                         <div className="flex items-center">
//                                             <input
//                                                 type="checkbox"
//                                                 className="mr-2"
//                                             />
//                                             <span>Resistance</span>
//                                         </div>
//                                         <div className="ml-6 grid grid-cols-4 gap-2 mt-2">
//                                             {[...Array(12)].map((_, index) => (
//                                                 <div
//                                                     key={index}
//                                                     className={`w-6 h-6 border border-gray-400 ${
//                                                         index === 5
//                                                             ? "bg-blue-500"
//                                                             : ""
//                                                     }`}
//                                                 ></div>
//                                             ))}
//                                         </div>
//                                         <span className="ml-6 mt-1 block">
//                                             Water pollutants resistance
//                                         </span>
//                                     </div>
//                                     <div className="flex flex-col items-center">
//                                         <div className="flex items-center">
//                                             <input
//                                                 type="checkbox"
//                                                 className="mr-2"
//                                             />
//                                             <span>Recovery</span>
//                                         </div>
//                                         <div className="ml-6 grid grid-cols-4 gap-2 mt-2">
//                                             {[...Array(12)].map((_, index) => (
//                                                 <div
//                                                     key={index}
//                                                     className="w-6 h-6 border border-gray-400"
//                                                 ></div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default RightSidebar;

// THE COMPONENT ABOVE IS PRETTY CLOSE! V1

import { useState } from "react";
import HierarchyArrows from "../assets/HierarchyArrows.svg";
import SearchIcon from "../assets/SearchIcon.svg";
import SubHierarchyArrows from "../assets/SubHierarchyArrows.svg";

const RightSidebar = () => {
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({
    Water: false,
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

  return (
    <div className="h-[calc(100vh-89px)] min-w-[523px] max-w-[523px] border-l-[1px] border-solid border-rightSidebarBorder p-4">
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
      <div id="overall-resilience" className="relative mb-4 ml-[0.35rem]">
        <div className="flex items-center">
          <button className="mr-2 h-6 w-6 rounded-[0.2rem] border-[1px] border-metricSelectorBoxesBorderDefault bg-metricSelectorBoxesDefault focus:bg-selectedMetricBGColorDefault"></button>
          <span className="font-bold">Overall Resilience</span>
        </div>
        <div id="water" className="ml-7 mt-2">
          <div className="flex w-[45%] items-center justify-between">
            <div className="flex items-center">
              <button className="mr-2 h-[22px] w-[22px] justify-self-start rounded-[0.2rem] border-[1px] border-metricSelectorBoxesBorderDefault bg-metricSelectorBoxesDefault focus:bg-selectedMetricBGColorDefault"></button>
              <span className="font-bold">Water</span>
            </div>
            <button
              onClick={() => toggleSection("Water")}
              className="ml-2 text-[lightgray]"
            >
              {expandedSections.Water ? "▼" : "▲"}
            </button>
          </div>
          {expandedSections.Water && (
            <div id="subdomain-container" className="ml-4 mt-2">
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
                  className="ml-5 flex flex-shrink-0 flex-col items-center"
                >
                  <div className="-ml-12 flex items-center">
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
                  <div id="resilience-content" className="flex">
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
                      <span className="ml-5 mt-1 block font-BeVietnamPro text-xs text-selectedMetricTextLabel">
                        Water pollutants resistance
                      </span>
                    </div>
                    <div
                      id="recovery"
                      className="flex min-w-[20%] flex-col items-start pl-2"
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
          className="mb-2 ml-[2.05rem] flex items-center"
        >
          <div className="flex w-[45%] items-center justify-between">
            <div className="flex items-center">
              <button className="mr-2 h-[22px] w-[22px] justify-self-start rounded-[0.2rem] border-[1px] border-metricSelectorBoxesBorderDefault bg-metricSelectorBoxesDefault focus:bg-selectedMetricBGColorDefault"></button>
              <span className="font-bold">{category}</span>
            </div>
            <button
              onClick={() => toggleSection("Water")}
              className="ml-2 text-[lightgray]"
            >
              {expandedSections.Water ? "▼" : "▲"}
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
  );
};

export default RightSidebar;
