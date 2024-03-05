import { Component, OnInit, inject } from '@angular/core';
import { ObservableService } from 'src/app/services/observable.service';

@Component({
  selector: 'app-c',
  template: `
  <h2>Componant C</h2>

  <div>Username : {{ username }}</div>
  `
})
export class CComponent implements OnInit
{
  public username!: string;
  private _service = inject( ObservableService);

  // constructor(
  //   private _service: ObservableService
  // ){}

  ngOnInit(): void 
  {
    this._service.username.subscribe(data => this.username = data)
  }
}
