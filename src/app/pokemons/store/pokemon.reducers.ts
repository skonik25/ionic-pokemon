import { createReducer, on } from "@ngrx/store";
import { Pokemon } from "../components/pokemon-card/pokemon.model";
import { fetchPokemonData, fetchPokemonDataSuccess, sayHello } from "./pokemon.actions";

export interface AppState {
    readonly pokemon: PokemonState;
}
export interface PokemonState {
    readonly pokemons: Pokemon[];
}
const initialState: PokemonState = {
    pokemons: [],
}

export const pokemonReducer = createReducer(
    initialState,
    on(fetchPokemonData, (state, action) => ({ ...state })),
    on(fetchPokemonDataSuccess, (state, { pokemons }) => ({ ...state, pokemons: [...state.pokemons, pokemons] })),
    on(sayHello, (state, action) => {
        return { ...state, pokemons: [{ id: 1, name: 'cze', height: 12, weight: 12, baseExperience: 12, sprite: 'cze' }] }
    })
)
