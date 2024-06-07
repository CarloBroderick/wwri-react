import React from "react";
import SelectedMetricIdObject from "types/componentStatetypes";

interface SubheaderProps {
  selectedMetricObject: SelectedMetricIdObject;
}

const Subheader: React.FC<SubheaderProps> = ({ selectedMetricObject }) => {
  const selectedMetricTitle = "Overall Resilience";
  const selectedMetricDescription =
    "The overall resilience score to wildfires. This score is calculated from the resilience scores of each domain (e.g. Water, Air, etc.).";

  return (
    <div
      id="sub-header"
      className="flex min-h-[80px] w-full items-center border-b-[1px] border-t-[1px] border-solid border-subheaderBorder bg-subheaderBackground pl-[20px]"
    >
      <div className="flex w-full flex-col">
        <h1 className="font-BeVietnamPro text-2xl font-bold">
          {selectedMetricObject.label || selectedMetricTitle}
        </h1>
        <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap font-BeVietnamPro text-base">
          {selectedMetricObject.description || selectedMetricDescription}
        </h3>
      </div>
    </div>
  );
};

export default Subheader;
