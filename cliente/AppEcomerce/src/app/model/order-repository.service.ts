import { Injectable } from '@angular/core';
import {  Order } from './order';
import { OrderDatasourceService } from './order-datasource.service';

@Injectable({
  providedIn: 'root'
})
export class OrderRepositoryService {
  private orders: Order[]=[];

  constructor(private dataSourceService: OrderDatasourceService) {

   dataSourceService.getOrders().subscribe((response)=>{
      this.orders=response['orders']; 
       
    });
  
  }
    getorders(): Order[]{
      console.log(this.orders);
     return this.orders;
   }
}
