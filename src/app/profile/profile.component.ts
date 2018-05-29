import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; // Session Service
import { UserProfilesService } from '../services/userprofiles.service'; // Profile Service
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // Holds the session info for the user.
  formInfo: any = {
    username: '',
    password: ''
  };

  // Profile info object to hold retrieved data.
  profileInfo: any = {
    profileImage: '',
    backgroundImage: '',
    name: '',
    aboutUser: '',
    age: '',
    email: '',
    phone: '',
    facebook: '',
    linkedin: ''
  };

  user: any;
  error: any;

  constructor (private myService: AuthService,
               private myRouter: Router,
               private profileService: UserProfilesService) {}

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

  saveProfileInfo() {
  //   this.profileInfo.name = this.name;
  //   this.profileInfo.aboutUser = this.aboutUser;
  //   this.profileInfo.age = this.age;
  //   this.profileInfo.email = this.email;
  //   this.profileInfo.phone = this.phone;
  //   this.profileInfo.facebook = this.phofacebookne;
  //   this.profileInfo.linkedin = this.linkedin;
  //   this.profileService.saveProfileInfo(this.profileInfo)
  //   .subscribe();
  //   this.myRouter.navigate([`/profile/${this.username}`]);
  // }
  }
}
