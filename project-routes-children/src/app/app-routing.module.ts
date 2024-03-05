import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { IndexComponent as PokedexComponent } from './pages/pokemons/pages/index/index.component';
import { BooksIndexComponent } from './pages/books/index/index.component';
import { DetailComponent } from './pages/pokemons/pages/detail/detail.component';

const routes: Routes = [
  // Homepage
  {
    path: 'homepage',
    component: HomepageComponent
  },


  // Livres
  {
    path: 'books',
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
