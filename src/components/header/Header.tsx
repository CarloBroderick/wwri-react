// Import the SVG logo
import Vector from "../../assets/Vector.svg";

const Header: React.FC = () => {
  return (
    <div className="flex h-[89px] min-w-[580px] items-center justify-start text-nowrap border-b-[1px] border-solid border-headerBorder bg-headerBackgroundWhite">
      <div className="ml-[20px] inline-flex items-center">
        <img
          src={Vector}
          alt="logo"
          width="59"
          height="53"
          className="min-h-[53px] min-w-[59px]"
        />
        <h1 className="ml-4 min-w-[500px] font-IBMPlexSerif text-3xl font-bold ">
          Western Wildfire Resilience Index
        </h1>
      </div>
    </div>
  );
};

export default Header;
