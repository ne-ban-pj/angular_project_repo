import { Component, OnInit, Input } from "@angular/core";
import { AuthService } from "../_services/auth.service";
import {
  NgForm,
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { AlertifyService } from "../_services/alertify.service";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { throwError, from, Observable } from "rxjs";
import { AngularFirestore } from "@angular/fire/firestore";
import { catchError } from 'rxjs/operators';

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
  userDetails: any = {};

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  successMessage: string;
  errorMessage: string;
  registerForm: FormGroup;

  constructor(
    private authService: AuthService,
    private alertify: AlertifyService
  ) {
    this.registerForm = new FormGroup({
      email: new FormControl(Validators.required),
      password: new FormControl(Validators.required),
      name: new FormControl(Validators.required)
    });
  }

  ngOnInit() {}

  tryRegister() {
    this.userDetails.role = "user";
    this.authService.doRegister(this.userDetails).subscribe(
      user => {

        this.alertify.success("Succsesfully registered!");
      },
      err => {
        console.log(err);
        this.authService.handleError(err)
      }
    );
  }
  authWithGoogle() {
    this.authService.loginWithGoogle().subscribe(
      null,
      error => {
        this.authService.handleError(error);
      },
      () => this.alertify.success("Succsesfully sign in with Google")
    );
  }
  randomPassword(length) {
    var chars =
      "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    var pass = "";
    for (var x = 0; x < length; x++) {
      var i = Math.floor(Math.random() * chars.length);
      pass += chars.charAt(i);
    }
    return pass;
  }
  generate() {
    this.userDetails.password = this.randomPassword(15);
  }
}
