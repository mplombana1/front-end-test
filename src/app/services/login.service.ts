import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { 
    this.validateToken();
  }
  url = 'https://sailtimes.prestoapi.com/api/register';
  token:string;
  
  getAuth(username, password){
    const url = 'https://sailtimes.prestoapi.com/api/login'
    var credentials = {
      username:username,
      password:password
    }
    return this.http.post(url, credentials).pipe(error => (error))
  }

  validateToken():Promise<boolean>{
    if (sessionStorage.getItem('token')){
      return new Promise((resolve) =>{
        const url = 'https://sailtimes.prestoapi.com/api/token/' + sessionStorage.getItem('token');
        
        return this.http.get(url).subscribe(res =>{
          console.log(res,'token response');
          if (res){
            this.token = res['encodedPayload']
          }
        })
      })
    }
  }

  postAuth(form){
    return this.http.post(this.url, form)
  }


  
}
