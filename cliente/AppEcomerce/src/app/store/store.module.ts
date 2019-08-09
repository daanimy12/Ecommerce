import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { NavComponent } from './nav/nav.component';
import { FooteerComponent } from './footeer/footeer.component';
import { CartSumaryComponent } from './cart-sumary/cart-sumary.component';
import { Cart } from '../model/cart';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [StoreComponent, NavComponent, FooteerComponent, CartSumaryComponent, CartComponent, CheckoutComponent, PageNotFoundComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    StoreComponent
  ],
  providers:[Cart]
})
export class StoreModule { }
