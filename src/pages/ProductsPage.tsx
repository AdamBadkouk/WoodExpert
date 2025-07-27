import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const categories = ['Accessoires', 'Cuisine', 'Logo', 'Plafond', 'Salon'];
  const [activeCategory, setActiveCategory] = useState(0);

  const accessoryProducts = [
    { id: 1, name: 'Porte-Clés Artisanal', image: '/pics/acc1.jpg', description: 'Porte-clés en bois massif sculpté à la main' },
    { id: 2, name: 'Dessous de Verre Élégant', image: '/pics/acc2.jpg', description: 'Set de dessous de verre en bois noble' },
    { id: 3, name: 'Boîte à Bijoux Raffinée', image: '/pics/acc3.jpg', description: 'Coffret en bois précieux avec compartiments' },
    { id: 4, name: 'Support Téléphone Design', image: '/pics/acc4.jpg', description: 'Support moderne en bois pour smartphone' },
    { id: 5, name: 'Vide-Poche Décoratif', image: '/pics/acc5.jpg', description: 'Plateau décoratif en bois sculpté' },
    { id: 6, name: 'Cadre Photo Naturel', image: '/pics/acc6.jpg', description: 'Cadre photo en bois brut authentique' },
    { id: 7, name: 'Organisateur Bureau', image: '/pics/acc7.jpg', description: 'Organisateur de bureau en bois fonctionnel' },
    { id: 8, name: 'Lampe Ambiance Bois', image: '/pics/acc8.jpg', description: 'Lampe d\'ambiance en bois avec éclairage LED' }
  ];

  const plafondProducts = [
    { id: 1, name: 'Plafond Moderne Élégant', image: '/pics/pl1.jpg', description: 'Design contemporain en bois noble pour plafond' },
    { id: 2, name: 'Plafond Classique Raffiné', image: '/pics/pl2.jpg', description: 'Style traditionnel avec finitions artisanales' },
    { id: 3, name: 'Plafond Design Minimaliste', image: '/pics/pl3.jpg', description: 'Lignes épurées pour intérieur moderne' },
    { id: 4, name: 'Plafond Artistique Sculpté', image: '/pics/pl4.jpg', description: 'Œuvre d\'art fonctionnelle pour votre plafond' }
  ];



  return (
    <div className="min-h-screen bg-custom-bg dark:bg-custom-dark-bg transition-colors duration-300 slide-in-bottom">
      {/* Products Section */}
      <section className="py-12 sm:py-16 pt-24 sm:pt-32 bg-custom-bg dark:bg-custom-dark-bg transition-colors duration-300">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 group cursor-pointer px-4">
              <span className="inline-block bg-gradient-to-r from-blue-800 via-blue-500 to-blue-200 bg-clip-text text-transparent drop-shadow-lg transition-all duration-500 group-hover:from-blue-900 group-hover:via-blue-600 group-hover:to-blue-300 group-hover:scale-105 group-hover:-rotate-1">
                Nos Produits
              </span>
            </h2>

          </div>
          
          {/* Category Navigation - Floating Dock Style */}
          <div className="flex justify-center mb-8 sm:mb-12 px-4">
            <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-2xl px-2 md:px-4 py-2 border border-white/20 dark:border-gray-700/20 shadow-2xl hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300">
              <div className="flex space-x-2 sm:space-x-4 overflow-x-auto scrollbar-hide">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(index)}
                    className={`font-medium transition-all duration-300 relative group py-2 px-3 sm:px-4 whitespace-nowrap text-sm sm:text-base rounded-lg ${
                      activeCategory === index
                        ? 'text-blue-600 dark:text-blue-400 bg-white/20 dark:bg-gray-700/20'
                        : 'text-blue-300 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/10 dark:hover:bg-gray-700/10'
                    }`}
                  >
                    {category}
                    <span className={`absolute left-3 bottom-1 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 ease-out ${
                      activeCategory === index
                        ? 'w-[calc(100%-24px)]'
                        : 'w-0 group-hover:w-[calc(100%-24px)]'
                    }`}></span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Display */}
          {activeCategory === 0 && ( // Accessoires category
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {accessoryProducts.map((product) => (
                  <div key={product.id} className="glass-card rounded-2xl overflow-hidden">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 sm:p-6">
                      <a
                      href={`https://wa.me/212661756580?text=${encodeURIComponent(`Bonjour, je suis intéressé(e) par le produit: ${product.name}. Pourriez-vous me donner plus d'informations?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-white to-blue-50 text-blue-800 font-semibold py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg hover:from-blue-50 hover:to-white transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 group flex items-center justify-center gap-2 text-xs sm:text-sm"
                    >
                        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                        À propos de ce produit
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Personalized Design Button */}
              <div className="flex justify-center mt-8 sm:mt-12 px-4">
                <a
                  href={`https://wa.me/212661756580?text=${encodeURIComponent(`Bonjour, je souhaiterais discuter d'un design personnalisé. Pouvez-vous m'aider?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold py-3 sm:py-4 px-4 sm:px-8 rounded-lg hover:bg-gradient-to-r hover:from-white hover:to-blue-50 hover:text-blue-800 hover:border-blue-200 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 group flex items-center justify-center gap-2 text-sm sm:text-base lg:text-lg w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                  Pour un design personnalisé contactez-nous
                </a>
              </div>
            </>
          )}

          {/* Plafond category */}
          {activeCategory === 3 && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {plafondProducts.map((product) => (
                  <div key={product.id} className="glass-card rounded-2xl overflow-hidden">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 sm:p-6">
                       <a
                        href={`https://wa.me/212661756580?text=${encodeURIComponent(`Bonjour, je suis intéressé(e) par le produit: ${product.name}. Pourriez-vous me donner plus d'informations?`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-white to-blue-50 text-blue-800 font-semibold py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg hover:from-blue-50 hover:to-white transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 group flex items-center justify-center gap-2 text-xs sm:text-sm"
                      >
                        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                        À propos de ce produit
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Personalized Design Button */}
              <div className="flex justify-center mt-8 sm:mt-12 px-4">
                <a
                  href={`https://wa.me/212661756580?text=${encodeURIComponent(`Bonjour, je souhaiterais discuter d'un design personnalisé. Pouvez-vous m'aider?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold py-3 sm:py-4 px-4 sm:px-8 rounded-lg hover:bg-gradient-to-r hover:from-white hover:to-blue-50 hover:text-blue-800 hover:border-blue-200 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 group flex items-center justify-center gap-2 text-sm sm:text-base lg:text-lg w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                  Pour un design personnalisé contactez-nous
                </a>
              </div>
            </>
          )}

          {/* Placeholder for other categories */}
          {activeCategory !== 0 && activeCategory !== 3 && (
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