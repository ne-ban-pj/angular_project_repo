import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "src/app/_services/user.service";
import { AuthService } from "src/app/_services/auth.service";
import { User } from "src/app/_modules/user";
import { AlertifyService } from "src/app/_services/alertify.service";
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  user: User;
  model: any = []

  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.loadUsers();
  }
  loadUsers() {
    return this.userService.getAllUsers().subscribe((data: {}) => {
      this.model = data;
    });
  }
}
