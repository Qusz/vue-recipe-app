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

    <div 
      v-for="item in this.recipes" 
      :key="item.id"
      class="home__cards" 
    >
      <router-link
        :to="{ name: 'RecipeView', params: { id: item.id } }"
      >
        <RecipeCard
          :header="item.name"
          :content="item.desc"
          class="home__card">
        </RecipeCard>
      </router-link>


    </div>
  </div>
  <rotuer-view />

</template>

<script>

import RecipeCard from '@/components/RecipeCard.vue'
import BaseButton from '@/components/BaseButton.vue'
import Server from '@/APIs/ServerAPI.js'

export default {
  name: 'HomeView',
  components: { RecipeCard, BaseButton },
  created() {
    this.getData();
  },
  data() {
    return {
      recipes: null
    }

  },
  methods: {
    getData() {
      const server = new Server();
      server.fetchRecipes().
        then(data => {
          this.recipes = data;
        });
    }
  }
}

</script>

<style lang="scss" scoped>

@import '@/assets/styles/sass/views/HomeView.scss';

</style>
