import { Component, inject } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../../interfaces/book';

@Component({
  templateUrl: './create.component.html'
})
export class CreateComponent 
{
  #crud = inject(CrudService);

  public bookForm = new FormGroup({
    title: new FormControl('', [
      Validators.required
    ]),
    price: new FormControl('', [
      Validators.required
    ]),
  });

  formSubmit(): void
  {
    if (this.bookForm.invalid)
    {
      console.log("Le formulaire n'est pas valide");
      return;
    }

    const book = this.bookForm.value as Book;
    this.#crud.addOneBook( book );

  }
}
