import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { fetchPokemonData, sayHello, } from 'src/app/pokemons/store/pokemon.actions';
import { AppState, } from 'src/app/pokemons/store/pokemon.reducers';
import { selectAllPokemons } from 'src/app/pokemons/store/pokemon.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  pokemons$ = this.store.select(selectAllPokemons);
  offset: number = 0;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(fetchPokemonData());
  }

  onIonInfinite(ev: Event) {
    this.offset += 5;
    this.store.dispatch(fetchPokemonData(this.offset))
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 2000);
  }
}