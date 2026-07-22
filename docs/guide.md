# 📘 Guide - Shop App

![Angular](https://img.shields.io/badge/Angular-22-red?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-blue?style=for-the-badge&logo=typescript)
![SSR](https://img.shields.io/badge/SSR-Enabled-green?style=for-the-badge&logo=server)
![Status](https://img.shields.io/badge/status-active-success?style=for-the-badge)
![License](https://img.shields.io/badge/license-academic-lightgrey?style=for-the-badge)

---

## 📑 Table des matières

1. [Préparation du poste](#préparation-du-poste)
2. [Compréhension des modules](#compréhension-des-modules)
3. [Fonctionnement des Signals](#fonctionnement-des-signals)
4. [Responsive design](#responsive-design)
5. [Gestion des images](#gestion-des-images)
6. [Tests et validation](#tests-et-validation)

---

## 💻 Préparation du poste

```bash
# Installation de Node.js 18+ (https://nodejs.org/)
node --version  # doit afficher v18+

# Installation de Yarn
yarn --version  # 1.22.x recommandé

# Initialisation
yarn install
yarn start
```

## 🧩 Compréhension des modules

| Module | Responsabilité | Conteneur |
|---|---|---|
| `header` | Navigation + logo | `.header` |
| `container` | Store panier + recherche | `.container` |
| `product-list` | Catalogue produits | `.products-grid` |
| `product-item` | Carte produit individuelle | `.product-card` |
| `footer` | Pied de page + copyright | `.footer` |

## ⚡ Fonctionnement des Signals

### Principe
- Les **signals** sont des valeurs réactives
- Angular détecte les changements et met à jour le template
- Syntaxe : `signal<Valeur>(valeurInitiale)`

### Lecture
```typescript
// Avec parenthèses ()
const items = this.cartItems();
```

### Écriture
```typescript
// .set() pour remplacer complètement
this.isCartOpen.set(true);

// .update() pour modifier basé sur la valeur actuelle
this.cartItems.update(items => [...items, newItem]);
```

### Pourquoi les signals ?
- **Réactivité** : Mise à jour automatique du DOM
- **Performance** : Mise à jour ciblée, pas de re-render complet
- **Prédictibilité** : Flux de données unidirectionnel
- **Typage** : Fortement typés avec TypeScript

## 📱 Responsive design

### Breakpoints utilisés

| Breakpoint | Cible | Modification principale |
|---|---|---|
| `>768px` | Desktop | Layout horizontal, padding large |
| `≤768px` | Tablette | Padding réduit, gap 2rem |
| `≤576px` | Mobile | Stack vertical, padding réduit |

### Mobile-first
- Styles de base pour mobile
- `@media (min-width)` pour tablettes/desktop
- Flexbox pour layouts adaptatifs
- Images responsives avec `object-fit: cover`

### Exemples concrets

#### Header
```css
/* Mobile : stack vertical */
.header {
  flex-direction: column;
  gap: 1rem;
}

/* Desktop : horizontal */
@media (min-width: 768px) {
  .header {
    flex-direction: row;
    gap: 2.5rem;
  }
}
```

#### Footer
```css
/* Mobile : colonne unique */
.footer__main {
  flex-direction: column;
  align-items: center;
}

/* Desktop : 3 colonnes */
@media (min-width: 768px) {
  .footer__main {
    flex-direction: row;
    justify-content: space-between;
  }
}
```

## 🖼️ Gestion des images

### Emplacement
- Produits : `src/assets/images/`
- Formats supportés : jpg, jpeg, png, webp

### Optimisation
- `loading="lazy"` pour chargement différé
- `object-fit: cover` pour recadrage intelligent
- Tailles fixes pour éviter les décalages (CLS)

### Exemple
```html
<img 
  [src]="product().image" 
  [alt]="product().name"
  loading="lazy"
/>
```

```css
.product-card img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
```

## 🧪 Tests et validation

### Checklist avant commit

- [ ] `yarn build` passe sans erreur
- [ ] Aucune erreur console (F12)
- [ ] Responsive testé sur 3 tailles (mobile, tablette, desktop)
- [ ] SSR prerender vérifié
- [ ] Liens naviguent vers les bonnes sections
- [ ] Images chargent correctement
- [ ] Animations fluides (60fps)
- [ ] Accessibilité : aria-labels présents
- [ ] Panier : ajout, suppression, quantités OK
- [ ] Recherche : filtrage fonctionnel

### Commandes de diagnostic

```bash
# Build avec logs détaillés
yarn build 2>&1 | tee build.log

# Vérifier les tailles de bundle
ls -lh dist/shop-app/browser/

# Tester SSR
yarn serve:ssr:shop-app
```

### Tests manuels

#### Desktop (>768px)
- [ ] Header sticky reste visible au scroll
- [ ] Navigation horizontale fonctionne
- [ ] Hover effects sur cartes produits
- [ ] Modal panier s'ouvre/ferme
- [ ] Recherche filtre les produits
- [ ] Footer : 3 colonnes visibles

#### Tablette (≤768px)
- [ ] Header s'adapte (padding réduit)
- [ ] Grille produits : 2-3 colonnes
- [ ] Footer : spacing réduit
- [ ] Modal panier : scroll interne

#### Mobile (≤576px)
- [ ] Header : stack vertical
- [ ] Navigation : liens wrap
- [ ] Grille produits : 1 colonne
- [ ] Footer : stack vertical centré
- [ ] Boutons : taille tactile (min 44px)
- [ ] Panier : quantité +/- accessibles

## ✅ Bonnes pratiques

### Code Angular
- Components standalone (pas de NgModule)
- Interfaces pour typer les données
- JSDoc sur méthodes complexes
- Signals pour state management
- Immuabilité (spread, .map(), .filter())

### CSS
- Variables CSS pour couleurs
- Mobile-first approach
- Animations fluides (cubic-bezier)
- Comments pour sections
- Noms kebab-case

### Git
- Commits atomiques
- Messages conventionnels (feat:, fix:, docs:)
- Branches par feature

## 🔧 Dépannage

### Problème : FontAwesome manquant
**Solution** : Le projet utilise des SVG inline, pas de dépendance FontAwesome.

### Problème : Images ne chargent pas
**Solutions** :
1. Vérifier le chemin dans `assets/images/`
2. Vérifier l'attribut `src` dans le template
3. Vérifier la console (F12) pour erreurs 404

### Problème : Build échoue
**Solutions** :
1. Supprimer `node_modules/` et `.angular/`
2. Relancer `yarn install`
3. Vérifier les erreurs TypeScript

### Problème : Panier ne s'ouvre pas
**Solutions** :
1. Vérifier que `isCartOpen` est bien un signal
2. Vérifier `(click)="isCartOpen.set(true)"`
3. Vérifier la condition `@if (isCartOpen())`

## ⚡ Performance

### Optimisations appliquées
- Standalone components (pas de NgModule)
- Lazy loading implicite par routes
- Images avec `loading="lazy"`
- CSS minifié en production
- Tree-shaking activé
- Signals pour mises à jour ciblées

### Budgétisation
- **Initial bundle** : < 500KB (warning), < 1MB (error)
- **Component styles** : < 4KB (warning), < 8KB (error)

## ♿ Accessibilité

### Checklist WCAG
- [ ] Contraste suffisant (ratio 4.5:1 minimum)
- [ ] Navigation clavier possible
- [ ] Focus visible sur éléments interactifs
- [ ] Images avec alt text
- [ ] ARIA labels sur boutons icônes
- [ ] Structure sémantique HTML5

### Exemples implémentés
```html
<!-- ARIA label -->
<button aria-label="Fermer le panier">X</button>

<!-- Role dialog -->
<div role="dialog" aria-modal="true" aria-label="Panier">

<!-- Alt text -->
<img [src]="product().image" [alt]="product().name" />
```

---

---

## 👨‍💻 Auteur

Développé par **ELOCK SADRACK FIDELE**

Projet Angular – Formation Développement Web Front-end Angular Talent Lab 2026 (Orange Digital Center)

---

## 📜 Licence

**Projet académique – libre d'utilisation à des fins éducatives.**

---

<p align="center">
  Fait avec ❤️ à Douala
</p>
</parameter>
<parameter name="task_progress">
- [x] Explore the project structure to understand components
- [x] Identify HTML templates and CSS styles that need responsive design
- [x] Analyze current layout structure (navigation, product lists, footer, etc.)
- [x] Add responsive CSS (media queries, flexible layouts)
- [x] Update HTML templates with responsive units (flex/grid, relative units)
- [x] Fix cart scrolling issue on mobile
- [x] Remove hamburger menu and associated code
- [x] Enhance header design with animations and visual effects
- [x] Enhance product cards design with premium styling
- [x] Comment footer CSS with design system explanations
- [x] Comment container CSS with design system explanations
- [x] Comment app.css with design system explanations
- [x] Replace FontAwesome icons with SVG alternatives
- [x] Compile and verify the application
- [x] Fix footer HTML structure (footer-bottom inside footer tag)
- [x] Fix duplicate content in footer.css
- [x] Adjust copyright positioning at bottom of footer
- [x] Wrap footer main content in .footer__main container
- [x] Reduce footer size and make copyright bar static at bottom
- [x] Fix copyright positioning with flex: 1 on main
- [x] Make footer-bottom full width and stick to bottom edge
- [x] Comment product model with JSDoc
- [x] Comment container component TypeScript
- [x] Comment footer component TypeScript
- [x] Comment product-list component TypeScript
- [x] Comment cart-item model
- [x] Fix header.html corruption
- [x] Comment product-list HTML template
- [x] Comment container HTML template
- [x] Comment product-item HTML template
- [x] Comment footer HTML template
- [x] Create README.md
- [x] Create docs folder
- [x] Create quick_start.md
- [x] Create implementation.md
- [x] Create guide.md
- [ ] Create checklist.md
</parameter>
</write_to_file>