import React from "react";
import ThemeToggle from "../../components/Theme/ThemeToggle";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <ThemeToggle />
      <h1 className="text-2xl">Welcome to my App!</h1>
    </div>
  );
};

export default HomePage;
