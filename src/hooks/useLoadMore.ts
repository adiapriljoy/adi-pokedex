import { useState, useEffect, useCallback } from "react";
import { IFetchPokemonList, IPokemonDetail } from "../models/interface";
import { useFetchPokemonList } from "./usePokemonQueries";

export const useLoadMore = () => {
  const [pokemonListParam, setPokemonListParam] = useState<IFetchPokemonList>({
    limit: 20,
    offset: 0,
  });

  const { data: newPokemonList, isLoading: isPokemonListLoading } =
    useFetchPokemonList(pokemonListParam);
  const [pokemonList, setPokemonList] = useState<IPokemonDetail[]>([]);

  const loadMore = useCallback(() => {
    if (newPokemonList?.next) {
      setPokemonListParam((prev) => ({
        ...prev,
        offset: (prev.offset || 0) + (prev.limit || 0),
      }));
    }
  }, [newPokemonList]);

  useEffect(() => {
    if (newPokemonList && newPokemonList.results) {
      setPokemonList((prev) => [...prev, ...newPokemonList.results]);
    }
  }, [newPokemonList]);

  return { pokemonList, loadMore, isPokemonListLoading };
};
