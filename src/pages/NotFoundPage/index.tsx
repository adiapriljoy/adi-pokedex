import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToLandingPage = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-lg">Page not found</p>
      <button
        onClick={handleBackToLandingPage}
        className="mt-6 px-4 py-2 bg-pokemonBlue text-pokemonWhite rounded hover:bg-blue-600 transition"
      >
        Back to Main Page
      </button>
    </div>
  );
};

export default NotFoundPage;
