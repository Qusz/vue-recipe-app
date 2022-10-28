<template>

  <TheHeader></TheHeader>
  <RecipeCard></RecipeCard>

</template>


<script>

import TheHeader from '@/components/TheHeader.vue'
import RecipeCard from '@/components/RecipeCard.vue';

export default {
    data() {
        return {};
    },
    components: { TheHeader, RecipeCard }
}

</script>
