export default interface SelectedMetricIdObject {
  domainId: string;
  metricId: string;
  label: string;
  description: string;
  colorGradient: {
    startColor: { r: number; g: number; b: number };
    endColor: { r: number; g: number; b: number };
  };
}
