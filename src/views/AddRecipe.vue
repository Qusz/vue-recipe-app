<template>
  <div class="container">
    <div class="add-recipe d-flex flex-col g-m">
      <h1 class="add-recipe__header text-center">
        Add a new recipe
      </h1>

      <section class="wrapper d-flex flex-col g-xs">
        <label for="recipe-name" class="add-recipe__title text-center">
          Recipe name
        </label>
        <textarea
          v-model="name"
          class="add-recipe__name text-center flex-item-align-center"
          name="recipe-name"
          id="recipe-name"
          cols="20"
          rows="1"
        >
        </textarea>
      </section>

      <section class="wrapper d-flex flex-col g-s">
        <label for="recipe-desc" class="add-recipe__title text-center">
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
      </section>

      <section class="wrapper d-flex flex-col g-s">
        <h2 class="add-recipe__title text-center">
          Ingredients
        </h2>
        <div class="add-recipe__add-ingredients d-flex flex-col flex-parent-align-center">
          <form class="add-recipe__add-ingredient mt-s d-flex g-xxs">
            <input
              v-model="ingredientName" 
              type="text" 
              class="add-recipe__add-ingredient-name text-center" 
              placeholder="Ingredient"
            >
            <input
              v-model="ingredientQty"
              type="text"
              class="add-recipe__add-ingredient-qty text-center"
              placeholder="Qty"
            >
            <BaseButton
              @click.prevent="addIngredient()"
              type="submit"
              class="btn-s btn-accent add-recipe__add-button"
            >
              +
            </BaseButton>
          </form>

          <transition-group 
            class="add-recipe__ingredient-list d-flex flex-col g-xs" 
            tag="ul" 
            name="list"
          >
            <div 
              class="wrapper d-flex g-xs"
              v-for="(item, i) in ingredients"
              :key="item"
            >
              <li class="add-recipe__ingredient-item">
                {{ item.ingredient }}, {{ item.qty }}
              </li>
              <BaseButton
                @click="removeIngredient(i)"
                class="btn-s btn-accent"
              >
                Remove
              </BaseButton>
            </div>
          </transition-group>
        </div>
      </section>

      <section class="wrapper d-flex flex-col g-s">
        <label for="recipe-inst" class="add-recipe__title text-center">
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
      </section>

      <BaseButton 
        @click="submitRecipe()"
        class="btn-m btn-accent flex-item-align-center"
      >
        Add recipe
      </BaseButton>
    </div>
  </div>
  
</template>

<script>

import Server from '@/APIs/ServerAPI.js'
import { useToast } from 'vue-toastification';

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
      toast: useToast()
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
      try {
        const server = new Server();
        server.addRecipe({
          id: "",
          name: this.name,
          desc: this.description,
          ingredients: this.ingredients,
          instructions: this.instructions
        })
          .then(this.$router.push('/'))
          .then(this.toast.success("Recipe added!"))
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
  @import '@/assets/styles/sass/views/AddRecipe.scss';
</style>