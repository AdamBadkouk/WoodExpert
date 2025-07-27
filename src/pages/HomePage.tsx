import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, Lightbulb, Heart } from 'lucide-react';

const HomePage = () => {



  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Usinage CNC Précis",
      description: "Technologie CNC de pointe pour des découpes et gravures d'une précision millimétrique sur tous types de bois."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Découpe Laser",
      description: "Découpe laser haute précision pour des finitions parfaites et des détails complexes impossibles à réaliser manuellement."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Créations Sur Mesure",
      description: "Conception et fabrication personnalisées selon vos plans et spécifications techniques exactes."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Finitions Artisanales",
      description: "Combinaison parfaite entre technologie moderne et savoir-faire traditionnel pour des finitions exceptionnelles."
    }
  ];

  return (
    <div className="min-h-screen bg-custom-bg dark:bg-custom-dark-bg transition-colors duration-300 slide-in-top">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-blue-800 to-blue-600 dark:from-custom-dark-bg dark:to-slate-800 text-white">
        <img 
          src="/pics/hp.png"
          alt="CNC wood products on table background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight group cursor-pointer px-4">
              <span className="inline-block bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent drop-shadow-lg transition-all duration-500 group-hover:from-blue-50 group-hover:via-blue-200 group-hover:to-blue-300 group-hover:scale-105 group-hover:-rotate-1">
                L'Art du Bois
              </span>
              <span className="block bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent transition-all duration-700 group-hover:from-blue-100 group-hover:via-blue-200 group-hover:to-blue-400 group-hover:scale-105 group-hover:rotate-1">
                Créé avec Passion & Précision
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed text-blue-100 dark:text-gray-300 px-4">
                  conception, fabrication et réalisation des projets de décoration et d'ameublement
                </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link
                to="/products"
                className="inline-flex items-center px-6 sm:px-8 py-3 bg-gradient-to-r from-white to-blue-50 text-blue-800 font-semibold rounded-lg hover:from-blue-50 hover:to-white transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 group w-full sm:w-52 justify-center text-sm sm:text-base"
              >
                Nos produits
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-6 sm:px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-gradient-to-r hover:from-white hover:to-blue-50 hover:text-blue-800 hover:border-blue-200 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 group w-full sm:w-auto justify-center text-sm sm:text-base"
              >
                Contactez-nous
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-custom-bg dark:bg-custom-dark-bg transition-colors duration-300">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 group cursor-pointer px-4">
              <span className="inline-block bg-gradient-to-r from-blue-800 via-blue-500 to-blue-200 bg-clip-text text-transparent drop-shadow-lg transition-all duration-500 group-hover:from-blue-900 group-hover:via-blue-600 group-hover:to-blue-300 group-hover:scale-105 group-hover:-rotate-1">
                Pourquoi Nous Choisir
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
               Découvrez notre expertise en usinage CNC et découpe laser pour vos créations en bois
             </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass-card p-4 sm:p-6 rounded-xl text-center group cursor-pointer relative overflow-hidden">
                <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-full flex items-center justify-center text-white mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <div className="scale-75 sm:scale-100">{feature.icon}</div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-xs sm:text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 bg-gray-50 dark:bg-custom-dark-bg transition-colors duration-300">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 group cursor-pointer px-4">
              <span className="inline-block bg-gradient-to-r from-blue-800 via-blue-500 to-blue-200 bg-clip-text text-transparent drop-shadow-lg transition-all duration-500 group-hover:from-blue-900 group-hover:via-blue-600 group-hover:to-blue-300 group-hover:scale-105 group-hover:-rotate-1">
                À Propos de Nous
              </span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-4 sm:p-6 lg:p-8 rounded-xl relative overflow-hidden">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                Basée à Agadir Tassila, woodexpert est une entreprise innovante spécialisée dans le design du bois. 
                Nous proposons des créations modernes et traditionnelles, utilisant des outils de pointe et la technologie laser 
                pour créer des pièces d'exception qui allient tradition artisanale et innovation technologique.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                Notre atelier moderne combine l'expertise du travail du bois avec des techniques de découpe laser de précision, 
                nous permettant de réaliser des créations uniques aux finitions impeccables. Que vous préfériez un style moderne 
                ou traditionnel, chaque projet est conçu avec passion et réalisé avec la plus grande attention aux détails.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                De la conception à la fabrication, nous accompagnons nos clients dans la réalisation de leurs projets 
                de décoration et d'ameublement. Vous pouvez personnaliser entièrement vos créations pour qu'elles reflètent 
                parfaitement votre style et vos besoins spécifiques.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8">
                 <Link
                   to="/products"
                   className="inline-flex items-center px-6 sm:px-8 py-3 bg-gradient-to-r from-white to-blue-50 text-blue-800 font-semibold rounded-lg hover:from-blue-50 hover:to-white transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 group w-full sm:w-auto justify-center text-sm sm:text-base"
                 >
                   Voir nos produits
                   <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                 </Link>
                 <Link
                   to="/about"
                   className="inline-flex items-center px-6 sm:px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-gradient-to-r hover:from-white hover:to-blue-50 hover:text-blue-800 hover:border-blue-200 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 group w-full sm:w-auto justify-center text-sm sm:text-base"
                 >
                   Contactez-nous
                   <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
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