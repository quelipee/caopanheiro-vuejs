import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: MainView,
      beforeEnter: (to, from, next) => {
        if (!localStorage.getItem('token')){
          next('signIn');
        }else {
          next();
        }
      }
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: LoginView,
      beforeEnter : (to, from, next) => {
        if (localStorage.getItem('token')){
          next('/');
        }else {
          next();
        }
      }
    }
  ]
})

export default router
