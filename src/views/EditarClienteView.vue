<script setup>
import { onMounted, reactive } from 'vue';
import ClienteServices from '../services/ClienteServices';
import { FormKit } from '@formkit/vue';
import { useRouter, useRoute } from 'vue-router';
import RouterLink from '../components/UI/RouterLink.vue';
import Heading from '../components/UI/Heading.vue';

const router = useRouter();
const route = useRoute();

const { id } = route.params;
const formData = reactive({});
defineProps({
  titulo: {
    type: String,
  },
});
onMounted(async () => {
  try {
    const { data } = await ClienteServices.obternerCliente(id);
    Object.assign(formData, data);
  } catch (error) {}
});

const handlerSubmit = async (data) => {
  ClienteServices.editarCliente(id, data);
  router.push({ name: 'listado-clientes' });
};
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="listado-clientes">Volver</RouterLink>
    </div>

    <Heading>{{ titulo }}</Heading>

    <div class="mx-auto mt-10 bg-white shadow">
      <div class="mx-auto md:w-2/3 py-20 px-6">
        <FormKit
          type="form"
          submit-label="Guardar Cambios"
          @submit="handlerSubmit"
          incomplete-message="No se pudo enviar, revisa los mensajes">
          <FormKit
            type="text"
            name="nombre"
            label="Nombre"
            placeholder="Nombre del cliente"
            validation="required"
            :validation-messages="{
              required: 'El Nombre del Cliete es Obligatorio',
            }"
            v-model="formData.nombre" />

          <FormKit
            type="text"
            name="apellido"
            label="Apellido"
            placeholder="Apellido"
            validation="required"
            :validation-messages="{
              required: 'El Apellido del Cliete es Obligatorio',
            }"
            v-model="formData.apellido" />

          <FormKit
            type="email"
            name="email"
            label="Email"
            placeholder="Email del cliente"
            validation="required|email"
            :validation-messages="{
              required: 'El Email del Cliete es Obligatorio',
              email: 'Coloca un Email Valido',
            }"
            v-model="formData.email" />

          <FormKit
            type="text"
            name="telefono"
            label="Telefono"
            placeholder="Teléfono: xxx-xxx-xxxx"
            validation="*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
            :validation-messages="{
              matches: 'El formato es incorreto',
            }"
            v-model="formData.telefono" />

          <FormKit
            type="text"
            name="empresa"
            label="Empresa"
            placeholder="Empresa del Cliente"
            v-model="formData.empresa" />

          <FormKit
            type="text"
            name="puesto"
            label="Puesto"
            placeholder="Puesto del Cliente"
            v-model="formData.puesto" />
        </FormKit>
      </div>
    </div>
  </div>
</template>

<style scope>
.formkit-wrapper {
  max-width: 100%;
}
[data-type='submit'] .formkit-input {
  background: rgb(110, 165, 255);
}
[data-type='submit'] .formkit-input:hover {
  background: rgb(11, 105, 255);
}
</style>
