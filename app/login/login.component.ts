import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

username!:any;
password!:any;
  

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    this.http.post<any>('http://localhost:8080/login', { username, password })
      .subscribe(response => {
        // Handle successful login
        console.log('Login successful:', response);
      }, error => {
        // Handle login error
        console.error('Login error:', error);
      });
  }
}
