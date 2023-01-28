import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_services/auth.service";
import { AlertifyService } from "../_services/alertify.service";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"]
})
export class SignInComponent implements OnInit {
  userDetail: any ={};
  constructor(
    private authService: AuthService,
    private alirtify: AlertifyService
  ) {}

  ngOnInit() {}

  loginWithEmail() {
    this.authService
      .loginWithEmail(this.userDetail.email, this.userDetail.password)
      .subscribe(
        user => {
          this.alirtify.success("Successfully loged in");
        },
        error => {
          this.authService.handleError(error);
        }
      );
  }
  authWithGoogle(){
    this.authService.loginWithGoogle().subscribe(
      null,
      error=>{
        this.authService.handleError(error)
      },
      ()=>{
        this.alirtify.success("Succsesfully sign in with Google")
      }
    )
  }
}
