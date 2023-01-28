import { Injectable } from "@angular/core";
import { Observable, from } from "rxjs";
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from "rxjs/operators";
import { User } from "../_modules/user";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private firestore: AngularFirestore) {}

  getUser(id: string): Observable<any> {
    return this.firestore
      .collection("Users")
      .doc(id)
      .get()
      .pipe(map(data => data.data()));
  }
  isCurrentUserAdmin() {
    return JSON.parse(localStorage.getItem("userData")).role == "admin";
  }

  getAllUsers(): Observable<any> {
    const list: User[] = [];
    return this.firestore
      .collection("Users")
      .get()
      .pipe(
        map(data => {
          data.docs.forEach(value => list.push(value.data() as User));
          return list;
        })
      );
  }
  setUser(id: string, user: User): Observable<any> {
    return from(
      this.firestore
        .collection("Users")
        .doc(id)
        .set(user)
    );
  }

  downloadUserInfo() {
    let user_id = this.jwtHelper.decodeToken(localStorage.getItem("token"))
      .user_id;

    this.getUser(user_id).subscribe(userData => {
      localStorage.setItem("userData", JSON.stringify(userData));
    });
  }
  modifyUserField(id, obj: {}): Observable<any> {
    return from(
      this.firestore
        .collection("Users")
        .doc(id)
        .update(obj)
    );
  }
}
