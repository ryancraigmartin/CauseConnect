import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service'; // Session Service
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // directives: [ROUTER_DIRECTIVES, Modal]
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
    // this.myService.isLoggedIn()
    // .toPromise()
    // .then(() => {
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

  login() {
    // this.myService.login(this.formInfo)
    //   .subscribe(
    //     (user) =>  this.user = JSON.parse(this.myService.currentUser._body),
    //     (err) => this.error = err
    //   );
    this.myService
      .login(this.formInfo)
      .subscribe(
        user => (this.user = user),
        err => (this.error = err)
      );
      this.myRouter.navigate(['profile']);
  }

  logout() {
    this.myService.logout()
      .subscribe(
        () => {
          this.user = null;
          this.formInfo = {};
          this.myRouter.navigate(['/']);
        },
        (err) => this.error = err
      );
  }

  loginRedirectToProfile() {
    this.myRouter.navigateByUrl('/profile');
}
  }
