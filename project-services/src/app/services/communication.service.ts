import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private _myData: string = "original data value.";

  // public getData(): string
  // {
  //   return this._myData;
  // }

  public get data(): string
  {
    return this._myData;
  }

  public set data(value: string)
  {
    this._myData = value;
  }

}
