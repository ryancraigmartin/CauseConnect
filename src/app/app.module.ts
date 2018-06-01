import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NonProfitsComponent } from './non-profits/non-profits.component';
import { AuthService } from './services/auth.service';
import { UserProfilesService } from './services/userprofiles.service';
import { ModalComponent } from './modal/modal.component';
import { NgbModule, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EventsComponent } from './events/events.component';
import { EventDetailsComponent } from './event-details/event-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    // Homepage route.
    path: 'home',
    component: HomeComponent
  },
  {
    // Login route.
    path: 'login',
    component: LoginComponent
  },
  {
    // Signup route.
    path: 'signup',
    component: SignupComponent
  },
  {
    // User Profile route.
    path: 'profile',
    component: ProfileComponent
  },
  {
    // login route.
    path: 'modal',
    component: ModalComponent
  },
  {
    // events listings route.
    path: 'events',
    component: EventsComponent
  },
  {
    // event details route.
    path: 'eventdetails',
    component: EventDetailsComponent
  },
  {
    // 404 route.
    path: '**', // Wildcard. Captures anything that isn't a valid route.
    component: NotFoundComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    NotFoundComponent,
    NavbarComponent,
    FooterComponent,
    ModalComponent,
    NonProfitsComponent,
    EventsComponent,
    EventDetailsComponent
  ],

  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  entryComponents: [ModalComponent],
  providers: [AuthService, UserProfilesService], // Services go here.
  bootstrap: [AppComponent, ModalComponent]
})
export class AppModule {}
