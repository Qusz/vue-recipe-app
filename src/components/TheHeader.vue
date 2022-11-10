<template>
  <header class="header">
    <div class="container">
      <nav class="navbar">

        <div class="navbar__hamburger"
          v-show="mobile"
          @click="toggleMobileNav"
        >
          <font-awesome-icon icon="fa-solid fa-bars" class="icon" :class="{ 'icon-active': mobileNav }"/>
        </div>

        <router-link :to="{ name: 'HomeView'}" class="navbar__logo">
          Recipe Book
        </router-link>

        <ul v-show="!mobile" class="navbar__items">
          <li class="navbar__item">
            <router-link :to="{ name: 'HomeView'}">
              Home
            </router-link>
            </li>
          <li class="navbar__item navbar__add-button">
            <router-link :to="{ name: 'AddRecipe'}">
              <BaseButton
                class="btn-m btn-secondary"
              >
                Add New Recipe
              </BaseButton>
            </router-link>
          </li>
        </ul>

        <transition name="mobile-nav">
          <ul v-show="mobileNav" class="navbar__dropdown-menu">
            <li class="navbar__dropdown-item">
              <router-link :to="{ name: 'HomeView'}" @click="this.toggleMobileNav()">
                Home
              </router-link>
              </li>
            <li class="navbar__dropdown-item">
              <router-link :to="{ name: 'AddRecipe'}" @click="this.toggleMobileNav()">
                Add new recipe
              </router-link>
            </li>
          </ul>
        </transition>
      </nav>
    </div>
  </header>


</template>

<script>

export default {
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    // To kick-start
    this.checkScreen();
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 580) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      // So that mobile nav functions properly if user resizes screen manually
      this.mobileNav = false;
      return;
    }
  }
}

</script>

<style scoped lang="scss">
  @import '@/assets/styles/sass/components/TheHeader.scss';
</style>
