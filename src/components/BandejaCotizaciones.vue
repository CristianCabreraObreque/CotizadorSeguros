<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-semibold mb-4 text-gray-800">Bandeja de Cotizaciones</h1>

    <!-- Filters -->
    <div class="bg-gray-100 p-4 rounded-md mb-4 shadow-sm">
      <h2 class="text-lg font-semibold mb-2 text-gray-700">Filtros</h2>
      <div class="grid grid-cols-7 gap-4">
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="numeroReservaFilter">
            Número de reserva
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" id="numeroReservaFilter" type="text" v-model="filters.numeroReserva">
        </div>
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="rutAseguradoFilter">
            Rut Asegurado
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" id="rutAseguradoFilter" type="text" v-model="filters.rutAsegurado">
        </div>
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="ejecutivoFilter">
            Ejecutivo
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" id="ejecutivoFilter" type="text" v-model="filters.ejecutivo">
        </div>
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="corredorFilter">
            Corredor
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" id="corredorFilter" type="text" v-model="filters.corredor">
        </div>
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="regionFilter">
            Región
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" id="regionFilter" type="text" v-model="filters.region">
        </div>
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="comunaFilter">
            Comuna
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" id="comunaFilter" type="text" v-model="filters.comuna">
        </div>
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="tipoCotizacionFilter">
            Tipo Cotización
          </label>
          <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" id="tipoCotizacionFilter" v-model="filters.tipoCotizacion">
            <option value="">Todos</option>
            <option value="Condominio">Condominio</option>
            <option value="Vehículo">Vehículo</option>
          </select>
        </div>
        <div class="col-span-7 flex justify-end">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm" type="button" @click="search">
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
            <th class="border border-gray-300 px-3 py-2 text-left font-medium text-gray-700 text-sm">Número de reserva</th>
            <th class="border border-gray-300 px-3 py-2 text-left font-medium text-gray-700 text-sm">Rut Asegurado</th>
            <th class="border border-gray-300 px-3 py-2 text-left font-medium text-gray-700 text-sm">Nombre asegurado</th>
            <th class="border border-gray-300 px-3 py-2 text-left font-medium text-gray-700 text-sm">Ocupación</th>
            <th class="border border-gray-300 px-3 py-2 text-left font-medium text-gray-700 text-sm">Ejecutivo</th>
            <th class="border border-gray-300 px-3 py-2 text-left font-medium text-gray-700 text-sm">Cargo</th>
            <th class="border border-gray-300 px-3 py-2 text-left font-medium text-gray-700 text-sm">Corredor</th>
            <th class="border border-gray-300 px-3 py-2 text-left font-medium text-gray-700 text-sm">Región</th>
            <th class="border border-gray-300 px-3 py-2 text-left font-medium text-gray-700 text-sm">Comuna</th>
            <th class="border border-gray-300 px-3 py-2 text-left font-medium text-gray-700 text-sm">Dirección</th>
            <th class="border border-gray-300 px-3 py-2 text-left font-medium text-gray-700 text-sm">Tipo de Construcción</th>
            <th class="border border-gray-300 px-3 py-2 text-left font-medium text-gray-700 text-sm">Tipo Cotización</th>
            <th class="border border-gray-300 px-3 py-2 text-center font-medium text-gray-700 text-sm">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cotizacion in filteredCotizaciones" :key="cotizacion.numeroReserva" class="hover:bg-gray-200 transition-all even:bg-white">
            <td class="border border-gray-300 px-3 py-2 text-gray-700 text-sm">{{ cotizacion.numeroReserva }}</td>
            <td class="border border-gray-300 px-3 py-2 text-gray-700 text-sm">{{ cotizacion.rutAsegurado }}</td>
            <td class="border border-gray-300 px-3 py-2 text-gray-700 text-sm">{{ cotizacion.nombreAsegurado }}</td>
            <td class="border border-gray-300 px-3 py-2 text-gray-700 text-sm">{{ cotizacion.ocupacion }}</td>
            <td class="border border-gray-300 px-3 py-2 text-gray-700 text-sm">{{ cotizacion.ejecutivo }}</td>
            <td class="border border-gray-300 px-3 py-2 text-gray-700 text-sm">{{ cotizacion.cargo }}</td>
            <td class="border border-gray-300 px-3 py-2 text-gray-700 text-sm">{{ cotizacion.corredor }}</td>
            <td class="border border-gray-300 px-3 py-2 text-gray-700 text-sm">{{ cotizacion.region }}</td>
            <td class="border border-gray-300 px-3 py-2 text-gray-700 text-sm">{{ cotizacion.comuna }}</td>
            <td class="border border-gray-300 px-3 py-2 text-sm">{{ cotizacion.direccion }}</td>
            <td class="border border-gray-300 px-3 py-2 text-sm">{{ cotizacion.tipoConstruccion }}</td>
            <td class="border border-gray-300 px-3 py-2 text-sm">{{ cotizacion.tipoCotizacion }}</td>
            <td class="border border-gray-300 px-3 py-2 text-center">
              <div class="flex justify-center space-x-2">
                <router-link :to="{ path: cotizacion.tipoCotizacion === 'Vehículo' ? '/vehiculo' : '/', query: { numeroReserva: cotizacion.numeroReserva } }" class="inline-block bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded focus:outline-none focus:shadow-outline transition-colors duration-200 text-sm">
                  Editar
                </router-link>
                <a href="#" class="inline-block bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded focus:outline-none focus:shadow-outline transition-colors duration-200 text-sm" @click.prevent="deleteCotizacion(cotizacion)">
                  Eliminar
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Add New Cotizacion Button -->
    <div class="mt-4 flex justify-end">
      <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm" type="button" @click="addCotizacion">
        Agregar Nueva Cotización
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Mock data
const cotizaciones = ref([
  {
    numeroReserva: '500',
    rutAsegurado: '76.389.705-2',
    nombreAsegurado: 'Inmobiliaria y Constructora Sebastian Emilio Ltda.',
    ocupacion: 'ESPACIOS COMUNES EDIFICIOS',
    ejecutivo: 'Sebastian Mayorga',
    cargo: 'Suscriptor of Property',
    corredor: 'Ana María Rodríguez',
    region: 'Metropolitana',
    comuna: 'Nuñoa',
    direccion: 'Avenida P. de Valdivia 4190, Nuñoa',
    tipoConstruccion: 'Sólido',
    tipoCotizacion: 'Condominio'
  },
  {
    numeroReserva: '501',
    rutAsegurado: '12.345.678-9',
    nombreAsegurado: 'Carlos Mendoza',
    ocupacion: 'Oficina',
    ejecutivo: 'María González',
    cargo: 'Gerente',
    corredor: 'Juan Pablo Soto',
    region: 'Valparaíso',
    comuna: 'Viña del Mar',
    direccion: 'Calle Falsa 123',
    tipoConstruccion: 'Mixto',
    tipoCotizacion: 'Condominio'
  },
  {
    numeroReserva: '502',
    rutAsegurado: '14.399.722-7',
    nombreAsegurado: 'Laura Saavedra',
    ocupacion: 'Particular',
    ejecutivo: 'Pedro Martínez',
    cargo: 'Ejecutivo Comercial',
    corredor: 'Carolina Muñoz',
    region: 'Metropolitana',
    comuna: 'Las Condes',
    direccion: 'Av. Apoquindo 4500',
    tipoConstruccion: 'N/A',
    tipoCotizacion: 'Vehículo'
  },
  {
    numeroReserva: '503',
    rutAsegurado: '15.678.901-2',
    nombreAsegurado: 'Roberto Jiménez',
    ocupacion: 'Particular',
    ejecutivo: 'Andrea Silva',
    cargo: 'Ejecutivo Senior',
    corredor: 'Felipe Contreras',
    region: 'Metropolitana',
    comuna: 'Providencia',
    direccion: 'Av. Providencia 1500',
    tipoConstruccion: 'N/A',
    tipoCotizacion: 'Vehículo'
  },
  {
    numeroReserva: '504',
    rutAsegurado: '9.876.543-2',
    nombreAsegurado: 'Constructora Los Andes S.A.',
    ocupacion: 'ESPACIOS COMUNES EDIFICIOS',
    ejecutivo: 'Diego Ramírez',
    cargo: 'Suscriptor Senior',
    corredor: 'Patricia Valenzuela',
    region: 'Metropolitana',
    comuna: 'Santiago',
    direccion: 'Alameda 1000',
    tipoConstruccion: 'Sólido',
    tipoCotizacion: 'Condominio'
  }
]);

