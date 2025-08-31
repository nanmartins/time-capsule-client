<template>
  <div class="about">

    <AboutHero />

    <AboutDigitalCapsule />

  </div>
</template>


<script setup>
import { onMounted } from 'vue'
import AboutHero from '@/components/AboutHero.vue'
import AboutDigitalCapsule from '@/components/AboutDigitalCapsule.vue'

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
</script>


<style>

.about {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
