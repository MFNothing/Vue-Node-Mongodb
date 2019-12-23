import Vue from 'vue'
import App from './App.vue'

import './assets/scss/style.scss'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
