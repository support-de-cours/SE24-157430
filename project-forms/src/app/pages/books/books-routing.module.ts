import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { CreateComponent } from './pages/create/create.component';
import { ReadComponent } from './pages/read/read.component';
import { UpdateComponent } from './pages/update/update.component';
import { DeleteComponent } from './pages/delete/delete.component';

const routes: Routes = [
  // Index
  {
    path: 'books', // site.com/books
    component: IndexComponent
  },

  {
    path: 'book',
    children: [

      // Create
      {
        path: '', // site.com/book
        component: CreateComponent
      },
    
      // Read
      {
        path: ':id',
        children: [
          {
            path: '', // site.com/book/42
            component: ReadComponent
          },
          
          // Update
          {
            path: 'edit',  // site.com/book/42/edit
            component: UpdateComponent
          },
        
          // Delete
          {
            path: 'delete',  // site.com/book/42/delete
            component: DeleteComponent
          },
        ]
      },
    ]
  }
];

const routes2: Routes = [

  {
    path: 'books',
    children: [
      
      // Index
      {
        path: '', // site.com/books
        component: IndexComponent
      },
      
      // Create
      {
        path: 'create', // site.com/books/create
        component: CreateComponent
      },

      {
        path: ':id',
        children: [
          // Read
          {
            path: '', // site.com/books/42
            children: [
              {
                path: '',
                component: ReadComponent
              },
              {
                path: 'edit',
                component: UpdateComponent
              },
              {
                path: 'delete',
                component: DeleteComponent
              }
            ]
          }
        ]
      },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
