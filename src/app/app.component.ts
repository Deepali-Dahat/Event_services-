import { Component, OnInit } from '@angular/core';
import { AuthGuardGuard } from './auth-guard.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private authService:AuthGuardGuard){}
  ngOnInit(): void {
 // this.authService.initializeAuthGuard();
//  const isAuthenticated = /* Your authentication check logic here */;

//  this.authService.setLoggedIn(isAuthenticated);
  }
  title = 'DiaryClg';
}
