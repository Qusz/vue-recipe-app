<template>

  <div class="container home">
    <hr class="home__hr">
    <BaseButton
    :content="'Add New Recipe'" 
    class="btn-accent home__add-button"
    >
    </BaseButton>
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

</template>

<script>

import RecipeCard from '@/components/RecipeCard.vue';
import BaseButton from '@/components/BaseButton.vue'


export default {
  name: 'HomeView',
  components: { RecipeCard, BaseButton }
}

</script>

<style lang="scss" scoped>

@import '@/assets/styles/sass/views/HomeView.scss';

</style>