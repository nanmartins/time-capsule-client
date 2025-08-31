<template>
  <div v-if="router.currentRoute.value.path !== '/signin' && router.currentRoute.value.path !== '/register'">
    <Header />
  </div>

  <section>
    <RouterView />
  </section>

  <main v-if="isAppReady">
    <div v-if="router.currentRoute.value.path !== '/capsules' && router.currentRoute.value.path !== '/signin' && router.currentRoute.value.path !== '/register'">
      <Footer />
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/authStore.js'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import router from './router'

const authStore = useAuthStore()
const isAppReady = ref(false)

onMounted(async () => {
  await authStore.restoreSession()
  await router.isReady()
  isAppReady.value = true
})
</script>
