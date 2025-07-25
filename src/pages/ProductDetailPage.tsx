import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Truck, Shield, RotateCcw } from 'lucide-react';
import productsData from '../data/products.json';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const product = productsData.find(p => p.id === parseInt(id || '0'));

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Product Not Found</h2>
          <button
            onClick={() => navigate('/products')}
            className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors duration-200"
          >
            Back to Products
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
      title: "Free Shipping",
      description: "On orders over $500"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Lifetime Warranty",
      description: "Quality guaranteed"
    },
    {
      icon: <RotateCcw className="h-5 w-5" />,
      title: "30-Day Returns",
      description: "Easy returns policy"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="aspect-square rounded-lg overflow-hidden mb-4">
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
                        ? 'border-amber-600 dark:border-amber-400' 
                        : 'border-gray-200 dark:border-gray-600 hover:border-amber-400 dark:hover:border-amber-500'
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
          <div>
            <div className="mb-4">
              <span className="text-sm text-amber-600 dark:text-amber-400 font-medium uppercase tracking-wide">
                {product.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
                {product.name}
              </h1>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <span className="text-3xl font-bold text-amber-600 dark:text-amber-400">
                ${product.price}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-500 dark:text-gray-400 line-through">
                    ${product.originalPrice}
                  </span>
                  <span className="bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium">
                    Save {discount}%
                  </span>
                </>
              )}
            </div>

            <div className="mb-6">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                {product.description}
              </p>
            </div>

            {/* Product Specifications */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 transition-colors duration-300">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Specifications</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Material:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{product.specs.material}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Dimensions:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{product.specs.dimensions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Finish:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{product.specs.finish}</span>
                </div>
              </div>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              {product.inStock ? (
                <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
                  <Check className="h-5 w-5" />
                  <span className="font-medium">In Stock - Ready to Ship</span>
                </div>
              ) : (
                <div className="text-red-600 dark:text-red-400 font-medium">
                  Out of Stock
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => {
                  if (product.inStock) {
                    alert('Contact us to purchase this item!');
                  }
                }}
                disabled={!product.inStock}
                className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                  product.inStock
                    ? 'bg-amber-600 hover:bg-amber-700 text-white hover:shadow-lg transform hover:-translate-y-1'
                    : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                }`}
              >
                <span>{product.inStock ? 'Contact to Purchase' : 'Out of Stock'}</span>
              </button>
              

            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg transition-colors duration-300">
                  <div className="text-amber-600 dark:text-amber-400">
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