<template>
  <header>
    <!-- <RouterLink to="/"><img src="@/assets/images/logo-test.png" alt="Logo"></RouterLink> -->
    <RouterLink to="/" class="logo-container">
      <img src="@/assets/images/Timenest-logo.png" alt="Logo">
      <span>Timenest</span>
    </RouterLink>


    <nav>
      <RouterLink to="/">Home</RouterLink>
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
  padding: 15px 25px;
  width: 100%;
  background-color: #FAF9F6;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  /* box-shadow: 1px 1px #dfdfdf; */
  border-bottom: 1px solid #e6e6e6;

}

nav {
  display: flex;
  align-items: center;
  gap: 35px;
  padding-right: 10px;
}

a {
  font-family: 'Avenir Next', sans-serif;
  text-decoration: none;
  letter-spacing: 3px;
  color: #000;
  font-size: 18px;
  font-weight: 300;
  text-shadow: 2px 1px 1px #FFFFFF;
  opacity: 0.85;
}

a:hover {
  opacity: 1;
}

button {
  padding: 10px 15px 10px 15px;
  background: transparent;
  border: 1px solid #000;
  border-radius: 5px;
  font-family: 'Avenir Next', sans-serif;
  font-size: 20px;
  line-height: 17px;
  opacity: 0.85;
  cursor: pointer;
}

/* // new logo style */
img {
  width: 50px;
  opacity: 0.85;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
}

.logo-container span {
  font-weight: 300;
  text-shadow: 2px 1px 1px #FFFFFF;
  font-size: 32px;
  letter-spacing: 8px;
  opacity: 0.85;
}
</style>
