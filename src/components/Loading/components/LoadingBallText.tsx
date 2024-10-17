import React from "react";

const LoadingBallText = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center space-x-2 bg-gray-200 dark:bg-gray-600 opacity-90">
      <div className="flex items-center justify-center h-screen mr-4">
        <div className="loader">
          <div className="ball"></div>
        </div>
      </div>
      <span className="text-pokemonBlack dark:text-pokemonWhite font-bold text-2xl">
        Loading...
      </span>
    </div>
  );
};

export default LoadingBallText;
