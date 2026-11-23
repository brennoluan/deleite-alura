import { Component, computed, effect, signal } from '@angular/core';
import { products, } from '../../data/products';
import { ProductCategory } from '../../components/product-category/product-category';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ProductCategory, CurrencyPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  categories = products;

  cartItens = signal(0);

  showCartAlert = computed(() => this.cartItens() > 0);
  totalValueCart = computed(() => this.cartItens() * 18);

  constructor() {
    effect(() => {
      if (this.cartItens() > 0)
        console.log(`Cart updated with ${this.cartItens()} items.`);
    });
  }

  addProduct() {
    this.cartItens.update(value => value + 1);
  }

  clearCart() {
    this.cartItens.set(0);
  }
}
