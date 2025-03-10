import { createRouter, createWebHistory } from 'vue-router';
import DataForm from './components/DataForm.vue';
import VehicleQuoteForm from './components/VehicleQuoteForm.vue';
import VehicleQuote from './components/VehicleQuote.vue';
import BandejaCotizaciones from './components/BandejaCotizaciones.vue';
import Corredores from './components/Corredores.vue';
import Sublimites from './components/Sublimites.vue';
import FactorRegion from './components/FactorRegion.vue';
import MercanciasQuoteForm from './components/MercanciasQuoteForm.vue';

const routes = [
  {
    path: '/',
    name: 'DataForm',
    component: DataForm
  },
  {
    path: '/vehiculo',
    name: 'VehicleQuoteForm',
    component: VehicleQuoteForm
  },
  {
    path: '/vehiculo/details',
    name: 'VehicleQuoteDetails',
    component: VehicleQuote
  },
  {
    path: '/mercancias',
    name: 'MercanciasQuoteForm',
    component: MercanciasQuoteForm
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