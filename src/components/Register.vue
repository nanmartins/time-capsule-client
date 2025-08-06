<template>
  <div class="user-form-container">
    <form @submit.prevent="handleRegister">
      <h1>Register</h1>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required />

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required />

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required />

      <button type="submit" class="user-form-btn">Register</button>

      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

      <p>Already have an account? <RouterLink to="/signin">Sign in</RouterLink></p>

    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { registerUser } from '@/services.js';

const name = ref('');
const email = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();

const handleRegister = async () => {
  try {
    await registerUser(name.value, email.value, password.value);
    alert("Usuário cadastrado com sucesso!");
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

<style>
.user-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  max-width: 400px;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  background: transparent;
  border: 1px solid #cecece;
  padding: 20px 30px 30px 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

input {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.user-form-btn {
  background-color: #007bff;
  color: white;
  padding: 14px;
  margin: 10px auto;
  border: none;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.user-form-btn:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  margin-top: 10px;
  font-weight: bold;
  text-align: center;
  margin: 10px 0;
}
</style>
