/**
 * ============================================
 * HEADER COMPONENT
 * ============================================
 * 
 * Responsabilité :
 * - Navigation principale du site
 * - Affichage du logo ShopApp
 * - Liens de navigation vers les sections
 * - Gestion du lien actif (active link)
 * 
 * Architecture :
 * - Component standalone (pas de NgModule)
 * - Utilise RouterLink pour la navigation Angular
 * - RouterLinkActive pour détecter le lien actif
 * 
 * @example
 * <app-header></app-header>
 * 
 * @see ./header.html - Template associé
 * @see ./header.css - Styles associés
 */

import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

/**
 * Configuration du composant Header
 * 
 * @selector app-header - Balise HTML utilisée
 * @standalone Composant autonome (Angular 22)
 * @imports RouterLink - Pour navigation vers routes
 * @imports RouterLinkActive - Pour classe active automatique
 */
@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})

/**
 * Classe du composant Header
 * 
 * Cette classe est vide car le header est principalement
 * déclaratif (template HTML + styles CSS).
 * La logique de navigation est gérée par Angular Router.
 * 
 * Responsabilités :
 * - Servir de conteneur pour le template
 * - Importer les directives nécessaires (RouterLink)
 * - Gérer l'état du composant (si nécessaire)
 */
export class Header {}
