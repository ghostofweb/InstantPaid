import { useState } from "react";
import { assets } from "../assets/assets";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#FFFBF3] py-5 px-4 md:px-10 relative">
      <div className="flex justify-between items-center mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={assets.logo} alt="Logo" className="w-9 h-8 object-contain" />
          <div className="text-blackSecondary font-sans text-2xl font-bold">
            Instant <span className="text-primary">Paid</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center space-x-8 text-blackSecondary font-sans text-lg">
          <a href="#" className="hover:text-primary transition-colors">Home</a>
          <a href="#" className="hover:text-primary transition-colors">Features</a>
          <a href="#" className="hover:text-primary transition-colors">Pricing</a>
          <a href="#" className="hover:text-primary transition-colors">Blog</a>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-2">
          <button className="border-2 border-[#6F38C9] text-[#6F38C9] font-sans px-6 py-2 rounded-full hover:bg-dark hover:border-dark hover:text-white transition-colors">
            Sign up
          </button>
          <button className="bg-[#6F38C9] text-white font-sans px-6 py-2 rounded-full hover:bg-dark transition-colors">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blackSecondary focus:outline-none">
            <svg
              className="w-6 h-6 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transform ${
          isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } transition-all duration-300 md:hidden`}
      >
        <div
          className={`absolute top-0 left-0 w-3/4 max-w-xs h-full bg-[#FFFBF3] shadow-lg transition-all duration-300 ${
            isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-5 right-5 text-blackSecondary focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Links */}
          <nav className="flex flex-col space-y-6 p-8 text-blackSecondary font-sans text-lg">
            <a href="#" className="hover:text-primary transition-colors">Home</a>
            <a href="#" className="hover:text-primary transition-colors">Features</a>
            <a href="#" className="hover:text-primary transition-colors">Pricing</a>
            <a href="#" className="hover:text-primary transition-colors">Blog</a>
          </nav>

          {/* Buttons */}
          <div className="flex flex-col space-y-4 p-8">
            <button className="border border-btnhover text-blackSecondary font-sans px-4 py-3 rounded-full hover:bg-dark hover:border-dark hover:text-white transition-colors">
              Sign up
            </button>
            <button className="bg-primary text-white font-sans px-4 py-3 rounded-full hover:bg-dark transition-colors">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
