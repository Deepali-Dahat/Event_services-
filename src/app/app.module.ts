import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { ManageEventComponent } from './manage-event/manage-event.component';
import { ManageServiceComponent } from './manage-service/manage-service.component';
import { BookingManagementComponent } from './booking-management/booking-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { CompanyComponent } from './company/company.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipePipe } from './search-pipe.pipe';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BlockUserComponent } from './block-user/block-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    HomeComponent,
    ManageEventComponent,
    ManageServiceComponent,
    BookingManagementComponent,
    UserManagementComponent,
    CompanyComponent,
    ResetPasswordComponent,
    SearchPipePipe,
    UserProfileComponent,
    BlockUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,FormsModule,
    HttpClientModule,NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
