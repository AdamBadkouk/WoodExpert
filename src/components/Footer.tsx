import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <footer className="bg-amber-900 dark:bg-gray-900 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-amber-700 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">WE</span>
              </div>
              <h3 className="text-2xl font-bold">WoodExpert</h3>
            </div>
            <p className="text-amber-100 dark:text-gray-300 mb-4 leading-relaxed">
              Crafting beautiful, sustainable wood furniture for your home and office. 
              Quality craftsmanship meets modern design.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-amber-100 dark:text-gray-300">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">123 Woodcraft Ave, Portland, OR 97205</span>
              </div>
              <div className="flex items-center text-amber-100 dark:text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center text-amber-100 dark:text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">info@woodexpert.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-amber-100 dark:text-gray-300 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="/products" className="text-amber-100 dark:text-gray-300 hover:text-white transition-colors duration-200">All Products</a></li>
              <li><a href="/products?category=furniture" className="text-amber-100 dark:text-gray-300 hover:text-white transition-colors duration-200">Furniture</a></li>
              <li><a href="/products?category=desks" className="text-amber-100 dark:text-gray-300 hover:text-white transition-colors duration-200">Desks</a></li>
              <li><a href="/products?category=shelves" className="text-amber-100 dark:text-gray-300 hover:text-white transition-colors duration-200">Shelves</a></li>
              <li><a href="/about" className="text-amber-100 dark:text-gray-300 hover:text-white transition-colors duration-200">About Us</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-100 dark:text-gray-300 hover:text-white transition-colors duration-200">Shipping Info</a></li>
              <li><a href="#" className="text-amber-100 dark:text-gray-300 hover:text-white transition-colors duration-200">Returns & Exchanges</a></li>
              <li><a href="#" className="text-amber-100 dark:text-gray-300 hover:text-white transition-colors duration-200">Size Guide</a></li>
              <li><a href="#" className="text-amber-100 dark:text-gray-300 hover:text-white transition-colors duration-200">Care Instructions</a></li>
              <li><a href="#" className="text-amber-100 dark:text-gray-300 hover:text-white transition-colors duration-200">FAQ</a></li>
              <li><a href="/about" className="text-amber-100 dark:text-gray-300 hover:text-white transition-colors duration-200">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <p className="text-amber-100 dark:text-gray-300 mb-4 text-sm leading-relaxed">
              Subscribe to our newsletter for exclusive offers, new product announcements, and woodworking tips.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-amber-800 dark:bg-gray-800 border border-amber-700 dark:border-gray-700 rounded-l-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-white placeholder-amber-200 dark:placeholder-gray-400 text-sm"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-amber-700 hover:bg-amber-600 rounded-r-lg transition-colors duration-200 text-sm font-medium"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-100 dark:text-gray-300 hover:text-white transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-amber-100 dark:text-gray-300 hover:text-white transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-amber-100 dark:text-gray-300 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 dark:border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-amber-200 dark:text-gray-400 text-sm">
              © 2025 WoodExpert. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-amber-200 dark:text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-amber-200 dark:text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-amber-200 dark:text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;