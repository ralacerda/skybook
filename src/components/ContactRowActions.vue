<script setup lang="ts">
import PhoneIcon from "~icons/mdi/phone";
import EmailIcon from "~icons/mdi/email";
import EditIcon from "~icons/mdi/pencil";
import DeleteIcon from "~icons/mdi/delete";
import type { Contact } from "../types";
import { useContactsStore } from "../store/contactsStore";

defineProps<{
  contact: Contact;
}>();

const contactsStore = useContactsStore();

function deleteContact(id: number) {
  contactsStore.removeById(id);
}
</script>

<template>
  <div class="contact-actions">
    <a :href="`tel:${contact.phone}`" :disabled="!contact.phone">
      <PhoneIcon />
    </a>
    <a :href="`mailto:${contact.email}`" :disabled="!contact.email">
      <EmailIcon />
    </a>
    <button>
      <EditIcon />
    </button>
    <button data-delete @click="deleteContact(contact.id)">
      <DeleteIcon />
    </button>
  </div>
</template>

<style scoped lang="scss">
@import "../styles/mixins";

.contact-actions {
  display: flex;
  align-items: center;
  font-size: var(--font-lg);

  button,
  a {
    // Centralizando icone dentro do botão
    display: grid;
    place-items: center;
    transition: color 0.15s;

    // Incluindo padding para aumentar a área de interação
    padding: 0.5rem 0.3em;
    color: var(--fg-dark);

    @include hover-style {
      color: var(--brand-secondary);
    }

    &[data-delete] {
      @include hover-style {
        color: var(--danger-dark);
      }
    }
  }
}
</style>
