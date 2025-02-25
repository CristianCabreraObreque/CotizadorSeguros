<template>
  <div class="container mx-auto p-4 mt-16">
    <h1 class="text-2xl font-semibold mb-4 text-gray-800">Bandeja de Cotizaciones</h1>

    <!-- Filters -->
    <div class="bg-gray-100 p-4 rounded-md mb-4 shadow-sm">
      <h2 class="text-lg font-semibold mb-2 text-gray-700">Filtros</h2>
      <div class="grid grid-cols-6 gap-4">
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="numeroReservaFilter">
            Número de reserva
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="numeroReservaFilter" type="text" v-model="filters.numeroReserva">
        </div>
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="rutAseguradoFilter">
            Rut Asegurado
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="rutAseguradoFilter" type="text" v-model="filters.rutAsegurado">
        </div>
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="ejecutivoFilter">
            Ejecutivo
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ejecutivoFilter" type="text" v-model="filters.ejecutivo">
        </div>
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="corredorFilter">
            Corredor
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="corredorFilter" type="text" v-model="filters.corredor">
        </div>
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="regionFilter">
            Región
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="regionFilter" type="text" v-model="filters.region">
        </div>
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="comunaFilter">
            Comuna
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="comunaFilter" type="text" v-model="filters.comuna">
        </div>
        <div class="col-span-6 flex justify-end">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" @click="search">
            Buscar
          </button>
        </div>
      </div>
    </div>

    <!-- Table -->
    <div class="overflow-x-auto shadow-sm">
      <table class="w-full table-auto border-collapse border border-gray-300 rounded-md">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 px-3 py-2 text-left font-medium text-gray-700">Número de reserva</th>
            <th class="border border-gray-300 px-3 py-2 text-left font-medium text-gray-700">Rut Asegurado</th>
            <th class="border border-gray-300 px-3 py-2 text-left font-medium text-gray-700">Nombre asegurado</th>
            <th class="border border-gray-300 px-3 py-2 text-left font-medium text-gray-700">Ocupación</th>
            <th class="border border-gray-300 px-3 py-2 text-left font-medium text-gray-700">Ejecutivo</th>
            <th class="border border-gray-300 px-3 py-2 text-left font-medium text-gray-700">Cargo</th>
            <th class="border border-gray-300 px-3 py-2 text-left font-medium text-gray-700">Corredor</th>
            <th class="border border-gray-300 px-3 py-2 text-left font-medium text-gray-700">Región</th>
            <th class="border border-gray-300 px-3 py-2 text-left font-medium text-gray-700">Comuna</th>
            <th class="border border-gray-300 px-3 py-2 text-left font-medium text-gray-700">Dirección</th>
            <th class="border border-gray-300 px-3 py-2 text-left font-medium text-gray-700">Tipo de Construcción</th>
            <th class="border border-gray-300 px-3 py-2 text-center font-medium text-gray-700">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cotizacion in filteredCotizaciones" :key="cotizacion.numeroReserva" class="hover:bg-gray-200 transition-all even:bg-white">
            <td class="border border-gray-300 px-3 py-2 text-gray-700">{{ cotizacion.numeroReserva }}</td>
            <td class="border border-gray-300 px-3 py-2 text-gray-700">{{ cotizacion.rutAsegurado }}</td>
            <td class="border border-gray-300 px-3 py-2 text-gray-700">{{ cotizacion.nombreAsegurado }}</td>
            <td class="border border-gray-300 px-3 py-2 text-gray-700">{{ cotizacion.ocupacion }}</td>
            <td class="border border-gray-300 px-3 py-2 text-gray-700">{{ cotizacion.ejecutivo }}</td>
            <td class="border border-gray-300 px-3 py-2 text-gray-700">{{ cotizacion.cargo }}</td>
            <td class="border border-gray-300 px-3 py-2 text-gray-700">{{ cotizacion.corredor }}</td>
            <td class="border border-gray-300 px-3 py-2 text-gray-700">{{ cotizacion.region }}</td>
            <td class="border border-gray-300 px-3 py-2 text-gray-700">{{ cotizacion.comuna }}</td>
            <td class="border border-gray-300 px-3 py-2">{{ cotizacion.direccion }}</td>
            <td class="border border-gray-300 px-3 py-2">{{ cotizacion.tipoConstruccion }}</td>
            <td class="border border-gray-300 px-3 py-2 text-center">
              <a href="#" class="text-blue-600 hover:text-blue-800 underline hover:no-underline px-1 transition-all" @click.prevent="editCotizacion(cotizacion)">
                Editar
              </a>
              <a href="#" class="text-red-600 hover:text-red-800 underline hover:no-underline px-1 transition-all" @click.prevent="deleteCotizacion(cotizacion)">
                Eliminar
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Add New Cotizacion Button -->
    <div class="mt-4 flex justify-end">
      <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" @click="addCotizacion">
        Agregar Nueva Cotización
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Mock data (replace with your actual data)
const cotizaciones = ref([
  {
    numeroReserva: '500',
    rutAsegurado: '76.389.705-2',
    nombreAsegurado: 'Inmobiliaria y Constructora Sebastian Emilio Ltda.',
    ocupacion: 'ESPACIOS COMUNES EDIFICIOS',
    ejecutivo: 'Sebastian Mayorga',
    cargo: 'Suscriptor of Property',
    corredor: 'Robo',
    region: 'Metropolitana',
    comuna: 'Nuñoa',
    direccion: 'Avenida P. de Valdivia 4190, Nuñoa',
    tipoConstruccion: 'Sólido'
  },
  {
    numeroReserva: '501',
    rutAsegurado: '12.345.678-9',
    nombreAsegurado: 'Otro Cliente',
    ocupacion: 'Oficina',
    ejecutivo: 'Otro Ejecutivo',
    cargo: 'Gerente',
    corredor: 'Otro Corredor',
    region: 'Valparaíso',
    comuna: 'Viña del Mar',
    direccion: 'Calle Falsa 123',
    tipoConstruccion: 'Mixto'
  }
]);

