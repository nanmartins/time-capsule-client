<template>
  <div class="capsules">
    <NewCapsule />
    <CapsulesList />
  </div>
</template>


<script setup>
import NewCapsule from '@/components/NewCapsule.vue';
import CapsulesList from '@/components/CapsulesList.vue';
</script>


<style scoped>

.capsules {
  min-height: calc(100vh - 84px);
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
}
</style>
