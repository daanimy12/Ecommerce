import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart';
import { ProductRepositoryService } from 'src/app/model/product-repository.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private productRepoServive:ProductRepositoryService,public cart: Cart) { }

  ngOnInit() {
  }

}
