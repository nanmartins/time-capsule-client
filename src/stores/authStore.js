
import { defineStore } from 'pinia'
import { getUser } from '@/services.js'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || null,
  }),

  actions: {
    setUser(user) {
      this.user = user
    },

    setToken(token) {
      this.token = token
      localStorage.setItem('token', token)
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
      // window.location.href = '/'
      window.location.reload()
    }
  }
})
