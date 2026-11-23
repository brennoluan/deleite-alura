import { Injectable } from '@angular/core';
import { products } from '../data/products';
import type { ProductCategory } from '../interfaces/product-category';

@Injectable({
  providedIn: 'root',
})
export class Products {
  getCategories(): ProductCategory[] {
    return products;
  }
}
