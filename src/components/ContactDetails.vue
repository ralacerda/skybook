<script setup lang="ts">
import type { Contact } from "../types";
import ContactDetailsActions from "./ContactDetailsActions.vue";

defineProps<{
  contact: Contact;
}>();
</script>

<template>
  <div class="main-details">
    <div>
      <h3>{{ contact.name }}</h3>
      <p>{{ contact.phone }}</p>
      <p>{{ contact.email }}</p>
    </div>
    <ContactDetailsActions :email="contact.email" :phone="contact.phone" />
  </div>
  <div class="other-details">
    <div class="key">Nome de Usuário</div>
    <div>{{ contact.username }}</div>

    <div class="key">Website</div>
    <div>{{ contact.website }}</div>

    <div class="key">Companhia</div>
    <div>{{ contact.company.name }}</div>

    <div class="key">Endereço</div>
    <div>{{ contact.address.street }}</div>
    <div>{{ contact.address.suite }}</div>
    <div>{{ contact.address.city }}</div>
    <div>{{ contact.address.zipcode }}</div>
  </div>
</template>

<style scoped lang="scss">
.main-details,
.other-details {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: var(--bg-secondary);
  line-height: 1.4;
}

.main-details {
  font-size: var(--font-md);
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;

  // Adiciona um "-" se informação está vazia
  & > div > :empty::after {
    content: "-";
    opacity: 0.3;
  }
}

.other-details {
  font-size: var(--font-sm);
}

.key {
  color: var(--fg-secondary);
  margin-bottom: 0.2rem;

  &:not(:first-child) {
    margin-top: 0.5rem;
  }
}
</style>
