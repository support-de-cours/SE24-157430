import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { Err404Component } from './pages/err404/err404.component';

const routes: Routes = [

  // Homepage
  // --
  // site.com/homepage
  {
    path: 'homepage',
    component: HomepageComponent
  },

  // About
  // --
  // site.com/about
  {
    path: 'about',
    component: AboutComponent
  },

  // Contact
  // --
  // site.com/get-in-touch
  {
    path: 'get-in-touch',
    component: ContactComponent
  },


  // Default Page (Wild Card Route)
  // --
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'homepage'
  },


  // LazyLoading
  // Error 404 si l'url courant n'est pas definit dans les routes precedentes
  {
    path: '**',
    // component: Err404Component
    loadChildren: () => import('./pages/err404/err404.module').then(m => m.Err404Module)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
