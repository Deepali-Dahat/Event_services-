import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import{AddUser, ForgotPassWord,EditUser} from '../data-type'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }
  viewUser(){
    const token=localStorage.getItem('token')
   console.log('dashboard',token)
   const reqHeader = new HttpHeaders({ 
     'Content-Type': 'application/json',
     'Authorization': `${token}`
   });
   
   return this.http.get("https://e-management-9omt.onrender.com/api/user/viewBlockUser/1",
   {headers: reqHeader})
  }
  registration(data:AddUser){
    const token=localStorage.getItem('token')
    console.log('dashboard',token)
    const reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    });
    return this.http.post("https://e-management-9omt.onrender.com/api/user/registration",
    data,{headers: reqHeader})
}
viewBlockUser(){
  // let blockId:number=0;
   const token=localStorage.getItem('token')
    console.log('dashboard',token)
    const reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    });
    return this.http.get(`https://e-management-9omt.onrender.com/api/user/viewBlockUser/0`,
    {headers: reqHeader})//:status
 }
 toblockUser(id:number){
  console.log('block service id',id)
  const token=localStorage.getItem('token')
   console.log('dashboard',token)
   const reqHeader = new HttpHeaders({ 
     'Content-Type': 'application/json',
     'Authorization': `${token}`
   });
   const body={
    status:0
   }
   return this.http.put(`https://e-management-9omt.onrender.com/api/user/updateUserStatus/${id}`,body,
   {headers: reqHeader})
}
unblocked(id:number){
  const token=localStorage.getItem('token')
   console.log('dashboard',token)
   const reqHeader = new HttpHeaders({ 
     'Content-Type': 'application/json',
     'Authorization': `${token}`
   });
   const body={
    status:1
   }
   return this.http.put(`https://e-management-9omt.onrender.com/api/user/updateUserStatus/${id}`,body,
   {headers: reqHeader})
}
verifyEmail(data:ForgotPassWord){
  const token=localStorage.getItem('token')
  console.log('dashboard',token)
  const reqHeader = new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': `${token}`
  });
  return this.http.post("https://e-management-9omt.onrender.com/api/user/verifyEmail",
  data,{headers: reqHeader})
}
verifyOtp(data:ForgotPassWord){
  const token=localStorage.getItem('token')
  console.log('dashboard',token)
  const reqHeader = new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': `${token}`
  });
  return this.http.post("https://e-management-9omt.onrender.com/api/user/verifyOtp",
  data,{headers: reqHeader})
}
updatePassword(data:ForgotPassWord){
  const token=localStorage.getItem('token')
  console.log('dashboard',token)
  const reqHeader = new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': `${token}`
  });
  return this.http.put("https://e-management-9omt.onrender.com/api/user/updatePassword",
  data,{headers: reqHeader})
}
updateUser(id:number,data:EditUser){
  const token=localStorage.getItem('token')
  console.log('dashboard',token)
  const reqHeader = new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': `${token}`
  });
  return this.http.put(`https://e-management-9omt.onrender.com/api/user/updateUser/${id}`,
 data, {headers: reqHeader})
}
viewProfile(id:number){
  console.log('user  service id',id)
  const token=localStorage.getItem('token')
  console.log('dashboard',token)
  const reqHeader = new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': `${token}`
  });
  return this.http.get(`https://e-management-9omt.onrender.com/api/user/viewProfile/${id}`,
{headers: reqHeader})
}
}
