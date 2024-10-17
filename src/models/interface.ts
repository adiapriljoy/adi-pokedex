export interface IFetchPokemonList {
    limit?: number;
    offset?: number;
}

export interface IPokemonDetail {
    name: string;
    url: string;
}

export interface IPokemonList {
    count: number;
    next: string;
    previous: null;
    results: IPokemonDetail[];
}

export interface IPokemonStatApi {
    base_stat: number;
    effort: number;
    stat: IPokemonDetail;
}

export interface IPokemonStat {
    baseStat: number;
    effort: number;
    stat: IPokemonDetail;
}

export interface IPokemonType {
    slot: number;
    type: IPokemonDetail;
}

export interface IPokemonAbilityApi {
    ability: IPokemonDetail;
    is_hidden: boolean;
    slot: number;
}

export interface IPokemonAbility {
    ability: IPokemonDetail;
    isHidden: boolean;
    slot: number;
}

export interface IPokemonDetails {
    stats: IPokemonStat[];
    types: IPokemonType[];
    weight: number;
    abilities: IPokemonAbility[];
}

export interface IPokemonCapture {
    pokemonId: number;
    nickname: string;
    dateCaptured: string;
}