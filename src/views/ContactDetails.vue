<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useContactsStore } from "../store/contactsStore";
import LocationBar from "../components/LocationBar.vue";
import ContactDetailsActions from "../components/ContactDetailsActions.vue";

const route = useRoute();
const router = useRouter();

const id = parseInt(route.params.id as string);

const contactsStore = useContactsStore();
const contactDetails = contactsStore.getContactById(id);

// Descontruindo o objeto. Descartamos "id" porque já
// temos id do contato baseado no route.params.id
const { name, email, phone, id: _, ...otherDetails } = contactDetails;

function deleteContact(id: number) {
  contactsStore.removeById(id);
  router.push("/");
}
</script>

<template>
  <main>
    <LocationBar name="Detalhes" action="Editar" back-button="/" />
    <div class="main-details">
      <div>
        <h3>{{ name }}</h3>
        <p>{{ email }}</p>
        <p>{{ phone }}</p>
      </div>
      <ContactDetailsActions :email="email" :phone="phone" />
    </div>

    <div class="other-details">
      <div v-for="(value, key) in otherDetails" :key="key">
        <template v-if="typeof value == 'object'">
          <div class="detail-title">{{ key }}</div>
          <hr />
          <div v-for="(nestedValue, nestedKey) in value" :key="nestedKey">
            <span class="key">{{ nestedKey }}:</span>
            <span class="value">{{ nestedValue }}</span>
          </div>
        </template>
        <template v-else
          ><span class="key">{{ key }}:</span>
          <span class="value">{{ value }}</span></template
        >
      </div>
      <button @click="deleteContact(id)" class="delete-button">
        Delete Contact
      </button>
    </div>
  </main>
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
}

.other-details {
  font-size: var(--font-sm);

  // Seleciona descendentes diretos excluindo o primeiro
  & > * + * {
    margin-top: 1rem;
  }

  & > * > * + * {
    margin-top: 0.2rem;
  }

  & ::first-letter {
    text-transform: capitalize;
  }
}

hr {
  border: none;
  height: 1px;
  background-image: linear-gradient(
    to right,
    var(--fg-secondary),
    transparent 40%
  );
  opacity: 0.1;
}

.detail-title {
  font-weight: bold;
}

.key {
  color: var(--fg-secondary);
}

.value {
  margin-left: 0.2ch;
}

.delete-button {
  background-color: transparent;
  color: var(--danger-secondary);
  border: 1px solid var(--danger-secondary);
  padding: 0.3rem 0.7rem;
  border-radius: 0.4rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--danger-secondary);
    color: var(--bg-secondary);
  }
}
</style>
