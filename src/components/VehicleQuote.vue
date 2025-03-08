<template>
  <div class="container mx-auto p-4 bg-gray-50">
    <!-- Plan Seleccionado -->
    <div class="bg-blue-100 p-6 rounded-lg shadow-md mb-6">
      <h2 class="text-xl font-bold mb-4 text-gray-800">Plan Seleccionado</h2>
      <div class="grid grid-cols-5 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-600">Compañía</label>
          <p class="mt-1 font-semibold">{{ planData.company }}</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-600">Producto</label>
          <p class="mt-1 font-semibold">{{ planData.product }}</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-600">Plan</label>
          <p class="mt-1 font-semibold">{{ planData.plan }}</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-600">Prima Bruta</label>
          <p class="mt-1 font-semibold">UF {{ planData.primaBruta }}</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-600">Marca/Modelo</label>
          <p class="mt-1 font-semibold">{{ planData.marcaModelo }}</p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-6">
      <!-- Left Column -->
      <div class="space-y-6">
        <!-- Datos Riesgo -->
        <div class="bg-blue-100 p-6 rounded-lg shadow-md">
          <h3 class="text-lg font-semibold mb-4 text-gray-800">Datos Riesgo</h3>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">N° Patente</label>
              <input type="text" v-model="formData.patente" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">Motor</label>
              <input type="text" v-model="formData.motor" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">Chasis</label>
              <input type="text" v-model="formData.chasis" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">Color</label>
              <select v-model="formData.color" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
                <option value="">Seleccione</option>
                <option v-for="color in colors" :key="color" :value="color">{{ color }}</option>
              </select>
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">N° Factura</label>
              <input type="text" v-model="formData.numeroFactura" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">Fecha de factura</label>
              <input type="date" v-model="formData.fechaFactura" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">Vigencia de póliza</label>
              <input type="date" v-model="formData.vigenciaPoliza" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
            </div>
          </div>
        </div>

        <!-- Asegurado/Tomador -->
        <div class="bg-blue-100 p-6 rounded-lg shadow-md">
          <h3 class="text-lg font-semibold mb-4 text-gray-800">Asegurado/Tomador</h3>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">RUT</label>
              <input type="text" v-model="formData.rutAsegurado" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">Fecha Nac.</label>
              <input type="date" v-model="formData.fechaNacAsegurado" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">Primer Nombre</label>
              <input type="text" v-model="formData.primerNombreAsegurado" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">Segundo Nombre</label>
              <input type="text" v-model="formData.segundoNombreAsegurado" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">Primer Apellido</label>
              <input type="text" v-model="formData.primerApellidoAsegurado" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">Segundo Apellido</label>
              <input type="text" v-model="formData.segundoApellidoAsegurado" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">Dirección</label>
              <input type="text" v-model="formData.direccionAsegurado" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">Región</label>
              <select v-model="formData.regionAsegurado" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
                <option value="">Seleccione</option>
                <option v-for="region in regions" :key="region" :value="region">{{ region }}</option>
              </select>
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">Comuna</label>
              <select v-model="formData.comunaAsegurado" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
                <option value="">Seleccione</option>
                <option v-for="comuna in comunas" :key="comuna" :value="comuna">{{ comuna }}</option>
              </select>
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">Teléfono (9 Dígitos)</label>
              <div class="flex">
                <span class="inline-flex items-center px-3 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                  +56
                </span>
                <input type="tel" v-model="formData.telefonoAsegurado" class="shadow appearance-none border rounded-r w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
              </div>
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">Teléfono Móvil (9 Dígitos)</label>
              <div class="flex">
                <span class="inline-flex items-center px-3 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                  +56
                </span>
                <input type="tel" v-model="formData.movilAsegurado" class="shadow appearance-none border rounded-r w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
              </div>
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input type="email" v-model="formData.emailAsegurado" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column -->
      <div class="space-y-6">
        <!-- Pagador -->
        <div class="bg-blue-100 p-6 rounded-lg shadow-md">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-semibold text-gray-800">Pagador</h3>
            <button @click="copiarAsegurado" class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md text-sm transition-colors duration-200">
              Copiar Asegurado
            </button>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">RUT</label>
              <input type="text" v-model="formData.rutPagador" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">Fecha Nac.</label>
              <input type="date" v-model="formData.fechaNacPagador" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">Primer Nombre</label>
              <input type="text" v-model="formData.primerNombrePagador" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">Segundo Nombre</label>
              <input type="text" v-model="formData.segundoNombrePagador" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">Primer Apellido</label>
              <input type="text" v-model="formData.primerApellidoPagador" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">Segundo Apellido</label>
              <input type="text" v-model="formData.segundoApellidoPagador" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">Dirección</label>
              <input type="text" v-model="formData.direccionPagador" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">Región</label>
              <select v-model="formData.regionPagador" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
                <option value="">Seleccione</option>
                <option v-for="region in regions" :key="region" :value="region">{{ region }}</option>
              </select>
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">Comuna</label>
              <select v-model="formData.comunaPagador" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
                <option value="">Seleccione</option>
                <option v-for="comuna in comunas" :key="comuna" :value="comuna">{{ comuna }}</option>
              </select>
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">Teléfono (9 Dígitos)</label>
              <div class="flex">
                <span class="inline-flex items-center px-3 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                  +56
                </span>
                <input type="tel" v-model="formData.telefonoPagador" class="shadow appearance-none border rounded-r w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
              </div>
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">Teléfono Móvil (9 Dígitos)</label>
              <div class="flex">
                <span class="inline-flex items-center px-3 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                  +56
                </span>
                <input type="tel" v-model="formData.movilPagador" class="shadow appearance-none border rounded-r w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
              </div>
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input type="email" v-model="formData.emailPagador" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
            </div>
          </div>
        </div>

        <!-- Beneficiario -->
        <div class="bg-blue-100 p-6 rounded-lg shadow-md">
          <h3 class="text-lg font-semibold mb-4 text-gray-800">Beneficiario</h3>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">Tipo Entidad Financiera</label>
              <select v-model="formData.tipoEntidadFinanciera" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
                <option value="">Seleccionar</option>
                <option v-for="tipo in tiposEntidadFinanciera" :key="tipo" :value="tipo">{{ tipo }}</option>
              </select>
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">Entidad Financiera</label>
              <select v-model="formData.entidadFinanciera" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
                <option value="">Seleccionar</option>
                <option v-for="entidad in entidadesFinancieras" :key="entidad" :value="entidad">{{ entidad }}</option>
              </select>
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">RUT</label>
              <input type="text" v-model="formData.rutBeneficiario" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" placeholder="Ej: 12345678-9">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="flex justify-end space-x-4 mt-6">
      <button @click="volver" class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200">
        Volver
      </button>
      <button @click="emitirPoliza" class="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200">
        Emitir Póliza
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const planData = ref({});

