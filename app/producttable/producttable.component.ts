import { Component } from '@angular/core';
import { PrtableService } from './prtable.service';
import { ProductService } from '../addproduct/product.service';

@Component({
  selector: 'app-producttable',
  templateUrl: './producttable.component.html',
  styleUrl: './producttable.component.css'
})
export class ProducttableComponent {
  products: any = [];
  constructor(private productService: ProductService){ }

  ngOnInit(){
    this.getAllProducts();
  }
  getAllProducts(){
    this.productService.getAllProduct().subscribe((res)=>{
      console.log(res);
      this.products = res;
    })
  }
}
