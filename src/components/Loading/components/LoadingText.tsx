import React from "react";

const LoadingText: React.FC = () => {
  return (
    <div className="loading-text text-center mb-5 dark:text-pokemonWhite">
      Loading<span className="ellipsis">...</span>
    </div>
  );
};

export default LoadingText;
