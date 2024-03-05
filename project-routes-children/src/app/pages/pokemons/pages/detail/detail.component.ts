import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../interface/pokemon';
import { ActivatedRoute } from '@angular/router';
import { apiService } from '../../services/api.service';

@Component({
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit
{

  public pokemon!: Pokemon;
  public pokemonId!: number;

  constructor(
    private _route: ActivatedRoute,
    private _api: apiService
  ){
    this.pokemonId = Number(_route.snapshot.paramMap.get('id'));    
  }

  ngOnInit(): void 
  {
    this._api.getOnePokemonApi(this.pokemonId);
  }
}
