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

      <!-- Avatar with dropdown -->
      <template v-if="authStore.user">
        <div class="avatar-dropdown" @click="toggleDropdown">

          <img :src="authStore.user.avatarUrl || defaultAvatar" class="avatar-img" />
          <div v-if="showDropdown" class="dropdown-menu">
            <p>Hello {{ authStore.user.name }}!</p>
            <span class="divider"></span>
            <RouterLink to="/profile">Profile</RouterLink>
            <RouterLink to="/settings">Settings</RouterLink>
            <button @click="handleLogout" class="logout-button">Logout</button>
          </div>
        </div>
      </template>


      <template v-else>
        <RouterLink to="/register" class="signup-button">Sign up</RouterLink>
        <RouterLink to="/signin" class="signin-button">Sign in</RouterLink>
      </template>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useAuthStore } from '@/stores/authStore.js'
import { useRouter } from 'vue-router'
import NewCapsule from './NewCapsule.vue'
import defaultAvatar from '@/assets/images/default-avatar.png'

const authStore = useAuthStore()
const router = useRouter()
const isScrolled = ref(false)
const showDropdown = ref(false)

const handleLogout = () => {
  authStore.logout()
  router.push('/')
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
}

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

// close dropdown when click outside
const handleClickOutside = (e) => {
  if (!e.target.closest('.avatar-dropdown')) {
    showDropdown.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('click', handleClickOutside)
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
  z-index: 999;
  transition: box-shadow 0.3s ease;
}

header.scrolled {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

nav {
  display: flex;
  align-items: center;
  gap: 24px;
}

a {
  text-decoration: none;
  color: var(--color-text);
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 2px;
}

a:hover {
  color: var(--color-highlight);
  opacity: 1;
}

.router-link-active {
  color: var(--color-highlight);
  opacity: 1;
}

.logout-button {
  padding: 10px 15px;
  background: transparent;
  border: 1px solid var(--color-text);
  border-radius: 5px;
  font-size: 16px;
  line-height: 17px;
  cursor: pointer;
}

.logout-button:hover, .signup-button:hover {
  border: 1px solid var(--color-highlight);
  color: var(--color-highlight);
  background: var(--color-highlight-light);
}

.signup-button {
  padding: 10px 15px;
  background: transparent;
  border: 1px solid var(--color-text);
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  line-height: 17px;
  cursor: pointer;
}

.signin-button {
  padding: 10px 15px;
  background: var(--color-highlight-dark);
  border: 1px solid var(--color-highlight-dark);
  color: var(--color-bg-light);
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  line-height: 17px;
  cursor: pointer;
}

.signin-button:hover {
  background: var(--color-highlight);
  border: 1px solid var(--color-highlight);
  color: var(--color-bg-light);
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

.logo-container.router-link-active {
  color: var(--color-text);
}

.logo-container span {
  font-weight: 300;
  font-size: 36px;
  letter-spacing: 8px;
}

/* dropdown style */
.avatar-dropdown {
  position: relative;
}

.avatar-img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  object-fit: cover;
  opacity: 0.8;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: 120%;
  right: 0;
  background: var(--color-bg);
  border: 1px solid var(--color-lines);
  border-radius: 6px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  min-width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.dropdown-menu p {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text);
}

.dropdown-menu a {
  padding: 15px 0;
}

.divider {
  width: 100%;
  height: 1px;
  background: var(--color-lines);
  margin: 0;
}

</style>
