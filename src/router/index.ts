import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import LoginView from '@/views/LoginView.vue'
import { AnimalDetailsView } from '@/shared/components'
import FavoriteView from '@/views/FavoriteView.vue'
import AdoptionForm from '@/views/AdoptionForm.vue'

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
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: AnimalDetailsView,
      beforeEnter: (to, from, next) => {
        if (!localStorage.getItem('token')){
          next('signIn');
        }else {
          next();
        }
      }
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoriteView,
      beforeEnter: (to, from, next) => {
        if (!localStorage.getItem('token')){
          next('signIn');
        }else {
          next();
        }
      }
    },
    {
      path: '/:id/adopt',
      name: 'adopt',
      component: AdoptionForm,
      beforeEnter: (to, from, next) => {
        if (!localStorage.getItem('token')){
          next('signIn');
        }else {
          next();
        }
      }
    }
  ]
})

export default router
