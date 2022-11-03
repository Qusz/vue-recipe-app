import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RecipeView from '@/views/RecipeView.vue'
import AddRecipe from '@/views/AddRecipe.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/recipe/:id',
    name: 'RecipeView',
    component: RecipeView,
    props: true
  },
  {
    path: '/add-recipe',
    name: 'AddRecipe',
    component: AddRecipe
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
