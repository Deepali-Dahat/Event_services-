import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { ManageEventComponent } from './manage-event/manage-event.component';
import { ManageServiceComponent } from './manage-service/manage-service.component';
import { BookingManagementComponent } from './booking-management/booking-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { CompanyComponent } from './company/company.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BlockUserComponent } from './block-user/block-user.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LogInComponent},
  {path:'dashboard',component:DashboardComponent,children:[
    {
path:'home',component:HomeComponent
  },
  {path:'manage-event',component:ManageEventComponent},
  {path:'manageservice',component:ManageServiceComponent},
  {path:'bookingmanage',component:BookingManagementComponent},
  {path:'usermanage',component:UserManagementComponent},
  {path:'company',component:CompanyComponent},
  {path:'reset-password',component:ResetPasswordComponent},
  {path:'aboutUs',component:UserProfileComponent},
  {path:'block-user',component:BlockUserComponent}
]},
  {path:'forgotpassword',component:ForgotPasswordComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
