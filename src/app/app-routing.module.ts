import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserCreateComponent } from "./user/user-create/user-create.component";
import { UserUpdateComponent } from "./user/user-update/user-update.component";
import { UserDetailsComponent } from "./user/user-details/user-details.component";
import { UserListComponent } from "./user/user-list/user-list.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { AuthGuard } from "./guard/auth.guard";
import { StartAuthguard } from "./guard/startAuth.guard";
import { WeatherComponent } from "./weather/weather.component";
import { SignInComponent } from './sign-in/sign-in.component';
import { AdminGuard } from './guard/admin.guard';

export const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "sign-up" },
  {
    path: "",
    runGuardsAndResolvers: "always",
    canActivate: [AuthGuard],
    children: [
      { path: "user-update", component: UserUpdateComponent },
      { path: "user-details/:id", component: UserDetailsComponent },
      { path: "weather", component: WeatherComponent }
    ]
  },
  {
    path: "",
    canActivate: [StartAuthguard],
    runGuardsAndResolvers: "always",
    children: [
      { path: "sign-up", component: SignUpComponent },
      { path: "sign-in", component: SignInComponent }
    ]
  },
  {
    path: "user-list",
    canActivate: [AdminGuard],
    runGuardsAndResolvers: "always",
    component: UserListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
