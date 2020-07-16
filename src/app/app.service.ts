import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }


  getDataFromEP(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments');
  }

}
