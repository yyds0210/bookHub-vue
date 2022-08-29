import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import login from '../views/login/login.vue'
import home from '../views/home/home.vue'
const routes: Array<RouteRecordRaw> = [
    //主页面
  {
    path: '/',
    name: 'home',
    component: home,
    meta: {
      showTab: true
    },
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      showTab: true
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')

  },
  {
    path: '/sort',
    name: 'list',
    meta: {
      showTab: true
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/sort/sort.vue')
  },
  {
    path: '/bookshelf',
    name: 'find',
    meta: {
      showTab: true
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/bookshelf/bookshelf.vue')
  },
  {
    path: '/my',
    name: 'my',
    meta: {
      showTab: true
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/my/my.vue')
  },
    //登录页面
  {
    path: '/login',
    name: 'login',
    meta: {
      showTab: false
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/login/login.vue')
  },
  //个人中心
  {
    path: '/userInfo',
    name: 'userInfo',
    meta: {
      showTab: false
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/userInfo/userInfo.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      showTab: false
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/register/register.vue')
  },
  {
    path: '/read',
    name: 'read',
    meta: {
      showTab: false
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/read/read.vue')
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
