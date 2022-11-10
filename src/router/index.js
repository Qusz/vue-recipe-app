import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RecipeView from '@/views/RecipeView.vue'
import AddRecipe from '@/views/AddRecipe.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
    meta: {
      title: 'MyRecipes | Home'
    }
  },
  {
    path: '/recipe/:id',
    name: 'RecipeView',
    component: RecipeView,
    props: route => {
      const id = Number.parseInt(route.params.id, 10);
      if (Number.isNaN(id)) { return 0 }
      return { id };
    },
    meta: {
      title: 'MyRecipes | Recipew View'
    }
  },
  {
    path: '/add-recipe',
    name: 'AddRecipe',
    component: AddRecipe,
    meta: {
      title: 'MyRecipes | Add Recipe'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: 'MyRecipes | Page Not Found'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
