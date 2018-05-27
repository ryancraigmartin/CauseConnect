import { Injectable } from '@angular/core'; // every time you make a service, include this
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class UserProfilesService {

  constructor(private myHttp: Http) { }


}
