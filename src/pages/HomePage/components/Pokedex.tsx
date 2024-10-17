import React from "react";
import { IPokemonDetail, IPokemonCapture } from "../../../models/interface";
import { capitalizeFirstLetter } from "../../../utils/utility";
import { useNavigate } from "react-router-dom";

interface PokedexProps {
  pokemonList: IPokemonDetail[];
  isGridView: boolean;
}
const Pokedex: React.FC<PokedexProps> = ({ pokemonList, isGridView }) => { 
  const navigate = useNavigate();

  const handlePokemonClick = (pokemon: IPokemonDetail) => {
    navigate(`/pokemon/${pokemon.name}`, { state: { pokemon } });
  };

  const capturedPokemonData = localStorage.getItem("capturedPokemon");
  const capturedPokemon: IPokemonCapture[] = capturedPokemonData
    ? JSON.parse(capturedPokemonData)
    : [];

  return (
    <div>
      <div
        className={
          isGridView
            ? "grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4"
            : "flex flex-col gap-4 mb-4"
        }
      >
        {pokemonList.map((pokemon, index) => {
          const pokemonId = pokemon.url.split("/").filter(Boolean).pop();
          const captureDetails = capturedPokemon.find(
            (capture) => capture.pokemonId === Number(pokemonId)
          );

          return isGridView ? (
            <div
              key={index}
              className="border dark:border-gray-600 rounded-lg shadow-md p-4 flex flex-col items-center justify-center"
              onClick={() => handlePokemonClick(pokemon)}
              style={{ cursor: "pointer" }}
            >
              <div className="bg-gray-200 dark:bg-gray-400 h-24 w-24 rounded-md mb-2">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
                  alt={pokemon.name}
                />
              </div>
              <h2 className="text-lg font-semibold dark:text-pokemonWhite">
                {capitalizeFirstLetter(pokemon.name)}
              </h2>
              {captureDetails ? (
                <span className="bg-green-200 text-green-800 rounded-full px-2 py-1 text-xs font-semibold">
                  Captured
                </span>
              ) : (
                <span className="bg-red-200 text-red-800 rounded-full px-2 py-1 text-xs font-semibold">
                  Uncaptured
                </span>
              )}
            </div>
          ) : (
            <div
              key={index}
              className="flex items-center border-b border-gray-300 p-4"
              onClick={() => handlePokemonClick(pokemon)}
              style={{ cursor: "pointer" }}
            >
              <div className="w-20 h-20">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
                  alt={pokemon.name}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold dark:text-pokemonWhite">
                  {capitalizeFirstLetter(pokemon.name)}
                </h2>
                <p className="text-sm dark:text-pokemonWhite">
                  Nickname: {captureDetails ? captureDetails.nickname : "N/A"}
                </p>
                <p className="text-sm dark:text-pokemonWhite">
                  Date: {captureDetails ? captureDetails.dateCaptured : "N/A"}
                </p>
                {captureDetails ? (
                  <span className="bg-green-200 text-green-800 rounded-full px-2 py-1 text-xs font-semibold">
                    Captured
                  </span>
                ) : (
                  <span className="bg-red-200 text-red-800 rounded-full px-2 py-1 text-xs font-semibold">
                    Uncaptured
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pokedex;
