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
    skills: ''
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

  // toggleSwitch() {
  //   this.$('.switch').is(':checked');
    // $('#switch').bootstrapSwitch();
    // $('#switch').on( 'switchChange',function () {
    // if ($('#switch').bootstrapSwitch('state') === true) {
    //     console.log('On');
    // } else {
    //     console.log('Off');
    // }
    // });
  // }

  getEntries(theUserID) {
    console.log('--- Getting the profile info ---');
    this.profileService.getEntries(theUserID)
    .subscribe((profileEntries) => {
      console.log('+++++++++++++');
      this.profileEntries = profileEntries[0];
      this.newEntry = profileEntries[0];
      console.log(this.profileEntries);

    });
  }

  ngOnInit() {



    this.myService.isLoggedIn()
    .toPromise()
    .then(() => {
      console.log(this.myService.currentUser._id)
      this.formInfo = this.myService.currentUser;
      this.getEntries(this.myService.currentUser._id);
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

