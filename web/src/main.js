import Vue from 'vue'
import App from './App.vue'
import './assets/iconfont/iconfont.css'
import './assets/scss/style.scss'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

import Card from './components/Card.vue'
import ListCard from './components/ListCard.vue'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)

Vue.component('m-card', Card)
Vue.component('m-list-card', ListCard)


import axios from 'axios'

Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3000/web/api'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
