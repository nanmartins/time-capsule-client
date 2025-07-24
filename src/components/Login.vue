<template>
  <div class="user-form-container">
    <form @submit.prevent="handleLogin">
      <h1>Login</h1>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" placeholder="Your email" required />

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" placeholder="Your password" required />

      <button type="submit" class="user-form-btn">Sign in</button>

      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

      <p>Don't have an account? <RouterLink to="/register">Sign up</RouterLink></p>
    </form>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { loginUser } from '@/services.js';
import { useAuthStore } from '@/stores/authStore.js';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();
const authStore = useAuthStore();

const handleLogin = async () => {
  try {
    const data = await loginUser(email.value, password.value);
    authStore.setToken(data.token);
    await authStore.fetchUserProfile();
    router.push('/');
  } catch (error) {
    errorMessage.value = error.message;
    if(errorMessage.value) {
      setTimeout(() => {
        errorMessage.value = '';
      }, 3500)
    }
  }
};
</script>
