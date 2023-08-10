import { Injectable } from '@angular/core';
import { LogIn } from '../data-type';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }
  LogInService(data:LogIn){


    const token=localStorage.getItem('token')
    console.log('dashboard',token)
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
