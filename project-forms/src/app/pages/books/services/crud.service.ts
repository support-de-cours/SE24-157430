import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Book } from '../interfaces/book';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class CrudService 
{
  #http = inject(HttpClient);
  #store = inject(StoreService);

  // constructor(
  //   private _http: HttpClient
  // ){}

  public getAllBooks()
  {
    this.#http
      .get('/books')
      .subscribe(response => {
        const books = response as Book[];
        
        this.#store.books = books;
      
      });
  }

  public addOneBook(book: Book)
  {
    this.#http
      .post('/books', book)
      .subscribe(response => {
        const book = response as Book;
        this.#store.book = book;

        this.#store.books.subscribe(data => console.log(data))
      })
  }

}
