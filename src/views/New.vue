<script setup lang="ts">
import { useContactsStore } from "../store/contactsStore";
import { useRouter } from "vue-router";
import LocationBar from "../components/LocationBar.vue";
import type { Contact } from "../types";
import { reactive } from "vue";
import EditingForm from "../components/EditingForm.vue";

const router = useRouter();
const contactsStore = useContactsStore();

const contactDetailsInitial: Contact = {
  id: contactsStore.lastId + 1,
  name: "",
  email: "",
  phone: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
  },
  website: "",
  username: "",
  company: {
    name: "",
  },
};

const contactDetailsReactive = reactive(contactDetailsInitial);

function createContact() {
  contactsStore.createContact(contactDetailsReactive);
  router.push({ name: "home" });
}
</script>

<template>
  <main>
    <LocationBar
      name="Novo"
      action="Criar"
      :actionDisabled="!contactDetailsReactive.name"
      :backButton="{ name: 'home' }"
      @actionClicked="createContact()"
    />
    <div class="editing-form">
      <EditingForm :contact="contactDetailsReactive" />
    </div>
  </main>
</template>

<style scoped lang="scss">
.editing-form {
  overflow: scroll;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: var(--bg-secondary);
}

main {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100%;
}
</style>
