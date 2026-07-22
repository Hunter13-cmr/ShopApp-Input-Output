/**
 * ============================================
 * CONTAINER COMPONENT - STORE PRINCIPAL
 * ============================================
 * 
 * Responsabilité :
 * - Gestion de l'état global du panier d'achat
 * - Gestion de la recherche de produits
 * - Coordination entre ProductList et Cart Modal
 * - Logique métier : ajout, suppression, modification quantités
 * 
 * Architecture :
 * - Component standalone avec signaux Angular 22
 * - State management réactif avec signals
 * - Logique métier centralisée (cart operations)
 * 
 * @example
 * <app-container></app-container>
 * 
 * @see ./container.html - Template avec hero, toolbar, product-list, cart
 * @see ./container.css - Styles du layout principal
 * @see ../product-list/product-list - Composant liste produits
 * @see ../models/cart-item - Interface CartItem
 */

import { Component, signal } from '@angular/core';
import { ProductList } from '../product-list/product-list';
import { Product } from '../../models/product';
import { CartItem } from '../../models/cart-item';

/**
 * Configuration du composant Container
 * 
 * @selector app-container - Balise HTML utilisée
 * @standalone Composant autonome
 * @imports ProductList - Liste des produits
 * @template container.html - Template principal
 * @styleUrl container.css - Styles du conteneur
 */
@Component({
  selector: 'app-container',
  imports: [ProductList],
  templateUrl: './container.html',
  styleUrl: './container.css',
})

/**
 * Classe du composant Container
 * 
 * C'est le "cerveau" de l'application qui gère :
 * - Le panier d'achat (cartItems)
 * - La recherche (searchTerm)
 * - L'affichage du modal panier (isCartOpen)
 * - Le produit sélectionné (selectedProduct)
 * - Les messages de confirmation (orderMessage)
 * 
 * @remarks
 * Utilise les Signals d'Angular 22 pour un state management réactif.
 * Les signaux sont automatiquement mis à jour et notifient les templates.
 * 
 * @see CartItem - Interface pour les articles du panier
 * @see Product - Interface pour les produits
 */
export class Container {
  // ============================================
  // SIGNAUX (SIGNALS) - ÉTAT RÉACTIF
  // ============================================
  
  /**
   * Panier d'achat : liste des articles avec quantités
   * 
   * Utilise un signal pour une réactivité optimale.
   * Chaque modification via .update() notifie automatiquement
   * le template pour mettre à jour l'interface.
   * 
   * @type {Signal<CartItem[]>}
   * @initial [] - Panier vide au démarrage
   * @example
   * [
   *   { id: 1, name: 'Laptop', price: 999, quantity: 2 },
   *   { id: 2, name: 'Mouse', price: 25, quantity: 1 }
   * ]
   * @see CartItem interface
   */
  readonly cartItems = signal<CartItem[]>([]);

  /**
   * Terme de recherche pour filtrer les produits
   * 
   * @type {Signal<string>}
   * @initial '' - Pas de recherche au démarrage
   * @example 'laptop', 'phone', 'apple'
   */
  readonly searchTerm = signal('');

  /**
   * État d'ouverture du modal panier
   * 
   * @type {Signal<boolean>}
   * @initial false - Panier fermé au démarrage
   * @example true (ouvert), false (fermé)
   */
  readonly isCartOpen = signal(false);

  /**
   * Produit sélectionné pour affichage dans le modal
   * 
   * @type {Signal<Product | null>}
   * @initial null - Aucun produit sélectionné
   * @example { id: 1, name: 'Laptop', ... }
   */
  readonly selectedProduct = signal<Product | null>(null);

  /**
   * Message de confirmation ou d'erreur
   * 
   * @type {Signal<string>}
   * @initial '' - Pas de message au démarrage
   * @example 'Produit ajouté au panier !'
   */
  readonly orderMessage = signal('');

