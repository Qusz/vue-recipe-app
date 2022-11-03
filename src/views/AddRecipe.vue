<template>

  <div class="container">
    <section class="add-recipe">
      <h1 class="add-recipe__header">
        Add a new recipe
      </h1>

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
        @click="test()">
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
      currentId: 0,
      description: "",
      ingredientName: "",
      ingredientQty: null,
      ingredients: [],
      instructions: "",
      fullRecipe: {
        "id": this.currentId,
        "name": "",
        "desc": "",
        "ingredients": [],
        "instructions": ""
      }
    }
  },
  methods: {
    addIngredient() {
      const ingredient = {"ingredient": this.ingredientName, "qty": this.ingredientQty};
      this.ingredients.push(ingredient);
      this.ingredientName = "";
      this.ingredientQty = null;
    },
    removeIngredient() {

    },
    submitRecipe() {

    },
    test() {
      console.log(this.description, this.instructions);
    }
  }
}

</script>

<style lang="scss" scoped>

@import '@/assets/styles/sass/views/AddRecipe.scss';

</style>