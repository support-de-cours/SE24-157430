import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { IndexComponent as PokedexComponent } from './pages/pokemons/index/index.component';
import { BooksIndexComponent } from './pages/books/index/index.component';

const routes: Routes = [
  // Homepage
  {
    path: 'homepage',
    component: HomepageComponent
  },




  // Liste des pokemons
  {
    path: 'pokedex',
    component: PokedexComponent
  },

  // Detail d'un pokemon




  

  // Livres
  {
    path: 'book',
    component: BooksIndexComponent
  },

  // Route par defaut
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'homepage'
  },

  // Route 404
  {
    path: '**',
    loadChildren: () => import('./pages/err404/err404.module').then(m => m.Err404Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
