import React from 'react';

const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center h-full min-h-[200px]">
    <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-blue-500 dark:border-blue-300"></div>
  </div>
);

export default LoadingSpinner;