import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private baseURL = 'http://localhost:7000/users';
  constructor(
    private http: HttpClient
  ) { }

  // Get method to fecth the details 
  getUserDetails() {
    return this.http.get
    (`${this.baseURL}/list`);         
  }

  addUserDetails(data: any) {
    const url = this.baseURL + '/create';
    return this.http.post(url, JSON.stringify(data));
  }

  getUser(username: string) {
    const url = this.baseURL + '/' + username;
    return this.http.get(url);
  }

  saveUser(data: any) {
    const url = this.baseURL + '/create';
    return this.http.post(url, data);
  }
}
