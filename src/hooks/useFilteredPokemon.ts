import { useEffect, useState } from "react";
import { IPokemonCapture, IPokemonDetail } from "../models/interface";

export const useFilteredPokemon = (
  filteredPokemonList: IPokemonDetail[],
  showCaptured: boolean
) => {
  const [displayedPokemonList, setDisplayedPokemonList] = useState<IPokemonDetail[]>([]);

  useEffect(() => {
    const capturedPokemonData = localStorage.getItem("capturedPokemon");
    const capturedPokemon: IPokemonCapture[] = capturedPokemonData
      ? JSON.parse(capturedPokemonData)
      : [];

    const updatedDisplayedList = showCaptured
      ? filteredPokemonList.filter((pokemon) => {
        const pokemonId = Number(pokemon.url.split("/").filter(Boolean).pop());
        return capturedPokemon.some((capture) => capture.pokemonId === pokemonId);
      })
      : filteredPokemonList;

    const uniquePokemonList = Array.from(
      new Set(updatedDisplayedList.map((pokemon) => pokemon.url))
    ).map((url) => updatedDisplayedList.find((pokemon) => pokemon.url === url));

    setDisplayedPokemonList(uniquePokemonList as IPokemonDetail[]);
  }, [filteredPokemonList, showCaptured]);

  return displayedPokemonList;
};