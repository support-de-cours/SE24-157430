import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';
import { ObservableService } from 'src/app/services/observable.service';

@Component({
  selector: 'app-a',
  template: `
  <h2>Componant A</h2>

  <div>{{ dataValue }}</div>
  <div>Username : {{ username }}</div>
  `
})
export class AComponent implements OnInit
{
  public dataValue!: string;
  public username!: string;

  constructor(
    private _communicationService: CommunicationService,
    private _observableService: ObservableService
  ){}

  ngOnInit(): void 
  {
    // this.dataValue = this._communicationService.getData();
    this.dataValue = this._communicationService.data;

    // this.username = "John";

    this._observableService.username.subscribe(response => this.username = response)

  }
}
