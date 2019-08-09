import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Product } from 'src/app/model/product';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductRepositoryService } from 'src/app/model/product-repository.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public productid;

  constructor(private route: ActivatedRoute, private router: Router,private productRepoServive:ProductRepositoryService) { }
  ngOnInit() {
    const id=this.route.snapshot.paramMap.get('id');
    this.productid= this.productRepoServive.getdetail(id);  
  }

}
