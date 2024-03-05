import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { IndexComponent } from './pages/index/index.component';
import { DetailComponent } from './pages/detail/detail.component';


@NgModule({
  declarations: [
    CardComponent,
    IndexComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PokemonsRoutingModule
  ]
})
export class PokemonsModule { }
