import axios from "axios";
import { IFetchPokemonList, IPokemonAbilityApi, IPokemonDetails, IPokemonStatApi, IPokemonType } from "../models/interface";

export async function fetchPokemonList(param: IFetchPokemonList) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${param?.limit}&offset=${param?.offset}`);
    return response.data;
}

export async function fetchPokemon(id: number) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = response.data;
    const transformedData: IPokemonDetails = {
        stats: data.stats.map((stat: IPokemonStatApi) => ({
            baseStat: stat.base_stat,
            effort: stat.effort,
            stat: { name: stat.stat.name, url: stat.stat.url }
        })),
        types: data.types.map((type: IPokemonType) => ({
            slot: type.slot,
            type: { name: type.type.name, url: type.type.url }
        })),
        weight: data.weight,
        abilities: data.abilities.map((ability: IPokemonAbilityApi) => ({
            ability: { name: ability.ability.name, url: ability.ability.url },
            isHidden: ability.is_hidden,
            slotNumber: ability.slot
        }))
    };
    return transformedData;
}