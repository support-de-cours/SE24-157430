import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [
  {
    path: 'pokedex',
    children: [
      {
        path: '', // site.com/pokedex
        component: IndexComponent,
        data: {
          page_name: "Liste des pokemon"
        }
      },
      {
        path: ':id',  // site.com/pokedex/42
        component: DetailComponent,
        data: {
          page_name: "Detail d'un pokemon"
        }
      }
    ]
  },


/*
  // Liste des pokemons
  {
    path: 'pokedex',
    component: PokedexComponent
  },

  // Detail d'un pokemon
  {
    path: 'pokedex/:id',
    component: DetailComponent
  },

*/


 /*
  {
    path: 'pokedex',
    children: [
      {
        path: '', // site.com/pokedex
        component: PokedexComponent
      },
      {
        path: ':id',  
        children: [
          {
            path: '',// site.com/pokedex/42
            component: DetailComponent
          },
          {
            path: 'delete', // site.com/pokedex/42/delete
            component: DeleteComponent
          }
        ]
      }
    ]
  },
  */

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
