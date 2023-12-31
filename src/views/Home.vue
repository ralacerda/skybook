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
    <LocationBar
      name="Contatos"
      action="Novo Contato"
      @actionClicked="$router.push({ name: 'new' })"
    />
    <ListActions v-model:search="search" v-model:sorting="sorting" />
    <div class="contact-list">
      <ul>
        <TransitionGroup name="list-fade">
          <template v-for="contact in computedList" :key="contact.id">
            <ContactRow :contact="contact" />
          </template>
        </TransitionGroup>
      </ul>
    </div>
  </main>
</template>

<style scoped lang="scss">
@import "../styles/mixins";

.contact-list {
  list-style: none;
  scroll-behavior: smooth;
  @include scrollbar;
}

main {
  grid-template-rows: auto auto 1fr;
  display: grid;
}
</style>
