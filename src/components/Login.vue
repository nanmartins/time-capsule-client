<template>
  <div class="user-form-page">

    <div class="user-form-wrapper">

      <button @click="goBack" class="return-button">
        <ArrowSVG :width="'28'" :height="'28'" :stroke="'#2B2D42'" :stroke-width="1.1" class="return-button-icon" />
        Back
      </button>

      <RouterLink to="/" class="logo">
        <img src="@/assets/images/Timenest-logo.png" alt="Logo" />
        <h1>Timenest</h1>
      </RouterLink>

      <p class="user-form-welcome">Welcome back!</p>

      <div class="user-form-container">
        <form @submit.prevent="handleLogin">

          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="name@email.com"
            required
          />

          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Password"
            required
          />

          <button type="submit" class="user-form-btn">Sign in</button>

          <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

          <p class="user-form-direct-link">Don't have an account? <RouterLink to="/register">Sign up</RouterLink></p>
        </form>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { loginUser } from '@/services.js'
import { useAuthStore } from '@/stores/authStore.js'
import ArrowSVG from '@/assets/icons/ArrowSVG.vue'

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const router = useRouter()
const authStore = useAuthStore()

const handleLogin = async () => {
  try {
    const data = await loginUser(email.value, password.value);
    authStore.setToken(data.token)
    await authStore.fetchUserProfile()
    router.push('/')
  } catch (error) {
    errorMessage.value = error.message
    if (errorMessage.value) {
      setTimeout(() => {
        errorMessage.value = ''
      }, 3500)
    }
  }
}

// const goBack = () => {
//   if (window.history.length > 1) {
//     router.back()
//   } else {
//     router.push('/')
//   }
// }

const goBack = () => {
  router.push('/')
}
</script>
