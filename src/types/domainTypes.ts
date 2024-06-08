export interface Metric {
  id: string;
  label: string;
  description: string;
}

export interface ResilienceSubdomain {
  id: string;
  label: string;
  description: string;
  metrics: Metric[];
}

export interface Status {
  id: string;
  label: string;
  description: string;
  metrics: Metric[];
}

export interface Resilience {
  id: string;
  label: string;
  description: string;
  resistance: ResilienceSubdomain;
  recovery: ResilienceSubdomain;
}

export interface Domain {
  id: string;
  label: string;
  description: string;
  status: Status;
  resilience: Resilience;
  colorGradient: {
    startColor: { r: number; g: number; b: number };
    endColor: { r: number; g: number; b: number };
  };
}

export interface FlatMetric {
  id: string;
  label: string;
  description: string;
}
