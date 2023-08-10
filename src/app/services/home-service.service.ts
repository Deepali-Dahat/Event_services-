import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(private http:HttpClient) { }
  listOfNewBooking(){
    const token=localStorage.getItem('token')
console.log('dashboard',token)
const reqHeader = new HttpHeaders({ 
  'Content-Type': 'application/json',
  'Authorization': `${token}`
});
       return this.http.get("https://e-management-9omt.onrender.com/api/admin/dashboard/listOfNewBooking",
        { headers: reqHeader });
}
listOfApprovalBook(){
  const token=localStorage.getItem('token')
console.log('dashboard',token)
const reqHeader = new HttpHeaders({ 
  'Content-Type': 'application/json',
  'Authorization': `${token}`
});
  return this.http.get("https://e-management-9omt.onrender.com/api/admin/dashboard/listOfApprovalBook",
  { headers: reqHeader })
}
listOfCancelledBook(){
  const token=localStorage.getItem('token')
console.log('dashboard',token)
const reqHeader = new HttpHeaders({ 
  'Content-Type': 'application/json',
  'Authorization': `${token}`
});
  return this.http.get("https://e-management-9omt.onrender.com/api/admin/dashboard/listOfCancelledBook",
  { headers: reqHeader })
}
listOfServices(){
  const token=localStorage.getItem('token')
  console.log('dashboard',token)
  const reqHeader = new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': `${token}`
  });
  return this.http.get("https://e-management-9omt.onrender.com/api/admin/dashboard/listOfServices",
  {headers: reqHeader})
}
viewEvent(){
  
  // console.log(data);
  const token=localStorage.getItem('token')
   console.log('dashboard',token)
   const reqHeader = new HttpHeaders({ 
     'Content-Type': 'application/json',
     'Authorization': `${token}`
   });
   return this.http.post("https://e-management-9omt.onrender.com/api/booking/viewBooking",
   {"modelName": "booking"},{headers: reqHeader})
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
}
