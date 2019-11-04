import { PokedexService } from './../../shared/pokedex.service';
import { Pokemon } from './../../shared/pokemon';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-pokemon-page',
  templateUrl: './create-pokemon-page.component.html',
  styleUrls: ['./create-pokemon-page.component.scss']
})
export class CreatePokemonPageComponent implements OnInit {

  newPokemon: Pokemon = {
    name: '',
    imageUrl: '',
    description: '',
  };

  constructor(private pokedexService: PokedexService) { }

  ngOnInit() {
  }

  addPokemon() {
    this.newPokemon.name = this.newPokemon.name;
    this.newPokemon.imageUrl = this.newPokemon.imageUrl;
    this.newPokemon.description = this.newPokemon.description;
    this.pokedexService.allPokemons.push(this.newPokemon);
  }
}
