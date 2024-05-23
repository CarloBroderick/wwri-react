import React from "react";
import GraphReport from "../../assets/GraphReport.svg";

export function LeftSidebarBody() {
    return (
        <div
            id="left-sidebar-body"
            className="w-full flex flex-col flex-1 px-leftSidebarXAxis"
        >
            <h3 className="text-leftSidebarNotifier text-xs font-BeVietnamPro pt-3 pb-2">
                The following information pertains to the selected region
            </h3>
            <h1 className="font-BeVietnamePro text-sm font-bold text-leftSidebarOverallResilience mb-2">
                OVERALL RESILIENCE
            </h1>
            <div className="w-[calc(100%)] h-[123px] bg-[black] mb-3"></div>
            <h1 className="font-BeVietnamePro text-sm font-bold text-leftSidebarOverallResilience pb-2">
                INDIVIDUAL DOMAIN RESILIENCE SCORES
            </h1>
            <div className="w-[calc(100%)] h-[194px] bg-[black] mb-1"></div>
            <div className="px-2 mb-2">
                <h1 className="font-BeVietnamePro text-sm font-bold text-leftSidebarOverallResilience pb-2">
                    Legend
                </h1>
                <div className="flex flex-wrap justify-between items-center max-w-[194px]">
                    <div className="inline-flex min-w-[49%] mb-1">
                        <div className="w-4 h-4 bg-[black] mr-1 rounded-sm"></div>
                        <p className="font-BeVietnamPro text-2xs">Water</p>
                    </div>
                    <div className="inline-flex min-w-[49%] mb-1">
                        <div className="w-4 h-4 bg-[black] mr-1 rounded-sm"></div>
                        <p className="font-BeVietnamPro text-2xs">Social</p>
                    </div>
                    <div className="inline-flex min-w-[49%] mb-1">
                        <div className="w-4 h-4 bg-[black] mr-1 rounded-sm"></div>
                        <p className="font-BeVietnamPro text-2xs">Air</p>
                    </div>
                    <div className="inline-flex min-w-[49%] mb-1">
                        <div className="w-4 h-4 bg-[black] mr-1 rounded-sm"></div>
                        <p className="font-BeVietnamPro text-2xs">Economy</p>
                    </div>
                    <div className="inline-flex min-w-[49%] mb-1">
                        <div className="w-4 h-4 bg-[black] mr-1 rounded-sm"></div>
                        <p className="font-BeVietnamPro text-2xs">Ecosystems</p>
                    </div>
                    <div className="inline-flex min-w-[49%] mb-1">
                        <div className="w-4 h-4 bg-[black] mr-1 rounded-sm"></div>
                        <p className="font-BeVietnamPro text-2xs">Culture</p>
                    </div>
                    <div className="inline-flex min-w-[49%] mb-1">
                        <div className="w-4 h-4 bg-[black] mr-1 rounded-sm"></div>
                        <p className="font-BeVietnamPro text-2xs">
                            Biodiversity
                        </p>
                    </div>
                    <div className="inline-flex min-w-[49%] mb-1">
                        <div className="w-4 h-4 bg-[black] mr-1 rounded-sm"></div>
                        <p className="font-BeVietnamPro text-2xs">Carbon</p>
                    </div>
                    <div className="inline-flex min-w-[49%] mb-1">
                        <div className="w-4 h-4 bg-[black] mr-1 rounded-sm"></div>
                        <p className="font-BeVietnamPro text-2xs">
                            Infrastructure
                        </p>
                    </div>
                </div>
            </div>
            <button className="flex flex-row items-center w-full border-[1px] border-black rounded-md p-1">
                <img
                    src={GraphReport}
                    alt="Graph Report"
                    className="w-5 h-5 ml-2 mr-2"
                />
                <h1 className="font-BeVietnamPro font-bold">VIEW REPORT</h1>
            </button>
        </div>
    );
}
