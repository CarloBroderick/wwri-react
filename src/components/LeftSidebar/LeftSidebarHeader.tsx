import MapOfFullStatenameToAbbreviation, {
  StateNames,
} from "data/StateNameToAbbrevsMap";

interface LeftSidebarHeaderProps {
  selectedCountyName: string;
  selectedStateName: StateNames;
  selectedCensusTract: string;
}

export function LeftSidebarHeader({
  selectedCountyName,
  selectedStateName,
  selectedCensusTract,
}: LeftSidebarHeaderProps) {
  return (
    <div
      id="left-sidebar-header"
      className="relative flex h-[89px] w-full items-center border-b-[1px] border-solid border-leftSidebarHeaderBottomBorder bg-leftSidebarHeaderBackground pl-[18px]"
    >
      <div>
        <h1 className="font-BeVietnamPro text-sm font-bold text-leftSidebarHeaderLabelTextColor">
          SELECTED REGION
        </h1>
        {selectedCountyName === "" && selectedStateName === "" ? (
          <h1 className="min-h-[49px] max-w-[80%] font-BeVietnamPro text-base font-bold text-leftSidebarHeaderLabelTextColor">
            Click on a region to view data
          </h1>
        ) : (
          <h1 className="font-BeVietnamPro text-base font-bold ">
            {selectedCountyName},{" "}
            {MapOfFullStatenameToAbbreviation[selectedStateName]} <br />
            Tract {selectedCensusTract}
          </h1>
        )}
      </div>
    </div>
  );
}
