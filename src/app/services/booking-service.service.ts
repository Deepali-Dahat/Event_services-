import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Addbooking } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {

  constructor(private http:HttpClient) { }
  viewBooking(id?:number){
    const token=localStorage.getItem('token')
   console.log('dashboard',token)
   const reqHeader = new HttpHeaders({ 
     'Content-Type': 'application/json',
     'Authorization': `${token}`
   });
   const body:any={ "modelName": "booking"}
   if(id){
    body.condition={id}
   }
   return this.http.post("https://e-management-9omt.onrender.com/api/booking/viewBooking",
   body,{headers: reqHeader})
  }
  searchUser(){
  
    //console.log(data);
    const token=localStorage.getItem('token')
    console.log('dashboard',token)
    const reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    });
    return this.http.post("https://e-management-9omt.onrender.com/api/booking/searchBooking",
    {headers: reqHeader});
  }
  addBooking(data:Addbooking){
   
  
    // this.isUserLoggedIn.next(true);
    const token=localStorage.getItem('token')
    console.log('dashboard',token)
    const reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    });
    return this.http.post("https://e-management-9omt.onrender.com/api/booking/addBooking",
    data,{headers: reqHeader});
  }
  updateBooking(id:number,data:Addbooking){
    const token=localStorage.getItem('token')
    console.log('dashboard',token)
    const reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    });
   
    return this.http.put(`https://e-management-9omt.onrender.com/api/booking/updateBooking/${id}`,
    data,
    {headers: reqHeader});
  }
}
