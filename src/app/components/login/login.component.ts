import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { LoginService } from "../../services/login.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  username: any;
  password: any;

  isUserLoggedIn: boolean = false;
  response: any;

  usernameControl: boolean = false;
  passwordControl: boolean = false;

  constructor(
    private fb: FormBuilder,
    private login: LoginService,
    private router: Router
  ) {
    this.form = this.fb.group({
      username: [""],
      password: [""]
    });
  }

  ngOnInit() {}

  submit() {
    const val = this.form.value;
    if (val.username.length === 0) {
      this.usernameControl = true;
    }
    if (val.password.length === 0) {
      this.passwordControl = true;
    }
    if (val.username && val.password) {
      this.login.getAuth(val.username, val.password).subscribe(res => {
        console.log(res);
        if (res) {
          console.log(res, 'my response');
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("username", res['username']);
          sessionStorage.setItem('token', res['token'])
          this.isUserLoggedIn = true;
          this.router.navigate(["/home"]);
        } 
       
      },err => alert('Login Credentials could not be found'))
    }
  }
}
