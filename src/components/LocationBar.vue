<script setup lang="ts">
import BackIcon from "~icons/mdi/arrow-left";
import type { RouteLocationRaw } from "vue-router";

defineProps<{
  name: string;
  action: string;
  backButton?: RouteLocationRaw;
}>();
</script>

<template>
  <div class="location-bar">
    <div class="location-name">
      <RouterLink v-if="backButton" :to="backButton"><BackIcon /></RouterLink>
      <h2>
        {{ name }}
      </h2>
    </div>
    <button class="location-action">{{ action }}</button>
  </div>
</template>

<style scoped lang="scss">
.location-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  display: flex;
  gap: 1rem;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: var(--fg-primary);

    &:hover {
      color: var(--fg-secondary);
    }
  }

  h2 {
    font-size: var(--font-lg);
  }
}
</style>
