<template>
  <header class="bg-white shadow-md fixed top-0 left-0 w-full z-10">
    <div class="container mx-auto py-3 px-6 flex items-center justify-between">
      <!-- Logo / System Name -->
      <div class="flex items-center">
        <img src="https://ingws.cl/doc/logo_contempora-removebg.png" alt="Contempora Logo" class="h-8 mr-2" />
        <div class="text-2xl font-semibold text-primary-500 tracking-wide">
          Cotización de Seguros
        </div>
      </div>

      <!-- User Menu -->
      <div class="flex items-center space-x-4">
        <span v-if="isLoggedIn" class="text-neutral-600">Usuario: {{ username }}</span>
        <button v-if="isLoggedIn" class="bg-secondary-500 hover:bg-secondary-700 text-white font-bold py-1 px-2 rounded text-sm focus:outline-none focus:shadow-outline transition-colors duration-200 uppercase tracking-widest">
          Cerrar Sesión
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isLoggedIn = ref(true); // Mock authentication state
const username = ref('Juan Pérez'); // Mock username

const logout = () => {
  // Implement your logout logic here
  isLoggedIn.value = false;
  username.value = '';
  alert('Sesión cerrada.');
};
</script>
