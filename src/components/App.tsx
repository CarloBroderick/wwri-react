import React, { useState } from "react";
import Header from "./Header/Header";
import Hamburger from "./Hamburger";

const newLocal = (
    <aside
        id="right-sidebar"
        className="w-[523px] h-[calc(100vh-89px)] border-l-[1px] border-solid border-[black]"
    ></aside>
);

function App() {
    const [openLeftSidebar, setOpenLeftSidebar] = useState<boolean>(true);

    return (
        <div className="h-full w-full">
            <Header />
            <div
                id="body"
                className="flex flex-1"
            >
                <div
                    id="body-minus-right-sidebar"
                    className="flex flex-1 flex-col"
                >
                    <div
                        id="sub-header"
                        className="w-full h-[89px] border-b-[1px] border-solid border-[black]"
                    >
                        Subheader!
                    </div>
                    <div
                        id="left-sidebar-container"
                        className={`relative transform transition-transform duration-500 ease-in-out ${
                            openLeftSidebar
                                ? "translate-x-0"
                                : "-translate-x-full"
                        }`}
                    >
                        <aside
                            id="left-sidebar"
                            className="w-[233px] h-[calc(100vh-89px)] border-r-[1px] border-solid border-[black] absolute"
                        >
                            <div
                                id="left-sidebar-header"
                                className="relative w-full h-[89px] border-b-[1px] border-solid border-[black]"
                            >
                                <button
                                    className="absolute top-1 right-2"
                                    onClick={() => setOpenLeftSidebar(false)}
                                    aria-label="Close left sidebar"
                                >
                                    x
                                </button>
                                Left Sidebar Header!
                            </div>
                            <div
                                id="left-sidebar-body"
                                className="w-full h-[calc(100vh-178px)]"
                            >
                                Left Sidebar Body!
                            </div>
                        </aside>
                        {!openLeftSidebar && (
                            <div
                                id="hamburger-toggle-for-left-sidebar"
                                className="m-1"
                            >
                                <Hamburger
                                    onClick={() => setOpenLeftSidebar(true)}
                                />
                            </div>
                        )}
                    </div>
                    <div
                        id="map"
                        className="flex-1"
                    ></div>
                </div>
                {newLocal}
            </div>
        </div>
    );
}

export default App;
