# 🚀 Quick Start - Shop App

![Angular](https://img.shields.io/badge/Angular-22-red?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-blue?style=for-the-badge&logo=typescript)
![SSR](https://img.shields.io/badge/SSR-Enabled-green?style=for-the-badge&logo=server)
![Status](https://img.shields.io/badge/status-active-success?style=for-the-badge)
![License](https://img.shields.io/badge/license-academic-lightgrey?style=for-the-badge)

---

## ⚡ Installation en 3 étapes

```bash
# 1. Cloner le dépôt
git clone https://github.com/Hunter13-cmr/ShopApp-Input-Output.git
cd shop-app

# 2. Installer les dépendances
npm install
# ou
yarn install

# 3. Lancer le serveur de développement
npm start
# ou
yarn start
```

👉 **Accès** : http://localhost:8080

---

## ✅ Vérifications rapides

- [ ] Header animé avec navigation sticky
- [ ] Hero section avec animations d'entrée
- [ ] Recherche filtre les produits en temps réel
- [ ] 8 produits affichés avec hover effects
- [ ] Panier s'ouvre/ferme avec overlay flou
- [ ] Ajout produits + gestion quantités
- [ ] Footer avec icônes sociales SVG
- [ ] Responsive : mobile, tablette, desktop

---

## 📁 Structure rapide du projet

```
src/app/components/
├── header/          → Navigation sticky avec animations
├── container/       → Store principal (panier + recherche)
├── product-list/    → Catalogue 8 produits
├── product-item/    → Carte produit individuelle
└── footer/          → Pied de page avec copyright

src/app/models/
├── product.ts       → Interface Product
└── cart-item.ts     → Interface CartItem
```

---

## 🛠️ Commandes utiles

```bash
# Développement avec SSR
npm start

# Build production
npm run build

# Preview build SSR
npm run serve:ssr:shop-app

# Tests unitaires
npm test
```

---

## 🎨 Technologies principales

- **Angular 22** : Standalone components, Signals, @for/@if
- **TypeScript 6.0** : Typage strict, interfaces
- **CSS natif** : Variables CSS, animations, responsive
- **SSR** : Angular Universal avec prerender

---

## ⏱️ Durée d'installation

**~2 minutes** si les dépendances sont déjà installées.

### Prérequis
- Node.js 18+
- npm ou yarn
- Git (pour cloner)

---

## 📚 Support

Pour toute question ou problème :
1. Consulter le [guide complet](guide.md)
2. Vérifier les [issues GitHub](https://github.com/Hunter13-cmr/ShopApp-Input-Output/issues)
3. Lire la [documentation technique](implementation.md)

---

**Projet académique** - Formation Angular Talent Lab 2026 (Orange Digital Center)

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
- [ ] Create implementation.md
- [ ] Create guide.md
- [ ] Create checklist.md
</parameter>
</write_to_file>