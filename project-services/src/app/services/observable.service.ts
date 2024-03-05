import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  private _username: BehaviorSubject<string> = new BehaviorSubject<string>("Default username");

  public get username(): BehaviorSubject<string>
  {
    return this._username;
  }

  public set username(username: string)
  {
    this._username.next(username);
  }

}
