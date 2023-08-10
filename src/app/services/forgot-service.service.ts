import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ForgotPassWord} from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ForgotServiceService {

  constructor(private http:HttpClient) { }
  VerifyEmail(data:string){
    const token=localStorage.getItem('token')
    console.log('dashboard',token)
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    });
    return this.http.post("https://e-management-9omt.onrender.com/api/user/verifyEmail",data,
    {
      headers: reqHeader,
    }
    )
    
  }
  verifyOtp(value:number){
    const token=localStorage.getItem('token')
    console.log('dashboard',token)
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    });
    return this.http.post("https://e-management-9omt.onrender.com/api/user/verifyOtp",value,
    {
      headers: reqHeader,
    }
    )
  }
  verifyPassword(data:ForgotPassWord){
    const token=localStorage.getItem('token')
    console.log('dashboard',token)
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    });
    return this.http.post("https://e-management-9omt.onrender.com/api/user/updatePassword",data,
    {
      headers: reqHeader,
    }
    )
  }
}
