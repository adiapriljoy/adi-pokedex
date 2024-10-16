import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex items-center justify-center space-x-2">
        <div className="flex items-center justify-center h-screen mr-4">
          <div className="loader">
            <div className="ball"></div>
          </div>
        </div>
        <span className="text-pokemonRed font-bold text-2xl">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
