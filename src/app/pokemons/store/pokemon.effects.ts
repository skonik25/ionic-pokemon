import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, from } from "rxjs";
import { PokemonService } from "../services/pokemon.service";
import { fetchPokemonData, fetchPokemonDataSuccess } from "./pokemon.actions";

@Injectable()
export class PokemonEffects {

    pokemons$ = createEffect(() => this.actions$.pipe(
        ofType(fetchPokemonData),
        switchMap(() =>
            from(this.pokemonService.getPokemons().pipe(
                map(pokemons => fetchPokemonDataSuccess({ pokemons })),
            ))
        )
    ));

    constructor(private pokemonService: PokemonService, private actions$: Actions) {
    }
}