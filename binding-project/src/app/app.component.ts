import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public inputData: string = "This is my awesome input value";

  ngOnInit(): void {
    setTimeout(() => {
      this.inputData = 'The new value of the InputData'
    },5000);
  }
}
