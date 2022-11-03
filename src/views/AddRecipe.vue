<template>

  <div class="container">
    <section class="add-recipe">
      <h1 class="add-recipe__header">
        Add a new recipe
      </h1>

      <label for="recipe-desc" class="add-recipe__title">
        Recipe Description
      </label>
      <textarea 
        class="add-recipe__description"
        name="recipe-desc"
        id="recipe-desc"
        cols="80" 
        rows="6"
      > 
      </textarea>

      <h2 class="add-recipe__title">
        Ingredients
      </h2>
      <div class="add-recipe__ingredients">
        <ul class="add-recipe__items">
          <li class="add-recipe__item"></li>
        </ul>
        <form class="add-recipe__ingredient">
          <input type="text" class="add-recipe__ingredient-name" placeholder="Ingredient">
          <input type="text" class="add-recipe__ingredient-qty" placeholder="Quantity">
          <button type="submit" class="">+</button>
        </form>
      </div>

      <label for="recipe-inst" class="add-recipe__title">
        Instructions
      </label>
      <textarea 
        class="add-recipe__instructions"
        name="recipe-inst"
        id="recipe-inst"
        cols="80" 
        rows="15"
      > 
      </textarea>

      <button class="btn btn-accent">
        Add recipe
      </button>
    </section>
  </div>
  
</template>

<script>

export default {
  name: 'AddRecipe',
  data() {
    return {
      description: "",
      ingredients: [],
      instructions: ""
    }
  },
  methods: {
    addIngredient() {

    },
    removeIngredient() {

    },
    submitRecipe() {

    }
  }
}

</script>

<style lang="scss" scoped>

@import '@/assets/styles/sass/views/AddRecipe.scss';

</style>