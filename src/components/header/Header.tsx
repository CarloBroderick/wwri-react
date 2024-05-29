// Import the SVG logo
import Vector from "../../assets/Vector.svg";

const Header: React.FC = () => {
  return (
    <div className="flex h-[60px] min-w-[580px] items-center justify-start text-nowrap bg-headerBackgroundWhite">
      <div className="ml-[20px] inline-flex items-center">
        <img
          src={Vector}
          alt="logo"
          width="45"
          height="40"
          className="min-h-[45px] min-w-[50px]"
        />
        <h1 className="ml-4 min-w-[500px] font-IBMPlexSerif text-2xl font-bold ">
          Western Wildfire Resilience Index
        </h1>
      </div>
    </div>
  );
};

export default Header;
