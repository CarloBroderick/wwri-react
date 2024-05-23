import React, { useState, useEffect } from "react";
import LeftSidebarHamburgerIcon from "./LeftSidebarHamburgerIcon";
import { LeftSidebarHeader } from "./LeftSidebarHeader";
import { LeftSidebarBody } from "./LeftSidebarBody";
import { CloseLeftSidebarButton } from "./CloseLeftSidebarButton";

const LeftSidebar: React.FC = () => {
    const [openLeftSidebar, setOpenLeftSidebar] = useState<boolean>(true);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    useEffect(() => {
        if (!openLeftSidebar) {
            setIsAnimating(true);
        }
    }, [openLeftSidebar]);

    const handleTransitionEnd = () => {
        if (!openLeftSidebar) {
            setIsAnimating(false);
        }
    };

    // 88px 80px

    return (
        <div className="relative">
            <aside
                id="left-sidebar"
                className={`w-[233px] h-[calc(100vh-170px)] border-r-[1px] border-solid border-leftSidebarRightBorder absolute transition-transform duration-300 ease-in-out ${
                    openLeftSidebar ? "translate-x-0" : "-translate-x-full"
                }`}
                onTransitionEnd={handleTransitionEnd}
            >
                <CloseLeftSidebarButton
                    setOpenLeftSidebar={setOpenLeftSidebar}
                />
                <LeftSidebarHeader />
                <LeftSidebarBody />
            </aside>
            {!openLeftSidebar && !isAnimating && (
                <div
                    id="hamburger-toggle-for-left-sidebar"
                    className="m-1"
                >
                    <LeftSidebarHamburgerIcon
                        onClick={() => setOpenLeftSidebar(true)}
                    />
                </div>
            )}
        </div>
    );
};

export default LeftSidebar;
