interface LeftSidebarHeaderProps {
  selectedCensusTract: string;
}

export function LeftSidebarHeader({
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
        <h1 className="font-BeVietnamPro text-base font-bold ">
          Cleveland, Ohio <br />
          Tract {selectedCensusTract}
        </h1>
      </div>
    </div>
  );
}
