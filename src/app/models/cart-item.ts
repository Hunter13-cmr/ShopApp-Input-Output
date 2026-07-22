/**
 * ============================================
 * CART ITEM INTERFACE - ARTICLE DU PANIER
 * ============================================
 * 
 * Définit la structure d'un article dans le panier d'achat.
 * Cette interface est utilisée pour typer les données
 * du panier dans le composant Container.
 * 
 * Concept :
 * - Différent de Product car contient une quantité
 * - Utilisé uniquement dans le contexte du panier
 * - Peut être créé à partir d'un Product via addToCart()
 * 
 * @example
 * const cartItem: CartItem = {
 *   id: 1,
 *   name: 'Nike Air',
 *   price: 85000,
 *   quantity: 2
 * };
 * 
 * @see Product - Interface source pour créer un CartItem
 * @see Container - Composant qui gère le panier
 */

export interface CartItem {
  /**
   * Identifiant unique du produit
   * 
   * @type {number}
   * @example 1, 2, 3...
   * @required Oui - permet d'identifier le produit dans le panier
   * @note Provient de l'interface Product
   */
  id: number;

  /**
   * Nom du produit
   * 
   * @type {string}
   * @example 'Nike Air', 'Robe élégante'
   * @required Oui - affiché dans le modal panier
   * @note Provient de l'interface Product
   */
  name: string;

  /**
   * Prix unitaire du produit
   * 
   * @type {number}
   * @example 85000, 3500
   * @required Oui - utilisé pour calculer le total
   * @note Provient de l'interface Product
   * @note Prix en FCFA pour ce projet
   */
  price: number;

  /**
   * Quantité de ce produit dans le panier
   * 
   * @type {number}
   * @minimum 1 - Un article dans le panier a toujours quantity >= 1
   * @example 1, 2, 3...
   * @required Oui - détermine combien d'unités l'utilisateur veut
   * 
   * @remarks
   * Cette propriété n'existe pas dans Product.
   * Elle est ajoutée lors de la création du CartItem.
   * 
   * Logique métier :
   * - quantity = 1 : L'article est dans le panier
   * - quantity > 1 : L'utilisateur a augmenté la quantité
   * - Si quantity passe à 0 (decreaseQuantity), l'article est supprimé
   */
  quantity: number;
}
