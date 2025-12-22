import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list-table',
  imports: [CommonModule],
  templateUrl: './book-list-table.html',
  styleUrl: './book-list-table.scss',
})
export class BookListTableComponent {
   books: Book[] = [];
    book: Book | null = null;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.books = this.activatedRoute.snapshot.data['books'];
    console.log('Resolved books data:', this.books);
    // this.book = this.activatedRoute.snapshot.data['book'];
    // console.log('Resolved book data:', this.book);
  } 


}
