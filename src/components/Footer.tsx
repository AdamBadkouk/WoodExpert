import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

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
            <div className="group cursor-pointer mb-1">
              <img 
                src="/pics/logo1.png" 
                alt="woodexpert Logo" 
                className="w-24 h-24 mx-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 filter drop-shadow-lg"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2 group cursor-pointer">
                <span className="inline-block bg-gradient-to-r from-blue-800 via-blue-500 to-blue-200 bg-clip-text text-transparent transition-all duration-500 group-hover:from-blue-900 group-hover:via-blue-600 group-hover:to-blue-300 group-hover:scale-105">
                  WoodExpert
                </span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto text-xs leading-relaxed">
                L'art du bois créé avec passion & précision
              </p>
           </div>

          {/* Contact and Social Media Links */}
          <div className="flex justify-center space-x-4">
            <a 
              href="mailto:contact@woodexpert.ma" 
              className="group relative p-2 bg-white/10 dark:bg-gray-800/10 backdrop-blur-md border border-white/20 dark:border-gray-700/20 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-md"
            >
              <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300" />
              <div className="absolute inset-0 rounded-full bg-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </a>
            <a 
              href="tel:+212123456789" 
              className="group relative p-2 bg-white/10 dark:bg-gray-800/10 backdrop-blur-md border border-white/20 dark:border-gray-700/20 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-md"
            >
              <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300" />
              <div className="absolute inset-0 rounded-full bg-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </a>
            <a 
              href="https://www.facebook.com/woodexpertstore" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative p-2 bg-white/10 dark:bg-gray-800/10 backdrop-blur-md border border-white/20 dark:border-gray-700/20 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-md"
            >
              <Facebook className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300" />
              <div className="absolute inset-0 rounded-full bg-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </a>
            <a 
              href="https://www.instagram.com/woodexpert.ma/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative p-2 bg-white/10 dark:bg-gray-800/10 backdrop-blur-md border border-white/20 dark:border-gray-700/20 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-md"
            >
              <Instagram className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300" />
              <div className="absolute inset-0 rounded-full bg-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </a>
          </div>
 
          </div>
        </div>
      </footer>
  );
};

export default Footer;