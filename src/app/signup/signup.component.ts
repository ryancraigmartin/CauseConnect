import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';
// import { HttpModule } from '@angular/http';
// import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private myService: AuthService) {}

  formInfo: any = {
    username: '',
    password: '',
    email: ''
  };

user: any;
error: any;
title = 'app'; // ?

signup() {
  console.log(this.formInfo);
  this.myService.signup(this.formInfo)
  .subscribe(
    (user)  => {this.user = user;
      console.log(this.user);
    },
      (err) => this.error = err
    );
}

ngOnInit() {
}

}
