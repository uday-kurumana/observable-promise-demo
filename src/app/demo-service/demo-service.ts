import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
  
  
})
export class DemoService {

  // apiUrl = 'http://localhost:8080/api';

  private http = inject(HttpClient);

  // constructor(private http : HttpClient) {}

  getAllBooks(): Observable<any>  {
    // const urlformed = this.apiUrl + '/books';    
    // console.log('URL formed:', urlformed);
        return this.http.get("/api/books").pipe(map((response: any) => {
          if(response && response.length > 0 ) {
          return response;
        } else
        return []
  })  ); 
  }

  createBook(bookData: any): Observable<any> {
    
    const book = bookData;

    return this.http.post(`/api/postbooks`, book);
  }
    

}

{
  status: 200
  data: [
    {

  }
]
}



