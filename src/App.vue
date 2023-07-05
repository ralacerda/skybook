<script setup lang="ts">
import { useContactsStore } from "./store/contactsStore";
import { useRouter } from "vue-router";
import TheHeader from "./components/TheHeader.vue";

const router = useRouter();

router.afterEach((to, from) => {
  const toDepth = to.meta.depth;
  const fromDepth = from.meta.depth;
  to.meta.transition = toDepth > fromDepth ? "push-in" : "pop-out";
});

const contactsStore = useContactsStore();
</script>
<template>
  <TheHeader />
  <div v-if="contactsStore.error" class="error">{{ contactsStore.error }}</div>
  <div v-else class="view-wrapper">
    <RouterView v-slot="{ Component, route }">
      <transition :name="route.meta.transition" mode="default">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>

<style scoped lang="scss">
.view-wrapper {
  height: 100%;
  overflow: hidden;
  display: flex;
  position: relative;
}

.error {
  font-size: 3rem;
  font-weight: bold;
  color: var(--danger-primary);
}
</style>
