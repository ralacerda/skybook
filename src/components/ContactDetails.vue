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
    <div>
      <div class="key">Nome de Usuário</div>
      <div class="value">{{ contact.username }}</div>
    </div>
    <div>
      <div class="key">Website</div>
      <div class="value">
        {{ contact.website }}
      </div>
    </div>
    <div>
      <div class="key">Companhia</div>
      <div class="value">{{ contact.company.name }}</div>
    </div>
    <div>
      <div class="key">Endereço</div>
      <div>{{ contact.address.street }}</div>
      <div>{{ contact.address.suite }}</div>
      <div>{{ contact.address.city }}</div>
      <div>{{ contact.address.zipcode }}</div>
    </div>
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

  // Seleciona descendentes diretos excluindo o primeiro
  & > * + * {
    margin-top: 0.5rem;
  }

  & > * > * + * {
    margin-top: 0.2rem;
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
