import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

import { AlertifyService } from "src/app/_services/alertify.service";

@Component({
  selector: "app-user-create",
  templateUrl: "./user-create.component.html",
  styleUrls: ["./user-create.component.css"]
})
export class UserCreateComponent implements OnInit {
  @Input() userDetails = {
    name: "",
    surname: "",
    city: "",
    email: "",
    country: ""
  };

  constructor(

  ) {}

  ngOnInit() {}

  // addUser() {
  //   this.restApi.createUser(this.userDetails).subscribe(
  //     () => {
  //       this.alertify.success("Create user");
  //       this.router.navigate(["/user-list"]);
  //     },
  //     () => {
  //       () => {
  //         this.alertify.error("There are some problem");
  //       };
  //     }
  //   );
  // }
}
