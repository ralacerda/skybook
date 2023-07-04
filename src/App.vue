<script setup lang="ts">
import { useContactsStore } from "./store/contactsStore";

const contactsStore = useContactsStore();
</script>

<template>
  <header>
    <h1>Skybook</h1>
  </header>
  <main>
    <ul class="contact-list">
      <li class="contact-info" v-for="contact in contactsStore.list">
        <div class="contact-name">{{ contact.name }}</div>
        <div class="contact-phone">{{ contact.phone }}</div>
        <div class="contact-email">{{ contact.email }}</div>
      </li>
    </ul>
  </main>
</template>

<style scoped lang="scss">
h1 {
  font-size: var(--font-xl);
}

h2 {
  font-size: var(--font-lg);
  padding-block: 1em;
  text-align: center;
  border-radius: 0.5rem;
  background-color: var(--bg-secondary);
  margin-bottom: 1em;
}

.contact-list {
  list-style: none;
}

.contact-info {
  font-size: var(--font-md);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: var(--bg-secondary);
  line-height: 1.4;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-bottom: 1em;
  }

  &:hover {
    background-color: var(--bg-accent);
  }
}

.contact-phone,
.contact-email {
  color: var(--fg-secondary);
  font-size: var(--font-sm);
}
</style>
