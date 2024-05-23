import React from "react";

interface CloseLeftSidebarButtonProps {
    setOpenLeftSidebar: (value: boolean) => void;
}
export const CloseLeftSidebarButton: React.FC<CloseLeftSidebarButtonProps> = (
    props
) => {
    return (
        <button
            className="absolute top-1 right-2 z-10"
            onClick={() => props.setOpenLeftSidebar(false)}
            aria-label="Close left sidebar"
        >
            x
        </button>
    );
};
