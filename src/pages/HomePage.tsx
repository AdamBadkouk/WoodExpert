import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Leaf, Award } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';

const HomePage = () => {
  const featuredProducts = productsData.filter(product => product.featured);



  const features = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainable Materials",
      description: "We use responsibly sourced wood from certified sustainable forests."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Expert Craftsmanship",
      description: "Each piece is handcrafted by skilled artisans with decades of experience."
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Free Shipping",
      description: "Complimentary delivery on all orders over $500 within the continental US."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Lifetime Warranty",
      description: "We stand behind our quality with comprehensive warranty coverage."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section aaaaaa*/}
      <section className="relative h-screen bg-gradient-to-r from-amber-800 to-amber-600 dark:from-gray-800 dark:to-gray-700 text-white">
        <img 
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Wood crafting workshop background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Expert Wood Furniture
              <span className="block text-amber-200 dark:text-amber-300">For Modern Living</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-amber-100 dark:text-gray-300">
              Discover our collection of beautiful, sustainable wood furniture pieces that bring warmth and character to your home and office.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="inline-flex items-center px-8 py-3 bg-white text-amber-800 font-semibold rounded-lg hover:bg-amber-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-amber-800 transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto w-16 h-16 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4 group-hover:scale-110 transition-transform duration-200">
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

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Discover our most popular handcrafted pieces, each designed to bring natural beauty and functionality to your space.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>




    </div>
  );
};

export default HomePage;