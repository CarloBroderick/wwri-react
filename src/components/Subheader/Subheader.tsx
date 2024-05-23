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
            className="flex items-center w-full h-[81px] pl-[20px] border-b-[1px] border-solid border-subheaderBorder bg-subheaderBackground"
        >
            <div className="flex flex-col w-full">
                <h1 className="font-BeVietnamPro text-2xl font-bold">
                    {selectedMetricTitle}
                </h1>
                <h3 className="font-BeVietnamPro text-base whitespace-nowrap overflow-hidden overflow-ellipsis">
                    {selectedMetricDescription}
                </h3>
            </div>
        </div>
    );
};

export default Subheader;
