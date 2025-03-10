import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignInView from '@/views/SignInView.vue'
import CapsulesView from '@/views/CapsulesView.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import Profile from '@/views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignInView,
      children: [
        {
          path: '/signin',
          name: 'login',
          component: Login,
        },
        {
          path: '/register',
          name: 'register',
          component: Register,
        }
      ]
    },
    {
      path: '/capsules',
      name: 'capsules',
      component: CapsulesView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    }
  ],
})

export default router
