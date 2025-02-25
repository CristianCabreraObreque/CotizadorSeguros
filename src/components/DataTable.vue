<template>
  <div class="overflow-x-auto">
    <table class="w-full table-auto border-collapse border border-gray-300">
      <thead>
        <tr class="bg-gray-100">
          <th v-for="header in headers" :key="header" class="border border-gray-300 px-4 py-2">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in data" :key="rowIndex" class="hover:bg-gray-100">
          <td v-for="(cell, columnIndex) in row" :key="columnIndex" class="border border-gray-300 px-4 py-2">
            {{ cell }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Define headers (replace with your actual headers)
const headers = ref([
  'Número de reserva', 'Nombre', 'Rut', 'Código Cotizacion', 'Responsable Ejecutivo (Cia)', 'Cargo', 'Moneda', 'Corredor', 'Afecta', 'Neta', 'IVA', 'Bruta', 'Condicion', 'Afecta', 'Incidencia retroactividad máxima 15 días', 'Vigencia solo por 12 meses', 'Suma de siniestros (últimos 6 meses)', 'Mayor a 200 metros de la costa', 'Año de construcción', 'Puede ser cotizado', 'Menor a 30 años', 'Dirección del riesgo', 'Región', 'Comuna', 'Tipo de construcción', 'Espacios comunes', 'General Cotización', 'Espacios Comunes', 'Unidades', 'Responsable Civil', 'Suma de siniestros (últimos 6 meses)', 'Mayor a 200 metros de la costa', 'Año de construcción', 'Puede ser cotizado', 'Menor a 30 años', 'Dirección del riesgo', 'Región', 'Comuna', 'Tipo de construcción', 'Espacios comunes', 'General Cotización', 'Espacios Comunes', 'Unidades'
]);

// Placeholder data.  REPLACE THIS WITH YOUR DATA FETCHING LOGIC
const data = ref([
  [
    '500', 'Inmobiliaria', '76.389.785-2', '103', 'Sebastian Mayorga', 'Suscriptor of Property', 'UF', 'Robo', '0.35', '124.400', '15.59', '472.467', '15%', '0%', '24/02/2025', '12 Meses', '2.000', 'Si', '2000', 'Si', 'Si', 'Avenida P. de Valdivia 4809, Nuñoa', 'Metropolitana', 'Nuñoa', 'Sólido', '100.000.000', '472.467', '100', '1', 'Robo', '2.000', 'Si', '2000', 'Si', 'Si', 'Avenida P. de Valdivia 4809, Nuñoa', 'Metropolitana', 'Nuñoa', 'Sólido', '100.000.000', '472.467', '100', '1'
  ],
  // ... more rows
]);
</script>
