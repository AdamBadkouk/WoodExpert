import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Truck, Shield, RotateCcw } from 'lucide-react';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Sample product data - replace with your actual product data
  const sampleProduct = {
    id: 1,
    name: "Bureau Exécutif en Chêne",
    category: "bureaux",
    price: 899,
    originalPrice: 1099,
    description: "Bureau exécutif en chêne massif fait à la main avec tiroirs de rangement intégrés et gestion des câbles. Parfait pour les bureaux à domicile professionnels.",
    images: [
      "https://images.pexels.com/photos/6585751/pexels-photo-6585751.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4050288/pexels-photo-4050288.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    inStock: true,
    featured: true,
    specs: {
      material: "Chêne Massif",
      dimensions: "60\" L x 30\" P x 30\" H",
      finish: "Huile Naturelle"
    }
  };

  const product = sampleProduct;

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Produit non trouvé</h2>
          <button
            onClick={() => navigate('/products')}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Retour aux produits
          </button>
        </div>
      </div>
    );
  }

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const features = [
    {
      icon: <Truck className="h-5 w-5" />,
      title: "Livraison gratuite",
      description: "Sur commandes de plus de 500$"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Garantie à vie",
      description: "Qualité garantie"
    },
    {
      icon: <RotateCcw className="h-5 w-5" />,
      title: "Retours 30 jours",
      description: "Politique de retour facile"
    }
  ];

  return (
    <div className={`min-h-screen bg-custom-bg dark:bg-gray-900 transition-colors duration-300 ${isLoaded ? 'slide-in-top' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className={`flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors duration-200 ${isLoaded ? 'slide-in-left animate-delay-200' : 'opacity-0'}`}
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Retour</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className={`${isLoaded ? 'fade-in-up animate-delay-300' : 'opacity-0'}`}>
            <div className={`aspect-square rounded-lg overflow-hidden mb-4 ${isLoaded ? 'zoom-in animate-delay-400' : 'opacity-0'}`}>
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      selectedImage === index 
                        ? 'border-blue-600 dark:border-blue-400'
                : 'border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className={`${isLoaded ? 'slide-in-right animate-delay-300' : 'opacity-0'}`}>
            <div className={`mb-4 ${isLoaded ? 'fade-in-up animate-delay-400' : 'opacity-0'}`}>
              <span className="text-sm text-blue-600 dark:text-blue-400 font-medium uppercase tracking-wide">
                {product.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
                {product.name}
              </h1>
            </div>

            <div className={`flex items-center space-x-4 mb-6 ${isLoaded ? 'zoom-in animate-delay-500' : 'opacity-0'}`}>
              <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                ${product.price}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-500 dark:text-gray-400 line-through">
                    ${product.originalPrice}
                  </span>
                  <span className="bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium">
                    Économisez {discount}%
                  </span>
                </>
              )}
            </div>

            <div className={`mb-6 ${isLoaded ? 'fade-in-up animate-delay-600' : 'opacity-0'}`}>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                {product.description}
              </p>
            </div>

            {/* Product Specifications */}
            <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-lg p-6 mb-6 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Spécifications</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Matériau:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{product.specs.material}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Dimensions:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{product.specs.dimensions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Finition:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{product.specs.finish}</span>
                </div>
              </div>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              {product.inStock ? (
                <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
                  <Check className="h-5 w-5" />
                  <span className="font-medium">En stock - Prêt à expédier</span>
                </div>
              ) : (
                <div className="text-red-600 dark:text-red-400 font-medium">
                  Rupture de stock
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => {
                  if (product.inStock) {
                    alert('Contactez-nous pour acheter cet article!');
                  }
                }}
                disabled={!product.inStock}
                className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                  product.inStock
                    ? 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg transform hover:-translate-y-1'
                    : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                }`}
              >
                <span>{product.inStock ? 'Contacter pour acheter' : 'Rupture de stock'}</span>
              </button>
              

            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-lg hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300">
                  <div className="text-blue-600 dark:text-blue-400">
                    {feature.icon}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white text-sm">
                      {feature.title}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-xs">
                      {feature.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;