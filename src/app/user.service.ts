import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://api.github.com/users';
  apiSearch: string;

  constructor(private http: HttpClient) {}

  getUsers(){
    return this.http.get(`${this.apiUrl}?per_page=10`);
  }

  getUser(username){
    console.log(`${this.apiUrl}/${username}`);
    return this.http.get(`${this.apiUrl}/${username}`);
    
    // return this.http.get(`${this.apiUrl}/mikejtaylor22`);
    // return this.http.get('https://api.github.com/users/mikejtaylor22');
  }
  getMyUser() {
    return this.http.get('https://api.github.com/users/mikejtaylor22');
  }
}

