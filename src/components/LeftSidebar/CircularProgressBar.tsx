import React from "react";

interface CircularProgressBarProps {
  percentage: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  percentage,
}) => {
  const radius = 47;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (circumference * percentage) / 100;

  let colorClass = "text-red-500"; // Default color for <25%

  if (percentage >= 75) {
    colorClass = "text-[#32AC03]";
  } else if (percentage >= 25) {
    colorClass = "text-[#FAE107]";
  } else if (percentage < 25) {
    colorClass = "text-[#F00101]";
  }

  return (
    <div className="relative h-32 w-32">
      <svg className="absolute inset-0 h-full w-full -rotate-90 transform">
        <circle
          className="text-gray-300"
          strokeWidth="20"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="50%"
          cy="50%"
        />
        <circle
          className={`${colorClass} duration-1 transition-colors`}
          strokeWidth="20"
          strokeLinecap="butt"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="50%"
          cy="50%"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: dashOffset,
            transition: "stroke-dashoffset 1s ease-in-out",
          }}
        />
      </svg>
      <div
        className={`flex h-full w-full items-center justify-center text-2xl font-semibold transition-colors duration-500 ${colorClass}`}
      >
        {percentage}%
      </div>
    </div>
  );
};

export default CircularProgressBar;
