import { Injectable } from '@angular/core';
import { Product } from './product';
@Injectable()
export class Cart {
    private lines: CartLine[] = [];
    public intemCount = 0;
    public cartPrice = 0;

    addLine(product: Product, quantity: number = 1) {
        const line = this.lines.find(line => line.product.productCode == product.productCode);
        if (line != undefined) {
            line.quantity += quantity;
        } else {
            this.lines.push(new CartLine(product, quantity))
        }
        this.recalculate();
    }
    recalculate() {
        this.intemCount = 0;
        this.cartPrice = 0;
        
        this.lines.forEach(l=>{
            this.intemCount += l.quantity;
            this.cartPrice += (l.quantity*l.product.MSRP)
        })
    }
    clear(product:Product){
        const line= this.lines.findIndex(line=> line.product.productCode== product.productCode);
        if(line!= undefined){
            this.lines.splice(line,1);
            this.recalculate();
        }
    }
    mos(){
        return this.lines;
    }
    updatecart(product: Product, quantity: number ){
        if(quantity!= undefined){
            let selection= this.lines.find(ps=> ps.product.productCode==product.productCode);
            if(selection){
                selection.quantity=quantity;
                this.recalculate();
            }
            
        }
    }
}
export class CartLine {
    constructor(public product: Product, public quantity: number) {

    }
    get lineTotal() {
        return this.quantity * this.product.MSRP;
    }
}
