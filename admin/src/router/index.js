import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategoryCreate from '../views/CategoryCreate.vue'
import CategoryList from '../views/CategoryList.vue'

import ItemCreate from '../views/ItemCreate.vue'
import ItemList from '../views/ItemList.vue'

import HeroCreate from '../views/HeroCreate.vue'
import HeroList from '../views/HeroList.vue'

import ArticleCreate from '../views/ArticleCreate.vue'
import ArticleList from '../views/ArticleList.vue'

import AdCreate from '../views/AdCreate.vue'
import AdList from '../views/AdList.vue'

import AdminUserCreate from '../views/AdminUserCreate.vue'
import AdminUserList from '../views/AdminUserList.vue'


import Login from '../views/Login.vue'

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
      {path: '/heros/list', component: HeroList},

      {path: '/articles/create', component: ArticleCreate},
      {path: '/articles/edit/:id', component: ArticleCreate, props: true},
      {path: '/articles/list', component: ArticleList},

      {path: '/ads/create', component: AdCreate},
      {path: '/ads/edit/:id', component: AdCreate, props: true},
      {path: '/ads/list', component: AdList},

      {path: '/admin_users/create', component: AdminUserCreate},
      {path: '/admin_users/edit/:id', component: AdminUserCreate, props: true},
      {path: '/admin_users/list', component: AdminUserList}
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
