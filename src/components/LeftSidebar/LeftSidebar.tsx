import { StateNames } from "data/StateNameToAbbrevsMap";
import React, { useEffect, useState } from "react";
import { CloseLeftSidebarButton } from "./CloseLeftSidebarButton";
import { LeftSidebarBody } from "./LeftSidebarBody";
import LeftSidebarHamburgerIcon from "./LeftSidebarHamburgerIcon";
import { LeftSidebarHeader } from "./LeftSidebarHeader";

interface LeftSidebarProps {
  selectedCountyName: string;
  selectedStateName: StateNames;
  selectedCensusTract: string;
  selectedMetricValue: number | null;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({
  selectedCountyName,
  selectedStateName,
  selectedCensusTract,
  selectedMetricValue,
}) => {
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
    <div className="">
      <aside
        id="left-sidebar"
        className={`absolute z-10 h-[calc(100vh-140px)] w-[233px] border-r-[1px] border-solid border-leftSidebarRightBorder bg-white transition-transform duration-300 ease-in-out ${
          openLeftSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
        onTransitionEnd={handleTransitionEnd}
      >
        <CloseLeftSidebarButton setOpenLeftSidebar={setOpenLeftSidebar} />
        <LeftSidebarHeader
          selectedCountyName={selectedCountyName}
          selectedStateName={selectedStateName}
          selectedCensusTract={selectedCensusTract}
        />
        <LeftSidebarBody overallResilienceScore={selectedMetricValue} />
      </aside>
      {!openLeftSidebar && !isAnimating && (
        <div
          id="hamburger-toggle-for-left-sidebar"
          className="relative flex min-w-10 max-w-10"
        >
          <LeftSidebarHamburgerIcon onClick={() => setOpenLeftSidebar(true)} />
        </div>
      )}
    </div>
  );
};

export default LeftSidebar;
