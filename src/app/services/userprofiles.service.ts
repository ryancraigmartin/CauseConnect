import { Injectable } from '@angular/core'; // every time you make a service, include this
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class UserProfilesService {

  constructor(private myHttp: Http) { }

  getUserProfiles() {
    return this.myHttp.get('http://localhost:3000')
    .map((responseFromApi) => responseFromApi.json());
  }

}
