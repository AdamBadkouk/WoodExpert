import React from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  inStock: boolean;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
        <div className="relative">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {discount > 0 && (
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium">
              -{discount}%
            </div>
          )}
          {!product.inStock && (
            <div className="absolute top-2 right-2 bg-gray-500 text-white px-2 py-1 rounded-md text-sm font-medium">
              Out of Stock
            </div>
          )}

        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-200">
            {product.name}
          </h3>
          
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-amber-600 dark:text-amber-400">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
              {product.category}
            </span>
          </div>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (product.inStock) {
                alert('Product details available on product page');
              }
            }}
            disabled={!product.inStock}
            className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
              product.inStock
                ? 'bg-amber-600 hover:bg-amber-700 text-white hover:shadow-lg'
                : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
            }`}
          >
            <span>{product.inStock ? 'View Details' : 'Out of Stock'}</span>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;