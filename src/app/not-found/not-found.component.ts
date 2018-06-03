import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../services/auth.service"; // Session Service
import { Router } from "@angular/router";
import "rxjs/add/operator/toPromise";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-not-found",
  templateUrl: "./not-found.component.html",
  styleUrls: ["./not-found.component.css"]
})
export class NotFoundComponent implements OnInit {
  formInfo: any = {
    username: "",
    password: "",
    email: ""
  };
  user: any;

  constructor(private myService: AuthService, private myRouter: Router) {}

  ngOnInit() {
    // this.myService.isLoggedIn()
    // .then(  () => {
    //     this.user = JSON.parse(this.myService.currentUser._body);
    //     console.log('user in profile component: ', this.user);
    // })
    // .catch( err => {
    //   console.log('Err in profile: ', err);
    //   this.myRouter.navigate(['/login']);
    // });
  }
}
