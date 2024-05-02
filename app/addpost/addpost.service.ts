import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = ["http://localhost:8080"]
@Injectable({
  providedIn: 'root'
})
export class AddpostService {
  addPost(value: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }
  postAddPost(post: any): Observable<any>{
    return this.http.post(BASIC_URL+"/post", post )
  }
  
}
