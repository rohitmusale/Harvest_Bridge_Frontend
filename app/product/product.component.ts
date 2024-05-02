import { Component } from '@angular/core';
import { ProductService } from '../addproduct/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PrserService } from './prser.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: any = [];

  addShopCartForm!:FormGroup;
  constructor(private productService: ProductService, private prser:PrserService, private fb:FormBuilder){ }

  ngOnInit(){
    this.getAllProducts();

    this.addShopCartForm = this.fb.group({
      prid:[null,[Validators.required]],
      primg:[null,[Validators.required]],
      prname:[null,[Validators.required]],
      prprice:[null,[Validators.required]]
    })
  }
  getAllProducts(){
    this.productService.getAllProduct().subscribe((res)=>{
      console.log(res);
      this.products = res;
    })
  }


  addShopCart(){
    console.log(this.addShopCartForm.value);
      this.prser.postshopCart(this.addShopCartForm.value).subscribe((res) =>{
        console.log(res);
      })
  }
}
