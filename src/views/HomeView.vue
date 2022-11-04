<template>

  <div class="container home">
    <div class="home__cards">
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
  <rotuer-view />

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
