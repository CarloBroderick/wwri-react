const Header: React.FC = () => {
    return (
        <div className="flex justify-start items-center h-[89px] w-[100%] border-b-[1px] border-solid border-[black]">
            <div className="mx-[20px] h-full bg-slate-600 w-20 justify-self-start">
                {/* Insert logo here */}
            </div>
            <h1 className="font-serif font-bold text-[26px]">
                Western Wildfire Resilience Index
            </h1>
        </div>
    );
};

export default Header;
