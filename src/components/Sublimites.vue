<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-semibold mb-4 text-gray-800">Sublímites</h1>

    <!-- Table -->
    <div class="overflow-x-auto shadow-sm">
      <table class="w-full table-auto border-collapse border border-gray-300 rounded-md">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 px-3 py-2 text-left font-medium text-gray-700 text-sm">Desde</th>
            <th class="border border-gray-300 px-3 py-2 text-left font-medium text-gray-700 text-sm">Hasta</th>
            <th class="border border-gray-300 px-3 py-2 text-left font-medium text-gray-700 text-sm">Específico</th>
            <th class="border border-gray-300 px-3 py-2 text-left font-medium text-gray-700 text-sm">RC</th>
            <th class="border border-gray-300 px-3 py-2 text-left font-medium text-gray-700 text-sm">Cristales</th>
            <th class="border border-gray-300 px-3 py-2 text-left font-medium text-gray-700 text-sm">Otros</th>
            <th class="border border-gray-300 px-3 py-2 text-center font-medium text-gray-700 text-sm">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="sublimite in sublimites" :key="sublimite.id" class="hover:bg-gray-200 transition-all even:bg-white">
            <td class="border border-gray-300 px-3 py-2 text-gray-700 text-sm">{{ sublimite.desde }}</td>
            <td class="border border-gray-300 px-3 py-2 text-gray-700 text-sm">{{ sublimite.hasta }}</td>
            <td class="border border-gray-300 px-3 py-2 text-gray-700 text-sm">{{ sublimite.especifico }}</td>
            <td class="border border-gray-300 px-3 py-2 text-gray-700 text-sm">{{ sublimite.rc }}</td>
            <td class="border border-gray-300 px-3 py-2 text-gray-700 text-sm">{{ sublimite.cristales }}</td>
            <td class="border border-gray-300 px-3 py-2 text-gray-700 text-sm">{{ sublimite.otros }}</td>
            <td class="border border-gray-300 px-3 py-2 text-center">
              <div class="flex justify-center space-x-2">
                <a @click="openModal(sublimite)" class="inline-block bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded focus:outline-none focus:shadow-outline transition-colors duration-200 text-sm cursor-pointer">
                  Editar
                </a>
                <a @click="deleteSublimite(sublimite)" class="inline-block bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded focus:outline-none focus:shadow-outline transition-colors duration-200 text-sm cursor-pointer">
                  Eliminar
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Add Sublimite Button -->
    <div class="mt-4 flex justify-end">
      <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm" type="button" @click="openModal()">
        Agregar Sublímite
      </button>
    </div>

    <!-- Modal -->
    <div v-if="isModalOpen" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
              {{ editingSublimite ? 'Editar Sublímite' : 'Agregar Sublímite' }}
            </h3>
            <div class="mt-2">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="desdeModal">
                    Desde
                  </label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" id="desdeModal" type="number" v-model.number="modalData.desde">
                </div>
                <div>
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="hastaModal">
                    Hasta
                  </label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" id="hastaModal" type="number" v-model.number="modalData.hasta">
                </div>
                <div>
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="especificoModal">
                    Específico
                  </label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" id="especificoModal" type="number" v-model.number="modalData.especifico">
                </div>
                <div>
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="rcModal">
                    RC
                  </label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" id="rcModal" type="number" v-model.number="modalData.rc">
                </div>
                <div>
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="cristalesModal">
                    Cristales
                  </label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" id="cristalesModal" type="number" v-model.number="modalData.cristales">
                </div>
                <div>
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="otrosModal">
                    Otros
                  </label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" id="otrosModal" type="number" v-model.number="modalData.otros">
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm" @click="saveSublimite">
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
const sublimites = ref([
  { id: 1, desde: 0, hasta: 10000, especifico: 500, rc: 500, cristales: 500, otros: 1000 },
  { id: 2, desde: 10001, hasta: 50000, especifico: 1000, rc: 500, cristales: 500, otros: 2000 },
  { id: 3, desde: 50001, hasta: 100000, especifico: 1500, rc: 500, cristales: 1000, otros: 2000 },
  { id: 4, desde: 100001, hasta: 200000, especifico: 2000, rc: 1000, cristales: 1000, otros: 3000 },
  { id: 5, desde: 200001, hasta: 300000, especifico: 2500, rc: 1500, cristales: 1500, otros: 4000 },
  { id: 6, desde: 300001, hasta: 400000, especifico: 3000, rc: 2000, cristales: 2000, otros: 4000 },
  { id: 7, desde: 400001, hasta: 570000, especifico: 3500, rc: 2000, cristales: 2000, otros: 5000 }
]);

// Modal state
const isModalOpen = ref(false);
const editingSublimite = ref(null);
const modalData = ref({
  desde: 0,
  hasta: 0,
  especifico: 0,
  rc: 0,
  cristales: 0,
  otros: 0
});

const openModal = (sublimite = null) => {
  isModalOpen.value = true;
  editingSublimite.value = sublimite;
  if (sublimite) {
    modalData.value = { ...sublimite };
  } else {
    modalData.value = { desde: 0, hasta: 0, especifico: 0, rc: 0, cristales: 0, otros: 0 };
  }
};

const closeModal = () => {
  isModalOpen.value = false;
  editingSublimite.value = null;
  modalData.value = { desde: 0, hasta: 0, especifico: 0, rc: 0, cristales: 0, otros: 0 };
};

const saveSublimite = () => {
  // Validate that all fields are numbers
  if (
    typeof modalData.value.desde !== 'number' ||
    typeof modalData.value.hasta !== 'number' ||
    typeof modalData.value.especifico !== 'number' ||
    typeof modalData.value.rc !== 'number' ||
    typeof modalData.value.cristales !== 'number' ||
    typeof modalData.value.otros !== 'number'
  ) {
    alert('Todos los campos deben ser numéricos.');
    return;
  }

  if (editingSublimite.value) {
    // Update existing sublimite
    const index = sublimites.value.findIndex(s => s.id === editingSublimite.value.id);
    if (index !== -1) {
      sublimites.value[index] = { ...editingSublimite.value, ...modalData.value };
    }
  } else {
    // Add new sublimite
    const newId = sublimites.value.length > 0 ? Math.max(...sublimites.value.map(s => s.id)) + 1 : 1;
    sublimites.value.push({ id: newId, ...modalData.value });
  }
  closeModal();
};

const deleteSublimite = (sublimite) => {
  if (confirm(`¿Está seguro de que desea eliminar el sublímite con ID ${sublimite.id}?`)) {
    sublimites.value = sublimites.value.filter(s => s.id !== sublimite.id);
  }
};
</script>
