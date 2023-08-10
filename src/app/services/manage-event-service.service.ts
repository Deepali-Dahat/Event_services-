import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManageEventServiceService {

  constructor(private http:HttpClient) { }
  viewEventtable(){
    const token=localStorage.getItem('token')
   console.log('dashboard',token)
   const reqHeader = new HttpHeaders({ 
     'Content-Type': 'application/json',
     'Authorization': `${token}`
   });
   return this.http.post("https://e-management-9omt.onrender.com/api/eventMange/viewEvent",
   {"modelName":"eventManage"},{headers: reqHeader})
  }
  searchEvent(){
  
    //console.log(data);
    const token=localStorage.getItem('token')
    console.log('dashboard',token)
    const reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    });
    return this.http.post("https://e-management-9omt.onrender.com/api/eventMange/viewEvent/searchEvent",
    {headers: reqHeader});
  }
  addEvent(data:string){
    const token=localStorage.getItem('token')
   console.log('dashboard',token)
   const reqHeader = new HttpHeaders({ 
     'Content-Type': 'application/json',
     'Authorization': `${token}`
   });
   return this.http.post("https://e-management-9omt.onrender.com/api/eventMange/addEvent?",
   data,{headers: reqHeader})
 }
  deleteEvent(id: number){
    const token=localStorage.getItem('token')
    console.log('dashboard',token)
    const reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    });
    return this.http.delete(`https://e-management-9omt.onrender.com/api/eventMange/deleteEvent/${id}`,
    {headers: reqHeader});
  }
}
