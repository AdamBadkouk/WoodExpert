import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowLeft } from 'lucide-react';
import { useWishlist } from '../contexts/WishlistContext';

const WishlistPage = () => {
  const { state: wishlistState, dispatch: wishlistDispatch } = useWishlist();

  const removeFromWishlist = (id: number) => {
    wishlistDispatch({ type: 'REMOVE_FROM_WISHLIST', payload: id });
  };

  if (wishlistState.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Heart className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Your wishlist is empty</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Save items you love for later by clicking the heart icon on any product.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">My Wishlist</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistState.items.map(item => (
            <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-300">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-200"
                >
                  <Heart className="h-4 w-4 fill-current" />
                </button>
              </div>
              
              <div className="p-4">
                <Link
                  to={`/product/${item.id}`}
                  className="block hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.name}</h3>
                </Link>
                
                <p className="text-xl font-bold text-amber-600 dark:text-amber-400 mb-4">
                  ${item.price}
                </p>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => alert('Contact us to purchase this item!')}
                    className="flex-1 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors duration-200"
                  >
                    Contact to Purchase
                  </button>
                  <Link
                    to={`/product/${item.id}`}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-amber-600 dark:hover:border-amber-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;