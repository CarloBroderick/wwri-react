import {
  Domain,
  FlatMetric,
  Metric,
  ResilienceSubdomain,
} from "../types/domainTypes";
/**
 * Flattens the hierarchy of domains, status, resilience, and metrics into a flat array of metrics
 * and adds the "Overall Resilience" metric to the end of the array.
 *
 * @param domains
 * @returns FlatMetric[]
 */
export const flattenHierarchy = (domains: Domain[]): FlatMetric[] => {
  const flatArray: FlatMetric[] = [];

  const traverseMetrics = (metrics: Metric[], parentPath: string) => {
    metrics.forEach((metric) => {
      flatArray.push({
        id: `${parentPath}-${metric.id}`,
        label: metric.label,
      });
    });
  };

  const traverseResilienceSubdomain = (
    subdomain: ResilienceSubdomain,
    parentPath: string,
  ) => {
    const newPath = `${parentPath}-${subdomain.id}`;
    flatArray.push({
      id: newPath,
      label: subdomain.label,
    });
    traverseMetrics(subdomain.metrics, newPath);
  };

  domains.forEach((domain) => {
    const domainPath = domain.id;
    flatArray.push({
      id: domainPath,
      label: domain.label,
    });

    // Traverse status metrics
    const statusPath = `${domainPath}-${domain.status.id}`;
    flatArray.push({
      id: statusPath,
      label: domain.status.label,
    });
    traverseMetrics(domain.status.metrics, statusPath);

    // Traverse resilience subdomains and their metrics
    const resiliencePath = `${domainPath}-resilience`;
    flatArray.push({
      id: resiliencePath,
      label: "Resilience",
    });

    traverseResilienceSubdomain(domain.resilience.resistance, resiliencePath);
    traverseResilienceSubdomain(domain.resilience.recovery, resiliencePath);
  });

  flatArray.push({
    id: "overall_resilience",
    label: "Overall Resilience",
  });

  return flatArray;
};
