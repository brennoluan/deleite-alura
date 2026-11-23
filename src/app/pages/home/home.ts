import { Component } from '@angular/core';
import { ProductCard } from '../../components/product-card/product-card';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-home',
  imports: [ProductCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  milkshakeAmora: Product = {
    id: 1,
    title: 'Milkshake de Amora',
    price: 18.0,
    image: 'assets/images/milkshakes/milkshake-amora.png'
  };

  milkshakeMaracuja: Product = {
    id: 2,
    title: 'Milkshake de Maracujá',
    price: 18.0,
    image: 'assets/images/milkshakes/milkshake-maracuja.png'
  };

  milkshakeMorango: Product = {
    id: 3,
    title: 'Milkshake de Morango',
    price: 18.0,
    image: 'assets/images/milkshakes/milkshake-morango.png'
  };

  milkshakeVerde: Product = {
    id: 4,
    title: 'Milkshake Verde',
    price: 18.0,
    image: 'assets/images/milkshakes/milkshake-verde.png'
  };
}
