import { Component } from '@angular/core';
import { products, } from '../../data/products';
import { ProductCategory } from '../../components/product-category/product-category';

@Component({
  selector: 'app-home',
  imports: [ProductCategory],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  categories = products;
}
