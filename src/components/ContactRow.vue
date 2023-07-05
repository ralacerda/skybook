<script setup lang="ts">
import type { Contact } from "../types";
import ContactRowActions from "./ContactRowActions.vue";

defineProps<{
  contact: Contact;
}>();
</script>

<template>
  <li>
    <router-link to="/details/5" class="contact-row">
      <div class="contact-info">
        <div class="contact-name">{{ contact.name }}</div>
        <div class="contact-phone">{{ contact.phone }}</div>
        <div class="contact-email">{{ contact.email }}</div>
      </div>
      <ContactRowActions />
    </router-link>
  </li>
</template>

<style scoped lang="scss">
.contact-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--font-md);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: var(--bg-secondary);
  line-height: 1.4;
  cursor: pointer;

  &:hover {
    background-color: var(--bg-accent);
  }
}

li:not(:last-of-type) {
  margin-bottom: 1em;
}

.contact-phone,
.contact-email {
  color: var(--fg-secondary);
  font-size: var(--font-sm);
}
</style>
