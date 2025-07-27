import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, Menu, X, Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
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
        scrolled
          ? 'bg-white bg-opacity-70 shadow-md py-2 dark:bg-gray-900 dark:bg-opacity-70 backdrop-blur-sm'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/pics/logo1.png" 
              alt="woodexpert Logo" 
              className="w-16 h-16 mr-3 transition-all duration-300"
            />
            <h1 className={`text-2xl font-bold transition-colors duration-300 ${
              scrolled || !isHomePage
                ? 'text-blue-800 dark:text-blue-200'
                : 'text-white drop-shadow-lg'
            }`}>
              woodexpert
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`font-medium transition-colors duration-200 ${
              scrolled || !isHomePage
                ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                : 'text-white hover:text-blue-200 drop-shadow'
            }`}>
              Accueil
            </Link>
            <Link to="/products" className={`font-medium transition-colors duration-200 ${
              scrolled || !isHomePage
                ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                : 'text-white hover:text-blue-200 drop-shadow'
            }`}>
              Produits
            </Link>
            <Link to="/about" className={`font-medium transition-colors duration-200 ${
              scrolled || !isHomePage
                ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                : 'text-white hover:text-blue-200 drop-shadow'
            }`}>
              Contact
            </Link>
          </nav>



          {/* Actions */}
          <div className="flex items-center space-x-4">

            <button
              onClick={toggleDarkMode}
              className={`p-2 transition-colors duration-200 ${
                scrolled || !isHomePage
                  ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                : 'text-white hover:text-blue-200 drop-shadow'
              }`}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 transition-colors duration-200 ${
                scrolled || !isHomePage
                  ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                : 'text-white hover:text-blue-200 drop-shadow'
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
                  placeholder="Rechercher des produits..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white transition-colors duration-300"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </form>
            <nav className="space-y-4">
              <Link
                to="/"
                className={`block font-medium transition-colors duration-200 ${
                  scrolled || !isHomePage
                    ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                : 'text-white hover:text-blue-200'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                to="/products"
                className={`block font-medium transition-colors duration-200 ${
                  scrolled || !isHomePage
                    ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                : 'text-white hover:text-blue-200'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Produits
              </Link>
              <Link
                to="/about"
                className={`block font-medium transition-colors duration-200 ${
                  scrolled || !isHomePage
                    ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                : 'text-white hover:text-blue-200'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
