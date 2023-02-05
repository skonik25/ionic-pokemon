import { createSelector } from "@ngrx/store";
import { AppState, PokemonState } from "./pokemon.reducers";

const selectPokemons = (state: AppState) => state.pokemon
export const selectAllPokemons = createSelector(selectPokemons, (state: PokemonState)=> state.pokemons)
