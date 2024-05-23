import React from "react";

interface LeftSidebarHamburgerPropsIcon {
    onClick: () => void;
}

const LeftSidebarHamburgerIcon: React.FC<LeftSidebarHamburgerPropsIcon> = ({
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            className="flex flex-col items-center justify-center w-10 h-10 p-2 border border-gray-400 rounded"
        >
            <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-800"></div>
        </button>
    );
};

export default LeftSidebarHamburgerIcon;
