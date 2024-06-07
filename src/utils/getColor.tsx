import { Rgb } from "types/rgb";

const getColor = (startColor: Rgb, endColor: Rgb, value: number): string => {
  const r = Math.round(startColor.r + (endColor.r - startColor.r) * value);
  const g = Math.round(startColor.g + (endColor.g - startColor.g) * value);
  const b = Math.round(startColor.b + (endColor.b - startColor.b) * value);

  return `rgb(${r},${g},${b})`;
};

export default getColor;
