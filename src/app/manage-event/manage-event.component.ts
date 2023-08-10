import { Component,OnInit } from '@angular/core';
import {ManageEventServiceService} from '../services/manage-event-service.service';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-manage-event',
  templateUrl: './manage-event.component.html',
  styleUrls: ['./manage-event.component.css']
})
export class ManageEventComponent implements OnInit {
  GetnewEvent!:FormGroup;
 constructor(private manageEvent:ManageEventServiceService,private fb:FormBuilder){
  this.GetnewEvent=this.fb.group({
    //event_name
    event_name: ['', Validators.required],
  })
 }

  ngOnInit(): void {
    this.getEventtable();
  }
  page:number = 1;
  count:number=0;
  tableSize:number=10;
 
  tableSizes:any=[5,10,15]
  newEventtable:any;
  getEventtable(){
   // console.log();
    this.manageEvent.viewEventtable().subscribe((res:any)=>{
     console.log(res);
    if(res && res.code === 200){
      if(res.data && res.data.length){
        this. newEventtable = res.data;
      }
    }
  
    })
  
  }
  onTableDataChange(event:any){
    this.page=event;
    this. getEventtable();
   // this.getNewTable();
}
onTableSizeChange(event:any):void{
  this.tableSize=event.target.value;
  this.page=1;
  this. getEventtable();
 // this.getNewTable();
}
searchEvet:string="";
  getSearchEvent(){
    //console.log(this.search);
     this.manageEvent.searchEvent().subscribe((result:any)=>
     {
       console.log(result);
       if(result && result.code === 200){
        if(result.data && result.data.length){
          this.searchEvet = result.data;//.filter((item:any)=>item.name.toLowerCase().includes(this.searchBar.toLowerCase()))
          
        }
      }
     })
  }
  getEvent(data:any){
    this.manageEvent.addEvent(data).subscribe((res:any)=>{
      if(res && res.code === 200){
        alert (res.message)
        this.getEventtable();
              }
    })
  }
  deleteList(id:number){
   
      
    console.log("test",id);
   this.manageEvent.deleteEvent(id).subscribe((result:any)=>{
  
   if(result && result.code === 200){
     alert(result.message)
     this.getEventtable();
     console.log(result)
    
   }
   



 })
}
}
