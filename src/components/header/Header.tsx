// Import the SVG logo
import Vector from "../../assets/Vector.svg";

const Header: React.FC = () => {
    return (
        <div className="flex justify-start items-center h-[89px] min-w-[580px] border-b-[1px] border-solid border-headerBorder bg-headerBackgroundWhite text-nowrap">
            <div className="inline-flex items-center ml-[20px]">
                <img
                    src={Vector}
                    alt="logo"
                    width="59"
                    height="53"
                    className="min-w-[59px] min-h-[53px]"
                />
                <h1 className="font-IBMPlexSerif font-bold text-3xl ml-4 min-w-[500px]">
                    Western Wildfire Resilience Index
                </h1>
            </div>
        </div>
    );
};

export default Header;
