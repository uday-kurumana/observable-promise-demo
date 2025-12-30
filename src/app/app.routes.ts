import { Routes } from '@angular/router';
import { booksResolver, getBookByIdResolver } from './data-resolvers/books.resolver';

export const routes: Routes = [
    {
        path: 'books-list-table/:id',
        loadComponent: () => import('./book-list-table/book-list-table').then(m => m.BookListTableComponent),
        resolve: {
            books: booksResolver,
            book: getBookByIdResolver
        }
    }
];
