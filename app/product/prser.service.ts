import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const BASIC_URL = ["http://localhost:8080"]

@Injectable({
  providedIn: 'root'
})
export class PrserService {
  addShopCart(value: any) {
    throw new Error('Method not implemented.');
  }


constructor(private http: HttpClient) { }

  postshopCart(post: any): Observable<any>{
    return this.http.post(BASIC_URL+"/shoppingCart", post )
  }

 
}
