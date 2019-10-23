import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Router } from "@angular/router";
@Injectable({
 providedIn: "root"
})
export class AuthGuard implements CanActivate {
 constructor(private router: Router) {}
 canActivate() {
   if (localStorage.getItem("isLoggedIn") === "true") {
     return true;
   }
   if(localStorage.getItem("isLoggedIn") === null || localStorage.getItem("isLoggedIn") === 'false'){
     this.router.navigate(["/login"]);
     return false;
   }
 }
}