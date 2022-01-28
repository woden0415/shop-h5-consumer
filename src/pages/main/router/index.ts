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
      component: () => import('../views/flash-page/index.vue')
    },
    {
      path: '/main',
      name: 'main',
      meta: { title: '主页', transition: 'gradual-fade' },
      component: () => import('../views/home-index/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: { title: '登录', transition: 'gradual-fade' },
      component: () => import('../views/my-login/index.vue')
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      meta: { title: '购物车' },
      component: () => import('../views/shop-car/index.vue')
    },
    {
      path: '/search',
      name: 'search',
      meta: { title: '搜索' },
      component: () => import('../views/search-page/index.vue')
    }
  ]
})

export default route
