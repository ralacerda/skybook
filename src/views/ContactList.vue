<script setup lang="ts">
import { useContactsStore } from "../store/contactsStore";
import { useListSort } from "../utils/useListSort";
import LocationBar from "../components/LocationBar.vue";
import ListActions from "../components/ListActions.vue";
import PhoneIcon from "~icons/mdi/phone";
import EmailIcon from "~icons/mdi/email";
import EditIcon from "~icons/mdi/pencil";
import DeleteIcon from "~icons/mdi/delete";
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
        <li
          class="contact-row"
          v-for="contact in computedList"
          :key="contact.id"
        >
          <div class="contact-info">
            <div class="contact-name">{{ contact.name }}</div>
            <div class="contact-phone">{{ contact.phone }}</div>
            <div class="contact-email">{{ contact.email }}</div>
          </div>
          <div class="contact-actions">
            <button>
              <PhoneIcon />
            </button>
            <button>
              <EmailIcon />
            </button>
            <button>
              <EditIcon />
            </button>
            <button>
              <DeleteIcon />
            </button>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped lang="scss">
.contact-list {
  list-style: none;
}

.contact-actions {
  display: flex;
  align-items: center;
  font-size: var(--font-lg);

  button {
    // Centralizando icone dentro do botão
    display: grid;
    place-items: center;

    // Incluindo padding para aumentar a área de interação
    padding: 0.5rem 0.5rem;
    color: var(--fg-dark);

    &:hover {
      color: var(--brand-secondary);
    }
  }
}

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
