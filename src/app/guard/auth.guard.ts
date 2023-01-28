import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { AuthService } from "../_services/auth.service";
import { Router } from "@angular/router";
import { AlertifyService } from "../_services/alertify.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private alertifyService: AlertifyService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.authService.isLoggedIn()) {
      this.alertifyService.warning("You have no permission to visit this page");
      this.router.navigateByUrl("/sign-up");
      return false;
    }
    return true;
  }
}
