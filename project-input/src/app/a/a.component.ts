import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-a',
  template: `

  <h2>Component A</h2>

  {{ myData_A }}
  <div>
    <component-b [myData_B]="myData_A"></component-b>
  </div>

  <hr>
  `
})
export class AComponent {
  @Input() myData_A!: string;
}
