import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import BaseButton from '@/components/BaseButton.vue';
import Toast from "vue-toastification";

import "vue-toastification/dist/index.css";
import './assets/styles/sass/styles.scss'

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

createApp(App)
.component('BaseButton', BaseButton)
.use(router)
.use(Toast, toastOptions)
.mount('#app')
