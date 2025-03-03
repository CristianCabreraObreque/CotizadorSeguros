<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-semibold mb-4 text-gray-800">Corredores</h1>

    <!-- Filters -->
    <div class="bg-gray-100 p-4 rounded-md mb-4 shadow-sm">
      <h2 class="text-lg font-semibold mb-2 text-gray-700">Filtros</h2>
      <div class="grid grid-cols-4 gap-4">
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="rutFilter">
            Rut
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" id="rutFilter" type="text" v-model="filters.rut">
        </div>
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="nombreFilter">
            Nombre
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" id="nombreFilter" type="text" v-model="filters.nombre">
        </div>
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="emailFilter">
            Email
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" id="emailFilter" type="text" v-model="filters.email">
        </div>
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="celularFilter">
            Celular
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" id="celularFilter" type="text" v-model="filters.celular">
        </div>
      </div>
      <div class="flex justify-end mt-4">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm" type="button" @click="search">
          Buscar
        </button>
      </div>
    </div>

    <!-- Table -->
    <div class="overflow-x-auto shadow-sm">
      <table class="w-full table-auto border-collapse border border-gray-300 rounded-md">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 px-3 py-2 text-left font-medium text-gray-700 text-sm">Rut</th>
            <th class="border border-gray-300 px-3 py-2 text-left font-medium text-gray-700 text-sm">Nombre</th>
            <th class="border border-gray-300 px-3 py-2 text-left font-medium text-gray-700 text-sm">Email</th>
            <th class="border border-gray-300 px-3 py-2 text-left font-medium text-gray-700 text-sm">Celular</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="corredor in filteredCorredores" :key="corredor.rut" class="hover:bg-gray-200 transition-all even:bg-white">
            <td class="border border-gray-300 px-3 py-2 text-gray-700 text-sm">{{ corredor.rut }}</td>
            <td class="border border-gray-300 px-3 py-2 text-gray-700 text-sm">{{ corredor.nombre }}</td>
            <td class="border border-gray-300 px-3 py-2 text-gray-700 text-sm">{{ corredor.email }}</td>
            <td class="border border-gray-300 px-3 py-2 text-gray-700 text-sm">{{ corredor.celular }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Mock data (replace with your actual data)
const corredores = ref([
  { rut: '12.345.678-9', nombre: 'Juan Pérez', email: 'juan.perez@example.com', celular: '+56912345678' },
  { rut: '98.765.432-1', nombre: 'María González', email: 'maria.gonzalez@example.com', celular: '+56998765432' },
  { rut: '11.222.333-4', nombre: 'Pedro López', email: 'pedro.lopez@example.com', celular: '+56911223344' }
]);

const filters = ref({
  rut: '',
  nombre: '',
  email: '',
  celular: ''
});

const filteredCorredores = computed(() => {
  return corredores.value.filter(corredor => {
    return (
      corredor.rut.toLowerCase().includes(filters.value.rut.toLowerCase()) &&
      corredor.nombre.toLowerCase().includes(filters.value.nombre.toLowerCase()) &&
      corredor.email.toLowerCase().includes(filters.value.email.toLowerCase()) &&
      corredor.celular.toLowerCase().includes(filters.value.celular.toLowerCase())
    );
  });
});

const search = () => {
  // This function is called when the "Buscar" button is clicked.
  // The filteredCorredores computed property will automatically update the table.
};
</script>
