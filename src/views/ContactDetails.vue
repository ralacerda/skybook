<script setup lang="ts">
import { useRoute } from "vue-router";
import { useContactsStore } from "../store/contactsStore";
import LocationBar from "../components/LocationBar.vue";
import ContactRow from "../components/ContactRow.vue";

const route = useRoute();
const id = parseInt(route.params.id as string);

const contactsStore = useContactsStore();
const contactDetails = contactsStore.getContactById(id);

// Descontruindo o objeto. Descartamos "id" porque já
// temos id do contato baseado no route.params.id
const { name, email, phone, id: _, ...otherDetails } = contactDetails;
</script>

<template>
  <main>
    <LocationBar name="Detalhes" action="Editar" back-button="/" />
    <ContactRow :contact="contactDetails" />

    <div v-for="(value, key) in otherDetails" :key="key">
      <template v-if="typeof value == 'object'">
        <div>{{ key }}</div>
        <div v-for="(nestedValue, nestedKey) in value" :key="nestedKey">
          {{ nestedKey }}: {{ nestedValue }}
        </div>
      </template>
      <template v-else> {{ key }}: {{ value }} </template>
    </div>
  </main>
</template>
