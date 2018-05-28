import { Injectable } from '@angular/core'; // every time you make a service, include this
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class UserProfilesService {

  constructor(private http: Http) { }

  currentUser: any;

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  isLoggedIn() {
    return this.http.get(`http://localhost:3000/api/loggedin`, {withCredentials: true})
      .map(res => {
        this.currentUser = res.json();
        console.log('User Session: ', res);
        res.json();
      })
      .catch(this.handleError);
  } 

}
