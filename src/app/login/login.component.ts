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
  formInfo = {
    username: '',
    password: ''
  };

  user: any;
  error: any;
  privateData: any;

  constructor(private myService: AuthService, private myRouter: Router) { }

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

    this.myService.isLoggedIn();

    this.myService.currentUser.subscribe(theUser => {
      this.user = theUser;
      // console.log("in loggedin function in login component user is", theUser);
    });

    // .then(() => {
    // if (this.myService.currentUser !== null) {
    // this.user = this.myService.currentUser;
    // console.log('ngoninit in login: ', this.myService.currentUser);
    // this.myRouter.navigate(['/profile']);

    // } else {
    // this.myRouter.navigate(['/login']);
    // }
    // })
    // .catch(err => {
    //   console.log(err);
    //   // this.myRouter.navigate(['/login']);
    // });
  }

  login() {
    this.myService.login(this.formInfo).subscribe(() => {
      this.myService.currentUser.subscribe(theUser => {
        this.user = theUser;
        this.myRouter.navigate(['/profile']);
      });
    });
    // .toPromise()
    // .subscribe(() => {
    //   this.user = user;
    //   console.log('user in login comp: ', this.user);
    //   this.myRouter.navigate(['/profile']);
    // });
    // .catch(err => (this.error = err));
  }

  logout() {
    this.myService.logout();
    // .then(() => {
    // this.user = null;
    // this.formInfo = {};
    this.formInfo = null;
    this.myRouter.navigate(['/']);
    // })
    // .catch(err => (this.error = err));
  }

  loginRedirectToProfile() {
      this.myRouter.navigateByUrl('/profile');
  }
}
