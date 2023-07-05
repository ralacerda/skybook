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

function editContact() {
  router.push({
    name: "edit",
    params: {
      id,
    },
  });
}
</script>

<template>
  <main>
    <LocationBar
      name="Detalhes"
      action="Editar"
      backButton="/"
      @actionClicked="editContact"
    />
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

  // Adiciona um "-" se informação está vazia
  & > div > :empty::after {
    content: "-";
    opacity: 0.3;
  }
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

.detail-title {
  font-weight: bold;
}

.key {
  color: var(--fg-secondary);
}

.value {
  margin-left: 0.2ch;
}
</style>
