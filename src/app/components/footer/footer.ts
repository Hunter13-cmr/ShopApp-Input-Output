/**
 * ============================================
 * FOOTER COMPONENT
 * ============================================
 * 
 * Responsabilité :
 * - Affichage du pied de page avec informations de contact
 * - Liens de navigation rapide vers les sections
 * - Icônes des réseaux sociaux (Facebook, Instagram, Twitter, LinkedIn)
 * - Barre de copyright statique en bas
 * 
 * Architecture :
 * - Component standalone (Angular 22)
 * - Utilise RouterLink pour navigation interne
 * - Structure sémantique HTML5 (<footer>)
 * 
 * @example
 * <app-footer></app-footer>
 * 
 * @see ./footer.html - Template avec brand, links, social icons
 * @see ./footer.css - Styles avec animations et responsive
 */

import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

/**
 * Configuration du composant Footer
 * 
 * @selector app-footer - Balise HTML utilisée
 * @standalone Composant autonome
 * @imports RouterLink - Pour liens de navigation
 * @imports RouterLinkActive - Pour détection lien actif
 * @template footer.html - Template associé
 * @styleUrl footer.css - Styles associés
 */
@Component({
  selector: 'app-footer',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})

/**
 * Classe du composant Footer
 * 
 * Cette classe est vide car le footer est principalement
 * déclaratif (template HTML statique + styles CSS).
 * 
 * Responsabilités :
 * - Servir de conteneur pour le template
 * - Importer les directives de navigation
 * - Fournir la structure sémantique du pied de page
 * 
 * @remarks
 * Le footer contient :
 * - .footer__main : Brand + Navigation + Social
 * - .footer-bottom : Copyright avec animation shine
 * 
 * Le copyright est positionné en bas grâce à flexbox
 * avec margin-top: auto sur .footer-bottom.
 * 
 * @see footer.html - Structure HTML complète
 * @see footer.css - Styles et animations
 */
export class Footer {}
