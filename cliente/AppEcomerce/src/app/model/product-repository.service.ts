import { Injectable } from '@angular/core';
import { Product } from './product';
import { ProductDatasourceService } from './product-datasource.service';
import { Pipe, PipeTransform } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductRepositoryService {
private products:Product[]=[];
private categories: string[]=[];
private scales: string[]=[];
private vendor: string[]=[];
  constructor(private dataSourceService: ProductDatasourceService) {
    dataSourceService.getProducts().subscribe((response)=>{
      this.products=response['products'];

      this.categories=response['products'].map(p=> p.productLine)
      .filter((c,index,array)=>array.indexOf(c)==index).sort();

      this.scales=response['products'].map(s=> s.productScale)
      .filter((c,index,array)=>array.indexOf(c)==index).sort();

      this.vendor= response['products'].map(r=> r.productVendor)
      .filter((c,index,array)=>array.indexOf(c)==index).sort();
      console.log(this.vendor);
    });

   }
   getProducts(productLine: string=null,productScale: string=null,productVendor: string=null): Product[]{
    return this.products.filter(
      (p)=>productLine==null ||  p.productLine==productLine).filter((po)=>productScale==null ||  po.productScale==productScale)
      .filter((p)=>productVendor==null ||  p.productVendor==productVendor);
   };
   
   getCategories(): string[]{
     return this.categories;
   };

   getScales(): string[]{
    return this.scales;
   };

   getVendor(): string[]{
     return this.vendor;
   }

   getdetail(id){
    return this.getProducts().find(e=>e.productCode===id);
   }
}
