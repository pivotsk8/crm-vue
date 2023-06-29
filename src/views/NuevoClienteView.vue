<script setup>
import { FormKit } from '@formkit/vue';
import RouterLink from '../components/UI/RouterLink.vue';
import Heading from '../components/UI/Heading.vue';
defineProps({
  titulo: {
    type: String,
  },
});

const handlerSubmit = (data) => {
  console.log(data);
};
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="inicio">Volver</RouterLink>
    </div>

    <Heading>{{ titulo }}</Heading>

    <div class="mx-auto mt-10 bg-white shadow">
      <div class="mx-auto md:w-2/3 py-20 px-6">
        <FormKit
          type="form"
          submit-label="Agregar Cliente"
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
            }" />

          <FormKit
            type="text"
            name="apellido"
            label="Apellido"
            placeholder="Apellido"
            validation="required"
            :validation-messages="{
              required: 'El Apellido del Cliete es Obligatorio',
            }" />

          <FormKit
            type="email"
            name="email"
            label="Email"
            placeholder="Email del cliente"
            validation="required|email"
            :validation-messages="{
              required: 'El Email del Cliete es Obligatorio',
              email: 'Coloca un Email Valido',
            }" />

          <FormKit
            type="text"
            name="telefono"
            label="Telefono"
            placeholder="Teléfono: xxx-xxx-xxxx"
            validation="*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
            :validation-messages="{
              matches: 'El formato es incorreto',
            }" />

          <FormKit
            type="text"
            name="empresa"
            label="Empresa"
            placeholder="Empresa del Cliente" />

          <FormKit
            type="text"
            name="puesto"
            label="Puesto"
            placeholder="Puesto del Cliente" />
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
