<template>

  <div class="container home">
    <hr class="home__hr">
    <router-link class="home__add-button" :to="{ name: 'AddRecipe'}">
      <BaseButton
      :content="'Add New Recipe'"
      class="btn-accent"
      >
    </BaseButton>
   </router-link>

    <div class="home__cards">
      <RecipeCard class="home__card"></RecipeCard>
      <RecipeCard class="home__card"></RecipeCard>
      <RecipeCard class="home__card"></RecipeCard>
      <RecipeCard class="home__card"></RecipeCard>
      <RecipeCard class="home__card"></RecipeCard>
      <RecipeCard class="home__card"></RecipeCard>
      <RecipeCard class="home__card"></RecipeCard>
      <RecipeCard class="home__card"></RecipeCard>
      <RecipeCard class="home__card"></RecipeCard>
      <RecipeCard class="home__card"></RecipeCard>
    </div>
  </div>
  <rotuer-view />

</template>

<script>

import RecipeCard from '@/components/RecipeCard.vue'
import BaseButton from '@/components/BaseButton.vue'

export default {
  name: 'HomeView',
  components: { RecipeCard, BaseButton }
}

</script>

<style lang="scss" scoped>

@import '@/assets/styles/sass/views/HomeView.scss';

</style>
