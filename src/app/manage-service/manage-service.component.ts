import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, } from '@angular/forms';
import {ManageServiceServiceService} from '../services/manage-service-service.service';
import {AddService} from '../data-type';
import { SharinIdServiceService } from '../services/sharin-id-service.service';

@Component({
  selector: 'app-manage-service',
  templateUrl: './manage-service.component.html',
  styleUrls: ['./manage-service.component.css']
})
export class ManageServiceComponent implements OnInit{
  //GetnewSerive!:FormGroup;
  EditService:FormGroup;
constructor(private manageService:ManageServiceServiceService,private fb:FormBuilder,
  private sharingService:SharinIdServiceService){
this.EditService=this.fb.group({
  service_name: [''],
  price: [''],
  service_description: [''],
})
}
  ngOnInit(): void {
   this.getEventtable();
   this.getSearchEvent();
  }

  GetnewSerive:FormGroup =this.fb.group({
    service_name: ['', Validators.required],
    price: ['', Validators.required],
    service_description: ['', Validators.required],
  })


  // CategoryData: FormGroup = this.fb.group({
  //   name: ['', [Validators.required]],
  //   description: ['', [Validators.required]],
  //   image:['', [Validators.required]],
  // })

  page:number = 1;
  count:number=0;
  tableSize:number=10;
 
  tableSizes:any=[5,10,15];

  getService(data:AddService){
    console.log(this.GetnewSerive.value);
    this. manageService.addService(data).subscribe((res:any)=>{
      if(res && res.code === 200){
        alert(res.message)
         this. getEventtable();
       
      }  
    })
  }
  newEventtable:any;
  getEventtable(){
   // console.log();
    this. manageService.manageSeervice().subscribe((res:any)=>{
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
     this.manageService.searchEvent().subscribe((result:any)=>
     {
       console.log(result);
       if(result && result.code === 200){
        if(result.data && result.data.length){
          this.searchEvet = result.data;
          
        }
      }
     })
  }
  updateService(id:number){
    console.log('anythng');
    console.log('service view id',id)
    this.sharingService.id=id;
    this.manageService.manageSeervice(id).subscribe((res:any)=>{
      console.log('service sub wali id',id)
      console.log('anythng',res)
      if (res && res.code === 200) {
        if (res.data && res.data.length > 0) {
        this.EditService.patchValue({
           service_name: res.data[0].service_name,
            price:res.data[0].price ,
            service_description:res.data[0].service_description,
           
          });
        
        }
      }
      
    })

  }

  getEditService(data:any){
const newId=this.sharingService.id;
this.manageService.updateService(newId,data).subscribe((res:any)=>{
console.log('service wala res',res)
if(res && res.code === 200){
  alert(res.message)

}

})

  }





  deleteItem(id:number){
    console.log("test",id);
this.manageService.deleteService(id).subscribe((result:any)=>{
 // console.log("test",id);
 console.log(result);
  if(result && result.code === 200){
    alert(result.message)
    this.getEventtable();
   
  }
})
  }
}
