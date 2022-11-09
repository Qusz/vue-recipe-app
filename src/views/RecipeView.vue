<template>
  <div class="container">
    <div v-if="loading" class="loader">
      <p>Loading ...</p>
      <spring-spinner
        :animation-duration="3000"
        :size="60"
        color="#FD841F"
      />
    </div>
    <section v-else class="recipe">
      <h1 class="recipe__title">
        {{ this.recipe.name }}
      </h1>
      <p class="recipe__description">
        {{ this.recipe.desc }}
      </p>
      <h2 class="recipe__ingredients-tile">
        Ingredients
      </h2>
      <ul class="recipe__ingredients">
        <li
          v-for="item in this.recipe.ingredients"
          :key="item.id" 
          class="recipe__ingredient">
          {{ item.ingredient }}, {{ item.qty }}
        </li>
      </ul>
      <p class="recipe__instructions">
        {{ this.recipe.instructions }}
      </p>
      <BaseButton 
        @click="this.deleteRecipe()"
        class="btn-m btn-accent recipe__btn-delete"
      >
        Delete recipe
      </BaseButton>
    </section>
  </div>
</template>


<script>

import Server from '@/APIs/ServerAPI.js'
import BaseButton from '@/components/BaseButton.vue';
import { SpringSpinner } from 'epic-spinners';


export default {
  name: 'RecipeView',
  components: { BaseButton, SpringSpinner },
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
      recipe: null,
      loading: false
    }

  },
  methods: {
    getData() {
      try {
        const server = new Server();
        this.loading = true;
        server.fetchRecipe(this.id)
        .then(data => {
          this.recipe = data;
          this.loading = false;
        })
        .catch(error => console.log(error));
      } catch(error) {
        console.log(error);
      }

    },
    deleteRecipe() {
      try {
        const server = new Server();
        server.removeRecipe(this.id)
          .then(this.$router.push('/'))
          .catch(error => console.log(error));    
      } catch(error) {
        console.log(error);
      }
    }
  }
}

</script>

<style lang="scss" scoped>

@import '@/assets/styles/sass/views/RecipeView.scss'

</style>