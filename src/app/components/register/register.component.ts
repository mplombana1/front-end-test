import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../services/login.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username:string;
  password:string;
  firstname:string;
  lastname:string;

  constructor(private login:LoginService) { }

  ngOnInit() {
  }

  submit(){
    console.log(this.firstname,this.lastname,this.username,this.password);

    const form = {
      username:this.username,
      password:this.password
    }

    this.login.postAuth(form).subscribe(res =>{
      console.log(res,'res');
    })
  }

}
