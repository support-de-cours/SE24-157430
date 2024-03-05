import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-c',
  template: `
  <h2>Component C</h2>

  <div>
    texte du composant C<br>
    {{ myData_C }}
  </div>

  <hr>
  `
})
export class CComponent {
  @Input('value') myData_C!: string;

}
