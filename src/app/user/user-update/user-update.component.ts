import { Component, OnInit, HostListener, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/_services/user.service";
import { JwtHelperService } from "@auth0/angular-jwt";
import { User } from "src/app/_modules/user";
import { NgForm } from "@angular/forms";
import { AlertifyService } from "src/app/_services/alertify.service";

@Component({
  selector: "app-user-update",
  templateUrl: "./user-update.component.html",
  styleUrls: ["./user-update.component.css"]
})
export class UserUpdateComponent implements OnInit {
  model:any=[]
  @ViewChild("editForm", { static: true }) editForm: NgForm;
  @HostListener("window:beforeunload", ["$event"])
  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }
  private jwtHelper: JwtHelperService = new JwtHelperService();
  constructor(
    public actRoute: ActivatedRoute,
    public router: Router,
    private userService: UserService,
    private alertify: AlertifyService,
  ) {
    
  }

  ngOnInit() {
    this.loadUser()
  }

  loadUser(){
    this.userService.getUser(this.jwtHelper.decodeToken(localStorage.getItem("token")).user_id).subscribe((data:{})=>{
   this.model=data }
)
  }
  updateUser() {
    let user_id = this.jwtHelper.decodeToken(localStorage.getItem("token"))
      .user_id;
    if (window.confirm("Are you sure, you want to update?")) {
      this.userService.modifyUserField(user_id, this.model).subscribe(
        next => {
          this.alertify.success("Updated successfully");
          this.editForm.reset(this.model);
        },
        error => {
          this.alertify.error(error);
        }
      );
    }
  }
}
