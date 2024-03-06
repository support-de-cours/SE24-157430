import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../interface/pokemon';
import { ActivatedRoute } from '@angular/router';
import { apiService } from '../../services/api.service';
import { StoreService } from '../../services/store.service';

@Component({
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit
{
  public pokemon!: Pokemon|null;
  private pokemonId!: number;

  constructor(
    private _route: ActivatedRoute,
    private _api: apiService,
    private _store: StoreService,
  ){
    this.pokemonId = Number( _route.snapshot.paramMap.get('id') );
  }

  ngOnInit(): void 
  {
    this._store.pokemon.subscribe(pokemon => this.pokemon = pokemon)
    this._api.getOnePokemonApi(this.pokemonId);
  }
}