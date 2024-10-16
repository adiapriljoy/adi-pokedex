import { useQuery } from "@tanstack/react-query"
import { IFetchPokemonList, IPokemonDetails, IPokemonList } from "../models/interface"
import { fetchPokemon, fetchPokemonList } from "../services/pokemon"

export const useFetchPokemonList = (param: IFetchPokemonList) => {
    return useQuery<IPokemonList>({
        queryKey: ["pokemonList", param],
        queryFn: () => fetchPokemonList(param)
    });
}

export const useFetchPokemon = (id: number) => {
    return useQuery<IPokemonDetails>({
        queryKey: [`pokemon${id}`],
        queryFn: () => fetchPokemon(id)
    });
}