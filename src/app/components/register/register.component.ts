import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../services/login.service";
import { Router } from '@angular/router';

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

  constructor(private login:LoginService, private router: Router) { }

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
      if (res){
        alert('success')
        this.router.navigate(['/login'])
      }else {
        alert('Something went wrong..')
      }

    })
  }

}
