<template>

  <div class="container">
    <section class="add-recipe">
      <h1 class="add-recipe__header">
        Add a new recipe
      </h1>

      <div class="add-recipe__wrapper">
        <label for="recipe-name" class="add-recipe__title">
          Recipe name
        </label>
        <textarea
          v-model="name"
          class="add-recipe__name"
          name="recipe-name"
          id="recipe-name"
          cols="20"
          rows="1"
        >
        </textarea>
      </div>

      <div class="add-recipe__wrapper">
        <label for="recipe-desc" class="add-recipe__title">
          Recipe Description
        </label>
        <textarea
          v-model="description"
          class="add-recipe__description"
          name="recipe-desc"
          id="recipe-desc"
          cols="80"
          rows="6"
        >
        </textarea>
      </div>

      <div class="add-recipe__wrapper">
        <h2 class="add-recipe__title">
          Ingredients
        </h2>
        <div class="add-recipe__ingredients">
          <ul class="add-recipe__items">
            <li
              v-for="(item, i) in ingredients"
              :key="i" 
              class="add-recipe__item"
            >
              {{ item.ingredient }}, {{ item.qty }} 

              <button
                @click="removeIngredient(i)"
                class=""
              >
                -
              </button>
            </li>
          </ul>

          <form class="add-recipe__ingredient">
            <input
              v-model="ingredientName" 
              type="text" 
              class="add-recipe__ingredient-name" 
              placeholder="Ingredient"
            >
            <input
              v-model="ingredientQty"
              type="text"
              class="add-recipe__ingredient-qty"
              placeholder="Qty"
            >
            <button
              @click.prevent="addIngredient()"
              type="submit"
              class=""
            >
              +
            </button>
          </form>
        </div>
      </div>

      <div class="add-recipe__wrapper">
        <label for="recipe-inst" class="add-recipe__title">
          Instructions
        </label>
        <textarea
          v-model="instructions"
          class="add-recipe__instructions"
          name="recipe-inst"
          id="recipe-inst"
          cols="80"
          rows="15"
        >
        </textarea>
      </div>

      <button 
        class="btn btn-accent add-recipe__button"
        @click="submitRecipe()">
        Add recipe
      </button>
    </section>
  </div>
  
</template>

<script>

import Server from '@/APIs/ServerAPI.js'

export default {
  name: 'AddRecipe',
  data() {
    return {
      name: "",
      description: "",
      ingredientName: "",
      ingredientQty: null,
      ingredients: [],
      instructions: "",
    }
  },
  methods: {
    addIngredient() {
      const ingredient = {"ingredient": this.ingredientName, "qty": this.ingredientQty};
      this.ingredients.push(ingredient);
      this.ingredientName = "";
      this.ingredientQty = null;
    },
    removeIngredient(index) {
      this.ingredients.splice(index, 1)
    },

    submitRecipe() {
      const server = new Server();
      server.addRecipe({
        id: "",
        name: this.name,
        desc: this.description,
        ingredients: this.ingredients,
        instructions: this.instructions
      }).
        then(this.$router.push('/'));        
    }

  }
}

</script>

<style lang="scss" scoped>

@import '@/assets/styles/sass/views/AddRecipe.scss';

</style>