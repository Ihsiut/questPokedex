import { POKEMONS } from '../pokemons-mock';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  allPokemons = POKEMONS;
  constructor() { }

  getPokemons() {
    return this.allPokemons;
  }
}
