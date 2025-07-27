import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {

  return (
    <footer className="bg-blue-900 dark:bg-gray-900 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-start mb-2">
              <img 
                src="/pics/logo1.png" 
                alt="woodexpert Logo" 
                className="w-36 h-36 mr-4 transition-all duration-300"
              />
              <div className="flex flex-col">
                <h3 className="text-xl font-bold mb-1">woodexpert</h3>
                <p className="text-blue-100 dark:text-gray-300 leading-relaxed mb-2 text-sm">
                  Création de beaux meubles en bois durables pour votre maison et bureau. 
                  Savoir-faire de qualité rencontre design moderne.
                </p>
                <div className="space-y-1">
                <div className="flex items-center text-blue-100 dark:text-gray-300">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">N°60, Zone Industrielle, Tassila III, Agadir, Morocco</span>
                </div>
                <div className="flex items-center text-amber-100 dark:text-gray-300">
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="text-sm">+212 661 756 580</span>
                </div>
                <div className="flex items-center text-amber-100 dark:text-gray-300">
                   <Mail className="h-4 w-4 mr-2" />
                   <span className="text-sm">cncwoodexpert@gmail.com</span>
                 </div>
                 </div>
               </div>
             </div>
          </div>


          {/* Social Media */}
          <div>
            <h4 className="text-xl font-bold mb-2">Suivez-nous</h4>
            <p className="text-blue-100 dark:text-gray-300 mb-2 text-sm leading-relaxed">
              Restez connecté avec nous sur les réseaux sociaux pour les mises à jour et l'inspiration.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/woodexpertstore" target="_blank" rel="noopener noreferrer" className="text-blue-100 dark:text-gray-300 hover:text-white transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/woodexpert.ma/" target="_blank" rel="noopener noreferrer" className="text-blue-100 dark:text-gray-300 hover:text-white transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>

            </div>
          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;