import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "../environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { AlertifyService } from "./_services/alertify.service";
import { AuthService } from "./_services/auth.service";
import { UserService } from "./_services/user.service";
import { BsDropdownModule, TabsModule } from "ngx-bootstrap";
import { AgmCoreModule } from "@agm/core";
import { WeatherService } from "./_services/weather.service";

import { UserCreateComponent } from "./user/user-create/user-create.component";
import { UserDetailsComponent } from "./user/user-details/user-details.component";
import { UserUpdateComponent } from "./user/user-update/user-update.component";
import { UserListComponent } from "./user/user-list/user-list.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { UserHelper } from "./Dtos/user.helper";
import { StartAuthguard } from "./guard/startAuth.guard";
import { AuthGuard } from "./guard/auth.guard";
import { NavbarComponent } from "./navbar/navbar.component";
import { WeatherComponent } from "./weather/weather.component";
import { SignInComponent } from './sign-in/sign-in.component';
import { AdminGuard } from './guard/admin.guard';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    UserCreateComponent,
    UserDetailsComponent,
    UserUpdateComponent,
    UserListComponent,
    SignUpComponent,
    NavbarComponent,
    WeatherComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    //importsfirebase/firestore,
    AngularFireAuthModule,
    //importsfirebase/auth,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyB3JRtwW1rFF6vaWIIIestjYyetTzTqrtA"
    })
  ],
  providers: [
    //provide\nAlertifyService,
    AuthService,
    UserService,
    UserHelper,
    AuthGuard,
    StartAuthguard,
    WeatherService,
    AlertifyService,
    AdminGuard,
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
