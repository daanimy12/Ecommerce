import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart';

@Component({
  selector: 'app-cart-sumary',
  templateUrl: './cart-sumary.component.html',
  styleUrls: ['./cart-sumary.component.css']
})
export class CartSumaryComponent implements OnInit {

  constructor(public cart: Cart) { }
  
  ngOnInit() {
  }

}
