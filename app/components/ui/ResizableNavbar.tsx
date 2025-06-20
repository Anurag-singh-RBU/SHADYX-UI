import React, { useState, useEffect } from 'react';
import { Moon, Sun, Twitter, Instagram, Linkedin, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const ResizableNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav
        className={cn(
          'fixed font-JB font-bold top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out',
          'bg-white/80 dark:bg-black/80 backdrop-blur-md border border-gray-200/20 dark:border-gray-800/20',
          'shadow-lg shadow-black/5 dark:shadow-white/5',
          isScrolled
            ? 'w-[85%] md:w-[70%] lg:w-[60%] mt-4 rounded-2xl px-4 py-1.5'
            : 'w-full mt-0 rounded-none px-6 py-3'
        )}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex font-JB font-bold items-center space-x-3 flex-shrink-0">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SX</span>
            </div>
            <span className="font-JB font-bold text-lg text-gray-900 dark:text-white tracking-tight">
              Shadyx UI
            </span>
          </div>

          {/* Desktop Links */}
          <div
            className={cn(
              'hidden md:flex items-center space-x-6 transition-opacity duration-300 ml-8 mr-4',
              isScrolled ? 'opacity-0 md:opacity-100' : 'opacity-100'
            )}
          >
            <a
              href="#home"
              className="font-bold text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#about"
              className="font-bold text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#services"
              className="font-bold text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="#contact"
              className="font-bold text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Contact
            </a>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-2">
            {/* Social Icons - show only on md and above */}
            <div
              className={cn(
                'hidden md:flex lg:flex items-center space-x-1 transition-all duration-300',
                isScrolled ? 'hidden lg:flex' : 'flex'
              )}
            >
              <a
                href="#"
                className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </a>
              <a
                href="#"
                className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </a>
              <a
                href="#"
                className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </a>
            </div>

            {/* Dark Mode Toggle - only on md and above */}
            <button
              onClick={toggleDarkMode}
              className="hidden md:flex p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 ml-2"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="ml-2 p-1.5 rounded-md md:hidden hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col justify-center items-center space-y-6 px-4 pb-4">
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="font-bold text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="font-bold text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#services"
              onClick={() => setMenuOpen(false)}
              className="font-bold text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="font-bold text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default ResizableNavbar;
