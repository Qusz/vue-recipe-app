<template>
  <div class="container home d-flex flex-col">

    <section v-if="loading" class="loader">
      <p>Loading ...</p>
      <spring-spinner
        :animation-duration="3000"
        :size="60"
        color="#FD841F"
      />
    </section>

    <section v-else class="wrapper d-flex flex-col">
      <input
        v-model="search" 
        class="home__search" 
        type="text" 
        placeholder="Search ..."
      >
      <div class="home__cards mt-l">
        <div
          v-for="item in this.filteredData"
          :key="item.id"
        >
          <router-link
            :to="{ name: 'RecipeView', params: { id: item.id } }"
            class="d-flex flex-col"
          >
            <RecipeCard
              :header="item.name"
              :content="item.desc"
              class="home__card flex-item-align-center flex-item-justify-center">
            </RecipeCard>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import RecipeCard from '@/components/RecipeCard.vue';
import Server from '@/APIs/ServerAPI.js';
import { SpringSpinner } from 'epic-spinners';
import { useToast } from 'vue-toastification';

export default {
  name: 'HomeView',
  components: { RecipeCard, SpringSpinner },
  created() {
    this.getData();
  },
  data() {
    return {
      recipes: null,
      loading: false,
      search: '',
      toast: useToast()
    }
  },
  computed: {
    filteredData() {
      return this.recipes.filter(item => {
         return item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      })
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
  @import '@/assets/styles/sass/views/HomeView.scss';
</style>
