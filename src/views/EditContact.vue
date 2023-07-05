<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useContactsStore } from "../store/contactsStore";
import LocationBar from "../components/LocationBar.vue";
import type { Contact } from "../types";
import { reactive } from "vue";
import EditingForm from "../components/EditingForm.vue";

const route = useRoute();
const router = useRouter();

const id = parseInt(route.params.id as string);

const contactsStore = useContactsStore();

// Criamos uma cópia do estado inicial para que somente
// seja alterado após o usuário apertar "Salvar"
const contactDetailsInitial = contactsStore.getContactById(id);
const contactDetailsReactive = reactive<Contact>({ ...contactDetailsInitial });

function deleteContact(id: number) {
  contactsStore.removeById(id);
  router.push("/");
}

function updateContact(id: number) {
  contactsStore.updateById(id, contactDetailsReactive);
  router.push({ name: "details", params: { id } });
}
</script>

<template>
  <main>
    <LocationBar
      name="Editar"
      action="Salvar"
      :actionDisabled="!contactDetailsReactive.name"
      :backButton="{ name: 'details', params: { id: id } }"
      @actionClicked="updateContact(id)"
    />
    <div class="editing-form">
      <EditingForm :contact="contactDetailsReactive" />
      <button @click="deleteContact(id)" class="delete-button">
        Deletar Contato
      </button>
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

.delete-button {
  background-color: transparent;
  color: var(--danger-primary);
  border: 1px solid var(--danger-primary);
  padding: 0.3rem 0.7rem;
  border-radius: 0.4rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--danger-primary);
    color: var(--bg-primary);
  }
}
</style>