const filters = ref({
  numeroReserva: '',
  rutAsegurado: '',
  ejecutivo: '',
  corredor: '',
  region: '',
  comuna: '',
  tipoCotizacion: ''
});

const filteredCotizaciones = computed(() => {
  return cotizaciones.value.filter(cotizacion => {
    return (
      cotizacion.numeroReserva.toLowerCase().includes(filters.value.numeroReserva.toLowerCase()) &&
      cotizacion.rutAsegurado.toLowerCase().includes(filters.value.rutAsegurado.toLowerCase()) &&
      cotizacion.ejecutivo.toLowerCase().includes(filters.value.ejecutivo.toLowerCase()) &&
      cotizacion.corredor.toLowerCase().includes(filters.value.corredor.toLowerCase()) &&
      cotizacion.region.toLowerCase().includes(filters.value.region.toLowerCase()) &&
      cotizacion.comuna.toLowerCase().includes(filters.value.comuna.toLowerCase()) &&
      (filters.value.tipoCotizacion === '' || cotizacion.tipoCotizacion === filters.value.tipoCotizacion)
    );
  });
});

const search = () => {
  // The filteredCotizaciones computed property will automatically update the table
};

const addCotizacion = () => {
  router.push('/');
};

const deleteCotizacion = (cotizacion) => {
  if (confirm(`¿Está seguro de que desea eliminar la cotización ${cotizacion.numeroReserva}?`)) {
    cotizaciones.value = cotizaciones.value.filter(c => c.numeroReserva !== cotizacion.numeroReserva);
  }
};
</script>