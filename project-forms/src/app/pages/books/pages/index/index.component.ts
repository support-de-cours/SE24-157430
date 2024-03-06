import { Component, OnInit, inject } from '@angular/core';
import { Book } from '../../interfaces/book';
import { StoreService } from '../../services/store.service';
import { CrudService } from '../../services/crud.service';

@Component({
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit
{
  public books!: Book[];
  #store = inject(StoreService);
  #crud = inject(CrudService);

  ngOnInit(): void 
  {
    this.#store.books.subscribe(books => this.books = books);
    this.#crud.getAllBooks();
  }
}
