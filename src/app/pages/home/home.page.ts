import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/pokemons/components/pokemon-card/pokemon.model';
import { PokemonService } from 'src/app/pokemons/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  pokemon: Pokemon = {
    id: 7,
    height: 12,
    weight: 17,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    baseExperience: 66,
    name: "Ditto",
  }
  constructor(private readonly pokemonService: PokemonService) {
  }

  ngOnInit() {
    this.pokemonService.getPokemons().subscribe(x => console.log(x));
  }

}
