import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchPokemonData, sayHello, } from 'src/app/pokemons/store/pokemon.actions';
import { AppState, } from 'src/app/pokemons/store/pokemon.reducers';
import { selectAllPokemons } from 'src/app/pokemons/store/pokemon.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  pokemons$ = this.store.select(selectAllPokemons);
  constructor(private store: Store<AppState>) {
    this.store.dispatch(fetchPokemonData());
  }

  ngOnInit() {

  }

}
