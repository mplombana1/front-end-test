import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getAuth(username, password){
    const url = `https://sailtimes.prestoapi.com/api/login?username=${username}&password=${password}`
    return this.http.get(url)
  }

  test(){
    console.log('this is a test');
  }

  
}
