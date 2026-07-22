/**
 * ============================================
 * PRODUCT INTERFACE
 * ============================================
 * 
 * Définit la structure d'un produit dans l'application.
 * Cette interface est utilisée pour typer les données
 * des produits affichés dans le catalogue.
 * 
 * Concept TypeScript :
 * - Une interface définit un "contrat" qu'un objet doit respecter
 * - Elle garantit que tous les produits ont les mêmes propriétés
 * - Cela permet au compilateur de vérifier les types automatiquement
 * 
 * @example
 * const product: Product = {
 *   id: 1,
 *   name: 'Laptop Gaming',
 *   description: 'Ordinateur haute performance',
 *   price: 1299,
 *   image: 'assets/images/laptop.jpg'
 * };
 */

export interface Product {
  /**
   * Identifiant unique du produit
   * 
   * @type {number}
   * @example 1, 2, 3...
   * @required Oui - chaque produit doit avoir un ID unique
   */
  id: number;

  /**
   * Nom du produit
   * 
   * @type {string}
   * @example 'MacBook Pro', 'iPhone 15', 'AirPods'
   * @required Oui - le nom est obligatoire pour l'affichage
   */
  name: string;

  /**
   * Description courte du produit
   * 
   * @type {string}
   * @example 'Ordinateur portable 15 pouces avec 16GB RAM'
   * @required Oui - la description aide l'utilisateur à comprendre le produit
   */
  description: string;

  /**
   * Prix du produit en euros
   * 
   * @type {number}
   * @example 99.99, 1499, 29.99
   * @required Oui - le prix est essentiel pour un site e-commerce
   * @note Le prix est stocké en FCFA ou EUR selon la configuration
   */
  price: number;

  /**
   * URL de l'image du produit
   * 
   * @type {string}
   * @example 'assets/images/products/laptop.jpg'
   * @required Oui - l'image est affichée dans la carte produit
   * @note Peut être une URL relative ou absolue
   */
  image: string;
}
