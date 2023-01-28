import { Injectable } from "@angular/core";
import { User } from "../_modules/user";

@Injectable({
  providedIn: "root"
})
export class UserHelper {
  initializeNewUser(userDto: any, decodedToken: any): User {
    let user: User;
    if (decodedToken.firebase.sign_in_provider === "password") {
      user = this.initializeStandardUser(userDto);
    } else if (decodedToken.firebase.sign_in_provider === "google.com") {
      user = this.initializeFacebookGoogleUser(decodedToken);
    }
    return user;
  }

  private initializeFacebookGoogleUser(decodedToken: any): User {
    const nameAndSurname: string = decodedToken.name.split(" ");
    return {
      id: "",
      city: "",
      country: "",
      name: nameAndSurname[0],
      surname: nameAndSurname[1],
      email: decodedToken.email
    };
  }

  private initializeStandardUser(userDto: any): User {
    return {
      id: userDto.id,
      name: userDto.name,
      surname: userDto.surname,
      city: userDto.city,
      country: userDto.country,
      email: userDto.email,
      role: userDto.role
    };
  }
}
