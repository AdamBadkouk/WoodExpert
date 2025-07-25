// AboutPage component serving as contact page with business information and map
import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const AboutPage = () => {

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-800 to-amber-600 dark:from-gray-800 dark:to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-amber-100 dark:text-gray-300">
            Get in touch with our team for custom furniture solutions and inquiries.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Our Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      N°60, Zone Industrielle<br />
                      Tassila III, Agadir<br />
                      Morocco
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      +212 661 756 580
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      cncwoodexpert@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Instagram</h3>
                    <a href="https://www.instagram.com/woodexpert.ma/" target="_blank" rel="noopener noreferrer" className="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors">
                      @woodexpert.ma
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Facebook className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Facebook</h3>
                    <a href="https://www.facebook.com/woodexpertstore" target="_blank" rel="noopener noreferrer" className="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors">
                      woodexpert Store
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About woodexpert</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                woodexpert is a small, dedicated furniture workshop specializing in custom wood furniture 
                and home decor. We focus on creating beautiful, functional pieces that bring warmth and 
                character to your living spaces.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Our team combines traditional woodworking techniques with modern design to create 
                unique pieces tailored to your specific needs and style preferences.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Whether you're looking for a custom dining table, storage solutions, or decorative 
                pieces, we're here to bring your vision to life with quality craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Find Us</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Visit our workshop in Agadir, Morocco. We're located in the industrial zone of Tassila III.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.123456789!2d-9.598107!3d30.427755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDI1JzM5LjkiTiA5wrAzNScwNS4yIlc!5e0!3m2!1sen!2sma!4v1234567890123!5m2!1sen!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="woodexpert Location - Agadir, Morocco"
                className="w-full h-full"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-amber-600 dark:text-amber-400" />
                  <span>N°60, Zone Industrielle, Tassila III, Agadir</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-amber-600 dark:text-amber-400" />
                  <span>+212 661 756 580</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default AboutPage;