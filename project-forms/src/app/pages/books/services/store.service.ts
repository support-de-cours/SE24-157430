import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class StoreService 
{
  private _books: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);

  public set book(book: Book)
  {
    const books = this._books.getValue();

    // console.log(books);
    
    this._books.next([...books, book]);
  }

  public set books(books: Book[])
  {
    this._books.next(books);
  }
  
  public get books(): BehaviorSubject<Book[]>
  {
    return this._books;
  }
}
