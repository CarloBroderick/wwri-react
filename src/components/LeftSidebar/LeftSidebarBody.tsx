import GraphReport from "../../assets/GraphReport.svg";
import CircularProgressBar from "./CircularProgressBar";

export function LeftSidebarBody() {
  return (
    <div
      id="left-sidebar-body"
      className="flex w-full flex-1 flex-col px-leftSidebarXAxis"
    >
      <h3 className="pb-2 pt-3 font-BeVietnamPro text-xs text-leftSidebarNotifier">
        The following information pertains to the selected region
      </h3>
      <h1 className="font-BeVietnamePro mb-2 text-sm font-bold text-leftSidebarOverallResilience">
        OVERALL RESILIENCE
      </h1>
      <CircularProgressBar percentage={78} />
      {/* <div className="w-[calc(100%)] h-[123px] bg-[black] mb-3"></div> */}
      <h1 className="font-BeVietnamePro pb-2 text-sm font-bold text-leftSidebarOverallResilience">
        INDIVIDUAL DOMAIN RESILIENCE SCORES
      </h1>
      <div className="mb-1 h-[194px] w-[calc(100%)] bg-[black]"></div>
      <div className="mb-2 px-2">
        <h1 className="font-BeVietnamePro pb-2 text-sm font-bold text-leftSidebarOverallResilience">
          Legend
        </h1>
        <div className="flex max-w-[194px] flex-wrap items-center justify-between">
          <div className="mb-1 inline-flex min-w-[49%]">
            <div className="mr-1 h-4 w-4 rounded-sm bg-[black]"></div>
            <p className="font-BeVietnamPro text-2xs">Water</p>
          </div>
          <div className="mb-1 inline-flex min-w-[49%]">
            <div className="mr-1 h-4 w-4 rounded-sm bg-[black]"></div>
            <p className="font-BeVietnamPro text-2xs">Social</p>
          </div>
          <div className="mb-1 inline-flex min-w-[49%]">
            <div className="mr-1 h-4 w-4 rounded-sm bg-[black]"></div>
            <p className="font-BeVietnamPro text-2xs">Air</p>
          </div>
          <div className="mb-1 inline-flex min-w-[49%]">
            <div className="mr-1 h-4 w-4 rounded-sm bg-[black]"></div>
            <p className="font-BeVietnamPro text-2xs">Economy</p>
          </div>
          <div className="mb-1 inline-flex min-w-[49%]">
            <div className="mr-1 h-4 w-4 rounded-sm bg-[black]"></div>
            <p className="font-BeVietnamPro text-2xs">Ecosystems</p>
          </div>
          <div className="mb-1 inline-flex min-w-[49%]">
            <div className="mr-1 h-4 w-4 rounded-sm bg-[black]"></div>
            <p className="font-BeVietnamPro text-2xs">Culture</p>
          </div>
          <div className="mb-1 inline-flex min-w-[49%]">
            <div className="mr-1 h-4 w-4 rounded-sm bg-[black]"></div>
            <p className="font-BeVietnamPro text-2xs">Biodiversity</p>
          </div>
          <div className="mb-1 inline-flex min-w-[49%]">
            <div className="mr-1 h-4 w-4 rounded-sm bg-[black]"></div>
            <p className="font-BeVietnamPro text-2xs">Carbon</p>
          </div>
          <div className="mb-1 inline-flex min-w-[49%]">
            <div className="mr-1 h-4 w-4 rounded-sm bg-[black]"></div>
            <p className="font-BeVietnamPro text-2xs">Infrastructure</p>
          </div>
        </div>
      </div>
      <button className="flex w-full flex-row items-center rounded-md border-[1px] border-black p-1">
        <img
          src={GraphReport}
          alt="Graph Report"
          className="ml-2 mr-2 h-5 w-5"
        />
        <h1 className="font-BeVietnamPro font-bold">VIEW REPORT</h1>
      </button>
    </div>
  );
}
