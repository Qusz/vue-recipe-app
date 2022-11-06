<template>
  <div class="" v-if="loaded">Test</div>
  <div class="" v-else>{{ this.recipes }}</div>
</template>

<script>
import Server from '@/APIs/ServerAPI.js';

export default {
  name: 'TestView',
  
  data() {
    return {
      recipes: undefined,
      loaded: false

    }
  },
  methods: {
    fetchData() {
      const server = new Server();
      server.fetchRecipes().
        then(data => {
          this.recipes = data;
          this.loaded = true;
        });
    }
  }
}
</script>

<style>

</style>