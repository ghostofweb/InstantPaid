import { useState } from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#FFFBF3] py-5 px-4 md:px-10">
      <div className="flex justify-between items-center mx-auto">
        <div className="flex items-center space-x-2">
          <div>
            <img src={assets.logo} alt="Logo" className="w-9 h-8 object-contain" />
          </div>
          <div className="text-blackSecondary font-sans text-2xl font-bold">
            Instant <span className="text-primary">Paid</span>
          </div>
        </div>

        <div className="hidden md:flex flex-1 justify-center space-x-8 text-blackSecondary font-sans text-lg">
          <a href="#" className="hover:text-primary transition-colors">Home</a>
          <a href="#" className="hover:text-primary transition-colors">Features</a>
          <a href="#" className="hover:text-primary transition-colors">Pricing</a>
          <a href="#" className="hover:text-primary transition-colors">Blog</a>
        </div>

        <div className="hidden md:flex space-x-2">
          <button className="border-2 border-[#6F38C9] text-purpl font-sans px-6 py-2 rounded-full hover:bg-dark hover:border-dark hover:text-white transition-colors text-[#6F38C9]">
            Sign up
          </button>
          <button className="bg-[#6F38C9] text-white font-sans px-6 py-2 rounded-full hover:bg-dark transition-colors">
            Login
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blackSecondary focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#FFFBF3] py-4">
          <div className="flex flex-col space-y-4 text-blackSecondary font-sans text-center">
            <a href="#" className="hover:text-primary transition-colors">Home</a>
            <a href="#" className="hover:text-primary transition-colors">Features</a>
            <a href="#" className="hover:text-primary transition-colors">Pricing</a>
            <a href="#" className="hover:text-primary transition-colors">Blog</a>
            <div className="flex flex-col space-y-4 pt-4">
              <button className="border border-btnhover text-blackSecondary font-sans px-4 py-2 rounded-full hover:bg-dark hover:border-dark hover:text-white transition-colors">
                Sign up
              </button>
              <button className="bg-primary text-white font-sans px-4 py-2 rounded-full hover:bg-dark transition-colors">
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
