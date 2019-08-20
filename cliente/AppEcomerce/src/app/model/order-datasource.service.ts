import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const PROTOCOL= 'http';

@Injectable({
  providedIn: 'root'
})
export class OrderDatasourceService {
  private baseUrl:string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl=`${PROTOCOL}://${location.hostname}/ecommerce/api`;
   };

   getOrders():any{
     return this.httpClient.get(this.baseUrl+'/orders');
   }
}
