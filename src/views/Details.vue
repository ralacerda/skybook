<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useContactsStore } from "../store/contactsStore";
import LocationBar from "../components/LocationBar.vue";
import ContactDetails from "../components/ContactDetails.vue";

const route = useRoute();
const router = useRouter();

const id = parseInt(route.params.id as string);

const contactsStore = useContactsStore();
const contact = contactsStore.getContactById(id);

function editContact() {
  router.push({
    name: "edit",
    params: {
      id,
    },
  });
}
</script>

<template>
  <main>
    <LocationBar
      name="Detalhes"
      action="Editar"
      backButton="/"
      @actionClicked="editContact"
    />
    <ContactDetails :contact="contact" />
  </main>
</template>
