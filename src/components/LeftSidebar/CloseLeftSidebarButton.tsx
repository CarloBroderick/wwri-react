import React from "react";
import CloseIcon from "../../assets/CloseIcon.svg";

interface CloseLeftSidebarButtonProps {
  setOpenLeftSidebar: (value: boolean) => void;
}
export const CloseLeftSidebarButton: React.FC<CloseLeftSidebarButtonProps> = (
  props,
) => {
  return (
    <button
      className="absolute right-3 top-3 z-10"
      onClick={() => props.setOpenLeftSidebar(false)}
      aria-label="Close left sidebar"
    >
      <img src={CloseIcon} className="h-3 w-3" alt="Close" />
    </button>
  );
};
