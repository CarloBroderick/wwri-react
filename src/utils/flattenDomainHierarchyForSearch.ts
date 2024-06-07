import domainHierarchy from "data/domainHierarchy";
import { Domain } from "../types/domainTypes";

export interface IndicatorObject {
  domainId: string;
  metricId: string;
  traversedPathForSearchSuggestions: string;
  label: string;
  description: string;
}

/**
 * Flattens the domain hierarchy into a list of indicator objects that can be used for search suggestions.
 *
 * @param domains - The domain hierarchy to flatten.
 * @returns An array of indicator objects with the following structure:
 * {
 *   id: string;          // The id of the indicator, formed by concatenating the domain id, status id, and metric id.
 *   traversedPathForSearchSuggestions: string;  // The path of the indicator, formed by concatenating the domain label, status label, and metric label.
 *   label: string;      // The label of the indicator, formed by concatenating the domain label, status label, and metric label.
 * }
 *
 * Example inputs:
 * [
 *   {
 *     id: "air",
 *     label: "Air",
 *     status: {
 *       id: "status",
 *       label: "Status",
 *       metrics: [
 *         { id: "status_metric_1", label: "Status Metric 1" },
 *         { id: "status_metric_2", label: "Status Metric 2" },
 *       ],
 *     },
 *   },
 *   {
 *     id: "infrastructure",
 *     label: "Infrastructure",
 *     status: {
 *       id: "status",
 *       label: "Status",
 *       metrics: [
 *         { id: "status_metric_3", label: "Status Metric 3" },
 *         { id: "status_metric_4", label: "Status Metric 4" },
 *       ],
 *     },
 *   },
 * ]
 *
 * Example outputs:
 * [
 *   {
 *     id: "air-status-status_metric_1",
 *     traversedPathForSearchSuggestions: "Air > Status > Status Metric 1",
 *     label: "Air Status Metric 1",
 *   },
 *   {
 *     id: "air-status-status_metric_2",
 *     traversedPathForSearchSuggestions: "Air > Status > Status Metric 2",
 *     label: "Air Status Metric 2",
 *   },
 *   {
 *     id: "infrastructure-status-status_metric_3",
 *     traversedPathForSearchSuggestions: "Infrastructure > Status > Status Metric 3",
 *     label: "Infrastructure Status Metric 3",
 *   },
 *   {
 *     id: "infrastructure-status-status_metric_4",
 *     traversedPathForSearchSuggestions: "Infrastructure > Status > Status Metric 4",
 *     label: "Infrastructure Status Metric 4",
 *   },
 * ]
 */
const flattenDomainHierarchy = (domains: Domain[]): IndicatorObject[] => {
  const result: IndicatorObject[] = [];

  const traverse = (domain: Domain, path: string) => {
    const newPath = `${domain.label}`;

    // Add status metrics
    domain.status.metrics.forEach((metric) => {
      result.push({
        domainId: domain.id,
        metricId: metric.id,
        traversedPathForSearchSuggestions: `${newPath} > ${domain.status.label} > ${metric.label}`,
        label: metric.label,
        description: metric.description,
      });
    });

    // Add resistance metrics
    domain.resilience.resistance.metrics.forEach((metric) => {
      result.push({
        domainId: domain.id,
        metricId: metric.id,
        traversedPathForSearchSuggestions: `${newPath} > ${domain.resilience.label} > ${domain.resilience.resistance.label} > ${metric.label}`,
        label: metric.label,
        description: metric.description,
      });
    });

    // Add recovery metrics
    domain.resilience.recovery.metrics.forEach((metric) => {
      result.push({
        domainId: domain.id,
        metricId: metric.id,
        traversedPathForSearchSuggestions: `${newPath} > ${domain.resilience.label} > ${domain.resilience.recovery.label} > ${metric.label}`,
        label: metric.label,
        description: metric.description,
      });
    });
  };

  domains.forEach((domain) => traverse(domain, ""));
  return result;
};

// Assuming domainHierarchy is imported
const hierarchicalStrings = flattenDomainHierarchy(domainHierarchy);
export default flattenDomainHierarchy;
