import SelectedMetricIdObject from "types/componentStatetypes";
import { BreadcrumbItem, buildBreadcrumbPath } from "utils/buildBreadcrumbPath";

interface SubheaderProps {
  selectedMetricObject: SelectedMetricIdObject;
}

/**
 * Breadcrumb pathway component - shows metric hierarchy in top-right.
 * Parents are grayed out, current selection is bold.
 */
function BreadcrumbPathway({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav id="metric-breadcrumb-pathway" className="flex flex-wrap items-center justify-end gap-1.5 text-base">
      {items.map((item, index) => (
        <span key={item.id} className="flex items-center gap-1.5">
          {index > 0 && (
            <span className="text-gray-300 select-none">›</span>
          )}
          <span
            className={
              item.isCurrent
                ? "font-semibold text-gray-800"
                : "text-gray-400"
            }
          >
            {item.label}
          </span>
        </span>
      ))}
    </nav>
  );
}

const Subheader: React.FC<SubheaderProps> = ({ selectedMetricObject }) => {
  const defaultTitle = "Overall Resilience";
  const defaultDescription =
    "The overall resilience score to wildfires. This score is calculated from the resilience scores of each domain (e.g. Water, Air, etc.).";

  const breadcrumbItems = buildBreadcrumbPath(
    selectedMetricObject.metricId,
    selectedMetricObject.domainId,
  );

  return (
    <div
      id="sub-header"
      className="relative flex w-full items-start overflow-hidden border-b border-t border-solid border-subheaderBorder bg-subheaderBackground px-5 py-4"
    >
      {/* Left side: Metric title and description */}
      <div className="flex min-w-0 flex-1 flex-col pr-4">
        <h1 className="font-BeVietnamPro text-2xl font-bold">
          {selectedMetricObject.label || defaultTitle}
        </h1>
        <h3 className="font-BeVietnamPro text-base text-gray-600">
          {selectedMetricObject.description || defaultDescription}
        </h3>
      </div>

      {/* Right side: Breadcrumb pathway */}
      <div id="subheader-breadcrumb-container" className="min-w-0 shrink self-center text-right">
        <BreadcrumbPathway items={breadcrumbItems} />
      </div>
    </div>
  );
};

export default Subheader;
