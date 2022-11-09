<template>
  <header class="header">
    <div class="container">
      <nav class="navbar">
        <router-link :to="{ name: 'HomeView'}" class="navbar__logo">
          Recipe Book
        </router-link>
        <ul class="navbar__items">
          <li class="navbar__item">
            <router-link :to="{ name: 'HomeView'}">
              Home</router-link>
            </li>
          <li class="navbar__item navbar__add-button">
            <router-link :to="{ name: 'AddRecipe'}">
              <BaseButton
                class="btn-m btn-secondary"
              >
                Add New Recipe
              </BaseButton>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <router-view v-slot="{ Component }">
    <transition name="scale" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>

</template>

<script>
</script>

<style scoped lang="scss">

@import '@/assets/styles/sass/components/TheHeader.scss';


</style>