import { Component, OnInit } from '@angular/core';
import { OrderRepositoryService } from 'src/app/model/order-repository.service';
import { Order } from 'src/app/model/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private orderRepoService:OrderRepositoryService) { }

  ngOnInit() {
  };
  get orders(): Order[]{
    return this.orderRepoService.getorders();
  }
}
