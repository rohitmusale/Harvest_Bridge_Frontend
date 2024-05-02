import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const BASIC_URL="http://localhost:8080";
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  register(value: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }
  registerFarmer(post: any): Observable<any>{
    return this.http.post(BASIC_URL+"/farmer",post)
  }


}
