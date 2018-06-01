import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service'; // Session Service
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  formInfo: any = {
    username: '',
    password: '',
    email: ''
  };

  currentUser: any;
  user: any;

  constructor(private myService: AuthService, private myRouter: Router) { }

  ngOnInit() {
    this.myService
      .isLoggedIn()
      .then(() => {
        this.formInfo = this.myService.currentUser;
        console.log('this.formInfo in nav bar --> ', this.formInfo);
      })
      .catch(err => {
        console.log(err);
        // this.myRouter.navigate(['/login']);
      });
  }
}
