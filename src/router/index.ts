import {
  createRouter,
  createWebHistory, type NavigationGuardNext,
  type RouteLocationNormalized,
  type RouteLocationNormalizedLoadedGeneric
} from 'vue-router'
import MainView from '@/views/MainView.vue'
import LoginView from '@/views/LoginView.vue'
import { AnimalDetailsView } from '@/shared/components'
import FavoriteView from '@/views/FavoriteView.vue'
import AdoptionForm from '@/views/AdoptionForm.vue'
import AdoptionsListView from '@/views/AdoptionsListView.vue'
import AboutView from '@/views/AboutView.vue'

const requireAuth = (to : RouteLocationNormalized, from : RouteLocationNormalizedLoadedGeneric, next : NavigationGuardNext) => {
  if (!localStorage.getItem('token')) {
    next('signIn')
  } else {
    next()
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: MainView,
      beforeEnter: requireAuth
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
      beforeEnter: requireAuth
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoriteView,
      beforeEnter: requireAuth
    },
    {
      path: '/:id/adopt',
      name: 'adopt',
      component: AdoptionForm,
      beforeEnter: requireAuth
    },
    {
      path: '/user/adoptions',
      name: 'UserAdoptions',
      component: AdoptionsListView,
      beforeEnter: requireAuth
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      beforeEnter: requireAuth
    }
  ]
})

export default router
