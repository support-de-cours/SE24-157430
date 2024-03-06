import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pokemon } from '../interface/pokemon';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class apiService 
{
  // private _pokemons: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor(
    private _http: HttpClient,
    private _store: StoreService
  ){}

  public getAllPokemonApi()
  {
    this._http.get("/api/v2/pokemon?limit=100000&offset=0")
      .subscribe(response => {
        const res = response as any;
        const results: Pokemon[] = res.results.map((item: any) => {

          const id = Number(this._extraireIdDeUrl(item.url));
          return {
            id: id,
            name: item.name,
            description: item.url,
            power: []
          }
        });

      this._store.pokemons = results;
    });
  }

  public getOnePokemonApi(id: number)
  {
    // Reset le store Pokemon
    this._store.pokemon = null;

    // Appel de l'API
    const url = `/api/v2/pokemon/${id}`;
    this._http.get(url)
      .subscribe( (response: any) => {
        
        // console.log( response );
        const pokemon: Pokemon = {
          id: response.id,
          name: response.name,
          illustration: response.sprites.other.home.front_default,
          description: 'lorem pika pika',
          power: []
        }
        
        // Modifie le store pokemon
        setTimeout(() => this._store.pokemon = pokemon, 3000);
      });
  }


  private _extraireIdDeUrl(url: string) 
  {
    const regex = /\/(\d+)\/$/;
    const match = url.match(regex);
    if (match && match[1]) {
      return match[1];
    } else {
      return null;
    }
  }
}
