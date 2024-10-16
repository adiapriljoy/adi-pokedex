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
                const pokemonId = pokemon.url.split("/").filter(Boolean).pop();
                return capturedPokemon.some(
                    (capture) => capture.pokemonId === Number(pokemonId)
                );
            })
            : filteredPokemonList;

        setDisplayedPokemonList(updatedDisplayedList);
    }, [filteredPokemonList, showCaptured]);

    return displayedPokemonList;
};
