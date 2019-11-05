import { PokedexService } from './../../shared/pokedex.service';
import { Pokemon } from './../../shared/pokemon';
import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

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
    color : ''
  };

  constructor(private pokedexService: PokedexService,
              private renderer: Renderer2,
              private elRef: ElementRef) { }


    ngOnInit() {
    }

    addPokemon() {
      this.newPokemon.name = this.newPokemon.name;
      this.newPokemon.imageUrl = this.newPokemon.imageUrl;
      this.newPokemon.description = this.newPokemon.description;
      this.newPokemon.color = this.newPokemon.color;
      this.pokedexService.allPokemons.push(this.newPokemon);
      console.log(this.newPokemon);
    }

    changeColor() {
      const color = this.elRef.nativeElement.querySelector('.color-picker');
      this.renderer.setStyle(color, 'background-color', this.newPokemon.color);

    }
}
