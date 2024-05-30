import React, { useEffect, useRef } from "react";

interface DataItem {
  value: number;
  color: string;
}

const data: DataItem[] = [
  { value: 0.9, color: "#A7344E" },
  { value: 0.7, color: "#B94E31" },
  { value: 0.8, color: "#E16727" },
  { value: 0.6, color: "#D78935" },
  { value: 0.5, color: "#D5A227" },
  { value: 0.4, color: "#DAC32F" },
  { value: 0.7, color: "#A9B646" },
  { value: 0.8, color: "#2FBD89" },
  { value: 1, color: "#4EA09F" },
];

const FlowerChart: React.FC = () => {
  const chartRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    const totalArcs = data.length;
    const arcAngle = (2 * Math.PI) / totalArcs;

    data.forEach((d, i) => {
      const startAngle = i * arcAngle;
      const endAngle = startAngle + arcAngle;
      const innerRadius = 40;
      const outerRadius = innerRadius + d.value * 125;

      const x0 = Math.cos(startAngle) * innerRadius;
      const y0 = Math.sin(startAngle) * innerRadius;
      const x1 = Math.cos(endAngle) * innerRadius;
      const y1 = Math.sin(endAngle) * innerRadius;
      const x2 = Math.cos(endAngle) * outerRadius;
      const y2 = Math.sin(endAngle) * outerRadius;
      const x3 = Math.cos(startAngle) * outerRadius;
      const y3 = Math.sin(startAngle) * outerRadius;

      const largeArcFlag = endAngle - startAngle <= Math.PI ? "0" : "1";

      const pathData = [
        `M ${x0} ${y0}`,
        `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 1 ${x1} ${y1}`,
        `L ${x2} ${y2}`,
        `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 0 ${x3} ${y3}`,
        `Z`,
      ].join(" ");

      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path",
      );
      path.setAttribute("d", pathData);
      path.setAttribute("fill", d.color);
      path.setAttribute("class", "aster__solid-arc");
      chart.appendChild(path);

      // Add outline arc
      const outlineRadius = innerRadius + 125;
      const outlinePathData = [
        `M ${Math.cos(startAngle) * innerRadius} ${Math.sin(startAngle) * innerRadius}`,
        `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 1 ${Math.cos(endAngle) * innerRadius} ${Math.sin(endAngle) * innerRadius}`,
        `L ${Math.cos(endAngle) * outlineRadius} ${Math.sin(endAngle) * outlineRadius}`,
        `A ${outlineRadius} ${outlineRadius} 0 ${largeArcFlag} 0 ${Math.cos(startAngle) * outlineRadius} ${Math.sin(startAngle) * outlineRadius}`,
        `Z`,
      ].join(" ");

      const outlinePath = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path",
      );
      outlinePath.setAttribute("d", outlinePathData);
      outlinePath.setAttribute("fill", "none");
      outlinePath.setAttribute("stroke", "#ededf1");
      outlinePath.setAttribute("stroke-width", "1");
      chart.appendChild(outlinePath);
    });
  }, []);

  return (
    <div className="h-full w-full">
      <svg
        className="aster__plot flex flex-row justify-start"
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 500 500"
      >
        <g id="chart" transform="translate(160,200)" ref={chartRef}>
          <text
            className="text-3xl font-bold text-leftSidebarRightBorder"
            dy=".35em"
            textAnchor="middle"
            fill="currentColor"
          >
            73
          </text>
        </g>
      </svg>
    </div>
  );
};

export default FlowerChart;