const filters = ref({
  numeroReserva: '',
  rutAsegurado: '',
  ejecutivo: '',
  corredor: '',
  region: '',
  comuna: ''
});

const filteredCotizaciones = computed(() => {
  return cotizaciones.value.filter(cotizacion => {
    return (
      cotizacion.numeroReserva.toLowerCase().includes(filters.value.numeroReserva.toLowerCase()) &&
      cotizacion.rutAsegurado.toLowerCase().includes(filters.value.rutAsegurado.toLowerCase()) &&
      cotizacion.ejecutivo.toLowerCase().includes(filters.value.ejecutivo.toLowerCase()) &&
      cotizacion.corredor.toLowerCase().includes(filters.value.corredor.toLowerCase()) &&
      cotizacion.region.toLowerCase().includes(filters.value.region.toLowerCase()) &&
      cotizacion.comuna.toLowerCase().includes(filters.value.comuna.toLowerCase())
    );
  });
});

const search = () => {
  // This function is called when the "Buscar" button is clicked.
  // The filteredCotizaciones computed property will automatically update the table.
};

const addCotizacion = () => {
  router.push('/'); // Redirect to the "Nueva Cotización" view
};

const editCotizacion = (cotizacion) => {
  router.push({ path: '/', query: { numeroReserva: cotizacion.numeroReserva } }); // Redirect to "Nueva Cotización" with data
};

const deleteCotizacion = (cotizacion) => {
  if (confirm(`¿Está seguro de que desea eliminar la cotización ${cotizacion.numeroReserva}?`)) {
    // Remove the cotizacion from the cotizaciones array
    cotizaciones.value = cotizaciones.value.filter(c => c.numeroReserva !== cotizacion.numeroReserva);
  }
};
</script>
