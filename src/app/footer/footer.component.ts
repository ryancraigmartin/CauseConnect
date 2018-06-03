import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service'; // Session Service
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { ActivatedRoute } from '@angular/router';
// import { currentUser } from '../services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  formInfo: any = {
    username: '',
    password: ''
  };

  user: any;
  error: any;
  privateData: any;

  constructor(
    private myService: AuthService,
    private activatedRoute: ActivatedRoute,
    private myRouter: Router
  ) {}

  ngOnInit() {}
}
