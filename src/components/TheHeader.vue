
<template>
  <header class="header">
    <div class="container">
      <nav class="navbar">
        <router-link :to="{ name: 'HomeView'}" class="navbar__logo">
          Recipes
        </router-link>
        <ul class="navbar__items">
          <li class="navbar__item"><router-link :to="{ name: 'HomeView'}">Home</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
  <router-view />

</template>

<script>

export default {

}

</script>

<style scoped lang="scss">

@import '@/assets/styles/sass/components/TheHeader.scss';

</style>