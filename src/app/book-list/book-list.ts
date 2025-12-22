import { Component } from '@angular/core';
import { DemoService } from '../demo-service/demo-service';
import { NgForOf } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-book-list',
  imports: [NgForOf, RouterModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.scss',
})
export class BookList {

  books: Book[] = [];

  constructor(private demoService: DemoService) { }

  ngOnInit() {
    this.demoService.getAllBooks().subscribe((data) => {

      if (data && data.length > 0) {
        data.forEach((element: any) => {
          this.books.push({
            id: element.id,
            title: element.title,
            publish_date: element.publish_date,
            price: element.price
          });
        });

      }
    });

    // const bookObject = { id: 5, price: 10.00, publishDate: "2024-04-15", title: "carnegie" };
    // this.demoService.createBook(bookObject).subscribe((response) => {
    //   console.log('Book created successfully:', response);
    // });

  }
}
