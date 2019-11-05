import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
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
  constructor(private pokedexService: PokedexService,
              private elRef: ElementRef,
              private renderer: Renderer2 ) { }

  ngOnInit() {
    this.allPokemons = this.pokedexService.getPokemons();
  }


  getPokemon($event) {
    this.pokemonDetail = $event;
    const pokemon = this.elRef.nativeElement.querySelector('.description');
    this.renderer.setStyle(pokemon, 'background-color', this.pokemonDetail.color);
  }

}
