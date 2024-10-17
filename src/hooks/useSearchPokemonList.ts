import { useState, useCallback } from "react";
import { IPokemonDetail } from "../models/interface";
import { useFetchPokemonList } from "./usePokemonQueries";

export const useSearchPokemonList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPokemonList, setFilteredPokemonList] = useState<IPokemonDetail[]>([]);
  const { data: searchPokemonList } = useFetchPokemonList({ limit: 150, offset: 0 });

  const filterPokemonList = useCallback(
    (pokemonList: IPokemonDetail[]) => {
      if (searchTerm && searchPokemonList?.results) {
        setFilteredPokemonList(
          searchPokemonList.results.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      } else {
        setFilteredPokemonList(pokemonList);
      }
    },
    [searchTerm, searchPokemonList]
  );

  return { searchTerm, setSearchTerm, filteredPokemonList, filterPokemonList };
};
