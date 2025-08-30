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
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/authStore.js'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import router from './router'

const authStore = useAuthStore()
authStore.fetchUserProfile()

onMounted( async () => {
  await authStore.restoreSession()
})
</script>
