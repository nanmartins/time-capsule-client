<template>
  <div class="capsules">
    <!-- <h1>Capsules</h1> -->

    <NewCapsule />
  </div>
</template>


<script setup>
import NewCapsule from '@/components/NewCapsule.vue';
</script>


<style scoped>

.capsules {
  min-height: calc(100vh - 84px);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
