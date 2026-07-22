/**
 * ============================================
 * PRODUCT LIST COMPONENT - CATALOGUE PRODUITS
 * ============================================
 * 
 * Responsabilité :
 * - Affichage de la liste des produits (catalogue)
 * - Filtrage des produits selon le terme de recherche
 * - Communication avec ProductItem pour chaque carte
 * - Gestion de l'événement d'ajout au panier
 * 
 * Architecture :
 * - Component standalone (Angular 22)
 * - Reçoit le searchTerm en input (du parent Container)
 * - Émet l'événement addToCart vers le parent
 * - Données produits stockées localement (statiques)
 * 
 * @example
 * <app-product-list 
 *   [searchTerm]="searchTerm()" 
 *   (addToCart)="onAddToCart($event)">
 * </app-product-list>
 * 
 * @see ./product-list.html - Template avec grille de cartes
 * @see ./product-list.css - Styles responsive
 * @see ./product-item/product-item - Composant carte individuelle
 * @see ../../models/product - Interface Product
 */

import { Component, input, output } from '@angular/core';
import { ProductItem } from '../product-item/product-item';
import { Product } from '../../models/product';

/**
 * Configuration du composant ProductList
 * 
 * @selector app-product-list - Balise HTML utilisée
 * @standalone Composant autonome
 * @imports ProductItem - Carte produit individuelle
 * @template product-list.html - Template catalogue
 * @styleUrl product-list.css - Styles responsive
 */
@Component({
  selector: 'app-product-list',
  imports: [ProductItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})

/**
 * Classe du composant ProductList
 * 
 * Ce composant gère l'affichage du catalogue produits.
 * Il contient :
 * - Un tableau de produits statiques (données de démo)
 * - Un input pour recevoir le terme de recherche
 * - Un output pour émettre l'ajout au panier
 * 
 * @remarks
 * Dans une vraie application, les produits viendraient d'une API.
 * Ici, ils sont hardcodés pour la démonstration.
 * 
 * @see Product - Interface définissant la structure d'un produit
 */
export class ProductList {
  // ============================================
  // INPUTS & OUTPUTS - COMMUNICATION PARENT/ENFANT
  // ============================================

  /**
   * Input : Terme de recherche pour filtrer les produits
   * 
   * Reçoit le terme depuis le composant parent (Container).
   * Si vide, tous les produits sont affichés.
   * Si non vide, filtre les produits dont le nom contient le terme.
   * 
   * @type {InputSignal<string>}
   * @optional - Si non fourni, recherche désactivée
   * @example 'robe', 'nike', 'chaussure'
   */
  readonly searchTerm = input('');

  /**
   * Output : Événement émis quand un produit est ajouté au panier
   * 
   * Émet le produit complet ajouté pour que le parent
   * (Container) puisse mettre à jour le panier.
   * 
   * @type {OutputSignal<Product>}
   * @example
   * // Dans le template :
   * (addToCart)="onAddToCart($event)"
   * // $event contient le produit ajouté
   */
  readonly addToCart = output<Product>();

  // ============================================
  // DONNÉES - CATALOGUE PRODUITS
  // ============================================

  /**
   * Catalogue des produits disponibles
   * 
   * Liste statique de 8 produits pour la démonstration.
   * Dans une vraie application, ces données proviendraient
   * d'une API REST ou GraphQL.
   * 
   * @type {Product[]}
   * @protected Accessible par les classes enfants seulement
   * @remarks
   * Les produits sont de types variés pour montrer
   * la diversité du catalogue :
   * - Vêtements (robes)
   * - Alimentation (salade)
   * - Chaussures (Nike, Jordan, Star Street)
   * 
   * Prix en FCFA (Franc CFA) pour le marché camerounais.
   * 
   * @see Product interface pour la structure des données
   */
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
