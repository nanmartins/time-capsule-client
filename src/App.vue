<template>
  <main>
    <div v-if="router.currentRoute.value.path !== '/signin' && router.currentRoute.value.path !== '/register'">
      <Header />
    </div>

    <section>
      <RouterView />
    </section>

    <div v-if="router.currentRoute.value.path !== '/capsules' && router.currentRoute.value.path !== '/signin' && router.currentRoute.value.path !== '/register'">
      <Footer />
    </div>
  </main>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';
import { useAuthStore } from '@/stores/authStore.js';
import router from './router';

const authStore = useAuthStore();
authStore.fetchUserProfile();

</script>
