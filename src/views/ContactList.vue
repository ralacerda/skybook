<script setup lang="ts">
import { useContactsStore } from "../store/contactsStore";
import { useListSort } from "../utils/useListSort";
import LocationBar from "../components/LocationBar.vue";
import ListActions from "../components/ListActions.vue";
import ContactRow from "../components/ContactRow.vue";

import { computed, ref } from "vue";
import type { SortType, Contact } from "../types";

const contactsStore = useContactsStore();

const search = ref("");
const sorting = ref<SortType>("recent");

const computedList = computed(() => {
  if (!search.value) {
    return useListSort(contactsStore.list, sorting.value);
  }

  return contactsStore.list.filter((contact: Contact) => {
    return contact.name.toLowerCase().includes(search.value.toLowerCase());
  });
});
</script>

<template>
  <main>
    <LocationBar />
    <div>
      <ListActions v-model:search="search" v-model:sorting="sorting" />
      <ul class="contact-list">
        <template v-for="contact in computedList" :key="contact.id">
          <ContactRow :contact="contact" />
        </template>
      </ul>
    </div>
  </main>
</template>

<style scoped lang="scss">
.contact-list {
  list-style: none;
}
</style>
