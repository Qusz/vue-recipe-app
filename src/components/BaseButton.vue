<template>
  <button class="btn-m">
    {{ content }}
  </button>
</template>

<script>

export default {
  props: ['content']
}

</script>

<style lang="scss" scroped>

@import '@/assets/styles/sass/components/BaseButton.scss';

</style>