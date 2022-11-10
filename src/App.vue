<template>
  <TheHeader></TheHeader>
  <router-view v-slot="{ Component }">
    <transition name="scale" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>

import TheHeader from '@/components/TheHeader.vue'

export default {
  components: { TheHeader }
}

</script>
