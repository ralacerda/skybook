<template>
  <header>
    <h1><router-link to="/">Skybook</router-link></h1>
    <div class="header-links">
      <router-link to="/sobre">Sobre</router-link>
      <router-link to="/sobre">Como usar</router-link>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-right: 1rem;

  a:hover {
    text-decoration: underline;
  }
}

.header-links a {
  margin-left: 1rem;
}
</style>
