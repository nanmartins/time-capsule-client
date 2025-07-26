<template>
  <main>
    <Header />

    <section>
      <RouterView />
    </section>

    <div v-if="router.currentRoute.value.path !== '/capsules'">
      <Footer />
    </div>
  </main>
</template>

<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';
import { useAuthStore } from '@/stores/authStore.js';
import router from './router';

const authStore = useAuthStore();
authStore.fetchUserProfile();

</script>


<style scoped>

/* section {
  min-height: calc(100vh + 70px);
} */

</style>
