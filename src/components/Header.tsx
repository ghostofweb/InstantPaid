import  { useState } from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#FFFBF3] py-5 px-4 md:px-10">
      <div className="flex justify-between items-center mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-[var(--color-primary)] rounded-md flex items-center justify-center">
            <img src={assets.logo} alt="Logo" />
          </div>
          <div className="text-[var(--color-blackSecondary)] font-sans text-2xl font-bold">
            Instant <span className='text'>Paid</span>
          </div>
        </div>

        {/* Links - Hidden on mobile, visible on larger screens */}
        <div className="hidden md:flex space-x-8 text-[var(--color-blackSecondary)] font-sans">
          <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
            Features
          </a>
          <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
            Pricing
          </a>
          <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
            Blog
          </a>
        </div>

        {/* Sign up / Login Buttons - Hidden on mobile, visible on larger screens */}
        <div className="hidden md:flex space-x-4">
          <button className="border border-[var(--color-primary)] text-[var(--color-blackSecondary)] font-sans px-4 py-2 rounded-full hover:bg-[var(--color-btnhover)] hover:border-[var(--color-btnhover)] hover:text-white transition-colors">
            Sign up
          </button>
          <button className="bg-[var(--color-primary)] text-white font-sans px-4 py-2 rounded-full hover:bg-[var(--color-btnhover)] transition-colors">
            Login
          </button>
        </div>

        {/* Hamburger Menu Icon - Visible on mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[var(--color-blackSecondary)] focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Visible when hamburger is clicked */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#FFFBF3] py-4">
          <div className="flex flex-col space-y-4 text-[var(--color-blackSecondary)] font-sans text-center">
            <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
              Features
            </a>
            <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
              Pricing
            </a>
            <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
              Blog
            </a>
            <div className="flex flex-col space-y-4 pt-4">
              <button className="border border-[var(--color-primary)] text-[var(--color-blackSecondary)] font-sans px-4 py-2 rounded-full hover:bg-[var(--color-btnhover)] hover:border-[var(--color-btnhover)] hover:text-white transition-colors">
                Sign up
              </button>
              <button className="bg-[var(--color-primary)] text-white font-sans px-4 py-2 rounded-full hover:bg-[var(--color-btnhover)] transition-colors">
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