import { Component, OnInit, inject } from '@angular/core';
import { Pokemon } from '../../interface/pokemon';
import { StoreService } from '../../services/store.service';
import { apiService } from '../../services/api.service';

@Component({
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit
{
  public pokemons: Pokemon[] = [];
  
  // #pokemonStore = inject(StoreService);
  constructor(
    private _pokemonsStore: StoreService,
    private _apiService: apiService,
  ){}
  
  ngOnInit(): void 
  {
    // Ecoute l'etat de la propriété _pokemons du Store
    this._pokemonsStore.pokemons.subscribe( pokemons => this.pokemons = pokemons );

    // Declenche l'appel de la requete HTTP vers l'api pokeapi.co
    this._apiService.getAllPokemonApi();
  }
}
