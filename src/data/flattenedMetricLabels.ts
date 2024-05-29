import { flattenHierarchy } from "../utils/flattenHierarchy";
import domainHierarchy from "./domainHierarchy";

export const flattenedMetrics = flattenHierarchy(domainHierarchy);
