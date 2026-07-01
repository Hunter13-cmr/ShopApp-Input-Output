import { Routes } from '@angular/router';
import { Container } from './components/container/container';

export const routes: Routes = [
  {
    path: '',
    component: Container,
    title: 'Accueil',
  },
  {
    path: 'products',
    component: Container,
    title: 'Produits',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
