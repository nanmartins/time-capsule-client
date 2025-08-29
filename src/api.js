import axios from 'axios'
import { useAuthStore } from '@/stores/authStore'

const api = axios.create({
  baseURL: 'https://time-capsule-server-omega.vercel.app/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add the JWT token to requests
api.interceptors.request.use(config => {
  const authStore = useAuthStore()
  if (authStore.token) {
    config.headers.Authorization = `Bearer ${authStore.token}`
  }
  return config
})

// Intercept responses with errors
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      const authStore = useAuthStore()
      authStore.logout()
      window.location.href = '/signin' // redirect to the sign-in page
    }
    return Promise.reject(error)
  }
)

export default api
