import React from 'react';

interface LoadingAnimationProps {
  isLoading: boolean;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm transition-all duration-300">
      <div className="flex items-center justify-center">
        {/* Main loading spinner */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-200 dark:border-blue-800 rounded-full animate-spin">
            <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
          </div>
          {/* Inner pulsing circle */}
          <div className="absolute inset-2 w-12 h-12 bg-blue-500/20 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;