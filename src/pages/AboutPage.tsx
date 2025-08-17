import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const AboutPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-custom-bg dark:bg-custom-dark-bg transition-colors duration-300 ${isLoaded ? 'fade-in-scale' : 'opacity-0'}`}>
      {/* Contact Information Section */}
      <section className="py-12 sm:py-16 pt-24 sm:pt-32 bg-custom-bg dark:bg-custom-dark-bg transition-colors duration-300">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4 ${isLoaded ? 'zoom-in animate-delay-200' : 'opacity-0'}`}>
              <span className="inline-block bg-gradient-to-r from-blue-800 via-blue-500 to-blue-200 bg-clip-text text-transparent drop-shadow-lg">
                Contactez-nous
              </span>
            </h2>
            <p className={`text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8 px-4 ${isLoaded ? 'zoom-in animate-delay-300' : 'opacity-0'}`}>
              Découvrez nos coordonnées et moyens de contact pour vos projets en bois
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">

            {/* Phone Card */}
            <a 
              href="https://wa.me/212661756580" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`glass-card p-4 sm:p-6 rounded-xl text-center group cursor-pointer block transition-all duration-300 hover:bg-white/12 hover:border-blue-300/30 hover:shadow-2xl hover:shadow-blue-500/20 max-[767px]:hover:bg-white/8 max-[767px]:hover:border-white/10 max-[767px]:hover:shadow-lg ${isLoaded ? 'zoom-in animate-delay-400' : 'opacity-0'}`}
            >
              <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-full flex items-center justify-center text-white mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg max-[767px]:group-hover:scale-100 max-[767px]:group-hover:rotate-0">
                <Phone className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 max-[767px]:group-hover:text-gray-900 dark:max-[767px]:group-hover:text-white">
                Téléphone
              </h3>
              <span className="text-gray-600 dark:text-gray-300 leading-relaxed text-xs sm:text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 max-[767px]:group-hover:text-gray-600 dark:max-[767px]:group-hover:text-gray-300">
                +212 661 756 580
              </span>
            </a>

            {/* Email Card */}
            <a 
              href="mailto:cncwoodexpert@gmail.com"
              className={`glass-card p-4 sm:p-6 rounded-xl text-center group cursor-pointer block transition-all duration-300 hover:bg-white/12 hover:border-blue-300/30 hover:shadow-2xl hover:shadow-blue-500/20 max-[767px]:hover:bg-white/8 max-[767px]:hover:border-white/10 max-[767px]:hover:shadow-lg ${isLoaded ? 'zoom-in animate-delay-500' : 'opacity-0'}`}
            >
              <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-full flex items-center justify-center text-white mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg max-[767px]:group-hover:scale-100 max-[767px]:group-hover:rotate-0">
                <Mail className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 max-[767px]:group-hover:text-gray-900 dark:max-[767px]:group-hover:text-white">
                E-mail
              </h3>
              <span className="text-gray-600 dark:text-gray-300 leading-relaxed text-xs sm:text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 max-[767px]:group-hover:text-gray-600 dark:max-[767px]:group-hover:text-gray-300 break-all">
                cncwoodexpert@gmail.com
              </span>
            </a>

            {/* Instagram Card */}
            <a 
              href="https://www.instagram.com/woodexpert.ma/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`glass-card p-4 sm:p-6 rounded-xl text-center group cursor-pointer block transition-all duration-300 hover:bg-white/12 hover:border-blue-300/30 hover:shadow-2xl hover:shadow-blue-500/20 max-[767px]:hover:bg-white/8 max-[767px]:hover:border-white/10 max-[767px]:hover:shadow-lg ${isLoaded ? 'zoom-in animate-delay-600' : 'opacity-0'}`}
            >
              <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-full flex items-center justify-center text-white mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg max-[767px]:group-hover:scale-100 max-[767px]:group-hover:rotate-0">
                <Instagram className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 max-[767px]:group-hover:text-gray-900 dark:max-[767px]:group-hover:text-white">
                Instagram
              </h3>
              <span className="text-gray-600 dark:text-gray-300 leading-relaxed text-xs sm:text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 max-[767px]:group-hover:text-gray-600 dark:max-[767px]:group-hover:text-gray-300">
                @woodexpert.ma
              </span>
            </a>

            {/* Facebook Card */}
            <a 
              href="https://www.facebook.com/woodexpertstore" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`glass-card p-4 sm:p-6 rounded-xl text-center group cursor-pointer block transition-all duration-300 hover:bg-white/12 hover:border-blue-300/30 hover:shadow-2xl hover:shadow-blue-500/20 max-[767px]:hover:bg-white/8 max-[767px]:hover:border-white/10 max-[767px]:hover:shadow-lg ${isLoaded ? 'zoom-in animate-delay-700' : 'opacity-0'}`}
            >
              <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-full flex items-center justify-center text-white mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg max-[767px]:group-hover:scale-100 max-[767px]:group-hover:rotate-0">
                <Facebook className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 max-[767px]:group-hover:text-gray-900 dark:max-[767px]:group-hover:text-white">
                Facebook
              </h3>
              <span className="text-gray-600 dark:text-gray-300 leading-relaxed text-xs sm:text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 max-[767px]:group-hover:text-gray-600 dark:max-[767px]:group-hover:text-gray-300">
                woodexpert Store
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-12 sm:py-16 bg-custom-bg dark:bg-custom-dark-bg transition-colors duration-300">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4 ${isLoaded ? 'zoom-in animate-delay-200' : 'opacity-0'}`}>
              <span className="inline-block bg-gradient-to-r from-blue-800 via-blue-500 to-blue-200 bg-clip-text text-transparent drop-shadow-lg">
                Trouvez-nous
              </span>
            </h2>
            <p className={`text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4 ${isLoaded ? 'zoom-in animate-delay-300' : 'opacity-0'}`}>
              Visitez notre atelier à Agadir, Maroc. Nous sommes situés dans la zone industrielle de Tassila III.
            </p>
          </div>
          
          <div className={`glass-card rounded-xl overflow-hidden group transition-all duration-300 hover:bg-white/12 hover:border-blue-300/30 hover:shadow-2xl hover:shadow-blue-500/20 max-[767px]:hover:bg-white/8 max-[767px]:hover:border-white/10 max-[767px]:hover:shadow-lg ${isLoaded ? 'zoom-in animate-delay-400' : 'opacity-0'}`}>
            <div className="aspect-w-16 aspect-h-9 h-64 sm:h-80 lg:h-96">
              <iframe
                src="https://maps.google.com/maps?q=CNC+WOOD+EXPERT,+N%C2%B060,+Zone+Industrielle,+Tassila+III,+Agadir,+Morocco&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CNC WOOD EXPERT - Agadir, Maroc"
                className="w-full h-full"
              />
            </div>
            <div className="p-4 sm:p-6 text-center">
              <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-full flex items-center justify-center text-white mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg max-[767px]:group-hover:scale-100 max-[767px]:group-hover:rotate-0">
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 max-[767px]:group-hover:text-gray-900 dark:max-[767px]:group-hover:text-white">
                Notre Atelier
              </h3>
              <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
                 <p><strong>Adresse:</strong> N°60, Zone Industrielle Tassila III, Agadir, Maroc</p>
                 <p><strong>Horaires:</strong> Lun-Ven: 8h00-18h00, Sam: 8h00-12h00</p>
               </div>
              <a 
                href="https://maps.app.goo.gl/gZcXnMq9t99uwbgB7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-white to-blue-50 text-blue-800 font-semibold rounded-lg hover:from-blue-50 hover:to-white transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 group max-[767px]:hover:from-white max-[767px]:hover:to-blue-50 max-[767px]:hover:shadow-lg max-[767px]:hover:transform-none"
              >
                <MapPin className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform duration-300 max-[767px]:group-hover:translate-x-0" />
                Voir sur Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default AboutPage;