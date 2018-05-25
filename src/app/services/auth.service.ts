import { Injectable } from '@angular/core'; // every time you make a service, include this
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  currentUser: any;
  // formInfo: any = {
  //   username: '',
  //   password: ''
  // };

  // user: any;
  // error: any;
  // privateData: any;

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signup(user) {
    return this.http.post(`http://localhost:3000/api/signup`, user, {withCredentials: true})
      .map(res => {console.log(res), res.json()})
      .catch(this.handleError);
  }

  login(user) {
    return this.http.post(`http://localhost:3000/api/login`, user, {withCredentials: true})
      .map(res => {this.currentUser = res, console.log(res), res.json()})
      .catch(this.handleError);
  }

  logout() {
    return this.http.delete(`http://localhost:3000/api/logout`, {withCredentials: true})
      .map(res => res.json())
      .catch(this.handleError);
    // return this.http.delete(`http://localhost:3000/api/logout`, {withCredentials: true})
    // .toPromise()
    // .then((apiResult) => {
    //   this.currentUser = null;
    //   return apiResult;
    // });
  }

  isLoggedIn() {
    return this.http.get(`http://localhost:3000/api/loggedin`, {withCredentials: true})
      .map(res => {
        this.currentUser = res.json();
        console.log('user in the service ', res);
        res.json();
      })
      .catch(this.handleError);
  }

  getPrivateData() {
    return this.http.get(`http://localhost:3000/api/private`, {withCredentials: true})
      .map(res => {console.log('heyyyy: ', res), res.json()})
      .catch(this.handleError);
  }

  getUser() {
    return this.http.get(`http://localhost:3000/api/userInfo`, { withCredentials: true })
      .map(res => res.json())
      .catch(this.handleError);
  }
}
