
import { Component, OnInit } from '@angular/core';
import {HomeServiceService} from '../services/home-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

constructor(private homeservice:HomeServiceService){

}

  ngOnInit(): void {
   this. getData(); 
   this.getApproved();
   this.getCancelled();
   this.getServices();
   this.getBookingtable();
   this.getSearch();
  }
  booking='0';  
  getData(){
    this.homeservice.listOfNewBooking().subscribe((res : any)=>{
            
      console.log(res);
      if (res && res.code === 200) {
        if (res.data && res.data.length > 0) {
          
          this.booking = res.data[0].count
        }
      } 
  })
   } 

   approved='0';
   getApproved(){
   this.homeservice.listOfApprovalBook().subscribe((res : any)=>{
     console.log(res);
     if (res && res.code === 200) {
       if (res.data && res.data.length > 0) {
         
         this.approved = res.data[0].count
       }
     }
   })
   }
   cancelled='0'
   getCancelled(){
    this.homeservice.listOfCancelledBook().subscribe((res:any)=>{
     console.log(res);
     if (res && res.code === 200) {
       if (res.data && res.data.length > 0) {
         
         this.cancelled = res.data[0].count
       }
     }
    })
   }
   services='0'
   getServices(){
       this.homeservice.listOfServices().subscribe((res:any)=>{
         console.log(res);
         if (res && res.code === 200) {
           if (res.data && res.data.length > 0) {
             
             this.services = res.data[0].count
           }
         }
       })
   }
   newBookingtable:any;
   page:number = 1;
  count:number=0;
  tableSize:number=10;
 
  tableSizes:any=[5,10,15]
   getBookingtable(){
   this.homeservice.viewEvent().subscribe((res:any)=>{
      console.log(res);
     if(res && res.code === 200){
       if(res.data && res.data.length){
         this.newBookingtable = res.data;
       }
     }
   
     })
   
   }
   onTableDataChange(event:any){
    this.page=event;
    this.getBookingtable();
   // this.getNewTable();
}
onTableSizeChange(event:any):void{
  this.tableSize=event.target.value;
  this.page=1;
  this.getBookingtable();
 // this.getNewTable();
}
searchBar: string='';
  
  getSearch(){

     this.homeservice.searchUser().subscribe((result:any)=>
     {
       console.log(result);
       if(result && result.code === 200){
        if(result.data && result.data.length){
          this.searchBar = result.data;
          
        }
      }
     })
  }
}
