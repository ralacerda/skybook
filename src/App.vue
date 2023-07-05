<script setup lang="ts">
import { useContactsStore } from "./store/contactsStore";
import { useRouter } from "vue-router";

const router = useRouter();

router.afterEach((to, from) => {
  const toDepth = to.meta.depth;
  const fromDepth = from.meta.depth;
  to.meta.transition = toDepth > fromDepth ? "push-in" : "pop-out";
});

const contactsStore = useContactsStore();
</script>
<template>
  <header>
    <h1>Skybook</h1>
  </header>
  <div v-if="contactsStore.error">{{ contactsStore.error }}</div>
  <div v-else class="view-wrapper">
    <RouterView v-slot="{ Component, route }">
      <transition :name="route.meta.transition" mode="default">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>

<style scoped lang="scss">
h1 {
  font-size: var(--font-xl);
}

.view-wrapper {
  height: 100%;
  overflow: hidden;
  display: flex;
  position: relative;
}
</style>
