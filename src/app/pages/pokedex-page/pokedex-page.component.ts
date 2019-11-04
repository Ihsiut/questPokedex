import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/shared/pokedex.service';
import { Pokemon } from 'src/app/shared/pokemon';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.scss']
})
export class PokedexPageComponent implements OnInit {

  allPokemons: Pokemon[];
  pokemonDetail: Pokemon ;
  constructor(private pokedexService: PokedexService) { }

  ngOnInit() {
    this.allPokemons = this.pokedexService.allPokemons;
  }

  getPokemon($event) {
    this.pokemonDetail = $event;
  }
}
