import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service'; // Session Service
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

  export class LoginComponent implements OnInit {

    formInfo: any = {
      username: '',
      password: ''
    };

  user: any;
  error: any;
  privateData: any;

  constructor (private myService: AuthService, private myRouter: Router) {}

  ngOnInit() {

  }

  login() {
    // console.log(this.formInfo);
    this.myService.login(this.formInfo)
      .subscribe(
        (user) =>  this.user = JSON.parse(this.myService.currentUser._body),
        (err) => this.error = err
      );
  }

  getPrivateData() {
    this.myService.getPrivateData()
    .subscribe(() => console.log("====================", JSON.parse(this.myService.currentUser._body).username),
    err => console.log(err));
  }
}
