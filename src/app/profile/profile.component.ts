import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service'; // Session Service
import { UserProfilesService } from '../services/userprofiles.service'; // Profile Service
import { ProfileInfo } from './../interfaces/profile-info'; // ProfileInfo interface

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // Shows or hides input fields depending on edit state.
  showProfileForms: Boolean = false;

  // Profile info object to hold retrieved data.
  newEntry: ProfileInfo = {
    name: '',
    aboutUser: '',
    age: '',
    email: '',
    phone: '',
    facebook: '',
    linkedin: '',
    twitter: '',
    volunteerExperience: '',
    skills: ''
    //   profileImage: '',
    //   backgroundImage: '',
  };

  // Holds the session info for the user.
  formInfo: any = {
    username: '',
    password: ''
  };

  user: any;
  error: any;

  // profileInfo: any;
  entries: any[] = [];

  constructor(
    private myService: AuthService,
    private myRouter: Router,
    private profileService: UserProfilesService,
    private activatedRoute: ActivatedRoute) {
    // console.log( profileService, myRouter );
    // this.profileService = profileService;
    // console.log(this.profileService);
  }

  editMode() {
    this.showProfileForms = !this.showProfileForms;
  }

  getEntries() {
    console.log('--- Getting the profile info ---');
    this.profileService.getEntries()
    .subscribe((profileEntries) => {
      this.entries = profileEntries;
    });
  }

  ngOnInit() {
    this.getEntries();

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
    this.showProfileForms = !this.showProfileForms;
    this.profileService.postEntries(this.newEntry)
      .subscribe(() => {
        this.myRouter.navigate(['profile']);
      });
  }

}

