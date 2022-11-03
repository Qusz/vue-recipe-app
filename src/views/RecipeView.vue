<template>

  <div class="container">
    <div v-if="loading" class="loader">
      <!--! Add spinner here -->
    </div>
    <section v-else class="recipe">
      <h1 class="recipe__title">
        {{ this.recipes.name }}
      </h1>
      <p class="recipe__description">
        {{ this.recipes.desc }}
      </p>
      <h2 class="recipe__ingredients-tile">
        Ingredients
      </h2>
      <ul class="recipe__ingredients">
        <li
          v-for="item in this.recipes.ingredients"
          :key="item.id" 
          class="recipe__ingredient">
          {{ item.ingredient }}, {{ item.qty }}
        </li>
      </ul>
      <p class="recipe__instructions">
        {{ this.recipes.instructions }}
      </p>
      <button 
        class=""
        @click="this.deleteRecipe()"
      >
        Delete recipe
      </button>
    </section>
  </div>
</template>


<script>

import Server from '@/APIs/ServerAPI.js'

export default {
  name: 'RecipeView',
  props: {
    id: {
      type: Number
    }
  },
  created() {
    this.getData();
  },
  data() {
    return {
      recipes: null,
      loading: false
    }

  },
  methods: {
    getData() {
      const server = new Server();
      this.loading = true;
      server.fetchRecipes().
        then(data => {
          // Change this
          this.recipes = data[this.id];
          this.loading = false;
        });
    },
    deleteRecipe() {
      const server = new Server();
      server.removeRecipe(this.id).
        then(this.$router.push('/'));        
    }

  }
}

</script>

<style lang="scss" scoped>

@import '@/assets/styles/sass/views/RecipeView.scss'

</style>