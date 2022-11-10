import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import BaseButton from '@/components/BaseButton.vue';

import Toast from "vue-toastification";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import "vue-toastification/dist/index.css";
import './assets/styles/sass/styles.scss';



//* Router dynamic titles
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title || 'MyRecipes';
  }
  next();
});

//* Toast default options
const toastOptions = {
  position: "top-center",
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: true,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
  rtl: false
}

//* Font Awesome 
library.add(faBars);

createApp(App)
.component('BaseButton', BaseButton)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.use(Toast, toastOptions)
.mount('#app')
