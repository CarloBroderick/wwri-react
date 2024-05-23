import SearchIcon from "../assets/SearchIcon.svg";

// export default function RightSidebar() {
//     return (
//         <aside
//             id="right-sidebar"
//             className="w-[523px] h-[calc(100vh-89px)] border-l-[1px] border-solid border-rightSidebarBorder px-4 pt-3"
//         >
//             <h1 className="font-BeVietnamPro text-xl font-medium mb-1">
//                 Indicator Navigation
//             </h1>
//             <div className="w-[90%] flex flex-row border-[1px] border-rightSidebarSearchBoxGray py-1 px-2 rounded-lg">
//                 <img
//                     src={SearchIcon}
//                     alt=""
//                 />
//                 <input
//                     type="text"
//                     placeholder="Search or select a topic to update the map..."
//                     className="w-full ml-2 bg-transparent border-none outline-none text-rightSidebarSearchBoxGray"
//                 />
//             </div>
//         </aside>
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

import React, { useState } from "react";

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
        <div className="p-4 w-[523px] h-[calc(100vh-89px)]">
            <div
                id="overall-resilience"
                className="mb-4 relative"
            >
                <div className="flex items-center">
                    {/* <input
                        type="checkbox"
                        className="mr-2 h-6 w-6 bg-metricSelectorBoxesDefault"
                    /> */}
                    <button className="mr-2 h-6 w-6 bg-metricSelectorBoxesDefault border-[1px] border-metricSelectorBoxesBorderDefault rounded-[0.2rem] focus:bg-[lightblue]"></button>
                    <span className="font-bold">Overall Resilience</span>
                </div>
                <div
                    id="water"
                    className="ml-6 mt-2"
                >
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            className="mr-2 h-[22px] w-[22px]"
                        />
                        <span className="font-bold">Water</span>
                        <button
                            onClick={() => toggleSection("Water")}
                            className="ml-2"
                        >
                            {expandedSections.Water ? "▲" : "▼"}
                        </button>
                    </div>
                    {expandedSections.Water && (
                        <div className="ml-4 mt-2">
                            <div
                                id="water-placeholder"
                                className="w-full h-4 bg-gray-200"
                            ></div>
                            <div className="flex">
                                <div
                                    id="status"
                                    className="flex flex-col items-start mr-3"
                                >
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            className="mr-2 h-4 w-4"
                                        />
                                        <span>Status</span>
                                    </div>
                                    <div className="ml-4 grid grid-cols-5 gap-x-2 gap-y-1 mt-2">
                                        {[...Array(12)].map((_, index) => (
                                            <div
                                                key={index}
                                                className="w-4 h-4 border border-gray-400 rounded-sm"
                                            ></div>
                                        ))}
                                    </div>
                                </div>
                                <div
                                    id="resilience"
                                    className="flex flex-col items-center"
                                >
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            className="mr-2 h-4 w-4"
                                        />
                                        <span>Resilience</span>
                                    </div>
                                    <div
                                        id="resilience-content"
                                        className="flex mt-2"
                                    >
                                        <div
                                            id="resistance"
                                            className="flex flex-col items-center mr-8"
                                        >
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    className="mr-2"
                                                />
                                                <span>Resistance</span>
                                            </div>
                                            <div className="ml-6 grid grid-cols-4 gap-2 mt-2">
                                                {[...Array(12)].map(
                                                    (_, index) => (
                                                        <div
                                                            key={index}
                                                            className={`w-6 h-6 border border-gray-400 ${
                                                                index === 5
                                                                    ? "bg-blue-500"
                                                                    : ""
                                                            }`}
                                                        ></div>
                                                    )
                                                )}
                                            </div>
                                            <span className="ml-6 mt-1 block">
                                                Water pollutants resistance
                                            </span>
                                        </div>
                                        <div
                                            id="recovery"
                                            className="flex flex-col items-center"
                                        >
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    className="mr-2"
                                                />
                                                <span>Recovery</span>
                                            </div>
                                            <div className="ml-6 grid grid-cols-4 gap-2 mt-2">
                                                {[...Array(12)].map(
                                                    (_, index) => (
                                                        <div
                                                            key={index}
                                                            className="w-6 h-6 border border-gray-400"
                                                        ></div>
                                                    )
                                                )}
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
                    className="flex items-center mb-2"
                >
                    <input
                        type="checkbox"
                        className="mr-2"
                    />
                    <span>{category}</span>
                    <button
                        onClick={() => toggleSection(category)}
                        className="ml-2"
                    >
                        {expandedSections[category] ? "▲" : "▼"}
                    </button>
                    {expandedSections[category] && (
                        <div className="ml-6 mt-2 flex">
                            <div
                                id={`${category.toLowerCase()}-status`}
                                className="flex flex-col items-center mr-8"
                            >
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="mr-2"
                                    />
                                    <span>Status</span>
                                </div>
                                <div className="ml-6 grid grid-cols-4 gap-2 mt-2">
                                    {[...Array(12)].map((_, index) => (
                                        <div
                                            key={index}
                                            className="w-6 h-6 border border-gray-400"
                                        ></div>
                                    ))}
                                </div>
                            </div>
                            <div
                                id={`${category.toLowerCase()}-resilience`}
                                className="flex flex-col items-center"
                            >
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="mr-2"
                                    />
                                    <span>Resilience</span>
                                </div>
                                <div className="flex mt-2">
                                    <div
                                        id={`${category.toLowerCase()}-resistance`}
                                        className="flex flex-col items-center mr-8"
                                    >
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="mr-2"
                                            />
                                            <span>Resistance</span>
                                        </div>
                                        <div className="ml-6 grid grid-cols-4 gap-2 mt-2">
                                            {[...Array(12)].map((_, index) => (
                                                <div
                                                    key={index}
                                                    className={`w-6 h-6 border border-gray-400 ${
                                                        index === 5
                                                            ? "bg-blue-500"
                                                            : ""
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
                                            <input
                                                type="checkbox"
                                                className="mr-2"
                                            />
                                            <span>Recovery</span>
                                        </div>
                                        <div className="ml-6 grid grid-cols-4 gap-2 mt-2">
                                            {[...Array(12)].map((_, index) => (
                                                <div
                                                    key={index}
                                                    className="w-6 h-6 border border-gray-400"
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
