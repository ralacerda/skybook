<template>
  <div class="location-bar">
    <h2 class="location-name">Contatos</h2>
    <button class="location-action">Novo Contato</button>
  </div>
</template>

<style scoped lang="scss">
.location-bar {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: var(--bg-secondary);
  margin-bottom: 1em;
}

.location-action {
  background-color: var(--brand-primary);
  padding: 0.5rem 1rem;
  color: var(--fg-primary);
  border-radius: 0.4rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--brand-secondary);
  }
}

.location-name {
  font-size: var(--font-lg);
}
</style>
