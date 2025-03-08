<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold text-gray-800 mb-4">Cotización Vehículo</h1>
    <div class="grid grid-cols-2 gap-4">
      <!-- Datos del Proponente -->
      <div class="bg-blue-100 p-4 rounded-md shadow-sm">
        <h2 class="text-lg font-semibold mb-2 text-gray-700">
          Datos del Proponente
        </h2>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2">Rut Propietario del vehículo</label>
            <div class="flex items-center">
              <input type="text" v-model="formData.rut" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" />
              <button class="ml-2 text-blue-500">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2">Primer Nombre</label>
            <input type="text" v-model="formData.primerNombre" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" />
          </div>
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2">Primer Apellido</label>
            <input type="text" v-model="formData.primerApellido" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" />
          </div>
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2">Fecha Nac.</label>
            <input type="date" v-model="formData.fechaNac" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" />
          </div>
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2">Región</label>
            <select v-model="formData.region" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
              <option value="RM">RM REGION METROPOLITA</option>
              <option value="V">VALPARAÍSO</option>
              <option value="VIII">BIOBÍO</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2">Comuna</label>
            <select v-model="formData.comuna" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
              <option value="NUNOA">ÑUÑOA</option>
              <option value="PROVIDENCIA">PROVIDENCIA</option>
              <option value="SANTIAGO">SANTIAGO</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2">Teléfono</label>
            <input type="tel" v-model="formData.telefono" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" />
          </div>
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input type="email" v-model="formData.email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" />
          </div>
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2">Género</label>
            <select v-model="formData.genero" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
              <option value="FEMENINO">FEMENINO</option>
              <option value="MASCULINO">MASCULINO</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Datos del Vehículo -->
      <div class="bg-blue-100 p-4 rounded-md shadow-sm">
        <h2 class="text-lg font-semibold mb-2 text-gray-700">
          Datos del Vehículo
        </h2>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2">Nuevo/Usado</label>
            <select v-model="formData.estado" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
              <option value="NUEVO">NUEVO</option>
              <option value="USADO">USADO</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2">Año</label>
            <select v-model="formData.anio" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2">Marca</label>
            <select v-model="formData.marca" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
              <option value="SUZUKI">SUZUKI</option>
              <option value="TOYOTA">TOYOTA</option>
              <option value="HYUNDAI">HYUNDAI</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2">Modelo</label>
            <select v-model="formData.modelo" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
              <option value="BALENO">BALENO</option>
              <option value="SWIFT">SWIFT</option>
              <option value="VITARA">VITARA</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2">Patente</label>
            <input type="text" v-model="formData.patente" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" />
          </div>
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2">Uso específico</label>
            <select v-model="formData.usoEspecifico" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
              <option value="PARTICULAR">PARTICULAR</option>
              <option value="COMERCIAL">COMERCIAL</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2">¿El Asegurado es el Propietario?</label>
            <select v-model="formData.esAseguradoPropietario" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
              <option value="SI">SI</option>
              <option value="NO">NO</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2">Vigencia</label>
            <select v-model="formData.vigencia" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
              <option value="ANUAL">ANUAL</option>
              <option value="SEMESTRAL">SEMESTRAL</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2">Medio de Pago</label>
            <select v-model="formData.medioPago" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
              <option value="PAT">PAT</option>
              <option value="PAC">PAC</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2">Cuotas</label>
            <select v-model="formData.cuotas" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
              <option value="12">12</option>
              <option value="6">6</option>
              <option value="1">1</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2">Tipo Tarifa</label>
            <select v-model="formData.tipoTarifa" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
              <option value="CLASSIC">CLASSIC</option>
              <option value="PREMIUM">PREMIUM</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <!-- Botón Calcular -->
    <div class="flex justify-center mt-6">
      <button @click="calcularTarifas" class="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800">
        Calcular Tarifas
      </button>
    </div>

    <!-- Tarifas -->
    <div v-if="showTarifas" class="mt-6">
      <h2 class="text-lg font-bold mb-4">Tarifas por Compañía</h2>
      <div class="grid gap-6">
        <!-- HDI Seguros -->
        <div class="bg-white p-4 rounded-lg shadow">
          <div class="mb-4">
            <img src="https://www.hdi.cl/media/408929/hdi_seguros_logo2018_rgb-80px.png" alt="HDI Seguros" class="h-12">
          </div>
          <div class="grid grid-cols-6 gap-4">
            <div v-for="(plan, index) in planesHDI" :key="index" 
                 @click="selectPlan('HDI', plan)"
                 :class="[
                   'text-center p-4 border rounded-lg cursor-pointer transition-all duration-200',
                   selectedPlan && selectedPlan.company === 'HDI' && selectedPlan.value === plan.value
                     ? 'border-blue-500 bg-blue-50 shadow-md'
                     : 'hover:border-blue-300 hover:bg-blue-50'
                 ]">
              <div class="font-bold mb-2">{{ plan.nombre }}</div>
              <div>Prima Bruta: UF {{ plan.primaBruta }}</div>
              <div>Cuota: UF {{ plan.cuotaMensual }}</div>
              <div>${{ plan.cuotaPesos }}</div>
              <div class="text-blue-500 underline cursor-pointer mt-2">COBS</div>
            </div>
          </div>
        </div>

        <!-- MAPFRE -->
        <div class="bg-white p-4 rounded-lg shadow">
          <div class="mb-4">
            <img src="https://1000marcas.net/wp-content/uploads/2019/12/Logo-Mapfre-tumb.png" alt="MAPFRE" class="h-12">
          </div>
          <div class="grid grid-cols-6 gap-4">
            <div v-for="(plan, index) in planesMAPFRE" :key="index"
                 @click="selectPlan('MAPFRE', plan)"
                 :class="[
                   'text-center p-4 border rounded-lg cursor-pointer transition-all duration-200',
                   selectedPlan && selectedPlan.company === 'MAPFRE' && selectedPlan.value === plan.value
                     ? 'border-blue-500 bg-blue-50 shadow-md'
                     : 'hover:border-blue-300 hover:bg-blue-50'
                 ]">
              <div class="font-bold mb-2">{{ plan.nombre }}</div>
              <div>Prima Bruta: UF {{ plan.primaBruta }}</div>
              <div>Cuota: UF {{ plan.cuotaMensual }}</div>
              <div>${{ plan.cuotaPesos }}</div>
              <div class="text-blue-500 underline cursor-pointer mt-2">COBS</div>
            </div>
          </div>
        </div>

        <!-- BCI Seguros -->
        <div class="bg-white p-4 rounded-lg shadow">
          <div class="mb-4">
            <img src="https://enqueestamivehiculo.bciseguros.cl/images/logo_bci.png" alt="BCI Seguros" class="h-12">
          </div>
          <div class="grid grid-cols-6 gap-4">
            <div v-for="(plan, index) in planesBCI" :key="index"
                 @click="selectPlan('BCI', plan)"
                 :class="[
                   'text-center p-4 border rounded-lg cursor-pointer transition-all duration-200',
                   selectedPlan && selectedPlan.company === 'BCI' && selectedPlan.value === plan.value
                     ? 'border-blue-500 bg-blue-50 shadow-md'
                     : 'hover:border-blue-300 hover:bg-blue-50'
                 ]">
              <div class="font-bold mb-2">{{ plan.nombre }}</div>
              <div>Prima Bruta: UF {{ plan.primaBruta }}</div>
              <div>Cuota: UF {{ plan.cuotaMensual }}</div>
              <div>${{ plan.cuotaPesos }}</div>
              <div class="text-blue-500 underline cursor-pointer mt-2">COBS</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex justify-center space-x-4 mt-8">
        <button @click="imprimirSimulacion" 
                class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline">
          Imprimir Simulación
        </button>
        <button @click="nuevaSimulacion" 
                class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline">
          Nueva Simulación
        </button>
        <button @click="continuar" 
                :disabled="!selectedPlan"
                :class="[
                  'font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline',
                  selectedPlan 
                    ? 'bg-green-500 hover:bg-green-600 text-white'
                    : 'bg-gray-300 cursor-not-allowed text-gray-500'
                ]">
          Continuar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const showTarifas = ref(false);
