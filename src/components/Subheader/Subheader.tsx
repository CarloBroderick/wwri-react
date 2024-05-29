import React from "react";

interface SubheaderProps {
  // TODO
}

const Subheader: React.FC<SubheaderProps> = () => {
  const selectedMetricTitle = "Water Pollutants Resistance";
  const selectedMetricDescription =
    "Information about selected domain (Water pollutants are toxic to human health and harm wildlife).";

  return (
    <div
      id="sub-header"
      className="flex min-h-[80px] w-full items-center border-b-[1px] border-t-[1px] border-solid border-subheaderBorder bg-subheaderBackground pl-[20px]"
    >
      <div className="flex w-full flex-col">
        <h1 className="font-BeVietnamPro text-2xl font-bold">
          {selectedMetricTitle}
        </h1>
        <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap font-BeVietnamPro text-base">
          {selectedMetricDescription}
        </h3>
      </div>
    </div>
  );
};

export default Subheader;
