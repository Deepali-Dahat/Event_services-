import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import {LogIn} from '../data-type';
import {LoginServiceService} from '../services/login-service.service';
import {Router} from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit{
  GetnewUser!:FormGroup;
  constructor(private fb:FormBuilder,private logservice:LoginServiceService,private router:Router,
    private authService:AuthServiceService){
this.GetnewUser=this.fb.group({
  email_id: ['', Validators.required],
  password: ['', Validators.required],
})
  }
  ngOnInit(): void {
   
  }
  getLogin(data:LogIn){
    console.log(this.GetnewUser.value)
this.logservice.LogInService(data).subscribe({
  next:(res:any)=>{
    if(res.code == 200){
         alert(res.message)
         const token = res.data;  
         localStorage.setItem('token', token);
         //my
         this.authService.setLoggedIn(true);
        // Convert token to a boolean value

   
         this.router.navigate(['dashboard/home'])

    }
    else(res.code == 400)
    {
     
      alert(res.message)
    }

  },
error:()=>{
  alert('Data failed to fetch!')
}
})
  }
}
