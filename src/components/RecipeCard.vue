<template>
    <div class="card">
      <h4 class="card__header">{{ header }}</h4>
      <div class="card__body">
        <p class="card__content">{{ content }}</p>
      </div>
    </div>
</template>

<script>

export default {
  props: {
    header: String,
    content: String
  }
}

</script>

<style lang="scss" scoped>
  @import '@/assets/styles/sass/components/RecipeCard.scss';
</style>
