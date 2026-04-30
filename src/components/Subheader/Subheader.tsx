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
      className="relative flex min-h-[6rem] w-full items-center overflow-hidden border-b border-t border-solid border-subheaderBorder bg-subheaderBackground px-5"
    >
      {/* Left side: Metric title and description */}
      <div className="flex h-full min-w-0 flex-1 flex-col justify-center py-2 pr-4">
        <h1 className="font-Montserrat text-2xl font-bold leading-tight">
          {selectedMetricObject.label || defaultTitle}
        </h1>
        <h3 className="mt-1 line-clamp-2 font-Poppins text-base font-normal leading-5 text-gray-600">
          {selectedMetricObject.description || defaultDescription}
        </h3>
      </div>

      {/* Right side: Breadcrumb pathway */}
      <div
        id="subheader-breadcrumb-container"
        className="min-w-0 shrink self-center text-right max-[1320px]:hidden"
      >
        <BreadcrumbPathway items={breadcrumbItems} />
      </div>
    </div>
  );
};

export default Subheader;
