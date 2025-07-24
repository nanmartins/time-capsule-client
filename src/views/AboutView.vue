<template>
  <div class="about">
    <h1>About</h1>
  </div>
</template>


<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
})
</script>


<style>

.about {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
