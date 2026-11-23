import { Component } from '@angular/core';
import { ProductCard } from '../../components/product-card/product-card';
import { Product } from '../../interfaces/product';
import { products, icecreams, smoothies, iceCoffee } from '../../data/products';

@Component({
  selector: 'app-home',
  imports: [ProductCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  milkshakes: Product[] = products;
  icecreams: Product[] = icecreams;
  smoothies: Product[] = smoothies;
  iceCoffee: Product[] = iceCoffee;

}
