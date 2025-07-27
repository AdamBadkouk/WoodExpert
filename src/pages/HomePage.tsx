import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Leaf, Award } from 'lucide-react';

const HomePage = () => {



  const features = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Matériaux durables",
      description: "Nous utilisons du bois provenant de forêts durables certifiées."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Savoir-faire expert",
      description: "Chaque pièce est fabriquée à la main par des artisans qualifiés avec des décennies d'expérience."
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Livraison gratuite",
      description: "Livraison gratuite sur toutes les commandes de plus de 500$ au Maroc."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Garantie à vie",
      description: "Nous garantissons notre qualité avec une couverture de garantie complète."
    }
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section aaaaaa*/}
      <section className="relative h-screen bg-gradient-to-r from-amber-800 to-amber-600 dark:from-gray-800 dark:to-gray-700 text-white">
=======
    <div className="min-h-screen bg-custom-bg dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-blue-800 to-blue-600 dark:from-gray-800 dark:to-gray-700 text-white">
>>>>>>> updated
        <img 
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Wood crafting workshop background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Mobilier en bois expert
              <span className="block text-blue-200 dark:text-blue-300">Pour la vie moderne</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-blue-100 dark:text-gray-300">
                  CONCEPTION, FABRICATION ET RÉALISATION DES PROJETS DE DÉCORATION ET D'AMEUBLEMENT
                </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-800 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Acheter maintenant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-800 transition-all duration-200"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-custom-bg dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-custom-bg dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              À propos de woodexpert
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-custom-bg dark:bg-gray-900 rounded-lg shadow-lg p-8 transition-colors duration-300">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                Basée à Agadir Tilila, woodexpert est une entreprise innovante spécialisée dans le design du bois. 
                Nous proposons des créations modernes et traditionnelles, utilisant des outils de pointe et la technologie laser 
                pour créer des pièces d'exception qui allient tradition artisanale et innovation technologique.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                Notre atelier moderne combine l'expertise du travail du bois avec des techniques de découpe laser de précision, 
                nous permettant de réaliser des créations uniques aux finitions impeccables. Que vous préfériez un style moderne 
                ou traditionnel, chaque projet est conçu avec passion et réalisé avec la plus grande attention aux détails.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                De la conception à la fabrication, nous accompagnons nos clients dans la réalisation de leurs projets 
                de décoration et d'ameublement. Vous pouvez personnaliser entièrement vos créations pour qu'elles reflètent 
                parfaitement votre style et vos besoins spécifiques.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                 <Link
                   to="/products"
                   className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                 >
                   Voir nos produits
                   <ArrowRight className="ml-2 h-5 w-5" />
                 </Link>
                 <Link
                   to="/about"
                   className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
                 >
                   Contactez-nous
                   <ArrowRight className="ml-2 h-5 w-5" />
                 </Link>
               </div>
            </div>
          </div>
        </div>
      </section>




    </div>
  );
};

export default HomePage;