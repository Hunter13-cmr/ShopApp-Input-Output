import { Component, input, output } from '@angular/core';
import { ProductItem } from '../product-item/product-item';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  imports: [ProductItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  readonly searchTerm = input('');
  readonly addToCart = output<Product>();

  protected readonly products: Product[] = [
    {
      id: 1,
      name: 'Robe élégante',
      description: 'Robe de soirée chic',
      price: 85000,
      image: 'assets/images/shop2.jpeg',
    },
    {
      id: 2,
      name: 'Robe d’exception',
      description: 'Modèle raffiné pour toutes les occasions',
      price: 65000,
      image: 'assets/images/shop1.jpeg',
    },
    {
      id: 3,
      name: 'Salade Doualaise',
      description: 'Repas frais et savoureux',
      price: 3500,
      image: 'assets/images/plat1.jpeg',
    },
    {
      id: 4,
      name: 'Nike Air',
      description: 'Chaussures de sport confortables',
      price: 85000,
      image: 'assets/images/nike1.jpg',
    },
    {
      id: 5,
      name: 'Nike Run',
      description: 'Design moderne et performance',
      price: 65000,
      image: 'assets/images/nike2.jpg',
    },
    {
      id: 6,
      name: 'Jordan Retro',
      description: 'Style urbain et premium',
      price: 3500,
      image: 'assets/images/jordan1.jpg',
    },
    {
      id: 7,
      name: 'Jordan Classic',
      description: 'Chaussure iconique à la mode',
      price: 65000,
      image: 'assets/images/jordan2.jpg',
    },
    {
      id: 8,
      name: 'Star Street',
      description: 'Chaussures de ville polyvalentes',
      price: 3500,
      image: 'assets/images/star1.jpg',
    },
  ];
}
