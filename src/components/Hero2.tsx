import { assets } from "../assets/assets";

const Hero2 = () => {
  return (
    <section className="bg-[#FFFBF3] py-24 sm:py-30 md:pt-36 px-6 flex flex-col items-center font-inter">

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-2%] leading-tight md:leading-[77px] text-center text-black mb-10">
        Everything You Need to <br /> Manage Your{" "}
        <span className="text-primary">Finances</span>
      </h1>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 max-w-[1240px] w-full justify-center items-center">
        {/* Left Card */}
        <div className="relative w-full sm:w-[90%] md:w-cardWidth h-cardHeight rounded-card p-6 sm:p-8 md:p-cardPadding flex flex-col items-center text-center text-white bg-left-gradient">
          <p className="text-subtitle py-4 text-[#82EA53]">YOU ONLY NEED ONE APP</p>
          <p className="text-title">Handle your daily finance with our dedicated app</p>
          <img
            src={assets.group4}
            alt="Finance Illustration"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] sm:w-[85%] md:w-[80%]"
          />
        </div>

        {/* Right Card */}
        <div className="relative w-full sm:w-[90%] md:w-cardWidth h-cardHeight rounded-card p-6 sm:p-8 md:p-cardPadding flex flex-col items-center text-center text-white bg-right-gradient">
          <p className="text-subtitle py-4 text-white">FREE FOREVER</p>
          <p className="text-title tracking-tighter">Never ever pay for a finance app!</p>
          <img
            src={assets.group5}
            alt="Finance App Screenshot"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] sm:w-[85%] md:w-[80%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero2;
