<script setup lang="ts">
import { useRoute } from "vue-router";
import { useContactsStore } from "../store/contactsStore";
import LocationBar from "../components/LocationBar.vue";

const route = useRoute();
const id = parseInt(route.params.id as string);

const contactsStore = useContactsStore();
const contactDetails = contactsStore.getContactById(id);
</script>

<template>
  <main>
    <LocationBar name="Detalhes" action="Editar" back-button />
  </main>
</template>
