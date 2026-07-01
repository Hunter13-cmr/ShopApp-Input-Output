import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
  readonly product = input.required<Product>();
  readonly addToCart = output<void>();
}