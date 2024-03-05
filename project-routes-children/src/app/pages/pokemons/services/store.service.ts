import { Injectable } from '@angular/core';
import { Pokemon } from '../interface/pokemon';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService 
{
  private _pokemons: BehaviorSubject<Pokemon[]> = new BehaviorSubject<Pokemon[]>([]);

  public set addPokemon(pokemon: Pokemon)
  {
    const pokemons = this._pokemons.getValue();
    this._pokemons.next([ ...pokemons, pokemon ]);
  }

  /**
   * Reset de _pokemons
   */
  public set pokemons(pokemons: Pokemon[])
  {
    this._pokemons.next( pokemons )
  }

  /**
   * Retourne la liste des pokemons
   */
  public get pokemons(): BehaviorSubject<Pokemon[]>
  {
    return this._pokemons;
  }
}