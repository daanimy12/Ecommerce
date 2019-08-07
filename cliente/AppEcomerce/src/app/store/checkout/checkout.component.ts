import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(public cart: Cart) { }

  ngOnInit() {
  }

}
