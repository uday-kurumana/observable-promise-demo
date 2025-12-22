import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../env/environment';

@Injectable({
  providedIn: 'root',
  
  
})
export class DemoService {
 
  apiURL = environment.apiUrl;

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

  // responseEntity = {
  //   status: 200,
  //   data: Book[]
  // }

  createBook(bookData: any): Observable<any> {
    const book = bookData;
    return this.http.post(`/api/postbooks`, book);
  }

  getUserId(bookId: string): Observable<any> {
    return this.http.get(`/api/books/${bookId}`).pipe(map((response: any) => {
      if(response) {
      return response;
    } else
    return null 
  })  );

}
}

// {
//   status: 200
//   data: [
//     {

//   }
// ]
// }



