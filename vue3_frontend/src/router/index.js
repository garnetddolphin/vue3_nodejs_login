import { createRouter, createWebHistory } from 'vue-router'
import Page_1 from '../components/Page1.vue'
import Page_2 from '../components/Page2.vue'
import Login from '../components/Login.vue'
import Store from '../store/index.js'

const routes = [
  {
    path: '/page1',
    name: 'page1',
    component: Page_1,
    meta: {
      // 認証済の時のみ閲覧可能となるように定義
      requiresAuth: true
    }
  },
  {
    path: '/page2',
    name: 'page2',
    component: Page_2,
    meta: {
      // 認証済の時のみ閲覧可能となるように定義
      requiresAuth: true
    }
  },
  {
    path: '/',
    name: 'home',
    component: Login
  },
  {
    path: '/Login',
    name: 'login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if(!Store.state.isLogin) {
      // 認証されていない時、認証画面へ遷移
      next({
        path: '/Login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
