import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharinIdServiceService {
  public id!: number;
  public order_id!:number;
  private order: any;
  constructor() { }
  setOrder(order: any) {
    this.order = order;
  }

  getOrder() {
    return this.order;
  }
}
