<template>
  <aside class="w-64 bg-neutral-100 shadow-md h-screen fixed top-20 left-0" style="z-index: 10;">
    <nav class="py-4">
      <ul>
        <li class="mb-2">
          <router-link to="/" class="block py-2 px-4 text-primary-500 hover:bg-secondary-100 transition-colors duration-200 font-medium rounded-md">
            Nueva Cotización
          </router-link>
        </li>
        <li class="mb-2">
          <router-link to="/bandeja" class="block py-2 px-4 text-primary-500 hover:bg-secondary-100 transition-colors duration-200 font-medium rounded-md">
            Bandeja de Cotizaciones
          </router-link>
        </li>
        <li>
          <button @click="toggleMantenedores" class="block py-2 px-4 text-primary-500 hover:bg-secondary-100 w-full text-left transition-colors duration-200 font-medium rounded-md">
            Mantenedores
          </button>
          <ul v-if="showMantenedores" class="ml-4 mt-1">
            <li class="mb-1">
              <router-link to="/corredores" class="block py-2 px-4 text-primary-500 hover:bg-secondary-100 transition-colors duration-200 rounded-md">
                Corredores
              </router-link>
            </li>
            <li class="mb-1">
              <router-link to="/sublimites" class="block py-2 px-4 text-primary-500 hover:bg-secondary-100 transition-colors duration-200 rounded-md">
                Sublímites
              </router-link>
            </li>
            <li class="mb-1">
              <router-link to="/factor-region" class="block py-2 px-4 text-primary-500 hover:bg-secondary-100 transition-colors duration-200 rounded-md">
                Factor por Región
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { ref } from 'vue';

const showMantenedores = ref(false);

const toggleMantenedores = () => {
  showMantenedores.value = !showMantenedores.value;
};
</script>
