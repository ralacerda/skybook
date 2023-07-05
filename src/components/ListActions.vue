<script setup lang="ts">
import SearchIcon from "~icons/mdi/magnify";
import SortIcon from "~icons/mdi/sort-variant";
import type { SortType } from "../types";

defineProps<{
  search: string;
  sorting: SortType;
}>();

defineEmits(["update:search", "update:sorting"]);
</script>

<template>
  <div class="list-actions">
    <div class="list-search">
      <SearchIcon style="font-size: 0.8em; color: var(--fg-dark)" />
      <input
        type="search"
        :value="search"
        @input="
          $emit('update:search', ($event.target as HTMLInputElement).value)
        "
      />
    </div>
    <div class="list-order">
      <label for="sort-dropdown">
        <SortIcon style="font-size: 1em; color: var(--fg-dark)" />
      </label>
      <select
        id="sort-dropdown"
        :value="sorting"
        @input="
          $emit('update:sorting', ($event.target as HTMLInputElement).value)
        "
      >
        <option value="recent">Mais recente</option>
        <option value="oldest">Mais antigo</option>
        <option value="az">A-Z</option>
        <option value="za">Z-A</option>
      </select>
    </div>
  </div>
</template>

<style scoped lang="scss">
.list-actions {
  background-color: var(--bg-secondary);
  padding: 0.5rem;
  padding-right: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem 1rem;
  flex-wrap: wrap;

  select {
    background-color: transparent;
    border: none;
    color: inherit;
    font-size: inherit;

    &:focus {
      outline: none;
    }
  }

  option {
    background-color: var(--bg-accent);
  }
}

.list-order {
  display: flex;
  align-items: center;
  gap: 0.4rem;

  // Diferente de focus-whithin, focus-visible aparece somente
  // durante navegação pelo teclado
  &:focus-visible {
    outline: 2px solid var(--brand-primary);
    outline-offset: -2px;
  }

  label {
    display: flex;
    align-items: center;
  }
}

.list-search {
  flex-grow: 1;
  display: flex;
  align-items: center;
  background-color: var(--bg-accent);
  padding: 0.4rem;
  line-height: 1;
  border-radius: 0.4rem;

  &:focus-within {
    outline: 2px solid var(--brand-primary);
    outline-offset: -2px;
  }

  input {
    background-color: transparent;
    border: none;
    margin-left: 0.25rem;
    box-shadow: none;
    width: 100%;
    font: inherit;
    color: inherit;

    &:focus {
      outline: none;
    }
  }
}
</style>
