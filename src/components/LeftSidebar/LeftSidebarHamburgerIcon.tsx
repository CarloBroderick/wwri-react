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
      className="absolute left-1 top-1 z-30 flex h-10 w-10 flex-col items-center justify-center rounded border border-gray-400 bg-white p-2"
    >
      <div className="mb-1 h-0.5 w-6 bg-gray-800"></div>
      <div className="mb-1 h-0.5 w-6 bg-gray-800"></div>
      <div className="h-0.5 w-6 bg-gray-800"></div>
    </button>
  );
};

export default LeftSidebarHamburgerIcon;
