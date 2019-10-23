import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  url = 'https://sailtimes.prestoapi.com/api/login'
  
  getAuth(username, password){
    const url = `https://sailtimes.prestoapi.com/api/login?username=${username}&password=${password}`
    return this.http.get(url)
  }

  postAuth(form){
    return this.http.post(this.url, form)
  }


  
}
