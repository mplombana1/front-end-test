import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../services/login.service";
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  username:string;
  password:string;


  constructor(private login:LoginService, private router: Router, private fb: FormBuilder,) { 
    this.form = this.fb.group({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    });
  }

  ngOnInit() {}

  submit(){
     //checks if form is valid
     Object.keys(this.form.controls).forEach(field =>{
      const control = this.form.get(field);
      control.markAsTouched({onlySelf: true})
    })
    this.login.postAuth(JSON.stringify(this.form.value)).subscribe(res =>{
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
