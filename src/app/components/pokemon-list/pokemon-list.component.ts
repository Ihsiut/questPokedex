
import { Pokemon } from 'src/app/shared/pokemon';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  @Input() pokemons: Pokemon[];
  @Output() detailPokemon = new EventEmitter<Pokemon>();

  constructor() { }

  ngOnInit() {
  }

  pokemonClick(i) {
    this.detailPokemon.emit(this.pokemons[i]);
    console.log('Send Pokemon ' + this.pokemons[i].name);

    }

}

