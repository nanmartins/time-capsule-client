<template>
  <div class="home">

    <HomeHero />

    <HomeWhyCreate />

    <HomeIntroSteps />

    <HomeStatsOverview />

    <HomePeriods />

    <HomeNewsletter />

  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import HomeHero from '@/components/HomeHero.vue'
import HomeWhyCreate from '@/components/HomeWhyCreate.vue'
import HomeIntroSteps from '@/components/HomeIntroSteps.vue'
import HomeStatsOverview from '@/components/HomeStatsOverview.vue'
import HomePeriods from '@/components/HomePeriods.vue'
import HomeNewsletter from '@/components/HomeNewsletter.vue'


onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
})
</script>

<style scoped>

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
