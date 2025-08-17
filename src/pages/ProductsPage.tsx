import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const categories = ['Designs', 'Logos', 'Plafonds', 'Separations'];
  const [activeCategory, setActiveCategory] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const separationProducts = [
    { id: 1, name: 'Séparation Moderne', image: 'https://github.com/AdamBadkouk/WoodExpert/blob/main/pics/sep1.jpg?raw=true', description: 'Cloison contemporaine élégante' },
    { id: 2, name: 'Séparation Décorative', image: 'https://github.com/AdamBadkouk/WoodExpert/blob/main/pics/sep2.jpg?raw=true', description: 'Panneau ornemental raffiné' },
    { id: 3, name: 'Séparation Minimaliste', image: 'https://github.com/AdamBadkouk/WoodExpert/blob/main/pics/sep3.jpg?raw=true', description: 'Design épuré et fonctionnel' },
    { id: 4, name: 'Séparation Artistique', image: 'https://github.com/AdamBadkouk/WoodExpert/blob/main/pics/sep4.jpg?raw=true', description: 'Création unique sculptée' },
    { id: 5, name: 'Séparation Élégante', image: 'https://github.com/AdamBadkouk/WoodExpert/blob/main/pics/sep5.jpg?raw=true', description: 'Style raffiné et sophistiqué' },
    { id: 6, name: 'Séparation Premium', image: 'https://github.com/AdamBadkouk/WoodExpert/blob/main/pics/sep6.jpg?raw=true', description: 'Finition haut de gamme' },
    { id: 8, name: 'Séparation Exclusive', image: 'https://github.com/AdamBadkouk/WoodExpert/blob/main/pics/sep8.jpg?raw=true', description: 'Design exclusif sur mesure' }
  ];

  const plafondProducts = [
    { id: 1, name: 'Plafond Moderne Élégant', image: 'https://github.com/AdamBadkouk/WoodExpert/blob/main/pics/pl1.jpg?raw=true', description: 'Design contemporain en bois noble pour plafond' },
    { id: 2, name: 'Plafond Classique Raffiné', image: 'https://github.com/AdamBadkouk/WoodExpert/blob/main/pics/pl2.jpg?raw=true', description: 'Style traditionnel avec finitions artisanales' },
    { id: 3, name: 'Plafond Design Minimaliste', image: 'https://github.com/AdamBadkouk/WoodExpert/blob/main/pics/pl3.jpg?raw=true', description: 'Lignes épurées pour intérieur moderne' },
    { id: 4, name: 'Plafond Artistique Sculpté', image: 'https://github.com/AdamBadkouk/WoodExpert/blob/main/pics/pl4.jpg?raw=true', description: 'Œuvre d\'art fonctionnelle pour votre plafond' },
    { id: 5, name: 'Plafond Luxueux', image: 'https://github.com/AdamBadkouk/WoodExpert/blob/main/pics/pl5.jpg?raw=true', description: 'Finition haut de gamme' },
    { id: 6, name: 'Plafond Premium', image: 'https://github.com/AdamBadkouk/WoodExpert/blob/main/pics/pl6.jpg?raw=true', description: 'Design premium exclusif' },
    { id: '6-large', name: 'Plafond Premium Large', image: 'https://github.com/AdamBadkouk/WoodExpert/blob/main/pics/pl6%20(Large).jpg?raw=true', description: 'Version grand format du design premium' }
  ];

  const designProducts = [
    { id: 1, name: 'Design Moderne Élégant', image: 'https://github.com/AdamBadkouk/WoodExpert/blob/main/pics/des1.jpg?raw=true', description: 'Design contemporain en bois noble' },
    { id: '1-1', name: 'Design Moderne Variant', image: 'https://github.com/AdamBadkouk/WoodExpert/blob/main/pics/des1-1.jpg?raw=true', description: 'Variante du design moderne' },
    { id: 2, name: 'Design Classique Raffiné', image: 'https://github.com/AdamBadkouk/WoodExpert/blob/main/pics/des2.jpg?raw=true', description: 'Style traditionnel avec finitions artisanales' },
    { id: 3, name: 'Design Minimaliste Chic', image: 'https://github.com/AdamBadkouk/WoodExpert/blob/main/pics/des3.jpg?raw=true', description: 'Lignes épurées pour intérieur moderne' },
    { id: 4, name: 'Design Artistique Sculpté', image: 'https://github.com/AdamBadkouk/WoodExpert/blob/main/pics/des4.jpg?raw=true', description: 'Œuvre d\'art fonctionnelle en bois' },
    { id: 5, name: 'Design Premium Luxe', image: 'https://github.com/AdamBadkouk/WoodExpert/blob/main/pics/des5.jpg?raw=true', description: 'Design haut de gamme en bois noble' },
    { id: 7, name: 'Design Personnalisé', image: 'https://github.com/AdamBadkouk/WoodExpert/blob/main/pics/des7.jpg?raw=true', description: 'Design entièrement personnalisé selon vos besoins' },
    { id: 8, name: 'Design Signature Exclusive', image: 'https://github.com/AdamBadkouk/WoodExpert/blob/main/pics/des8.jpg?raw=true', description: 'Design signature pour une identité forte' },
    { id: 9, name: 'Design Innovant Unique', image: 'https://github.com/AdamBadkouk/WoodExpert/blob/main/pics/des9.jpg?raw=true', description: 'Design révolutionnaire pour projets exceptionnels' },
    { id: 10, name: 'Design Artistique Premium', image: 'https://github.com/AdamBadkouk/WoodExpert/blob/main/pics/des10.jpg?raw=true', description: 'Expression créative unique en bois sculpté' },
    { id: 12, name: 'Design Élégant', image: 'https://github.com/AdamBadkouk/WoodExpert/blob/main/pics/des12.jpg?raw=true', description: 'Raffinement et sophistication' }
  ];

  const logoProducts = [
    { id: 1, name: 'Logo Corporate', image: 'https://github.com/AdamBadkouk/WoodExpert/blob/main/pics/logo1.jpg?raw=true', description: 'Logo professionnel pour entreprise' },
    { id: 2, name: 'Logo Design Moderne', image: 'https://github.com/AdamBadkouk/WoodExpert/blob/main/pics/logo2.jpg?raw=true', description: 'Design contemporain pour votre marque' },
    { id: 3, name: 'Logo Artistique Sculpté', image: 'https://github.com/AdamBadkouk/WoodExpert/blob/main/pics/logo3.jpg?raw=true', description: 'Logo sculpté à la main avec finition artisanale' },
    { id: 4, name: 'Logo Minimaliste Chic', image: 'https://github.com/AdamBadkouk/WoodExpert/blob/main/pics/logo4.jpg?raw=true', description: 'Design épuré pour une image moderne' },
    { id: 5, name: 'Logo Traditionnel Raffiné', image: 'https://github.com/AdamBadkouk/WoodExpert/blob/main/pics/logo5.jpg?raw=true', description: 'Style classique avec gravure profonde' },
    { id: 6, name: 'Logo Premium Luxe', image: 'https://github.com/AdamBadkouk/WoodExpert/blob/main/pics/logo6.jpg?raw=true', description: 'Logo haut de gamme en bois noble' },
    { id: 7, name: 'Logo Créatif Original', image: 'https://github.com/AdamBadkouk/WoodExpert/blob/main/pics/logo7.jpg?raw=true', description: 'Design unique pour se démarquer' },
    { id: 8, name: 'Logo Personnalisé Sur-Mesure', image: 'https://github.com/AdamBadkouk/WoodExpert/blob/main/pics/logo8.jpg?raw=true', description: 'Logo entièrement personnalisé selon vos besoins' },
    { id: 9, name: 'Logo Signature Exclusive', image: 'https://github.com/AdamBadkouk/WoodExpert/blob/main/pics/logo9.jpg?raw=true', description: 'Logo signature pour une identité forte' }
  ];



  return (
    <div className={`min-h-screen bg-custom-bg dark:bg-custom-dark-bg transition-colors duration-300 ${isLoaded ? 'slide-in-bottom' : 'opacity-0'}`}>
      {/* Products Section */}
      <section className="py-12 sm:py-16 pt-20 sm:pt-24 bg-custom-bg dark:bg-custom-dark-bg transition-colors duration-300">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4 ${isLoaded ? 'zoom-in animate-delay-200' : 'opacity-0'}`}>
              <span className="inline-block bg-gradient-to-r from-blue-800 via-blue-500 to-blue-200 bg-clip-text text-transparent drop-shadow-lg">
                Nos Produits
              </span>
            </h2>
          </div>
          
          {/* Category Navigation - Floating Dock Style */}
          <div className={`flex justify-center mb-8 sm:mb-12 px-4 ${isLoaded ? 'zoom-in animate-delay-300' : 'opacity-0'}`}>
            <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-2xl px-2 md:px-4 py-2 border border-white/20 dark:border-gray-700/20 shadow-2xl hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 max-[767px]:hover:bg-white/10 dark:max-[767px]:hover:bg-gray-800/10">
              <div className="flex space-x-2 sm:space-x-4 overflow-x-auto scrollbar-hide">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(index)}
                    className={`font-medium transition-all duration-300 relative group py-2 px-3 sm:px-4 whitespace-nowrap text-sm sm:text-base rounded-lg ${
                      activeCategory === index
                        ? 'text-blue-600 dark:text-blue-400 bg-white/20 dark:bg-gray-700/20'
                        : 'text-blue-300 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/10 dark:hover:bg-gray-700/10 max-[767px]:hover:text-blue-300 dark:max-[767px]:hover:text-blue-200 max-[767px]:hover:bg-transparent dark:max-[767px]:hover:bg-transparent'
                    }`}
                  >
                    {category}
                    <span className={`absolute left-3 bottom-1 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 ease-out ${
                      activeCategory === index
                        ? 'w-[calc(100%-24px)]'
                        : 'w-0 group-hover:w-[calc(100%-24px)] max-[767px]:group-hover:w-0'
                    }`}></span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Display */}
          {activeCategory === 0 && ( // Designs category
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {designProducts.map((product, index) => (
                  <div key={product.id} className={`glass-card rounded-2xl overflow-hidden ${isLoaded ? 'zoom-in' : 'opacity-0'}`} style={{animationDelay: `${0.4 + index * 0.1}s`}}>
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 max-[767px]:hover:scale-100"
                      />
                    </div>
                    <div className="p-4 sm:p-6">
                      <a
                      href={`https://wa.me/212661756580?text=${encodeURIComponent(`Bonjour, je suis intéressé(e) par le produit: ${product.name}. Pourriez-vous me donner plus d'informations?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-white to-blue-50 text-blue-800 font-semibold py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg hover:from-blue-50 hover:to-white transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 group flex items-center justify-center gap-2 text-xs sm:text-sm max-[767px]:hover:from-white max-[767px]:hover:to-blue-50 max-[767px]:hover:shadow-lg max-[767px]:hover:transform-none"
                    >
                        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                        À propos de ce produit
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Personalized Design Button */}
              <div className={`flex justify-center mt-8 sm:mt-12 px-4 ${isLoaded ? 'zoom-in animate-delay-500' : 'opacity-0'}`}>
                <a
                  href={`https://wa.me/212661756580?text=${encodeURIComponent(`Bonjour, je souhaiterais discuter d'un design personnalisé. Pouvez-vous m'aider?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold py-3 sm:py-4 px-4 sm:px-8 rounded-lg hover:bg-gradient-to-r hover:from-white hover:to-blue-50 hover:text-blue-800 hover:border-blue-200 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 group flex items-center justify-center gap-2 text-sm sm:text-base lg:text-lg w-full sm:w-auto max-[767px]:hover:bg-transparent max-[767px]:hover:text-blue-600 dark:max-[767px]:hover:text-blue-400 max-[767px]:hover:border-blue-600 max-[767px]:hover:shadow-lg max-[767px]:hover:transform-none"
                >
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                  Pour un design personnalisé contactez-nous
                </a>
              </div>
            </>
          )}

          {/* Logos category */}
          {activeCategory === 1 && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {logoProducts.map((product, index) => (
                  <div key={product.id} className={`glass-card rounded-2xl overflow-hidden ${isLoaded ? 'zoom-in' : 'opacity-0'}`} style={{animationDelay: `${0.4 + index * 0.1}s`}}>
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 max-[767px]:hover:scale-100"
                      />
                    </div>
                    <div className="p-4 sm:p-6">
                       <a
                        href={`https://wa.me/212661756580?text=${encodeURIComponent(`Bonjour, je suis intéressé(e) par le produit: ${product.name}. Pourriez-vous me donner plus d'informations?`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-white to-blue-50 text-blue-800 font-semibold py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg hover:from-blue-50 hover:to-white transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 group flex items-center justify-center gap-2 text-xs sm:text-sm max-[767px]:hover:from-white max-[767px]:hover:to-blue-50 max-[767px]:hover:shadow-lg max-[767px]:hover:transform-none"
                      >
                        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                        À propos de ce produit
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Personalized Design Button */}
              <div className={`flex justify-center mt-8 sm:mt-12 px-4 ${isLoaded ? 'zoom-in animate-delay-500' : 'opacity-0'}`}>
                <a
                  href={`https://wa.me/212661756580?text=${encodeURIComponent(`Bonjour, je souhaiterais discuter d'un design personnalisé. Pouvez-vous m'aider?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold py-3 sm:py-4 px-4 sm:px-8 rounded-lg hover:bg-gradient-to-r hover:from-white hover:to-blue-50 hover:text-blue-800 hover:border-blue-200 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 group flex items-center justify-center gap-2 text-sm sm:text-base lg:text-lg w-full sm:w-auto max-[767px]:hover:bg-transparent max-[767px]:hover:text-blue-600 dark:max-[767px]:hover:text-blue-400 max-[767px]:hover:border-blue-600 max-[767px]:hover:shadow-lg max-[767px]:hover:transform-none"
                >
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                  Pour un design personnalisé contactez-nous
                </a>
              </div>
            </>
          )}

          {/* Plafonds category */}
          {activeCategory === 2 && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {plafondProducts.map((product, index) => (
                  <div key={product.id} className={`glass-card rounded-2xl overflow-hidden ${isLoaded ? 'zoom-in' : 'opacity-0'}`} style={{animationDelay: `${0.4 + index * 0.1}s`}}>
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 max-[767px]:hover:scale-100"
                      />
                    </div>
                    <div className="p-4 sm:p-6">
                       <a
                        href={`https://wa.me/212661756580?text=${encodeURIComponent(`Bonjour, je suis intéressé(e) par le produit: ${product.name}. Pourriez-vous me donner plus d'informations?`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-white to-blue-50 text-blue-800 font-semibold py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg hover:from-blue-50 hover:to-white transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 group flex items-center justify-center gap-2 text-xs sm:text-sm max-[767px]:hover:from-white max-[767px]:hover:to-blue-50 max-[767px]:hover:shadow-lg max-[767px]:hover:transform-none"
                      >
                        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                        À propos de ce produit
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Personalized Design Button */}
              <div className={`flex justify-center mt-8 sm:mt-12 px-4 ${isLoaded ? 'zoom-in animate-delay-500' : 'opacity-0'}`}>
                <a
                  href={`https://wa.me/212661756580?text=${encodeURIComponent(`Bonjour, je souhaiterais discuter d'un design personnalisé. Pouvez-vous m'aider?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold py-3 sm:py-4 px-4 sm:px-8 rounded-lg hover:bg-gradient-to-r hover:from-white hover:to-blue-50 hover:text-blue-800 hover:border-blue-200 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 group flex items-center justify-center gap-2 text-sm sm:text-base lg:text-lg w-full sm:w-auto max-[767px]:hover:bg-transparent max-[767px]:hover:text-blue-600 dark:max-[767px]:hover:text-blue-400 max-[767px]:hover:border-blue-600 max-[767px]:hover:shadow-lg max-[767px]:hover:transform-none"
                >
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                  Pour un design personnalisé contactez-nous
                </a>
              </div>
            </>
          )}

          {/* Separations category */}
          {activeCategory === 3 && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {separationProducts.map((product, index) => (
                  <div key={product.id} className={`glass-card rounded-2xl overflow-hidden ${isLoaded ? 'zoom-in' : 'opacity-0'}`} style={{animationDelay: `${0.4 + index * 0.1}s`}}>
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 max-[767px]:hover:scale-100"
                      />
                    </div>
                    <div className="p-4 sm:p-6">
                       <a
                        href={`https://wa.me/212661756580?text=${encodeURIComponent(`Bonjour, je suis intéressé(e) par le produit: ${product.name}. Pourriez-vous me donner plus d'informations?`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-white to-blue-50 text-blue-800 font-semibold py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg hover:from-blue-50 hover:to-white transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 group flex items-center justify-center gap-2 text-xs sm:text-sm max-[767px]:hover:from-white max-[767px]:hover:to-blue-50 max-[767px]:hover:shadow-lg max-[767px]:hover:transform-none"
                      >
                        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                        À propos de ce produit
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Personalized Design Button */}
              <div className={`flex justify-center mt-8 sm:mt-12 px-4 ${isLoaded ? 'zoom-in animate-delay-500' : 'opacity-0'}`}>
                <a
                  href={`https://wa.me/212661756580?text=${encodeURIComponent(`Bonjour, je souhaiterais discuter d'un design personnalisé. Pouvez-vous m'aider?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold py-3 sm:py-4 px-4 sm:px-8 rounded-lg hover:bg-gradient-to-r hover:from-white hover:to-blue-50 hover:text-blue-800 hover:border-blue-200 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 group flex items-center justify-center gap-2 text-sm sm:text-base lg:text-lg w-full sm:w-auto max-[767px]:hover:bg-transparent max-[767px]:hover:text-blue-600 dark:max-[767px]:hover:text-blue-400 max-[767px]:hover:border-blue-600 max-[767px]:hover:shadow-lg max-[767px]:hover:transform-none"
                >
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                  Pour un design personnalisé contactez-nous
                </a>
              </div>
            </>
          )}

          {/* Placeholder for other categories */}
          {activeCategory !== 0 && activeCategory !== 1 && activeCategory !== 2 && activeCategory !== 3 && (
            <div className="text-center py-16">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Produits pour {categories[activeCategory]} - Bientôt disponibles
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;