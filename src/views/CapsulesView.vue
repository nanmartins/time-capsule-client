<template>
  <div class="capsules">

    <NewCapsule class="new-capsule" @capsuleCreated="refreshCapsules" />

    <div v-if="authStore.user" class="capsules-view">
      <CapsulesList class="capsules-list" :refreshTrigger="capsuleRefreshKey" />
    </div>

    <div v-else>
      <p>Please sign in to view your capsules. <RouterLink to="/signin" style="padding-left: 5px;"> Sign in</RouterLink></p>
    </div>
  </div>
</template>

<script setup>
import NewCapsule from '@/components/NewCapsule.vue'
import CapsulesList from '@/components/CapsulesList.vue'
import { useAuthStore } from '@/stores/authStore.js'
import { ref, onMounted } from 'vue'

// value to change to force refresh
const capsuleRefreshKey = ref(0)
const refreshCapsules = () => {
  capsuleRefreshKey.value += 1
}

const authStore = useAuthStore()

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
})
</script>

<style scoped>

.capsules {
  padding-top: 170px;
  max-width: 1000px;
  margin: 0 auto;
}
.capsule-view {
  width: 100%;
  margin: 0 auto;
  margin-top: 150px;
  padding: 20px;
  align-content: top;
}

.capsules-list {
  grid-column: 1;
}

p {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 84px);
}
</style>
