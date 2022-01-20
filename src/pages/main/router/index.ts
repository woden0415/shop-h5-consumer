import { createRouter, createWebHashHistory } from 'vue-router'

const route = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/flashpage',
      meta: { title: '跳转中...' }
    },
    {
      path: '/flashpage',
      name: 'flashpage',
      meta: { title: '闪屏页面' },
      component: () => import('../views/flash-page.vue')
    },
    {
      path: '/main',
      name: 'main',
      meta: { title: '首页', transition: 'gradual-fade' },
      component: () => import('../views/home-index.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: { title: '登录', transition: 'gradual-fade' },
      component: () => import('../views/my-login.vue')
    }
  ]
})

export default route
