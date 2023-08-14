import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
import {Addbooking} from '../data-type';
import {BookingServiceService} from '../services/booking-service.service';
import {ManageEventServiceService} from '../services/manage-event-service.service';
import {ManageServiceServiceService} from '../services/manage-service-service.service';
import { SharinIdServiceService } from '../services/sharin-id-service.service';

@Component({
  selector: 'app-booking-management',
  templateUrl: './booking-management.component.html',
  styleUrls: ['./booking-management.component.css']
})
export class BookingManagementComponent implements OnInit{
  EditBooking!:FormGroup;
  submitted = false; 
  constructor(private fb:FormBuilder,private bookningService:BookingServiceService,
    private manageEvent:ManageEventServiceService,private manageService:ManageServiceServiceService,
    private sharingService:SharinIdServiceService){
    this.EditBooking=this.fb.group({
      name: [''],
      email_id:[''],
      mobile_number:[''],
      eventDate:[''],
      event_starting_time:[''],
      event_finish_time:[''],
      address: [''],
      type_of_event: [''],
      event_service_id: [''],
      additional_information: [''],
      status: ['']
    })

  }
  ngOnInit(): void {
    this. getBookingtable();
    this. getDropdown('');
    this.getServicedrop('');
  }


  GetnewBooking:FormGroup =this.fb.group({
    name: ['', Validators.required],
    email_id: ['', Validators.required],
    mobile_number: ['', Validators.required],
    eventDate: ['', Validators.required],
      event_starting_time: ['', Validators.required],
      event_finish_time: ['', Validators.required],
      address:  ['', Validators.required],
      type_of_event: ['', Validators.required],
      event_service_id:  ['', Validators.required],
      additional_information:  ['', Validators.required],
      status:  ['', Validators.required]
  })

  get name() {
    return this.GetnewBooking.get('name'); 
    
  }

  page:number = 1;
  count:number=0;
  tableSize:number=10;
 
  tableSizes:any=[5,10,15];
  newBookingtable:any;
  getBookingtable(){
   // console.log();
    this.bookningService.viewBooking().subscribe((res:any)=>{
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
    this. getBookingtable();
   // this.getNewTable();
}
onTableSizeChange(event:any):void{
  this.tableSize=event.target.value;
  this.page=1;
 this. getBookingtable();
 // this.getNewTable();
}
  getBooking(data:Addbooking){
    //this.submitted = true; 
    this.bookningService.addBooking(data).subscribe((res:any)=>{
      console.log('add booking',res)
      if(res && res.code === 200){
        alert(res.message)
        this.getBookingtable()
      }
            })
      
  }
  getViewed(){

  }

  dropdownData:any[]=[];
  getDropdown(val:string){
    console.log('anything')
    this.manageEvent.viewEventtable().subscribe((res:any)=>{
      console.log(res)
      if(res && res.code === 200){
        if(res.data && res.data.length){
         this.dropdownData = res.data;
           
        }
      }
    })
  }
  servicedata:any[]=[];
  getServicedrop(val:string){
  //console.log('id',id);
      this.manageService.manageSeervice().subscribe((res:any)=>{
        if(res && res.code === 200){
          if(res.data && res.data.length){
           this.servicedata = res.data;
             
          }
        }
      })
  
  }


 getEdited(id:number){
     console.log('booking view id',id)
     this.sharingService.id=id;
this.bookningService.viewBooking(id).subscribe((res:any)=>{
  console.log('bookingwala res',res)
  if(res && res.code === 200){
    if(res.data && res.data.length){
      this.EditBooking.patchValue({
        name: res.data[0].name,
        email_id: res.data[0].email_id,
        mobile_number: res.data[0].mobile_number,
        eventDate:res.data[0].eventDate,
          event_starting_time:res.data[0].event_starting_time,
          event_finish_time:res.data[0].event_finish_time,
          address: res.data[0].address,
          type_of_event: res.data[0].type_of_event,
          event_service_id: res.data[0].event_service_id,
          additional_information: res.data[0].additional_information,
          status:  res.data[0].status
      })

    }

  }
})
    }
    getBookingEdit(data:Addbooking){
      const newId= this.sharingService.id
     this.bookningService.updateBooking(newId,data).subscribe((res:any)=>{
      console.log('update booking',res)
      if(res && res.code === 200){
       alert(res.message)
       this.getBookingtable() 
      }
     })
    }
}
