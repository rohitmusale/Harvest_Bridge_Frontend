import { Component, OnInit } from '@angular/core';


import { ProductService } from './product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent{
  addProductForm!:FormGroup;
    constructor(private addProductService: ProductService,
      private fb:FormBuilder){ }
    
      // this.form = {} as NgForm; // or initialize it with null or undefined
      
    
  ngOnInit(){
      this.addProductForm = this.fb.group({
        primg:[null,[Validators.required]],
        prname:[null,[Validators.required]],
        prprice:[null,[Validators.required]]
      })
    }
    addProduct(){
      console.log(this.addProductForm.value);
      this.addProductService.postAddProduct(this.addProductForm.value).subscribe((res) =>{
        console.log(res);
      })
    }
}
