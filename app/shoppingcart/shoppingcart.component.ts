import { Component } from '@angular/core';
import { ProductService } from '../addproduct/product.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrl: './shoppingcart.component.css'
})
export class ShoppingcartComponent {

  products: any = [];
  constructor(private productService: ProductService){ }
  
}
