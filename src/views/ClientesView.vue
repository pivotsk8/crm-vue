<script setup>
import { onMounted, ref } from 'vue';
import RouterLink from '../components/UI/RouterLink.vue';
import Heading from '../components/UI/Heading.vue';
import axios from 'axios';

const clientes = ref([]);
onMounted(async () => {
  try {
    const { data } = await axios.get('http://localhost:4000/clientes');
    clientes.value = data;
  } catch (error) {
    console.log('error');
  }
});

defineProps({
  titulo: {
    type: String,
  },
});
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="agregar-cliente">Agregar Cliente</RouterLink>
    </div>

    <Heading>{{ titulo }}</Heading>
  </div>
</template>
