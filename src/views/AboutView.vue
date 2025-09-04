<template>
  <div class="about">

    <AboutHero />

    <AboutDigitalCapsule />

    <AboutLifeMoments />

    <AboutPrivacy />

    <AboutReviews />

    <AboutReadyToStart />

  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AboutHero from '@/components/AboutHero.vue'
import AboutDigitalCapsule from '@/components/AboutDigitalCapsule.vue'
import AboutReadyToStart from '@/components/AboutReadyToStart.vue'
import AboutPrivacy from '@/components/AboutPrivacy.vue'
import AboutReviews from '@/components/AboutReviews.vue'
import AboutLifeMoments from '@/components/AboutLifeMoments.vue'
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
