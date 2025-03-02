<template>
  <div class="capsules">
    <div v-if="authStore.user" class="capsule-grid">
      <CapsulesList class="capsules-list" />
      <NewCapsule class="new-capsule" />
    </div>

    <div v-else>
      <p>Please sign in to view your capsules. <RouterLink to="/signin" style="padding-left: 5px;"> Sign in</RouterLink></p>
    </div>
  </div>
</template>

<script setup>
import NewCapsule from '@/components/NewCapsule.vue';
import CapsulesList from '@/components/CapsulesList.vue';
import { useAuthStore } from '@/stores/authStore.js';

const authStore = useAuthStore();
</script>

<style scoped>
.capsule-grid {
  display: grid;
  grid-template-columns: 1fr 300px;
  /* gap: 20px; */
  max-width: 1200px;
  width: 100%;
  min-height: calc(100vh - 84px);
  margin: 0 auto;
  padding: 20px;
  align-content: top;
}

.capsules-list {
  grid-column: 1;
}

.new-capsule {
  grid-column: 2;
}

p {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 84px);
}
</style>
