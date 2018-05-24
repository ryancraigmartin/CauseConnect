import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service'; // Session Service
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  formInfo: any = {
    username: '',
    password: ''
  };

  user: any;
  error: any;
  privateData: any;

  constructor (private myService: AuthService, private myRouter: Router) {}

  ngOnInit() {
    // this.myService.isLoggedIn()
    // .toPromise()
    // .then(  () => {
    //     this.user = JSON.parse(this.myService.currentUser._body);
    //     console.log('user in profile component: ', this.user);
    // })
    // .catch( err => {
    //   console.log('Err in profile: ', err);
    //   this.myRouter.navigate(['/login']);
    // });
    this.myService.isLoggedIn()
    .toPromise()
    .then(() => {
      this.formInfo = this.myService.currentUser;
      // console.log(this.formInfo); ===== Works !
    })
    .catch(err => {
      console.log(err);
      // this.myRouter.navigate(['/login']);
    });
  }
}
