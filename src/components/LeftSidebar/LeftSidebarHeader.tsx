import React from "react";

export function LeftSidebarHeader() {
    return (
        <div
            id="left-sidebar-header"
            className="flex items-center pl-[18px] relative w-full h-[89px] border-b-[1px] border-solid border-leftSidebarHeaderBottomBorder bg-leftSidebarHeaderBackground"
        >
            <div>
                <h1 className="font-BeVietnamPro font-bold text-sm text-leftSidebarHeaderLabelTextColor">
                    SELECTED REGION
                </h1>
                <h1 className="font-BeVietnamPro font-bold text-base ">
                    Cleveland, Ohio <br />
                    Tract 10489.23
                </h1>
            </div>
        </div>
    );
}
