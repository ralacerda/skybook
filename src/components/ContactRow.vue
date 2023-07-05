<script setup lang="ts">
import type { Contact } from "../types";
import ContactRowActions from "./ContactRowActions.vue";

defineProps<{
  contact: Contact;
}>();
</script>

<template>
  <li>
    <div class="contact-row">
      <RouterLink
        :to="{ name: 'details', params: { id: contact.id } }"
        class="contact-info"
      >
        <div class="contact-name">{{ contact.name }}</div>
        <div class="contact-phone">{{ contact.phone }}</div>
        <div class="contact-email">{{ contact.email }}</div>
      </RouterLink>
      <ContactRowActions :contact="contact" />
    </div>
  </li>
</template>

<style scoped lang="scss">
@import "../styles/mixins";

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

  @include hover-style {
    background-color: var(--bg-accent);
  }
}

li:not(:last-of-type) {
  margin-bottom: 1em;
}

.contact-info {
  flex: 1 1 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  // Adiciona um "-" se informação está vazia
  & > :empty::after {
    content: "-";
    opacity: 0.1;
  }
}

.contact-info > * {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.contact-phone,
.contact-email {
  color: var(--fg-secondary);
  font-size: var(--font-sm);
}
</style>
