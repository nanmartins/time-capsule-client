
import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
import HomeView from '../views/HomeView.vue'
import SignInView from '@/views/SignInView.vue'
import CapsulesView from '@/views/CapsulesView.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import Profile from '@/views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignInView,
      children: [
        { path: '/signin', name: 'login', component: Login },
        { path: '/register', name: 'register', component: Register }
      ]
    },
    {
      path: '/capsules',
      name: 'capsules',
      component: CapsulesView,
      meta: { requiresAuth: true },
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: { requiresAuth: true },
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingsView.vue'),
      meta: { requiresAuth: true },
    }
  ],
})


router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()

  // wait for the session to be loaded
  if (!authStore.user && authStore.token) {
    await authStore.restoreSession()
  }

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/signin')
  } else {
    next()
  }
})

export default router
