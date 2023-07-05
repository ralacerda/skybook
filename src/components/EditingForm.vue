<script setup lang="ts">
import type { Contact } from "../types";

defineProps<{ contact: Contact }>();
</script>

<template>
  <FormKit
    type="text"
    name="name"
    id="name"
    validation="required"
    label="Nome"
    v-model="contact.name"
  />
  <!-- 
        Não validamos o telefone devido a diversidade de formatos
        incuidas no API. Mas usamos o tipo "phone" para mostrar
        o teclado adequado em aplicativos mobile
       -->
  <FormKit
    type="tel"
    name="phone"
    id="phone"
    label="Telefone"
    v-model="contact.phone"
  />
  <FormKit
    type="email"
    name="email"
    id="email"
    validation="?email"
    label="Email"
    v-model="contact.email"
    :validation-messages="{
      email: 'Email não parece válido',
    }"
  />
  <hr />
  <FormKit
    ref="emailField"
    type="text"
    name="username"
    id="username"
    label="Nome de usuário"
    v-model="contact.username"
  />
  <FormKit
    ref="emailField"
    type="text"
    name="website"
    id="website"
    label="Website"
    v-model="contact.website"
  />
  <FormKit
    ref="emailField"
    type="text"
    name="company"
    id="company"
    label="Companhia"
    v-model="contact.company.name"
  />
  <div class="address-info">
    <h3>Endereço</h3>
    <hr />
    <FormKit
      type="text"
      name="street"
      id="street"
      label="Rua"
      v-model="contact.address.street"
    />
    <FormKit
      type="text"
      name="suite"
      id="suite"
      label="Número"
      v-model="contact.address.suite"
    />
    <FormKit
      type="text"
      name="city"
      id="city"
      label="Cidade"
      v-model="contact.address.city"
    />
    <FormKit
      type="text"
      name="zipcode"
      id="zipcode"
      label="CEP"
      v-model="contact.address.zipcode"
    />
  </div>
</template>

<style scoped lang="scss">
hr {
  margin-bottom: 0.5rem;
}
</style>
