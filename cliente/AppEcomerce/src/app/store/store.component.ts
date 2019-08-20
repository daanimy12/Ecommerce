import { Component, OnInit } from '@angular/core';
import { ProductRepositoryService } from '../model/product-repository.service';
import { Product } from '../model/product';
import { Cart } from '../model/cart';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { OrderRepositoryService } from '../model/order-repository.service';
import { Order } from '../model/order';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
public SelectedCategory=null;
public selectedScale=null;
public selectedVendor=null;
public productPerpage=12;
public selectedPage=1;

  constructor(private productRepoService:ProductRepositoryService, private orderRepoService:OrderRepositoryService,private cart:Cart, private router: Router,private route: ActivatedRoute) { }

  ngOnInit() { 

  };
 
  get products(): Product[]{
    const pageIndex=(this.selectedPage - 1)*this.productPerpage;
    return this.productRepoService
    .getProducts(this.SelectedCategory,this.selectedScale,this.selectedVendor)
    .slice(pageIndex,pageIndex+this.productPerpage);
  
  };
  
  get categories(): string[]{
    return this.productRepoService.getCategories();
  };

  get scales(): string[]{
    return this.productRepoService.getScales();
  }
  get vendors(): string[]{
    return this.productRepoService.getVendor();
  }
  changeCategory(newCategory: string=null){
    this.selectedPage = 1;
     this.SelectedCategory=newCategory
  };
  changeScale(newScale: string=null){
    this.selectedPage = 1;
    this.selectedScale=newScale
  };
  changeVendor(newVendor: string=null){
    this.selectedPage = 1;
    this.selectedVendor=newVendor
  }
  get pageNumber(): number[]{
    return Array(Math.ceil(this.productRepoService.getProducts(this.SelectedCategory,this.selectedScale,this.selectedVendor).length/this.productPerpage))
    .fill(0).map((x,i)=>i+1)
  };
  changuePague(newNumber :number){
    this.selectedPage=newNumber
  };
  changePageSize(newSize: number){
    this.productPerpage=newSize;
    this.changuePague(1);
  };
  
  addtocart(product: Product){
    this.cart.addLine(product);
  }

}