const selectedPlan = ref(null);

const formData = reactive({
  rut: '14.399.722-7',
  primerNombre: 'LAURA',
  primerApellido: 'SAAVEDRA',
  fechaNac: '1978-11-17',
  region: 'RM',
  comuna: 'NUNOA',
  telefono: '909999222',
  email: 'LAURA.SAAVEDRA2108@GMAIL.COM',
  genero: 'FEMENINO',
  estado: 'NUEVO',
  anio: '2025',
  marca: 'SUZUKI',
  modelo: 'BALENO',
  patente: '',
  usoEspecifico: 'PARTICULAR',
  esAseguradoPropietario: 'SI',
  vigencia: 'ANUAL',
  medioPago: 'PAT',
  cuotas: '12',
  tipoTarifa: 'CLASSIC'
});

const planesHDI = [
  { nombre: 'UF 3', value: 'hdi-uf3', primaBruta: '16.93', cuotaMensual: '1.41', cuotaPesos: '54.578' },
  { nombre: 'UF 5', value: 'hdi-uf5', primaBruta: '16.15', cuotaMensual: '1.35', cuotaPesos: '52.256' },
  { nombre: 'UF 8', value: 'hdi-uf8', primaBruta: '13.71', cuotaMensual: '1.14', cuotaPesos: '44.127' },
  { nombre: 'UF 10', value: 'hdi-uf10', primaBruta: '13.29', cuotaMensual: '1.11', cuotaPesos: '42.946' },
  { nombre: 'UF 12', value: 'hdi-uf12', primaBruta: '12.89', cuotaMensual: '1.07', cuotaPesos: '41.417' },
  { nombre: 'UF 20', value: 'hdi-uf20', primaBruta: '11.86', cuotaMensual: '0.99', cuotaPesos: '38.321' }
];

