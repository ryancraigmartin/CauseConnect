import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core'; // every time you make a service, include this
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private http: Http) {}

  currentUser: BehaviorSubject<string> = new BehaviorSubject(null);
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
    return this.http
      .post(`${environment.backendUrl}/api/signup`, user, {
        withCredentials: true
      })
      .map(res => {
        console.log(res), res.json();
      })
      .catch(this.handleError);
  }

  login(user) {
    return this.http
      .post(`${environment.backendUrl}/api/login`, user, {
        withCredentials: true
      })
      .map(res => {
        this.currentUser.next(res.json());
        res.json();
      })
      .catch(this.handleError);
  }

  logout() {
    this.currentUser.next(null);
    return this.http
      .post(
        `${environment.backendUrl}/api/logout`,
        {},
        { withCredentials: true }
      )
      .toPromise()
      .then(res => {
        console.log('THIS CURRENT USER', this.currentUser);
        sessionStorage.clear();
        console.log('THIS CURRENT USER SHOULD BE NULL', this.currentUser);
        res.json();
      });
    // .catch(err => {
    //   console.log('err in service logout: ', err);
    // });
  }

  isLoggedIn() {
    return this.http
      .get(`${environment.backendUrl}/api/loggedin`, { withCredentials: true })
      .toPromise()
      .then(res => {
        this.currentUser.next(res.json());
        console.log('User in islogged in service: ', this.currentUser);
        res.json();
      })
      .catch(this.handleError);
  }

  getUser() {
    return this.http
      .get(`${environment.backendUrl}/api/userInfo`, { withCredentials: true })
      .map(res => res.json())
      .catch(this.handleError);
  }
}
