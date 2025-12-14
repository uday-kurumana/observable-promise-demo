import { Component } from '@angular/core';
import { DemoService } from '../../demo-service/demo-service';
import { NgForOf } from '@angular/common';


@Component({
  selector: 'app-book-list',
  imports: [NgForOf],
  templateUrl: './book-list.html',
  styleUrl: './book-list.scss',
})
export class BookList {

  books: Book[] = [];

  constructor(private demoService: DemoService) {}

  ngOnInit() {  
    this.demoService.getAllBooks().subscribe((data) => {
      // this.books = data;
      data.array.forEach((element: any)  => {
        this.books.push({
          id: element.id,
          title: element.title,
          publish_date: element.publish_date,
          price: element.price
        });
      });
      
      console.log('Books data:', data);
    });

    const bookObject = {id:5,price:10.00,publishDate:"2024-04-15",title:"carnegie"};
    this.demoService.createBook(bookObject).subscribe((response) => {
      console.log('Book created successfully:', response);
    });
    
  }
}


interface Book {
  id: number;
  title: string
  publish_date: string;
  price: number;  
}
