import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <section className="bg-[#FFFBF3] px-11 md:px-10">
      <div className="flex flex-col md:flex-row justify-between">
        {/* Text Content */}
        <div className="md:w-full lg:w-[55%] text-center lg:text-left pr-8 py-8">
          <h1 className="text-4xl md:text-5xl font-sans font-bold text-blackSecondary leading-tight">
            <span className="text-primary">Effortless</span> Accounting <br /> for Freelancers & Small Businesses
          </h1>
          <p className="text-lg text-blackSecondary mt-4 mb-6">
          Instant paid automates your invoicing, payments, and financial tracking—so you can focus on growing your business.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-black text-white font-sans px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-dark transition-colors">
              <span>Get Started Free</span>
              <div className='bg-white px-2 py-2 rounded-full'>
              <img src={assets.arrowRight} alt="Arrow Right" className="w-5 h-5" />
              </div>
            </button>
          </div>
        </div>

        {/* Image Content - Hidden on medium screens */}
        <div className="hidden md:hidden lg:block lg:w-[40%] relative">
          <div className="relative w-full">
            <div className="relative w-full max-w-md">
              <img
                src={assets.hero}
                alt="Happy freelancer"
                className="w-full object-cover"
              />
              {/* Gradient overlay for fade effect */}
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
            </div>
            
            {/* Cards positioned to overlap with the person image */}
            <div className="absolute -left-32 top-2/4 z-10">
              {/* Category card (top card) */}
              <div className="mb-4 pl-10">
                <img
                  src={assets.categoryCard}
                  alt="Category Card"
                  className="w-64 shadow-md rounded-lg"
                />
              </div>

              {/* Wrap the last two cards in a flex row */}
              <div className="flex gap-4">
                {/* Dashboard card with balance */}
                <div>
                  <img
                    src={assets.balanceCard}
                    alt="Balance Card"
                    className="w-64 shadow-md rounded-lg"
                  />
                </div>

                {/* Financial summary card (bottom) */}
                <div>
                  <img
                    src={assets.monthlyCard}
                    alt="Monthly Card"
                    className="w-64 shadow-md rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;