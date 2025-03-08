<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold text-gray-800 mb-4">Cotización Condominio</h1>
    <div class="grid grid-cols-2 gap-4">
      <!-- Datos del Cliente -->
      <div class="bg-blue-100 p-4 rounded-md shadow-sm">
        <h2 class="text-lg font-semibold mb-2 text-gray-700">
          Datos del Cliente
        </h2>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="numeroReserva"
            >
              Número de reserva
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="numeroReserva"
              type="text"
              v-model="formData.numeroReserva"
            />
          </div>
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="nombreAsegurado"
            >
              Nombre asegurado
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="nombreAsegurado"
              type="text"
              v-model="formData.nombreAsegurado"
            />
          </div>
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="rutAsegurado"
            >
              RUT asegurado
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="rutAsegurado"
              type="text"
              v-model="formData.rutAsegurado"
            />
          </div>
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="ocupacion"
            >
              Ocupación
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="ocupacion"
              type="text"
              v-model="formData.ocupacion"
            />
          </div>
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="codigoSubclase"
            >
              Código subclase
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="codigoSubclase"
              type="text"
              v-model="formData.codigoSubclase"
            />
          </div>
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="responsableEjecutivo"
            >
              Responsable (Ejecutivo Cia)
            </label>
            <!-- <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="responsableEjecutivo"
              type="text"
              v-model="formData.responsableEjecutivo"
            /> -->
            <select
              class="w-full h-9 px-2 py-1 border rounded text-gray-700 focus:outline-none focus:shadow-outline text-sm"
            >
              <option value="Responsable 1" selected>Responsable 1</option>
              <option value="Responsable 2">Responsable 2</option>
              <option value="Responsable 3">Responsable 3</option>
            </select>
          </div>
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="cargo"
            >
              Cargo
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="cargo"
              type="text"
              v-model="formData.cargo"
            />
          </div>
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="moneda"
            >
              Moneda
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="moneda"
              type="text"
              v-model="formData.moneda"
            />
          </div>
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="corredor"
            >
              Corredor
            </label>
            <select
              class="w-full h-9 px-2 py-1 border rounded text-gray-700 focus:outline-none focus:shadow-outline text-sm"
            >
              <option value="Corredor 1" selected>Corredor 1</option>
              <option value="Corredor 2">Corredor 2</option>
              <option value="Corredor 3">Corredor 3</option>
            </select>

            <!-- <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" id="corredor" type="text" v-model="formData.corredor" /> -->
          </div>
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="comisionAfecta"
            >
              Comisión Afecta
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="comisionAfecta"
              type="text"
              v-model="formData.comisionAfecta"
            />
          </div>
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="comisionExenta"
            >
              Comisión Exenta
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="comisionExenta"
              type="text"
              v-model="formData.comisionExenta"
            />
          </div>
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="inicioVigencia"
            >
              Inicio de Vigencia retroactividad máxima 15 días
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="inicioVigencia"
              type="text"
              v-model="formData.inicioVigencia"
            />
          </div>
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="vigenciaSolo"
            >
              Vigencia solo por 12 meses
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="vigenciaSolo"
              type="text"
              v-model="formData.vigenciaSolo"
            />
          </div>
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="siniestrosUltimos"
            >
              Suma de siniestros últimos 48 meses
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="siniestrosUltimos"
              type="text"
              v-model="formData.siniestrosUltimos"
            />
          </div>
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="mayorDoscientos"
            >
              Mayor a 200 metros de la costa
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="mayorDoscientos"
              type="text"
              v-model="formData.mayorDoscientos"
            />
          </div>
        </div>
      </div>

      <!-- Datos del Bien Asegurado -->
      <div class="bg-blue-100 p-4 rounded-md shadow-sm">
        <h2 class="text-lg font-semibold mb-2 text-gray-700">
          Datos del Bien Asegurado
        </h2>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="direccionRiesgo"
            >
              Dirección del riesgo
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="direccionRiesgo"
              type="text"
              v-model="formData.direccionRiesgo"
            />
          </div>
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="region"
            >
              Región
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="region"
              type="text"
              v-model="formData.region"
            />
          </div>
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="comuna"
            >
              Comuna
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="comuna"
              type="text"
              v-model="formData.comuna"
            />
          </div>
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="tipoConstruccion"
            >
              Tipo de construcción
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="tipoConstruccion"
              type="text"
              v-model="formData.tipoConstruccion"
            />
          </div>
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="espaciosComunes"
            >
              Espacios comunes
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="espaciosComunes"
              type="text"
              v-model="formData.espaciosComunes"
            />
          </div>
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="unidades"
            >
              Unidades
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="unidades"
              type="text"
              v-model="formData.unidades"
            />
          </div>
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="cristales"
            >
              Cristales
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="cristales"
              type="text"
              v-model="formData.cristales"
            />
          </div>
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="responsabilidadCivil"
            >
              Responsabilidad civil
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="responsabilidadCivil"
              type="text"
              v-model="formData.responsabilidadCivil"
            />
          </div>
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="robo"
            >
              Robo
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="robo"
              type="text"
              v-model="formData.robo"
            />
          </div>
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="averiaMaquinaria"
            >
              Avería maquinaria
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="averiaMaquinaria"
              type="text"
              v-model="formData.averiaMaquinaria"
            />
          </div>
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="equiposElectronicos"
            >
              Equipos electrónicos
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="equiposElectronicos"
              type="text"
              v-model="formData.equiposElectronicos"
            />
          </div>
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="accidentesPersonales"
            >
              Accidentes personales
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="accidentesPersonales"
              type="text"
              v-model="formData.accidentesPersonales"
            />
          </div>
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="montoTotal"
            >
              Monto total
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="montoTotal"
              type="text"
              v-model="formData.montoTotal"
            />
          </div>
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="puedeSerCotizado"
            >
              Puede ser cotizado
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="puedeSerCotizado"
              type="text"
              v-model="formData.puedeSerCotizado"
            />
          </div>
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="anioConstruccion"
            >
              Año de construcción
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="anioConstruccion"
              type="text"
              v-model="formData.anioConstruccion"
            />
          </div>
        </div>
      </div>

      <!-- Tasa -->
      <div class="bg-blue-100 p-4 rounded-md shadow-sm">
        <h2 class="text-lg font-semibold mb-2 text-gray-700">Tasa</h2>
        <table class="table-auto w-full">
          <thead>
            <tr>
              <th class="text-left"></th>
              <th class="text-left">Tasa anual</th>
              <th class="text-left">Prima período</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Afecta</td>
              <td>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                  id="afecta"
                  type="text"
                  v-model="formData.afecta"
                />
              </td>
              <td>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                  id="primaAfecta"
                  type="text"
                  v-model="formData.primaAfecta"
                />
              </td>
            </tr>
            <tr>
              <td>Exenta</td>
              <td>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                  id="exenta"
                  type="text"
                  v-model="formData.exenta"
                />
              </td>
              <td>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                  id="primaExenta"
                  type="text"
                  v-model="formData.primaExenta"
                />
              </td>
            </tr>
            <tr>
              <td>Neta</td>
              <td>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                  id="neta"
                  type="text"
                  v-model="formData.neta"
                />
              </td>
              <td>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                  id="primaNeta"
                  type="text"
                  v-model="formData.primaNeta"
                />
              </td>
            </tr>
            <tr>
              <td>IVA</td>
              <td></td>
              <td>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                  id="iva"
                  type="text"
                  v-model="formData.iva"
                />
              </td>
            </tr>
            <tr>
              <td>Bruta</td>
              <td></td>
              <td>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                  id="bruta"
                  type="text"
                  v-model="formData.bruta"
                />
              </td>
            </tr>
            <tr>
              <td>Rentabilidad</td>
              <td>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                  id="rentabilidad"
                  type="text"
                  v-model="formData.rentabilidad"
                />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>Siniestralidad</td>
              <td>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                  id="siniestralidad"
                  type="text"
                  v-model="formData.siniestralidad"
                />
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Buttons -->
    <div class="mt-4 flex justify-end">
      <button
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
        type="button"
      >
        Generar Cotización Espacios Comunes
      </button>
      <button
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2 text-sm"
        type="button"
      >
        Generar Cotización Unidades
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const formData = reactive({
  numeroReserva: "501",
  nombreAsegurado: "Inmobiliaria y Constructora Sebastian Emilio Ltda.",
  rutAsegurado: "76.389.705 - 2",
  ocupacion: "ESPACIOS COMUNES EDIFICIOS",
  codigoSubclase: "103",
  responsableEjecutivo: "Sebastian Mayorga",
  cargo: "Suscriptor of Property",
  moneda: "UF",
  corredor: "",
  comisionAfecta: "15%",
  comisionExenta: "8%",
  inicioVigencia: "24/02/2025",
  vigenciaSolo: "12 Meses",
  siniestrosUltimos: "",
  mayorDoscientos: "Si",
  direccionRiesgo: "Avenida P. de Valdivia 4190, Nuñoa",
  region: "Metropolitana",
  comuna: "Nuñoa",
  tipoConstruccion: "Sólido",
  espaciosComunes: "100.000,4",
  unidades: "134.400",
  cristales: "1.000",
  responsabilidadCivil: "1.000",
  robo: "2.000",
  averiaMaquinaria: "2.000",
  equiposElectronicos: "2.000",
  accidentesPersonales: "0",
  montoTotal: "234.400",
  puedeSerCotizado: "",
  anioConstruccion: "Menor a 50 años",
  afecta: "0,35",
  primaAfecta: "82,04",
  exenta: "1,60",
  primaExenta: "375,04",
  neta: "1,95",
  primaNeta: "457,08",
  iva: "15,59",
  bruta: "472,67",
  rentabilidad: "65,74%",
  siniestralidad: "0,0%",
});
</script>
