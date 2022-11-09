<template>

  <div class="container home">
    <div v-if="loading" class="loader">
      <!--! Add spinner here -->
    </div>
    <div v-else class="home__cards">
      <div
        v-for="(item, i) in this.recipes"
        :key="item.id"
        class="home__wrapper"
      >
        <router-link
          :to="{ name: 'RecipeView', params: { id: i } }"
        >
          <RecipeCard
            :header="item.name"
            :content="item.desc"
            class="home__card">
          </RecipeCard>
        </router-link>
      </div>
    </div>
  </div>




</template>

<script>

import RecipeCard from '@/components/RecipeCard.vue';
import Server from '@/APIs/ServerAPI.js';

export default {
  name: 'HomeView',
  components: { RecipeCard },
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
      try {
        const server = new Server();
        this.loading = true;
        server.fetchRecipes()
          .then(data => {
            this.recipes = data;
            this.loading = false;
          })
          .catch(error => console.log(error));
      } catch(error) {
        console.log(error);
      }
    }
  }
}

</script>

<style lang="scss" scoped>

@import '@/assets/styles/sass/views/HomeView.scss';

</style>
