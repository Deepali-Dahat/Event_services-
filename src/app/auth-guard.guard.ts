import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,  RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate, Router,NavigationEnd } from '@angular/router';
import {LoginServiceService} from './services/login-service.service';
import { AuthServiceService } from './services/auth-service.service';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
//  isLoggedIn$: any;
 constructor(private authService:AuthServiceService,private router: Router){

 }

 






 canActivate(): boolean {
  let isAuthenticated = false;

  this.authService.isLoggedIn$.subscribe(loggedIn => {
    isAuthenticated = loggedIn;
  });

  if (isAuthenticated) {
    return true;
  } else {
    this.router.navigate(['/login']);
    return false;
  }
}




  // canActivate(): boolean {
  //   if (localStorage.getItem('token')) {
  //     return true;
  //   } else {
  //     this.router.navigate(['/login']); // Redirect to login page if not authenticated
  //     return false;
  //   }
  // }

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   const token = localStorage.getItem('token');
  //   console.log('Token:', token);
    
  //   if (token) {
  //     return true;
  //   } else {
  //     return this.router.createUrlTree(['/login']);
  //   }


  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): 
  //   Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  
  // }
}
