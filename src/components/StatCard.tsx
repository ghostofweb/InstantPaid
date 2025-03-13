import { assets } from "../assets/assets";

const StatsCard = () => {
  return (
    <div className="rounded-3xl shadow-md relative overflow-hidden mb-10 flex flex-col md:flex-row md:items-center md:justify-between md:h-[292px] md:py-5 bg-[#FAFAF5] border border-[#EAEAEA]">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#2E5D19] opacity-5 pointer-events-none"></div>

      {/* Content Container */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full h-full p-6 sm:p-8 md:p-10">
        {/* Left Side: Icons & Text */}
        <div className="flex flex-col space-y-4 md:space-y-6 w-full md:w-1/2">
          {/* Icons */}
          <div className="flex justify-center md:justify-start space-x-4 md:space-x-6 text-[#2E5D19]">
            <img src={assets.dollarSign} alt="Dollar" className="w-6 sm:w-8 h-6 sm:h-8" />
            <img src={assets.grid} alt="Grid" className="w-6 sm:w-8 h-6 sm:h-8" />
            <img src={assets.divide} alt="Divide" className="w-6 sm:w-8 h-6 sm:h-8" />
            <img src={assets.trendingUp} alt="Trending" className="w-6 sm:w-8 h-6 sm:h-8" />
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <p className="text-black font-inter font-semibold text-xl sm:text-2xl md:text-3xl leading-snug tracking-tight">
              Every stat carefully organised and accurate
            </p>
            <p className="text-gray-600 font-inter text-base sm:text-lg md:text-xl mt-2 sm:mt-3">
              Daily expenses, savings, connected banks, and more
            </p>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex justify-center md:justify-end w-full md:w-1/2">
          <img
            src={assets.image3D}
            alt="Stats Preview"
            className="w-3/4 sm:w-2/3 md:w-auto h-auto object-contain z-10 max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