  // ============================================
  // MÉTHODES - LOGIQUE MÉTIER
  // ============================================

  /**
   * Ajoute un produit au panier
   * 
   * Logique d'ajout intelligente :
   * 1. Vérifie si le produit existe déjà dans le panier
   * 2. Si oui : incrémente la quantité de 1
   * 3. Si non : ajoute le produit avec quantité = 1
   * 
   * @param {Product} product - Le produit à ajouter
   * @returns {void}
   * 
   * @example
   * // Si le produit n'existe pas :
   * addToCart({ id: 1, name: 'Laptop', price: 999, image: '...' })
   * // Résultat : cartItems = [{ id: 1, name: 'Laptop', price: 999, quantity: 1 }]
   * 
   * // Si le produit existe déjà (quantity: 2) :
   * addToCart({ id: 1, name: 'Laptop', price: 999, image: '...' })
   * // Résultat : cartItems = [{ id: 1, name: 'Laptop', price: 999, quantity: 3 }]
   * 
   * @remarks
   * Affiche aussi le modal panier et un message de confirmation.
   * Utilise CartItem[] spread operator pour créer un nouveau tableau
   * (immutabilité).
   */
  addToCart(product: Product): void {
    // Cherche si le produit existe déjà dans le panier
    const existing = this.cartItems().find((item) => item.id === product.id);

    if (existing) {
      // Cas 1 : Le produit existe → incrémente la quantité
      // .map() crée un nouveau tableau avec l'article modifié
      this.cartItems.update((items) => items.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)));
    } else {
      // Cas 2 : Le produit n'existe pas → l'ajoute avec quantité 1
      // Spread operator [...items, newItem] pour ajouter à la fin
      this.cartItems.update((items) => [...items, { id: product.id, name: product.name, price: product.price, quantity: 1 }]);
    }

    // Met à jour l'état pour afficher le modal et le message
    this.selectedProduct.set(product);
    this.orderMessage.set(`${product.name} ajouté au panier.`);
    this.isCartOpen.set(true);
  }

  /**
   * Augmente la quantité d'un produit dans le panier
   * 
   * @param {number} productId - ID du produit à augmenter
   * @returns {void}
   * 
   * @example
   * // Si quantity = 2, après appel : quantity = 3
   * increaseQuantity(1);
   * 
   * @remarks
   * Trouve le produit par ID et incrémente sa quantité.
   * Les autres articles restent inchangés.
   */
  increaseQuantity(productId: number): void {
    // .map() pour modifier uniquement l'article ciblé
    this.cartItems.update((items) => items.map((item) => (item.id === productId ? { ...item, quantity: item.quantity + 1 } : item)));
  }

  /**
   * Diminue la quantité d'un produit ou le supprime
   * 
   * Logique de suppression intelligente :
   * - Si quantity > 1 : décrémente la quantité
   * - Si quantity = 1 : supprime l'article du panier
   * 
   * @param {number} productId - ID du produit à modifier
   * @returns {void}
   * 
   * @example
   * // Cas 1 : quantity = 3 → quantity = 2
   * decreaseQuantity(1);
   * 
   * // Cas 2 : quantity = 1 → article supprimé
   * decreaseQuantity(1);
   * 
   * @remarks
   * Utilise .flatMap() pour filter ET transformer en une seule passe.
   * Si quantity <= 1, retourne [] (vide) pour supprimer l'article.
   * Sinon, retourne l'article avec quantity - 1.
   */
  decreaseQuantity(productId: number): void {
    // .flatMap() permet de filtrer (retourner []) ou transformer (retourner [item])
    this.cartItems.update((items) =>
      items.flatMap((item) => {
        // Ignore les articles qui ne correspondent pas
        if (item.id !== productId) {
          return [item];
        }

        // Si quantité = 1, supprime l'article (retourne tableau vide)
        if (item.quantity <= 1) {
          return [];
        }

        // Sinon, décrémente la quantité
        return [{ ...item, quantity: item.quantity - 1 }];
      }),
    );
  }

  /**
   * Supprime complètement un produit du panier
   * 
   * @param {number} productId - ID du produit à supprimer
   * @returns {void}
   * 
   * @example
   * // Supprime le produit id=1 du panier
   * removeFromCart(1);
   * 
   * @remarks
   * Utilise .filter() pour créer un nouveau tableau
   * sans l'article à supprimer.
   */
  removeFromCart(productId: number): void {
    // .filter() garde seulement les articles dont l'ID est différent
    this.cartItems.update((items) => items.filter((item) => item.id !== productId));
  }

  /**
   * Confirme la commande et vide le panier
   * 
   * Logique de confirmation :
   * 1. Vérifie que le panier n'est pas vide
   * 2. Affiche un message de confirmation
   * 3. Vide le panier
   * 4. Ferme le modal
   * 
   * @returns {void}
   * 
   * @example
   * // Si panier contient 3 articles :
   * confirmOrder();
   * // Message : "Commande confirmée pour 3 article(s)."
   * // Panier vidé, modal fermé
   * 
   * @remarks
   * Cette méthode simule la finalisation d'une commande.
   * Dans une vraie application, elle appellerait une API.
   */
  confirmOrder(): void {
    // Vérifie si le panier est vide
    if (this.cartItems().length === 0) {
      this.orderMessage.set('Votre panier est vide.');
      return;
    }

    // Confirme la commande
    this.orderMessage.set(`Commande confirmée pour ${this.totalItems} article(s).`);
    
    // Vide le panier (remplace par tableau vide)
    this.cartItems.set([]);
    
    // Ferme le modal
    this.isCartOpen.set(false);
  }

  /**
   * Calcule le nombre total d'articles (quantité cumulée)
   * 
   * @returns {number} Nombre total d'articles
   * 
   * @example
   * // Panier : [{ quantity: 2 }, { quantity: 3 }]
   * get totalItems() // Retourne 5
   * 
   * @remarks
   * Getter permettant d'accéder à totalItems comme une propriété.
   * Utilise .reduce() pour additionner toutes les quantités.
   * Réactif : se met à jour automatiquement si cartItems change.
   */
  get totalItems(): number {
    // .reduce() parcourt tous les articles et additionne les quantités
    return this.cartItems().reduce((sum, item) => sum + item.quantity, 0);
  }

  /**
   * Calcule le prix total du panier
   * 
   * @returns {number} Prix total en euros/FCFA
   * 
   * @example
   * // Panier : [{ price: 10, quantity: 2 }, { price: 5, quantity: 1 }]
   * get totalPrice() // Retourne 25 (10*2 + 5*1)
   * 
   * @remarks
   * Getter réactif pour le prix total.
   * Multiplie le prix par la quantité pour chaque article.
   */
  get totalPrice(): number {
    // .reduce() : sum = prix * quantity pour chaque article
    return this.cartItems().reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  /**
   * Ferme le modal panier et réinitialise le produit sélectionné
   * 
   * @returns {void}
   * 
   * @example
   * closeCart();
   * // isCartOpen = false, selectedProduct = null
   * 
   * @remarks
   * Appelé quand l'utilisateur clique sur
   * le bouton fermer (X) du modal.
   */
  closeCart(): void {
    this.isCartOpen.set(false);
    this.selectedProduct.set(null);
  }

  /**
   * Met à jour le terme de recherche
   * 
   * @param {string} term - Le terme saisi par l'utilisateur
   * @returns {void}
   * 
   * @example
   * onSearch('laptop');
   * // searchTerm = 'laptop'
   * // La liste se filtre automatiquement
   * 
   * @remarks
   * Connecté à l'input de recherche via (input)="onSearch($event.target.value)"
   * dans le template container.html.
   */
  onSearch(term: string): void {
    this.searchTerm.set(term);
  }
}
