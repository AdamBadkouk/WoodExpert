import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <footer className="relative bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white overflow-hidden">
      {/* Enhanced Blue Gradient Separator */}
      <div className="flex justify-center">
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-80 rounded-full"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center">
          {/* Logo and Brand */}
          <div className="flex flex-col items-center mb-6">
            <Link 
              to="/" 
              className="mb-1"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img 
                src="https://github.com/AdamBadkouk/WoodExpert/blob/main/pics/logo1.png?raw=true"  
                alt="woodexpert Logo" 
                className="w-24 h-24 mx-auto filter drop-shadow-lg hover:scale-105 transition-transform duration-300 max-[767px]:hover:scale-100"
              />
            </Link>
            <Link 
              to="/" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <h3 className="text-2xl font-bold mb-2 group cursor-pointer">
                  <span className="inline-block bg-gradient-to-r from-blue-800 via-blue-500 to-blue-200 bg-clip-text text-transparent transition-all duration-500 group-hover:from-blue-900 group-hover:via-blue-600 group-hover:to-blue-300 group-hover:scale-105 max-[767px]:group-hover:from-blue-800 max-[767px]:group-hover:via-blue-500 max-[767px]:group-hover:to-blue-200 max-[767px]:group-hover:scale-100">
                    WoodExpert
                  </span>
                </h3>
            </Link>
              <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto text-xs leading-relaxed">
                L'art du bois créé avec passion & précision
              </p>
           </div>

          {/* Contact and Social Media Links */}
          <div className="flex justify-center space-x-4">
            <a 
              href="mailto:contact@woodexpert.ma" 
              className="group relative p-2 bg-white/10 dark:bg-gray-800/10 backdrop-blur-md border border-white/20 dark:border-gray-700/20 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-md max-[767px]:hover:bg-white/10 dark:max-[767px]:hover:bg-gray-800/10 max-[767px]:hover:scale-100 max-[767px]:hover:translate-y-0 max-[767px]:hover:shadow-sm"
            >
              <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300 max-[767px]:group-hover:text-blue-600 dark:max-[767px]:group-hover:text-blue-400" />
              <div className="absolute inset-0 rounded-full bg-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl max-[767px]:group-hover:opacity-0"></div>
            </a>
            <a 
              href="tel:+212123456789" 
              className="group relative p-2 bg-white/10 dark:bg-gray-800/10 backdrop-blur-md border border-white/20 dark:border-gray-700/20 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-md max-[767px]:hover:bg-white/10 dark:max-[767px]:hover:bg-gray-800/10 max-[767px]:hover:scale-100 max-[767px]:hover:translate-y-0 max-[767px]:hover:shadow-sm"
            >
              <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300 max-[767px]:group-hover:text-blue-600 dark:max-[767px]:group-hover:text-blue-400" />
              <div className="absolute inset-0 rounded-full bg-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl max-[767px]:group-hover:opacity-0"></div>
            </a>
            <a 
              href="https://www.facebook.com/woodexpertstore" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative p-2 bg-white/10 dark:bg-gray-800/10 backdrop-blur-md border border-white/20 dark:border-gray-700/20 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-md max-[767px]:hover:bg-white/10 dark:max-[767px]:hover:bg-gray-800/10 max-[767px]:hover:scale-100 max-[767px]:hover:translate-y-0 max-[767px]:hover:shadow-sm"
            >
              <Facebook className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300 max-[767px]:group-hover:text-blue-600 dark:max-[767px]:group-hover:text-blue-400" />
              <div className="absolute inset-0 rounded-full bg-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl max-[767px]:group-hover:opacity-0"></div>
            </a>
            <a 
              href="https://www.instagram.com/woodexpert.ma/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative p-2 bg-white/10 dark:bg-gray-800/10 backdrop-blur-md border border-white/20 dark:border-gray-700/20 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-md max-[767px]:hover:bg-white/10 dark:max-[767px]:hover:bg-gray-800/10 max-[767px]:hover:scale-100 max-[767px]:hover:translate-y-0 max-[767px]:hover:shadow-sm"
            >
              <Instagram className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300 max-[767px]:group-hover:text-blue-600 dark:max-[767px]:group-hover:text-blue-400" />
              <div className="absolute inset-0 rounded-full bg-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl max-[767px]:group-hover:opacity-0"></div>
            </a>
          </div>
 
          </div>
        </div>
      </footer>
  );
};

export default Footer;