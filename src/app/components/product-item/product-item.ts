/**
 * ============================================
 * PRODUCT ITEM COMPONENT
 * ============================================
 * 
 * Responsabilité :
 * - Affichage d'une carte produit individuelle
 * - Gestion du clic sur le bouton "Ajouter au panier"
 * - Communication avec le composant parent via signaux
 * 
 * Architecture :
 * - Component standalone (Angular 22)
 * - Utilise les inputs/outputs Angular modernes
 * - Communication unidirectionnelle (input) et événements (output)
 * 
 * @example
 * <app-product-item 
 *   [product]="myProduct" 
 *   (addToCart)="onAddToCart()">
 * </app-product-item>
 * 
 * @see ./product-item.html - Template avec carte produit
 * @see ./product-item.css - Styles avec hover effects
 * @see ../../models/product - Interface Product
 */

import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product';

/**
 * Configuration du composant ProductItem
 * 
 * @selector app-product-item - Balise HTML utilisée
 * @standalone Composant autonome
 * @template product-item.html - Template associé
 * @styleUrl product-item.css - Styles associés
 */
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})

/**
 * Classe du composant ProductItem
 * 
 * Cette classe représente une carte produit dans le catalogue.
 * Elle reçoit un produit en entrée et émet un événement
 * quand l'utilisateur clique sur "Ajouter au panier".
 * 
 * Responsabilités :
 * - Recevoir les données du produit (input)
 * - Émettre un événement lors de l'ajout au panier (output)
 * - Afficher les informations du produit via le template
 * 
 * @readonly product - Input requis contenant les données du produit
 * @readonly addToCart - Output émis quand on clique sur ajouter
 */
export class ProductItem {
  /**
   * Input : Données du produit à afficher
   * 
   * Utilise la nouvelle API input() d'Angular 22.
   * 'required()' garantit que le parent fournit toujours un produit.
   * 
   * @type {InputSignal<Product>}
   * @required
   * @example
   * // Dans le composant parent :
   * products = [
   *   { id: 1, name: 'Laptop', price: 999, image: '...' }
   * ];
   * 
   * // Dans le template parent :
   * <app-product-item [product]="products[0]">
   */
  readonly product = input.required<Product>();

  /**
   * Output : Événement émis lors de l'ajout au panier
   * 
   * Émet un événement vide (void) quand l'utilisateur
   * clique sur le bouton "Ajouter au panier".
   * 
   * @type {OutputSignal<void>}
   * @example
   * // Dans le template parent :
   * <app-product-item 
   *   [product]="product" 
   *   (addToCart)="onAddToCart()">
   * </app-product-item>
   * 
   * // Dans le composant parent :
   * onAddToCart() {
   *   console.log('Produit ajouté !');
   *   // Logique d'ajout au panier
   * }
   */
  readonly addToCart = output<void>();
}
