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
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Intercept response errors
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      const authStore = useAuthStore()
      authStore.logout()

      // Redirect to the sign-in page
      window.location.href = '/signin'
      //window.location.reload()
    }
    return Promise.reject(error)
  }
)

export default api
