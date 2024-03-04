import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { AComponent } from './a/a.component';
import { DPipe } from './d.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    AComponent,
    DPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
