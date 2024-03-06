import { Injectable } from '@angular/core';
import { Pokemon } from '../interface/pokemon';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService 
{
  private _pokemons: BehaviorSubject<Pokemon[]> = new BehaviorSubject<Pokemon[]>([]);
  private _pokemon: BehaviorSubject<Pokemon|null> = new BehaviorSubject<Pokemon|null>(null);

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



  /**
   * Modifie l'etat de "_pokemon"
   */
  public set pokemon(pokemon: Pokemon|null)
  {
    this._pokemon.next(pokemon);
  }

  /**
   * Recupere l'ete de _pokemon
   */
  public get pokemon(): BehaviorSubject<Pokemon|null>
  {
    return this._pokemon;
  }
}