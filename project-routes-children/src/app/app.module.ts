import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { IndexComponent } from './pages/pokemons/pages/index/index.component';
// import { DetailComponent } from './pages/pokemons/pages/detail/detail.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
// import { RouterModule } from '@angular/router';
// import { CardComponent } from './shared/components/card/card.component';
import { PokemonsModule } from './pages/pokemons/pokemons.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './core/interceptors/api.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    // IndexComponent,
    // DetailComponent,
    HomepageComponent,
    // CardComponent
  ],
  imports: [
    BrowserModule,
    PokemonsModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
