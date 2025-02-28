<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" placeholder="Your email" required />

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" placeholder="Your password" required />

      <button type="submit">Sign in</button>

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
    router.push('/profile');
  } catch (error) {
    errorMessage.value = error.message;
  }
};
</script>


<style scoped>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  /* text-align: center; */
}

input {
  display: block;
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

p {
  margin: 10px 0;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
