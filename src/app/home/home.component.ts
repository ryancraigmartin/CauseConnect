import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private myService: AuthService) {}

  formInfo: any = {
    username: '',
    password: ''
  };

user: any;
error: any;

login() {
  console.log(this.formInfo);
  this.myService.login(this.formInfo)
    .subscribe(
      (user) => { this.user = user;
        console.log(this.user);
      },
      (err) => this.error = err
    );
}

ngOnInit() {

}

}
