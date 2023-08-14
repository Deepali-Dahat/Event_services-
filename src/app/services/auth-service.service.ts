import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isLoggedInCheck //   return this.isLoggedInSubject.asObservable();
    () {
    throw new Error('Method not implemented.');
  }
  private isLoggedIn = new BehaviorSubject<boolean>(false);
  //private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  
  private hasLoggedInFlag = false;
  constructor() { }
  
  setLoggedIn(value: boolean) {
    this.isLoggedInSubject.next(value);
  }

  get isLoggedIn$(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }
  // setLoggedIn(value: boolean) {
  //   this.isLoggedIn.next(value);
  // }

  // get isLoggedIn$(): Observable<boolean> {
  //   return this.isLoggedIn.asObservable();
  // }
}
