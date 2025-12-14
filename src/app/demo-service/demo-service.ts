import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
  
  
})
export class DemoService {

  apiUrl = 'localhost:8080';

  private http = inject(HttpClient);

  // constructor(private http : HttpClient) {}

  getAllBooks(): Observable<any>  {
    const urlformed = this.apiUrl + '/books';    
    console.log('URL formed:', urlformed);
        return this.http.get(urlformed);
  }

  createBook(bookData: any): Observable<any> {
    const book = bookData
    // const bookData =  {id:5,price:10.00,publishDate:"2024-04-15",title:"carnegie"};

    return this.http.post(`${this.apiUrl}/books`, book);
  }
    

}
