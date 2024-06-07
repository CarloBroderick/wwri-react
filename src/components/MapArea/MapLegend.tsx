import { Rgb } from "types/rgb";
import getColor from "utils/getColor";

const MapLegend: React.FC<{
  label: string;
  startColor: Rgb;
  endColor: Rgb;
}> = ({ label }) => {
  const startColor = { r: 211, g: 211, b: 211 }; // Light gray
  const endColor = { r: 27, g: 41, b: 61 }; // Dark blueish gray

  const legendColors = Array.from({ length: 10 }, (_, i) =>
    getColor(startColor, endColor, (10 - i) / 10),
  );

  return (
    <div className="absolute bottom-10 right-1 z-20 flex w-[7rem] flex-col rounded-lg bg-white px-1 py-4 shadow-lg">
      <h2 className="mb-2 text-center text-base font-bold leading-5">
        {label}
      </h2>
      <div className="flex columns-2 flex-row justify-center align-middle">
        <div className="relative flex flex-col justify-between">
          {legendColors.map((color, index) => (
            <div
              key={index}
              className="min-h-7 w-7"
              style={{ backgroundColor: color }}
            ></div>
          ))}
          <div className="absolute left-7 ml-1 flex h-full w-full flex-col justify-between">
            <span className="mt-[-0.3rem] text-xs">100</span>
            <span className="mb-[0rem] text-xs">50</span>
            <span className="mb-[-0.3rem] text-xs">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapLegend;
