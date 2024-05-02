import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

const BASIC_URL = ["http://localhost:8080"]
@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  addProduct(value: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }
  postAddProduct(post: any): Observable<any>{
    return this.http.post(BASIC_URL+"/product", post )
  }

  getAllProduct(): Observable<any>{
    return this.http.get(BASIC_URL+"/product/getAllData");
  }

  // getAllProduct1(): Observable<any>{
  //   return this.http.get(BASIC_URL+"");
  // }

}
