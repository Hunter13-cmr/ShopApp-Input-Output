import { Component, signal } from '@angular/core';
import { ProductList } from '../product-list/product-list';
import { Product } from '../../models/product';
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-container',
  imports: [ProductList],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {
  readonly cartItems = signal<CartItem[]>([]);
  readonly searchTerm = signal('');
  readonly isCartOpen = signal(false);
  readonly selectedProduct = signal<Product | null>(null);
  readonly orderMessage = signal('');

  addToCart(product: Product): void {
    const existing = this.cartItems().find((item) => item.id === product.id);

    if (existing) {
      this.cartItems.update((items) => items.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)));
    } else {
      this.cartItems.update((items) => [...items, { id: product.id, name: product.name, price: product.price, quantity: 1 }]);
    }

    this.selectedProduct.set(product);
    this.orderMessage.set(`${product.name} ajouté au panier.`);
    this.isCartOpen.set(true);
  }

  increaseQuantity(productId: number): void {
    this.cartItems.update((items) => items.map((item) => (item.id === productId ? { ...item, quantity: item.quantity + 1 } : item)));
  }

  decreaseQuantity(productId: number): void {
    this.cartItems.update((items) =>
      items.flatMap((item) => {
        if (item.id !== productId) {
          return [item];
        }

        if (item.quantity <= 1) {
          return [];
        }

        return [{ ...item, quantity: item.quantity - 1 }];
      }),
    );
  }

  removeFromCart(productId: number): void {
    this.cartItems.update((items) => items.filter((item) => item.id !== productId));
  }

  confirmOrder(): void {
    if (this.cartItems().length === 0) {
      this.orderMessage.set('Votre panier est vide.');
      return;
    }

    this.orderMessage.set(`Commande confirmée pour ${this.totalItems} article(s).`);
    this.cartItems.set([]);
    this.isCartOpen.set(false);
  }

  get totalItems(): number {
    return this.cartItems().reduce((sum, item) => sum + item.quantity, 0);
  }

  get totalPrice(): number {
    return this.cartItems().reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  closeCart(): void {
    this.isCartOpen.set(false);
    this.selectedProduct.set(null);
  }

  onSearch(term: string): void {
    this.searchTerm.set(term);
  }
}