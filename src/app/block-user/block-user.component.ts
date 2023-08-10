import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../services/user-service.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-block-user',
  templateUrl: './block-user.component.html',
  styleUrls: ['./block-user.component.css']
})
export class BlockUserComponent implements OnInit{
 constructor(private userManageService:UserServiceService,private router:Router){}
  ngOnInit(): void {
    this.blockedTable();
  }
  page:number = 1;
  count:number=0;
  tableSize:number=10;
 
  tableSizes:any=[5,10,15];
  blockedusertable:any;
  blockedTable(){
    console.log('anything');
     //data.status = 0;
    this.userManageService.viewBlockUser().subscribe((res:any)=>{
      if(res && res.code === 200){
        if(res.data && res.data.length){
          this.blockedusertable = res.data;
        }
      }
    })
  }
  onTableDataChange(event:any){
    this.page=event;
    this. blockedTable();
   // this.getNewTable();
}
onTableSizeChange(event:any):void{
  this.tableSize=event.target.value;
  this.page=1;
 this. blockedTable();
 // this.getNewTable();
}
getUnblocked(id:number){
console.log('blocked id',id)
this.userManageService.unblocked(id).subscribe((res:any)=>{
  console.log("unblockeduser",res)
  if(res && res.code === 200){
    alert("User Unblocked Successfully!")
    this.router.navigate(['/dashboard/usermanage']);
  }
})
}
}
