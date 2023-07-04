<script setup lang="ts">
import { useContactsStore } from "./store/contactsStore";

const contactsStore = useContactsStore();
</script>

<template>
  <header>
    <h1>Skybook</h1>
    <a href="#"> Test link</a>
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
  font-size: 3rem;
}
</style>
