<template>
  <header>
    <RouterLink to="/"><img src="@/assets/images/logo-test.png" alt="Logo"></RouterLink>

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
import LogoutSVG from '@/assets/icons/LogoutSVG.vue';

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
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

nav {
  display: flex;
  align-items: center;
  gap: 20px;
  padding-right: 10px;
  text-transform: uppercase;
}

img {
  width: 100px;
}

a {
  font-family: "Josefin Sans", sans-serif;
  text-decoration: none;
  color: #000;
  font-size: 15px;
  text-shadow: 2px 1px 1px #FFFFFF;
}

button {
  padding: 10px 10px 6px 10px;
  background: transparent;
  border: 1px solid #333333;
  border-radius: 5px;
  font-family: "Josefin Sans", sans-serif;
  font-size: 15px;
  text-transform: uppercase;
  line-height: 17px;
}
</style>
