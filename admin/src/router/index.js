import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategoryCreate from '../views/CategoryCreate.vue'
import CategoryList from '../views/CategoryList.vue'

import ItemCreate from '../views/ItemCreate.vue'
import ItemList from '../views/ItemList.vue'

import HeroCreate from '../views/HeroCreate.vue'
import HeroList from '../views/HeroList.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      {path: '/categories/create', component: CategoryCreate},
      // props 表示会把url中的参数作为props传入CategoryCreate组件，这里两个路由都是用同一个组件
      {path: '/categories/edit/:id', component: CategoryCreate, props: true},
      {path: '/categories/list', component: CategoryList},

      {path: '/items/create', component: ItemCreate},
      {path: '/items/edit/:id', component: ItemCreate, props: true},
      {path: '/items/list', component: ItemList},

      {path: '/heros/create', component: HeroCreate},
      {path: '/heros/edit/:id', component: HeroCreate, props: true},
      {path: '/heros/list', component: HeroList}
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
