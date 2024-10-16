import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IPokemonDetail } from "../../models/interface";
import { capitalizeFirstLetter } from "../../utils/utility";
import ThemeToggle from "../../components/Theme/ThemeToggle";
import { useFetchPokemon } from "../../hooks/usePokemonQueries";
import PokemonDetails from "./components/PokemonDetails";
import ScrollToTopButton from "../../components/Customs/ScrollToTopButton";
import PokemonCaptureForm from "./components/PokemonCaptureForm";
import Loading from "../../components/Loading";

const PokemonDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pokemon }: { pokemon: IPokemonDetail } = location.state || {};

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pokemonString = pokemon.url.split("/").filter(Boolean).pop();
  const pokemonId = Number(pokemonString || 0);
  const { data: pokemonDetails, isLoading: isPokemonLoading } =
    useFetchPokemon(pokemonId);

  return (
    <div className="min-h-screen bg-pokemonWhite dark:bg-gray-900 p-4 sm:px-16">
      <div className="flex justify-between w-full mb-5 mt-3">
        <button
          onClick={handleGoBack}
          className="text-gray-900 dark:text-pokemonWhite hover:underline focus:outline-none"
        >
          &lt; Go Back
        </button>
        <ThemeToggle />
      </div>
      <div className="flex flex-col items-center mt-16">
        {pokemon ? (
          <>
            <h1 className="text-2xl font-bold dark:text-pokemonWhite">
              {capitalizeFirstLetter(pokemon.name)}
            </h1>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
              alt={pokemon.name}
              className="mt-4"
            />
            <PokemonDetails pokemonDetails={pokemonDetails} />
            <PokemonCaptureForm pokemonId={pokemonId} />
          </>
        ) : (
          <p className="text-lg font-semibold dark:text-pokemonWhite">
            Pokémon not found.
          </p>
        )}
      </div>
      <ScrollToTopButton />
      {isPokemonLoading && <Loading />}
    </div>
  );
};

export default PokemonDetailsPage;
