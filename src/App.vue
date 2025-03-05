<template>
  <main>
    <Header />

    <section>
      <RouterView />
    </section>

    <Footer />
  </main>
</template>

<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';
import { useAuthStore } from '@/stores/authStore.js';

const authStore = useAuthStore();
authStore.fetchUserProfile();

</script>


<style scoped>

/* section {
  min-height: calc(100vh + 70px);
} */

</style>
