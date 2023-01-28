import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { AuthService } from "../_services/auth.service";
import { Router } from "@angular/router";
import { AlertifyService } from "../_services/alertify.service";
import { UserService } from '../_services/user.service';

@Injectable({
  providedIn: "root"
})
export class AdminGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private alertifyService: AlertifyService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    
    if (!this.userService.isCurrentUserAdmin()) {
      this.alertifyService.warning("You have no permission to visit this page");
      this.router.navigateByUrl("/user-list");
      return false;
    }
    return true;
  }
}
