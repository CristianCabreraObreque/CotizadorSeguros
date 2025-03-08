import { createRouter, createWebHistory } from 'vue-router';
import NuevaCotizacion from '../views/NuevaCotizacion.vue';
import BandejaCotizaciones from '../views/BandejaCotizaciones.vue';
import Corredores from '../views/Corredores.vue';
import Sublimites from '../views/Sublimites.vue';
import FactorRegion from '../views/FactorRegion.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: NuevaCotizacion },
    { path: '/bandeja', component: BandejaCotizaciones },
    { path: '/corredores', component: Corredores },
    { path: '/sublimites', component: Sublimites },
    { path: '/factor-region', component: FactorRegion },
  ]
});

export default router;
