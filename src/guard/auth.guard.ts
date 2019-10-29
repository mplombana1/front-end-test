import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Router } from "@angular/router";
import { LoginService } from 'src/app/services/login.service';
@Injectable({
 providedIn: "root"
})
export class AuthGuard implements CanActivate {
 constructor(private router: Router, private login: LoginService) {}
 canActivate() {
  if(this.login.validateToken()){
    console.log('here now ');
    console.log(this.login.token)

  }

  console.log(this.login.token,'my token now');


   if (localStorage.getItem("isLoggedIn") === "true") {
     return true;
   }
   if(localStorage.getItem("isLoggedIn") === null || localStorage.getItem("isLoggedIn") === 'false'){
     this.router.navigate(["/login"]);
     return false;
   }
 }
}