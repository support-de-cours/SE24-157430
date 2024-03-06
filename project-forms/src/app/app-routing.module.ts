import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // Default Route
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'homepage'
  },

  // WildCard route
  {
    path: '**',
    loadChildren: () => import('./core/err404/err404.module').then(m => m.Err404Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
