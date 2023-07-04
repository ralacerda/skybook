<script setup lang="ts">
import PhoneIcon from "~icons/mdi/phone";
import EmailIcon from "~icons/mdi/email";
import EditIcon from "~icons/mdi/pencil";
import DeleteIcon from "~icons/mdi/delete";
</script>

<template>
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
    <button data-delete>
      <DeleteIcon />
    </button>
  </div>
</template>

<style scoped lang="scss">
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
</style>