const planesMAPFRE = [
  { nombre: 'UF 3', value: 'mapfre-uf3', primaBruta: '17.50', cuotaMensual: '1.46', cuotaPesos: '56.000' },
  { nombre: 'UF 5', value: 'mapfre-uf5', primaBruta: '16.80', cuotaMensual: '1.40', cuotaPesos: '54.000' },
  { nombre: 'UF 8', value: 'mapfre-uf8', primaBruta: '14.20', cuotaMensual: '1.18', cuotaPesos: '46.000' },
  { nombre: 'UF 10', value: 'mapfre-uf10', primaBruta: '13.80', cuotaMensual: '1.15', cuotaPesos: '44.500' },
  { nombre: 'UF 12', value: 'mapfre-uf12', primaBruta: '13.20', cuotaMensual: '1.10', cuotaPesos: '42.500' },
  { nombre: 'UF 20', value: 'mapfre-uf20', primaBruta: '12.50', cuotaMensual: '1.04', cuotaPesos: '40.000' }
];

const planesBCI = [
  { nombre: 'UF 3', value: 'bci-uf3', primaBruta: '17.20', cuotaMensual: '1.43', cuotaPesos: '55.500' },
  { nombre: 'UF 5', value: 'bci-uf5', primaBruta: '16.50', cuotaMensual: '1.38', cuotaPesos: '53.000' },
  { nombre: 'UF 8', value: 'bci-uf8', primaBruta: '14.00', cuotaMensual: '1.17', cuotaPesos: '45.000' },
  { nombre: 'UF 10', value: 'bci-uf10', primaBruta: '13.50', cuotaMensual: '1.13', cuotaPesos: '43.500' },
  { nombre: 'UF 12', value: 'bci-uf12', primaBruta: '13.00', cuotaMensual: '1.08', cuotaPesos: '42.000' },
  { nombre: 'UF 20', value: 'bci-uf20', primaBruta: '12.20', cuotaMensual: '1.02', cuotaPesos: '39.000' }
];

const selectPlan = (company, plan) => {
  selectedPlan.value = {
    company,
    value: plan.value,
    product: `${formData.usoEspecifico} ${formData.tipoTarifa}`,
    plan: plan.nombre,
    primaBruta: plan.primaBruta,
    marcaModelo: `${formData.marca}/${formData.modelo}`
  };
};

const imprimirSimulacion = () => {
  window.print();
};

const nuevaSimulacion = () => {
  showTarifas.value = false;
  selectedPlan.value = null;
  // Reset form data if needed
};

const continuar = () => {
  if (selectedPlan.value) {
    // Store selected plan data in localStorage or Vuex if needed
    localStorage.setItem('selectedPlan', JSON.stringify(selectedPlan.value));
    router.push('/vehiculo/details');
  }
};

const calcularTarifas = () => {
  showTarifas.value = true;
};
</script>

<style>
@media print {
  .no-print {
    display: none;
  }
}
</style>