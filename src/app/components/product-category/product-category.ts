import { Component, input, output } from '@angular/core';
import type { Product } from '../../interfaces/product';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-category',
  imports: [ProductCard],
  templateUrl: './product-category.html',
  styleUrl: './product-category.css',
})
export class ProductCategory {
  categoryTitle = input.required<string>()
  products = input.required<Product[]>()
  addProduct = output<void>()

  onAddProduct() {
    this.addProduct.emit()
  }
}
