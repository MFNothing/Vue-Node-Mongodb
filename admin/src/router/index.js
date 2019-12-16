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
    component: Login,
    meta: {
      isPublic: true
    }
  }
]

const router = new VueRouter({
  routes
})
/*
  可以使用 router.beforeEach 注册一个全局前置守卫
  当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于 等待中。
  每个守卫方法接收三个参数：

  to: Route: 即将要进入的目标 路由对象

  from: Route: 当前导航正要离开的路由

  next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

    next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。

    next(false): 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。

    next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向 next 传递任意位置对象，
    且允许设置诸如 replace: true、name: 'home' 之类的选项以及任何用在 router-link 的 to prop 或 router.push 中的选项。

    next(error): (2.4.0+) 如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调。

  确保要调用 next 方法，否则钩子就不会被 resolved。
*/
router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    // 当路由中meta对象 isPublic 为空，且没有登录，就跳转登录页面
    return next('/login')
  }
  next()
})

export default router
