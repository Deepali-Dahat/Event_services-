import { Component, OnInit } from '@angular/core';
import {AddUser, EditUser} from '../data-type';
import {Router} from '@angular/router';
import {UserServiceService} from '../services/user-service.service';
import { FormGroup,FormBuilder, Validators, } from '@angular/forms';
import { SharinIdServiceService } from '../services/sharin-id-service.service';


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit{
  getEdit!:FormGroup;
constructor(private userManageService:UserServiceService,private fb:FormBuilder,
  private sharingService:SharinIdServiceService){
this.getEdit=this.fb.group({
  name:[''],
  mobile_number:[''],
  email_id:[''],
  // password:[''],
  // role:[''],
})
}
  ngOnInit(): void {
    this.getUserTable();
    //this.getUseData();
  }
  getNewUser:FormGroup=this.fb.group({
    name:['',Validators.required],
    mobile_number:['',Validators.required],
    email_id:['',Validators.required],
    password:['',Validators.required],
    role:['',Validators.required]
  })
  getUseData(id:number){
    this.sharingService.id=id;
    this.userManageService.viewProfile(id).subscribe((res:any)=>{
          console.log('user data',res)
          this.getEdit.patchValue({
            name:res.data.name,
            mobile_number:res.data.mobile_number,
             email_id:res.data.email_id,
            //   password:res.data.password,
            //  role:res.data.role
          })
    })
  }
  GetNewRegi(data:AddUser){
    this.userManageService.registration(data).subscribe((res:any)=>{
      if(res  && res.code === 200){
        alert(res.message);
        
       this. getUserTable();
      }
    })
  }
  GetEditeduser(data:EditUser){
    const newId=this.sharingService.id
  this.userManageService.updateUser(newId,data).subscribe((res:any)=>{
console.log('update wala res',res)
if(res  && res.code === 200){
  alert(res.message)
  this. getUserTable();
}
  })
  }
  page:number = 1;
  count:number=0;
  tableSize:number=10;
 
  tableSizes:any=[5,10,15];
  newUsertable:any;
  getUserTable(){
   // console.log();
    this.userManageService.viewUser().subscribe((res:any)=>{
     console.log(res);
    if(res && res.code === 200){
      if(res.data && res.data.length){
        this. newUsertable = res.data;
      }
    }
  
    })
  
  }
  onTableDataChange(event:any){
    this.page=event;
    this.getUserTable();
   // this.getNewTable();
}
onTableSizeChange(event:any):void{
  this.tableSize=event.target.value;
  this.page=1;
 this.getUserTable();
 // this.getNewTable();
}



//data!:AddUser;
blocedUser(id:number){
console.log('blocked id',id);
this.userManageService.toblockUser(id).subscribe((res:any)=>{
  console.log('block user',res)
  if(res && res.code === 200){
    alert("User Blocked successfully!")
    this.getUserTable();
    //this.router.navigate(['viewblock'])
  }
    })
}
}
