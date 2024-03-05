import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Err404Component } from './err404.component';

const routes: Routes = [{
  path: '', // site.com/uuyztruyztruyztr/
  component: Err404Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Err404RoutingModule { }
