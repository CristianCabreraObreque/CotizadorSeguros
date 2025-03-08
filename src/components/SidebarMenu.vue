<template>
  <aside class="w-64 bg-neutral-100 text-gray-700 shadow-md h-screen fixed top-16 left-0 z-10">
    <nav class="py-6">
      <ul>
        <li class="mb-2">
          <router-link to="/" class="flex items-center py-2 px-4 hover:bg-gray-200 transition-colors duration-200 font-medium rounded-md">
            <HomeIcon class="h-5 w-5 mr-2" />
            Cotización Condominio
          </router-link>
        </li>
        <li class="mb-2">
          <router-link to="/vehiculo" class="flex items-center py-2 px-4 hover:bg-gray-200 transition-colors duration-200 font-medium rounded-md">
            <TruckIcon class="h-5 w-5 mr-2" />
            Cotización Vehículo
          </router-link>
        </li>
        <li class="mb-2">
          <router-link to="/bandeja" class="flex items-center py-2 px-4 hover:bg-gray-200 transition-colors duration-200 font-medium rounded-md">
            <InboxIcon class="h-5 w-5 mr-2" />
            Bandeja de Cotizaciones
          </router-link>
        </li>
        <li>
          <button @click="toggleMantenedores" class="flex items-center py-2 px-4 hover:bg-gray-200 w-full text-left transition-colors duration-200 font-medium rounded-md">
            <CogIcon class="h-5 w-5 mr-2" />
            Mantenedores
            <ChevronDownIcon :class="['h-4 w-4 ml-auto transform transition-transform duration-200', { 'rotate-180': showMantenedores }]" />
          </button>
          <ul v-if="showMantenedores" class="ml-4 mt-1">
            <li class="mb-1">
              <router-link to="/corredores" class="flex items-center py-2 px-4 hover:bg-gray-200 transition-colors duration-200 rounded-md">
                <UsersIcon class="h-4 w-4 mr-2" />
                Corredores
              </router-link>
            </li>
            <li class="mb-1">
              <router-link to="/sublimites" class="flex items-center py-2 px-4 hover:bg-gray-200 transition-colors duration-200 rounded-md">
                <ScaleIcon class="h-4 w-4 mr-2" />
                Sublímites
              </router-link>
            </li>
            <li class="mb-1">
              <router-link to="/factor-region" class="flex items-center py-2 px-4 hover:bg-gray-200 transition-colors duration-200 rounded-md">
                <MapIcon class="h-4 w-4 mr-2" />
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
import { HomeIcon, InboxIcon, CogIcon, UsersIcon, ScaleIcon, MapIcon, ChevronDownIcon, TruckIcon } from '@heroicons/vue/solid'

const showMantenedores = ref(false);

const toggleMantenedores = () => {
  showMantenedores.value = !showMantenedores.value;
};
</script>