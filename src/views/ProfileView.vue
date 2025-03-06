<template>
  <div v-if="authStore.user">
    <h1>Welcome back, {{ authStore.user?.name }}</h1>
    <p>Email: {{ authStore.user?.email }}</p>
    <!-- <button @click="authStore.logout">Logout</button> -->
  </div>
  <div v-else>
    <p>Please sign in to view your profile. <RouterLink to="/signin">Sign in</RouterLink></p>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore.js';

const authStore = useAuthStore();
</script>


<style scoped>

div {
  min-height: calc(100vh + 70px);
  padding: 200px 30px;
}

</style>
