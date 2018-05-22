import { Injectable } from '@angular/core'; // every time you make a service, include this
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// import { HttpModule } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';



@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  currentUser: any;

  signup(user) {
    return this.http.post(`http://localhost:3000/api/signup`, user)
      .map(res => {console.log(res), res.json()})
      .catch(this.handleError);
  }

  login(user) {
    return this.http.post(`http://localhost:3000/api/login`, user)
      .map(res => {this.currentUser = res, console.log(res), res.json()})
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`http://localhost:3000/api/logout`, {})
      .map(res => res.json())
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`http://localhost:3000/api/loggedin`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getPrivateData() {
    return this.http.get(`http://localhost:3000/api/private`)
      .map(res => {console.log("heyyyy: ", res), res.json()})
      .catch(this.handleError);
  }
}
