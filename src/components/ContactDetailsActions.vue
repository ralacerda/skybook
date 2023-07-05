<script setup lang="ts">
import PhoneIcon from "~icons/mdi/phone";
import EmailIcon from "~icons/mdi/email";

defineProps<{
  phone: string;
  email: string;
}>();
</script>

<template>
  <div class="contact-actions">
    <a :href="`tel:${phone}`" :disabled="!phone">
      <PhoneIcon />
    </a>
    <a :href="`mailto:${email}`" :disabled="!email">
      <EmailIcon />
    </a>
  </div>
</template>

<style scoped lang="scss">
@import "../styles/mixins";

.contact-actions {
  display: flex;
  align-items: center;
  font-size: var(--font-lg);

  a {
    // Centralizando icone dentro do botão
    display: grid;
    place-items: center;

    // Incluindo padding para aumentar a área de interação
    padding: 0.5rem 0.5rem;
    color: var(--fg-dark);

    @include hover-style {
      color: var(--brand-secondary);
    }

    &[data-delete]:hover {
      color: var(--danger-secondary);
    }
  }
}
</style>
