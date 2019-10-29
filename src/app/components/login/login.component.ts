import { Component, OnInit,AfterViewInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { LoginService } from "../../services/login.service";
import { Router } from "@angular/router";
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  
  
})
export class LoginComponent implements AfterViewInit {
  form: FormGroup;
  username: string;
  password: string;
  currentState = 'initial';


  constructor(
    private fb: FormBuilder,
    private login: LoginService,
    private router: Router
  ) {
    this.form = this.fb.group({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    });
  }
  ngAfterViewInit(){
  }
 
 

  submit() {
    //checks if form is valid
    Object.keys(this.form.controls).forEach(field =>{
      const control = this.form.get(field);
      control.markAsTouched({onlySelf: true})
    })

    const val = this.form.value;
    if (val.username && val.password) {
      this.login.getAuth(val.username, val.password).subscribe(
        res => {
          console.log(res);
          if (res) {
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("username", res["username"]);
            sessionStorage.setItem("token", res["token"]);
            this.router.navigate(["/home"]);
          }
        },
        err => alert("Login Credentials could not be found")
      );
    }
  }
}
