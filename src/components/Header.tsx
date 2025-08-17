import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isMenuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);



  return (
    <>
      {/* Floating Dock with Logo - Always visible */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <nav className="flex items-center justify-between bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-2xl px-2 md:px-4 py-0 border border-white/20 dark:border-gray-700/20 shadow-2xl w-[400px] md:w-[700px] hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 max-[767px]:hover:bg-white/10 dark:max-[767px]:hover:bg-gray-800/10">
          {/* Left side - Logo and Desktop Navigation */}
          <div className="flex items-center">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center group py-0 transition-all duration-300 mr-4"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img 
                src="https://github.com/AdamBadkouk/WoodExpert/blob/main/pics/logo1.png?raw=true" 
                alt="woodexpert Logo" 
                className="w-12 h-12 md:w-16 md:h-16 mr-1"
              />
              <span className="text-sm md:text-lg font-bold bg-gradient-to-r from-blue-800 via-blue-500 to-blue-200 bg-clip-text text-transparent group-hover:from-blue-900 group-hover:via-blue-600 group-hover:to-blue-300 max-[767px]:group-hover:from-blue-800 max-[767px]:group-hover:via-blue-500 max-[767px]:group-hover:to-blue-200">
                WoodExpert
              </span>
            </Link>
            

            
            {/* Desktop Navigation Links - slightly right of center */}
            <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2 ml-8">
              <nav className="flex items-center space-x-6">
                <Link
                  to="/"
                  className="font-medium transition-all duration-300 text-blue-300 dark:text-blue-200 hover:text-blue-500 dark:hover:text-blue-100 relative group"
                >
                  Accueil
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                </Link>
                <Link
                  to="/products"
                  className="font-medium transition-all duration-300 text-blue-300 dark:text-blue-200 hover:text-blue-500 dark:hover:text-blue-100 relative group"
                >
                  Catalog
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                </Link>
                <Link
                  to="/about"
                  className="font-medium transition-all duration-300 text-blue-300 dark:text-blue-200 hover:text-blue-500 dark:hover:text-blue-100 relative group"
                >
                  Contact
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                </Link>
              </nav>
            </div>
          </div>
           
          {/* Right side controls - hamburger menu and dark mode toggle */}
          <div className="flex items-center space-x-2">
            {/* Hamburger Menu Button - visible only on mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menu-button md:hidden p-2 transition-all duration-300 hover:scale-110 text-blue-300 dark:text-blue-200 hover:text-blue-500 dark:hover:text-blue-100 max-[767px]:hover:scale-100 max-[767px]:hover:text-blue-300 dark:max-[767px]:hover:text-blue-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-4 w-4 md:h-5 md:w-5 pointer-events-none" /> : <Menu className="h-4 w-4 md:h-5 md:w-5 pointer-events-none" />}
            </button>
            
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 transition-all duration-300 hover:scale-110 text-blue-300 dark:text-blue-200 hover:text-blue-500 dark:hover:text-blue-100 max-[767px]:hover:scale-100 max-[767px]:hover:text-blue-300 dark:max-[767px]:hover:text-blue-200"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-4 w-4 md:h-5 md:w-5" /> : <Moon className="h-4 w-4 md:h-5 md:w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Dropdown - only visible on mobile */}
      {isMenuOpen && (
        <div className="mobile-menu block md:hidden fixed top-20 left-1/2 transform -translate-x-1/2 z-40 w-[280px]">
          <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-2xl border border-white/20 dark:border-gray-700/20 shadow-2xl py-4 px-6 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 max-[767px]:hover:bg-white/10 dark:max-[767px]:hover:bg-gray-800/10">
            <nav className="space-y-3">
              <Link
                 to="/"
                 className="block font-medium transition-all duration-300 text-blue-300 dark:text-blue-200 hover:text-blue-500 dark:hover:text-blue-100 relative group py-2 px-3 rounded-lg max-[767px]:hover:text-blue-300 dark:max-[767px]:hover:text-blue-200"
                 onClick={() => setIsMenuOpen(false)}
               >
                 Accueil
                 <span className="absolute left-3 bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 ease-out group-hover:w-[calc(100%-24px)] max-[767px]:group-hover:w-0"></span>
               </Link>
               <Link
                 to="/products"
                 className="block font-medium transition-all duration-300 text-blue-300 dark:text-blue-200 hover:text-blue-500 dark:hover:text-blue-100 relative group py-2 px-3 rounded-lg max-[767px]:hover:text-blue-300 dark:max-[767px]:hover:text-blue-200"
                 onClick={() => setIsMenuOpen(false)}
               >
                 Catalog
                 <span className="absolute left-3 bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 ease-out group-hover:w-[calc(100%-24px)] max-[767px]:group-hover:w-0"></span>
               </Link>
               <Link
                 to="/about"
                 className="block font-medium transition-all duration-300 text-blue-300 dark:text-blue-200 hover:text-blue-500 dark:hover:text-blue-100 relative group py-2 px-3 rounded-lg max-[767px]:hover:text-blue-300 dark:max-[767px]:hover:text-blue-200"
                 onClick={() => setIsMenuOpen(false)}
               >
                 Contact
                 <span className="absolute left-3 bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 ease-out group-hover:w-[calc(100%-24px)] max-[767px]:group-hover:w-0"></span>
               </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
export default Header;
