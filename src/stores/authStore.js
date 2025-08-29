import { defineStore } from 'pinia'
import { getUser } from '@/services.js'
import { jwtDecode } from 'jwt-decode'
import router from '@/router'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || null,
    tokenExpiryTimeout: null,
  }),

  getters: {
    // Verify if user is authenticated
    isAuthenticated: (state) => {
      if (!state.token) return false
      try {
        const { exp } = jwtDecode(state.token)
        const isExpired = Date.now() >= exp * 1000
        return !isExpired && !!state.user
      } catch (e) {
        return false
      }
    },
  },


  actions: {
    setUser(user) {
      this.user = user
    },

    setToken(token) {
      this.token = token
      localStorage.setItem('token', token)

      // Decode JWT expiration (exp is in seconds)
      const { exp } = jwtDecode(token)
      const expiresInMs = exp * 1000 - Date.now()

      if (this.tokenExpiryTimeout) clearTimeout(this.tokenExpiryTimeout)

      if (expiresInMs > 0) {
        this.tokenExpiryTimeout = setTimeout(() => {
          this.logout()
        }, expiresInMs)
      } else {
        this.logout()
      }
    },


    async fetchUserProfile() {
      try {
        if (!this.token) return
        const userData = await getUser()
        this.setUser(userData)
      } catch (error) {
        console.error('Error fetching user profile:', error.message)
        this.logout()
      }
    },


    logout() {
      this.user = null
      this.token = null
      localStorage.removeItem('token')

      if (this.tokenExpiryTimeout) clearTimeout(this.tokenExpiryTimeout)
      this.tokenExpiryTimeout = null

      // Redirect to home page
      if (router.currentRoute.value.meta.requiresAuth) {
        router.push('/')
      }
    },

  },
})
