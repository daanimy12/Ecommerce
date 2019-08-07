import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public cart: Cart) { }
  get itmemcount():number {
    return this.cart.intemCount;
  }
  /*get total():number{
    //return this.cart.product.
  }*/

  ngOnInit() {
  }
  get product(){
  return this.cart.mos();
  }
  delete(product: Product){
    return this.cart.clear(product);
  }

  update(product:Product, quantity:number){
    return this.cart.updatecart(product,+quantity);
  }
  
}

