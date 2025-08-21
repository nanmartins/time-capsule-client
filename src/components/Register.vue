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

      <p class="user-form-welcome">Register now.</p>


      <div class="user-form-container">
        <form @submit.prevent="handleRegister">

          <input type="text" id="name" v-model="name" placeholder="Name" required />
          <input type="email" id="email" v-model="email" placeholder="Email" required />
          <input type="password" id="password" v-model="password" placeholder="Password" required />

          <button type="submit" class="user-form-btn">Sign up</button>

          <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

          <p class="user-form-direct-link">Already have an account? <RouterLink to="/signin">Sign in</RouterLink></p>
        </form>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { registerUser } from '@/services.js'
import ArrowSVG from '@/assets/icons/ArrowSVG.vue'

const name = ref('')
const email = ref('')
const password = ref('')
const errorMessage = ref('')
const router = useRouter()

const handleRegister = async () => {
  try {
    await registerUser(name.value, email.value, password.value)
    alert("Usuário cadastrado com sucesso!")
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

const goBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/')
  }
}
</script>

<style>
.user-form-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: relative;
}

.user-form-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
}

.return-button {
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  top: 30px;
  right: 30px;
  padding: 8px 22px 8px 18px;
  background: transparent;
  border: 1px solid var(--color-highlight-dark);
  border-radius: 6px;
  font-size: 18px;
  color: var(--color-highlight-dark);
  letter-spacing: 3px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.return-button:hover {
  background: var(--color-highlight-light);
}

.return-button-icon {
  transform: rotate(180deg);
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
}

.logo img {
  width: 40px;
  height: 40px;
}

.logo h1 {
  color: var(--color-text);
  font-size: 34px;
  font-weight: 400;
  letter-spacing: 10px;
}

.user-form-welcome {
  font-size: 22px;
  font-weight: 200;
  color: var(--color-text);
  margin-bottom: 30px;
}

.user-form-container {
  width: 100%;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
}

input {
  display: block;
  width: 100%;
  padding: 15px 18px;
  margin-bottom: 15px;
  font-size: 16px;
  border: 1px solid var(--color-lines);
  border-radius: 4px;
  box-sizing: border-box;
}

input:focus {
  outline: none;
  border: 1px solid var(--color-highlight);
}

input::placeholder {
  font-size: 16px;
}

.user-form-btn {
  background-color: var(--color-highlight-dark);
  color: var(--color-bg-light);
  padding: 15px 18px;
  font-size: 18px;
  font-weight: 400;
  border: none;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.user-form-btn:hover {
  background-color: var(--color-highlight);
}

.user-form-direct-link {
  font-size: 16px;
  color: var(--color-text);
}

.user-form-direct-link a {
  color: var(--color-highlight-dark);
}

.user-form-direct-link a:hover {
  color: var(--color-highlight);
}


.error {
  color: var(--color-warning);
  font-weight: 500;
  text-align: center;
}
</style>
