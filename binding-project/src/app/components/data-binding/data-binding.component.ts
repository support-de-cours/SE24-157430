import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent {

  // Interpolation
  public title: string = "My Awesome Title";

  // Property binding
  public url: string = "https://picsum.photos/200/300";

  // Event binding
  changeTitle(): void
  {
    // console.log('Change title is clicked!');
    this.title = "This is my NEW TITLE !!!!";
  }

  // Tow Way Bonding
  public username: string = "Bobby";
}
