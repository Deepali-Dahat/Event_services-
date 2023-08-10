import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AddService} from '../data-type'
@Injectable({
  providedIn: 'root'
})
export class ManageServiceServiceService {

  constructor(private http:HttpClient) { }
  manageSeervice(id?:number){
    const token=localStorage.getItem('token')
   console.log('dashboard',token)
   const reqHeader = new HttpHeaders({ 
     'Content-Type': 'application/json',
     'Authorization': `${token}`
   });
   const body:any={ "modelName": "eventService"}
   if(id){
    body.condition={id}
   }
   return this.http.post("https://e-management-9omt.onrender.com/api/serviceMange/viewService"
   ,body,{headers: reqHeader}
   )
  }
  searchEvent(){
  
    //console.log(data);
    const token=localStorage.getItem('token')
    console.log('dashboard',token)
    const reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    });
    return this.http.post("https://e-management-9omt.onrender.com/api/serviceMange/searchServiceManage",{headers: reqHeader});
  }
  updateService(id:number,data:AddService){
    const token=localStorage.getItem('token')
    console.log('dashboard',token)
    const reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    });
    // const body:any={ "modelName": "eventService"}
    // if(id){
    //  body.condition={id}
    // }
    return this.http.put(`https://e-management-9omt.onrender.com/api/serviceMange/updateService/${id}`,
    data,{headers: reqHeader}); 
  }
  deleteService(id:number){
    const token=localStorage.getItem('token')
    console.log('dashboard',token)
    const reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    });
    return this.http.delete(`https://e-management-9omt.onrender.com/api/serviceMange/deleteService/${id}`,
    {headers: reqHeader});
  }
  addService(data: AddService){
    const token=localStorage.getItem('token')
    console.log('dashboard',token)
    const reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    });
    return this.http.post("https://e-management-9omt.onrender.com/api/serviceMange/addService",data,
    {headers: reqHeader})
  }
}
