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
      meta: { title: '主页', transition: 'gradual-fade' },
      component: () => import('../views/home-index.vue'),
      children: [
        {
          path: '/',
          redirect: '/home',
          meta: { title: '首页', transition: 'gradual-fade' },
          component: () => import('../views/home-index/tab/tab-home.vue')
        },
        {
          path: 'home',
          name: 'home',
          meta: { title: '首页', transition: 'gradual-fade' },
          component: () => import('../views/home-index/tab/tab-home.vue')
        },
        {
          path: 'brand',
          name: 'brand',
          meta: { title: '品牌', transition: 'gradual-fade' },
          component: () => import('../views/home-index/tab/tab-brand.vue')
        },
        {
          path: 'category',
          name: 'category',
          meta: { title: '分类', transition: 'gradual-fade' },
          component: () => import('../views/home-index/tab/tab-category.vue')
        },
        {
          path: 'magazine',
          name: 'magazine',
          meta: { title: '杂志', transition: 'gradual-fade' },
          component: () => import('../views/home-index/tab/tab-magazine.vue')
        },
        {
          path: 'mine',
          name: 'mine',
          meta: { title: '我的', transition: 'gradual-fade' },
          component: () => import('../views/home-index/tab/tab-mine.vue')
        }
      ]
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
