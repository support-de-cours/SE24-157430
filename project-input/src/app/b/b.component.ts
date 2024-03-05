import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-b',
  template: `
  <h2>Component B</h2>

  {{ myData_B}}
  <div>
    <component-c [value]="myData_B"></component-c>
  </div>

  <hr>
  `
})
export class BComponent {
  @Input() myData_B!: string;
}
