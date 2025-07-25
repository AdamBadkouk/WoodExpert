import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, Menu, X, Heart, Moon, Sun } from 'lucide-react';
import { useWishlist } from '../contexts/WishlistContext';
import { useDarkMode } from '../contexts/DarkModeContext';

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const { state: wishlistState } = useWishlist();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isHomePage = location.pathname === '/';

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
    navigate('/products');
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || !isHomePage
          ? 'bg-white bg-opacity-95 shadow-md py-2 dark:bg-gray-900 dark:bg-opacity-95'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 bg-amber-800 dark:bg-amber-700 rounded-lg flex items-center justify-center mr-3 transition-colors duration-300">
              <span className="text-white font-bold text-lg">WE</span>
            </div>
            <h1 className={`text-2xl font-bold transition-colors duration-300 ${
              scrolled || !isHomePage
                ? 'text-amber-800 dark:text-amber-200'
                : 'text-white drop-shadow-lg'
            }`}>
              WoodExpert
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`font-medium transition-colors duration-200 ${
              scrolled || !isHomePage
                ? 'text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400'
                : 'text-white hover:text-amber-200 drop-shadow'
            }`}>
              Home
            </Link>
            <Link to="/products" className={`font-medium transition-colors duration-200 ${
              scrolled || !isHomePage
                ? 'text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400'
                : 'text-white hover:text-amber-200 drop-shadow'
            }`}>
              Products
            </Link>
            <Link to="/about" className={`font-medium transition-colors duration-200 ${
              scrolled || !isHomePage
                ? 'text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400'
                : 'text-white hover:text-amber-200 drop-shadow'
            }`}>
              About
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-700 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-800 dark:text-white transition-colors duration-300"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </form>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 transition-colors duration-200 ${
                scrolled || !isHomePage
                  ? 'text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400'
                  : 'text-white hover:text-amber-200 drop-shadow'
              }`}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <Link
              to="/wishlist"
              className={`relative p-2 transition-colors duration-200 ${
                scrolled || !isHomePage
                  ? 'text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400'
                  : 'text-white hover:text-amber-200 drop-shadow'
              }`}
            >
              <Heart className="h-6 w-6" />
              {wishlistState.items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistState.items.length}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 transition-colors duration-200 ${
                scrolled || !isHomePage
                  ? 'text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400'
                  : 'text-white hover:text-amber-200 drop-shadow'
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t transition-colors duration-300 ${
            scrolled || !isHomePage
              ? 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900'
              : 'border-white/20 bg-black/80 backdrop-blur-md'
          }`}>
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-800 dark:text-white transition-colors duration-300"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </form>
            <nav className="space-y-4">
              <Link
                to="/"
                className={`block font-medium transition-colors duration-200 ${
                  scrolled || !isHomePage
                    ? 'text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400'
                    : 'text-white hover:text-amber-200'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className={`block font-medium transition-colors duration-200 ${
                  scrolled || !isHomePage
                    ? 'text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400'
                    : 'text-white hover:text-amber-200'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/about"
                className={`block font-medium transition-colors duration-200 ${
                  scrolled || !isHomePage
                    ? 'text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400'
                    : 'text-white hover:text-amber-200'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;