<template>
  <header>
    <h1><router-link to="/">Skybook</router-link></h1>
    <div class="header-links">
      <router-link to="/sobre">Sobre</router-link>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import "../styles/mixins";

header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-right: 1rem;

  a {
    @include hover-style {
      text-decoration: underline;
    }
  }
}

.header-links a {
  margin-left: 1rem;
  white-space: nowrap;
}
</style>
