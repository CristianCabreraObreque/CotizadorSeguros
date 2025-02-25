import { createRouter, createWebHistory } from 'vue-router';
import DataForm from './components/DataForm.vue';
import BandejaCotizaciones from './components/BandejaCotizaciones.vue';
import Corredores from './components/Corredores.vue';
import Sublimites from './components/Sublimites.vue';
import FactorRegion from './components/FactorRegion.vue';

const routes = [
  {
    path: '/',
    name: 'DataForm',
    component: DataForm
  },
  {
    path: '/bandeja',
    name: 'BandejaCotizaciones',
    component: BandejaCotizaciones
  },
  {
    path: '/corredores',
    name: 'Corredores',
    component: Corredores
  },
  {
    path: '/sublimites',
    name: 'Sublimites',
    component: Sublimites
  },
  {
    path: '/factor-region',
    name: 'FactorRegion',
    component: FactorRegion
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
