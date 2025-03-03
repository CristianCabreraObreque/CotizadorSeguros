<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-semibold mb-4 text-gray-800">Factor por Región</h1>

    <!-- Table -->
    <div class="overflow-x-auto shadow-sm">
      <table class="w-full table-auto border-collapse border border-gray-300 rounded-md">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 px-3 py-2 text-left font-medium text-gray-700 text-sm">Región</th>
            <th class="border border-gray-300 px-3 py-2 text-left font-medium text-gray-700 text-sm">Tasa Anual Afecta</th>
            <th class="border border-gray-300 px-3 py-2 text-left font-medium text-gray-700 text-sm">Tasa Anual Exenta</th>
            <th class="border border-gray-300 px-3 py-2 text-center font-medium text-gray-700 text-sm">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="regionFactor in regionFactors" :key="regionFactor.region" class="hover:bg-gray-200 transition-all even:bg-white">
            <td class="border border-gray-300 px-3 py-2 text-gray-700 text-sm">{{ regionFactor.region }}</td>
            <td class="border border-gray-300 px-3 py-2 text-gray-700 text-sm">{{ regionFactor.tasaAnualAfecta }}</td>
            <td class="border border-gray-300 px-3 py-2 text-gray-700 text-sm">{{ regionFactor.tasaAnualExenta }}</td>
            <td class="border border-gray-300 px-3 py-2 text-center">
              <a @click="openModal(regionFactor)" class="inline-block bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded focus:outline-none focus:shadow-outline transition-colors duration-200 text-sm cursor-pointer">
                Editar
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal -->
    <div v-if="isModalOpen" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
              Modificar Factor por Región
            </h3>
            <div class="mt-2">
              <div class="grid grid-cols-1 gap-4">
                <div>
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="regionModal">
                    Región
                  </label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200 text-sm" id="regionModal" type="text" :value="modalData.region" readonly>
                </div>
                <div>
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="tasaAnualAfectaModal">
                    Tasa Anual Afecta
                  </label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" id="tasaAnualAfectaModal" type="number" v-model.number="modalData.tasaAnualAfecta">
                </div>
                <div>
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="tasaAnualExentaModal">
                    Tasa Anual Exenta
                  </label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" id="tasaAnualExentaModal" type="number" v-model.number="modalData.tasaAnualExenta">
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm" @click="saveRegionFactor">
              Guardar
            </button>
            <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="closeModal">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Mock data (replace with your actual data)
const regionFactors = ref([
  { region: 'Tarapacá', tasaAnualAfecta: 0.30, tasaAnualExenta: 1.45 },
  { region: 'Antofagasta', tasaAnualAfecta: 0.30, tasaAnualExenta: 1.45 },
  { region: 'Atacama', tasaAnualAfecta: 0.30, tasaAnualExenta: 1.45 },
  { region: 'Coquimbo', tasaAnualAfecta: 0.30, tasaAnualExenta: 1.45 },
  { region: 'Valparaíso', tasaAnualAfecta: 0.30, tasaAnualExenta: 1.45 },
  { region: 'OHiggins', tasaAnualAfecta: 0.30, tasaAnualExenta: 1.45 },
  { region: 'Maule', tasaAnualAfecta: 0.30, tasaAnualExenta: 1.45 },
  { region: 'Biobío', tasaAnualAfecta: 0.30, tasaAnualExenta: 1.45 },
  { region: 'La Araucanía', tasaAnualAfecta: 0.30, tasaAnualExenta: 1.45 },
  { region: 'Los Lagos', tasaAnualAfecta: 0.30, tasaAnualExenta: 1.45 },
  { region: 'Aysén', tasaAnualAfecta: 0.30, tasaAnualExenta: 1.45 },
  { region: 'Magallanes', tasaAnualAfecta: 0.30, tasaAnualExenta: 1.45 },
  { region: 'Metropolitana', tasaAnualAfecta: 0.35, tasaAnualExenta: 1.60 },
  { region: 'Los Ríos', tasaAnualAfecta: 0.30, tasaAnualExenta: 1.45 },
  { region: 'Arica y Parinacota', tasaAnualAfecta: 0.30, tasaAnualExenta: 1.45 },
  { region: 'Ñuble', tasaAnualAfecta: 0.30, tasaAnualExenta: 1.45 }
]);

// Modal state
const isModalOpen = ref(false);
const modalData = ref({
  region: '',
  tasaAnualAfecta: 0,
  tasaAnualExenta: 0
});

const openModal = (regionFactor) => {
  isModalOpen.value = true;
  modalData.value = { ...regionFactor };
};

const closeModal = () => {
  isModalOpen.value = false;
};

const saveRegionFactor = () => {
  // Validate that the rates are numbers
  if (typeof modalData.value.tasaAnualAfecta !== 'number' || typeof modalData.value.tasaAnualExenta !== 'number') {
    alert('Las tasas deben ser numéricas.');
    return;
  }

  // Confirm before saving
  if (confirm(`¿Está seguro de que desea modificar el factor para la región de ${modalData.value.region}?`)) {
    // Find the index of the region factor to update
    const index = regionFactors.value.findIndex(rf => rf.region === modalData.value.region);

    // If the region factor is found, update it
    if (index !== -1) {
      regionFactors.value[index] = { ...modalData.value };
    }

    closeModal();
  }
};
</script>
