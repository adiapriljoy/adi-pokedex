import React, { useEffect, useState } from "react";
import ThemeToggle from "../../components/Theme/ThemeToggle";
import Pokedex from "./components/Pokedex";
import PokeToolbar from "./components/PokeToolbar";
import Loading from "../../components/Loading";
import ScrollToTopButton from "../../components/Customs/ScrollToTopButton";
import { useLoadMore } from "../../hooks/useLoadMore";
import { useSearchPokemonList } from "../../hooks/useSearchPokemonList";
import { useScrollLoadMore } from "../../hooks/useScrollLoadMore";
import { useFilteredPokemon } from "../../hooks/useFilteredPokemon";

const HomePage: React.FC = () => {
  const { pokemonList, loadMore, isPokemonListLoading } = useLoadMore();
  const { searchTerm, setSearchTerm, filteredPokemonList, filterPokemonList } =
    useSearchPokemonList();
  const [isGridView, setIsGridView] = useState(true);
  const [showCaptured, setShowCaptured] = useState(false);

  const toggleView = () => setIsGridView(!isGridView);
  const toggleFilter = () => setShowCaptured(!showCaptured);

  useScrollLoadMore(loadMore);

  useEffect(() => {
    filterPokemonList(pokemonList);
  }, [pokemonList, filterPokemonList]);

  const displayedPokemonList = useFilteredPokemon(
    filteredPokemonList,
    showCaptured
  );

  return (
    <div className="min-h-screen bg-pokemonWhite dark:bg-gray-900 p-4 sm:px-16">
      <div className="flex justify-between w-full mb-5 mt-3">
        <h1 className="text-2xl font-bold text-pokemonBlack dark:text-pokemonWhite">
          Pokedex
        </h1>
        <ThemeToggle />
      </div>
      <div className="sm:px-16">
        <PokeToolbar
          isGridView={isGridView}
          toggleView={toggleView}
          showCaptured={showCaptured}
          toggleFilter={toggleFilter}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        {displayedPokemonList.length < 1 && (
          <>
            <hr />
            <p className="text-lg font-semibold mt-2 dark:text-pokemonWhite">
              No Pokemon Record
            </p>
          </>
        )}
        <Pokedex pokemonList={displayedPokemonList} isGridView={isGridView} />
      </div>
      {isPokemonListLoading && <Loading loadingType="loadingText" />}
      <ScrollToTopButton />
    </div>
  );
};

export default HomePage;
