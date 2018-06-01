import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormControl  } from '@angular/forms';
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
    skills: '',
    causes: ''
    //   profileImage: '',
    //   backgroundImage: '',
  };

  profileEntries: ProfileInfo = {
    name: '',
    aboutUser: '',
    age: '',
    email: '',
    phone: '',
    facebook: '',
    linkedin: '',
    twitter: '',
    volunteerExperience: '',
    skills: '',
    causes: ''
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

  // const nameControl = new FormControl('profileEntries.name');
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

  getEntries(theUserID) {
    this.profileService.getEntries(theUserID)
    .subscribe((profileEntries) => {
      this.profileEntries = profileEntries[0];
      this.newEntry = profileEntries[0];
    });
  }

  ngOnInit() {
    this.myService.isLoggedIn();
    // .then(() => {
      this.myService.currentUser.subscribe(theUser => this.user = theUser);
      // console.log('---currentuser_id in ngoninit in profile component---');
      // console.log(this.myService.currentUser._id);
      this.formInfo = this.myService.currentUser;
      this.getEntries(this.user._id);
  }

  logout() {
    this.myService.logout()
    .then(() => {
          this.formInfo = {};
          this.myRouter.navigate(['/login']);
        })
        .catch(err => console.log('err in logout: ', err));
  }

  saveProfileInfo() {
    this.showProfileForms = !this.showProfileForms;
    this.profileService.postEntries(this.newEntry)
      .subscribe(() => {
        this.myRouter.navigate(['/profile']);
      });
  }

}