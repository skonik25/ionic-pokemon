import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonPreview, Pokemon, RootObject } from '../components/pokemon-card/pokemon.model';
import { switchMap, map, mergeMap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemons() {
    return this.http.get<PokemonPreview>('https://pokeapi.co/api/v2/pokemon?limit=5&offset=0').pipe(
      switchMap(value => value.results),
      mergeMap(value => this.http.get<RootObject>(value.url)),
      map(value => transform(value))
    );
  };
}


const transform: (root: RootObject) => Pokemon = (root: RootObject) => {
  return {
    id: root.id,
    name: root.name,
    height: root.height,
    weight: root.weight,
    baseExperience: root.base_experience,
    sprite: root.sprites.front_default
  }
}

