<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
const props = defineProps({
  cliente: {
    type: Object,
    required: true,
  },
});
const nombreCliente = computed(() => {
  return `${props.cliente.nombre} ${props.cliente?.apellido || 'nn'}`;
});
const estadoCliente = computed(() => {
  return props.cliente.estado;
});
const cambiarEstado = (id) => {
  cliente.estado ? 0 : 1;
};
</script>

<template>
  <tr>
    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
      <p class="font-medium text-gray-900">{{ nombreCliente }}</p>
      <p class="text-gray-500">{{ cliente.email }}</p>
    </td>

    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      <p class="text-gray-900 font-bold">{{ cliente.empresa }}</p>
      <p class="text-gray-600">{{ cliente.puesto }}</p>
    </td>

    <td class="whitespace-nowrap px-3 py-4 text-sm">
      <button
        @click="cambiarEstado(cliente.id)"
        class="inline-flex rounded-full px-2 text-xs font-semibold leading-5"
        :class="[
          estadoCliente
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800',
        ]">
        {{ estadoCliente ? 'Activo' : 'Inactivo' }}
      </button>
    </td>

    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      <RouterLink
        class="text-blue-300 hover:text-blue-700 mr-5"
        :to="{ name: 'editar-cliente', params: { id: cliente.id } }">
        Editar
      </RouterLink>
      <button class="text-red-400 hover:text-red-700">Eliminar</button>
    </td>
  </tr>
</template>
