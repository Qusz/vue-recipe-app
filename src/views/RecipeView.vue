<template>
  <div class="container">

    <section v-if="loading" class="loader">
      <p>Loading ...</p>
      <spring-spinner
        :animation-duration="3000"
        :size="60"
        color="#FD841F"
      />
    </section>
    
    <section v-else class="recipe d-flex flex-col">
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
        class="btn-m btn-accent mt-m flex-item-align-center"
      >
        Delete recipe
      </BaseButton>
    </section>
  </div>
</template>


<script>

import Server from '@/APIs/ServerAPI.js'
import { SpringSpinner } from 'epic-spinners';
import { useToast } from 'vue-toastification';

export default {
  name: 'RecipeView',
  components: { SpringSpinner },
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
      loading: false,
      toast: useToast()
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
        .catch(error => { throw new Error(error) });
      } catch(error) {
        this.toast.error(error, {
          timeout: false, 
          showCloseButtonOnHover: false
        });
      }
    },

    deleteRecipe() {
      try {
        const server = new Server();
        server.removeRecipe(this.id)
          .then(this.$router.push('/'))
          .then(this.toast.success("Recipe removed!"))
          .catch(error => { throw new Error(error) });    
      } catch(error) {
        this.toast.error(error, {
          timeout: false, 
          showCloseButtonOnHover: false
        });
      }
    }
  }
}

</script>

<style lang="scss" scoped>
  @import '@/assets/styles/sass/views/RecipeView.scss'
</style>