onMounted(() => {
  const storedPlan = localStorage.getItem('selectedPlan');
  if (storedPlan) {
    planData.value = JSON.parse(storedPlan);
  } else {
    router.push('/vehiculo');
  }
});

const formData = reactive({
  // Datos Riesgo
  patente: '',
  motor: '',
  chasis: '',
  color: '',
  numeroFactura: '',
  fechaFactura: '',
  vigenciaPoliza: '',

  // Asegurado/Tomador
  rutAsegurado: '',
  fechaNacAsegurado: '',
  primerNombreAsegurado: '',
  segundoNombreAsegurado: '',
  primerApellidoAsegurado: '',
  segundoApellidoAsegurado: '',
  direccionAsegurado: '',
  regionAsegurado: '',
  comunaAsegurado: '',
  telefonoAsegurado: '',
  movilAsegurado: '',
  emailAsegurado: '',

  // Pagador
  rutPagador: '',
  fechaNacPagador: '',
  primerNombrePagador: '',
  segundoNombrePagador: '',
  primerApellidoPagador: '',
  segundoApellidoPagador: '',
  direccionPagador: '',
  regionPagador: '',
  comunaPagador: '',
  telefonoPagador: '',
  movilPagador: '',
  emailPagador: '',

  // Beneficiario
  tipoEntidadFinanciera: '',
  entidadFinanciera: '',
  rutBeneficiario: ''
});

const colors = [
  'Blanco', 'Negro', 'Gris', 'Rojo', 'Azul',
  'Verde', 'Amarillo', 'Plateado', 'Dorado', 'Café'
];

const regions = [
  'Metropolitana',
  'Valparaíso',
  'Biobío',
  'La Araucanía',
  'O\'Higgins'
];

const comunas = [
  'Santiago',
  'Providencia', 
  'Las Condes',
  'Ñuñoa',
  'La Florida'
];

const tiposEntidadFinanciera = [
  'Banco', 'Cooperativa', 'Financiera', 'Leasing', 'Otros'
];

const entidadesFinancieras = [
  'Banco de Chile',
  'Banco Santander',
  'Banco BCI',
  'Banco Estado',
  'Banco Scotiabank',
  'Banco Itaú',
  'Banco Security',
  'Banco Falabella',
  'Banco Ripley',
  'Forum',
  'Tanner'
];

const copiarAsegurado = () => {
  formData.rutPagador = formData.rutAsegurado;
  formData.fechaNacPagador = formData.fechaNacAsegurado;
  formData.primerNombrePagador = formData.primerNombreAsegurado;
  formData.segundoNombrePagador = formData.segundoNombreAsegurado;
  formData.primerApellidoPagador = formData.primerApellidoAsegurado;
  formData.segundoApellidoPagador = formData.segundoApellidoAsegurado;
  formData.direccionPagador = formData.direccionAsegurado;
  formData.regionPagador = formData.regionAsegurado;
  formData.comunaPagador = formData.comunaAsegurado;
  formData.telefonoPagador = formData.telefonoAsegurado;
  formData.movilPagador = formData.movilAsegurado;
  formData.emailPagador = formData.emailAsegurado;
};

const volver = () => {
  router.push('/vehiculo');
};

const emitirPoliza = () => {
  // Implement policy issuance logic here
  console.log('Emitiendo póliza...', { planData: planData.value, formData });
};
</script>