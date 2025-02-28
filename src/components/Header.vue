<template>
  <header>
    <RouterLink to="/"><img src="@/assets/images/logo.png" alt="Logo"></RouterLink>

    <nav>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/capsules">Capsules</RouterLink>

      <template v-if="authStore.user">
        <RouterLink to="/profile">Profile</RouterLink>
        <button @click="handleLogout">Logout</button>
      </template>

      <RouterLink v-else to="/signin">Sign in</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore.js';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const handleLogout = () => {
  authStore.logout();
  router.push('/');
  // window.location.reload();
};
</script>


<style scoped>

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  box-sizing: border-box;
}

nav {
  display: flex;
  gap: 20px;
  padding-right: 10px;
}

img {
  width: 80px;
}

a {
  text-decoration: none;
  color: #000;
}
</style>
