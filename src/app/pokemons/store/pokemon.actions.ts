import { createAction, props } from '@ngrx/store';
import { Pokemon } from '../components/pokemon-card/pokemon.model';

export const fetchPokemonData = createAction('[Pokemon] Fetch pokemon data')
export const fetchPokemonDataSuccess = createAction('[Pokemon] Fetch data success', props<{pokemons: Pokemon}>())

export const sayHello = createAction('[Pokemon] Hello');