<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
=======
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
>>>>>>> 75579860cae2b79f281be2a1a57947e28603925c
import { Search, Menu, X, Heart, Moon, Sun } from 'lucide-react';
import { useWishlist } from '../contexts/WishlistContext';
import { useDarkMode } from '../contexts/DarkModeContext';

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { state: wishlistState } = useWishlist();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
<<<<<<< HEAD
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
=======
  const navigate = useNavigate();
>>>>>>> 75579860cae2b79f281be2a1a57947e28603925c

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
    navigate('/products');
  };

<<<<<<< HEAD
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

  return (
    <header 
      className={`fixed  w-full z-50 transition-all duration-300 ${
        isHomePage 
          ? (scrolled ? 'bg-white bg-opacity-95 shadow-md py-2' : 'bg-transparent py-4')
          : 'bg-amber-600 shadow-md py-2'
      }`}
    >
=======
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
>>>>>>> 75579860cae2b79f281be2a1a57947e28603925c
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 bg-amber-800 dark:bg-amber-700 rounded-lg flex items-center justify-center mr-3 transition-colors duration-300">
              <span className="text-white font-bold text-lg">WE</span>
            </div>
            <h1 className="text-2xl font-bold text-amber-800 dark:text-amber-200 transition-colors duration-300">
              WoodExpert
            </h1>
          </Link>

          {/* Desktop Navigation */}
<<<<<<< HEAD
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className={`${
              isHomePage 
                ? (scrolled ? 'text-slate-800' : 'text-white') 
                : 'text-white'
            } hover:text-amber-200 transition-colors`}>
              Home
            </Link>
            <Link to="/products" className={`${
              isHomePage 
                ? (scrolled ? 'text-slate-800' : 'text-white') 
                : 'text-white'
            } hover:text-amber-200 transition-colors`}>
              Products
            </Link>
            <Link to="/about" className={`${
              isHomePage 
                ? (scrolled ? 'text-slate-800' : 'text-white') 
                : 'text-white'
            } hover:text-amber-200 transition-colors`}>
=======
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 font-medium transition-colors duration-200">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 font-medium transition-colors duration-200">
              Products
            </Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 font-medium transition-colors duration-200">
>>>>>>> 75579860cae2b79f281be2a1a57947e28603925c
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
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-800 dark:text-white transition-colors duration-300"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </form>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <Link
              to="/wishlist"
              className="relative p-2 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
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
              className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
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
<<<<<<< HEAD
                className={`block ${
                  isHomePage 
                    ? (scrolled ? 'text-slate-800' : 'text-white') 
                    : 'text-white'
                } hover:text-amber-200 transition-colors`}
=======
                className="block text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 font-medium transition-colors duration-200"
>>>>>>> 75579860cae2b79f281be2a1a57947e28603925c
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
<<<<<<< HEAD
                className={`block ${
                  isHomePage 
                    ? (scrolled ? 'text-slate-800' : 'text-white') 
                    : 'text-white'
                } hover:text-amber-200 transition-colors`}
=======
                className="block text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 font-medium transition-colors duration-200"
>>>>>>> 75579860cae2b79f281be2a1a57947e28603925c
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/about"
<<<<<<< HEAD
                className={`block ${
                  isHomePage 
                    ? (scrolled ? 'text-slate-800' : 'text-white') 
                    : 'text-white'
                } hover:text-amber-200 transition-colors`}
=======
                className="block text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 font-medium transition-colors duration-200"
>>>>>>> 75579860cae2b79f281be2a1a57947e28603925c
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