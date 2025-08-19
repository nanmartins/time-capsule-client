<template>
  <header :class="{ 'scrolled': isScrolled }">
    <RouterLink to="/" class="logo-container">
      <img src="@/assets/images/Timenest-logo.png" alt="Logo">
      <span>Timenest</span>
    </RouterLink>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/capsules">Capsules</RouterLink>

      <template v-if="authStore.user">
        <RouterLink to="/profile">Profile</RouterLink>
        <button @click="handleLogout" class="logout-button">Logout</button>
      </template>

      <RouterLink v-else to="/signin">Sign in</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useAuthStore } from '@/stores/authStore.js'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()
const isScrolled = ref(false)

const handleLogout = () => {
  authStore.logout()
  router.push('/')
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
})

</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
  width: 100%;
  background: var(--color-bg);
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: box-shadow 0.3s ease;
}

header.scrolled {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

nav {
  display: flex;
  align-items: center;
  gap: 35px;
  padding-right: 10px;
}

a {
  text-decoration: none;
  letter-spacing: 3px;
  color: var(--color-text);
  font-size: 18px;
  font-weight: 300;
}

a:hover {
  color: var(--color-highlight);
  opacity: 1;
}

.logout-button {
  padding: 10px 15px;
  background: transparent;
  border: 1px solid var(--color-text);
  border-radius: 5px;
  font-size: 20px;
  line-height: 17px;
  cursor: pointer;
}

.logout-button:hover {
  border: 1px solid var(--color-highlight);
  color: var(--color-highlight);
}

/* logo style */
img {
  width: 50px;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
}

.logo-container:hover {
  color: var(--color-text);
}

.logo-container span {
  font-weight: 300;
  font-size: 32px;
  letter-spacing: 8px;
}
</style>
