import { Injectable } from '@angular/core';
import { LogIn } from '../data-type';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
//isLoggedIn= new BehaviorSubject<boolean>(false)

  constructor(private http:HttpClient,private router:Router) { }
  LogInService(data:LogIn){
    console.log('data',data)
    const token=localStorage.getItem('token')
    console.log('login',token)
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    });
    return this.http.post("https://e-management-9omt.onrender.com/api/user/userLogin",data,
    {
      headers: reqHeader,
    }
    )
    
  }
}
