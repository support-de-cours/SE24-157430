import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';
import { ObservableService } from 'src/app/services/observable.service';

@Component({
  selector: 'app-b',
  template: `
  <h2>Componant B</h2>

  <div>{{ dataValue_B }}</div>

  <div>Username : {{ username }}</div>
  <div><input type="text" [(ngModel)]="username" (keyup)="onUsernameChange()"></div>
  `
})
export class BComponent implements OnInit
{
  public dataValue_B!: string;
  public username!: string;

  

  constructor(
    private _communicationService: CommunicationService,
    private _observableService: ObservableService
  ){}

  ngOnInit(): void 
  {
    this.dataValue_B = this._communicationService.data;
  }

  onUsernameChange()
  {
    // console.log( this.username );
    this._observableService.username = this.username;
  }
}
