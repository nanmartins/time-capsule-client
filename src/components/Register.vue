<template>
  <div class="register-container">
    <form @submit.prevent="handleRegister">
      <h1>Register</h1>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required />

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required />

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required />

      <button type="submit">Sign up</button>

      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
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
  }
};
</script>

<style scoped>

.register-container {
  max-width: 450px;
  margin: auto;
  padding: 20px;
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
