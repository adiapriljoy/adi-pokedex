import React from "react";
import { FaListUl } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";

interface PokeToolbarProps {
  isGridView: boolean;
  toggleView: () => void;
  showCaptured: boolean;
  toggleFilter: () => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const PokeToolbar = ({
  isGridView,
  toggleView,
  showCaptured,
  toggleFilter,
  searchTerm,
  setSearchTerm,
}: PokeToolbarProps) => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-start justify-between">
      <div className="flex items-center">
        <button onClick={toggleFilter} className="relative inline-flex items-center mr-4 sm:mt-2 mb-4">
          <div
            className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer ${
              showCaptured ? "bg-pokemonRed dark:bg-gray-400" : "bg-pokemonBlue dark:bg-pokemonWhite"
            }`}
          >
            <div
              className={`bg-pokemonWhite dark:bg-pokemonBlack w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
                showCaptured ? "translate-x-7" : "translate-x-1"
              }`}
            />
          </div>
          <span className={`ml-2 font-semibold dark:text-pokemonWhite`}>{showCaptured ? "CAPTURED" : "ALL"}</span>
        </button>
      </div>
      <div className="flex items-center mb-4">
        <button onClick={toggleView} className="text-xl mr-4">
          {isGridView ? (
            <FaListUl className="dark:text-pokemonWhite" />
          ) : (
            <IoGridOutline className="dark:text-pokemonWhite" />
          )}
        </button>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded-md p-2 w-full dark:bg-gray-900 dark:border-gray-600 dark:text-pokemonWhite"
        />
      </div>
    </div>
  );
};

export default PokeToolbar;
