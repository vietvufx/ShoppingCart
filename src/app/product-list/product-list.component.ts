import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'PRODUCT ITEM NUMBER 1',
      description: 'Description for product item number 1',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 5.99,
      quantity: 20
    },
    {
      id: 2,
      name: 'PRODUCT ITEM NUMBER 2',
      description: 'Description for product item number 2',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 9.99,
      quantity: 10
    }
  ]
  constructor() { 

  }

  ngOnInit(): void {
  }

  removeProduct(productID: number): void{
    const index = this.products.findIndex(product => product.id == productID);
    this.products.splice(index,1);
  }

  updateQuantity(inputValue: any){
    console.log(inputValue.value);
  }
}
