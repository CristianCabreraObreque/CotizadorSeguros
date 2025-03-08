<template>
  <div class="overflow-x-auto">
    <table class="w-full table-auto border-collapse border border-gray-300">
      <thead>
        <tr class="bg-gray-100">
          <th class="border border-gray-300 px-4 py-2">Nombre</th>
          <th class="border border-gray-300 px-4 py-2">Valor</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td class="border border-gray-300 px-4 py-2">{{ item.nombre }}</td>
          <td class="border border-gray-300 px-4 py-2">{{ item.valor }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const data = ref([
  { nombre: 'Número de reserva', valor: '500' },
  { nombre: 'Nombre', valor: 'Inmobiliaria' },
  { nombre: 'Dirección del riesgo', valor: 'Avenida P. de Valdivia 4809, Nuñoa' },
  // ... add more data items here
]);
</script>
