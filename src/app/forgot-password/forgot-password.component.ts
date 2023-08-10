import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { ForgotServiceService } from '../services/forgot-service.service';
import {ForgotPassWord} from '../data-type';
import {Router} from '@angular/router'

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  showScnd=false;
  showThird=false;
  hideInput=false;
  GetnewPassword!:FormGroup;
  constructor(private fb:FormBuilder,private forgotService:ForgotServiceService,private router:Router){
this.GetnewPassword=this.fb.group({
  email_id: ['', Validators.required],
  password: ['', Validators.required],
  confirm_password: ['', Validators.required],
})
  }
submitemail(data:string){
this.forgotService.VerifyEmail(data).subscribe((res:any)=>{
  console.log('verify mail',res);
  if(res.code == 200){
    alert(res.message)
    
    this.showScnd=true;
  }
})
}
submitotp(value:any){
this.forgotService.verifyOtp(value).subscribe((res:any)=>{
  console.log('verify otp',res);
if(res.code == 200){
alert(res.message)
this.showThird=true;
}
})
}
getForgotpassword(data:ForgotPassWord){
this.forgotService.verifyPassword(data).subscribe((res:any)=>{
  console.log('confirm password',res)
  if(res.code == 200){
    alert(res.message)
    this.router.navigate(['login'])
  }
})
}
}
