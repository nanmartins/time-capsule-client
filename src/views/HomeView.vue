<template>
  <div class="home">

    <div class="home-banner">
      <h1>Send Messages to Your</h1>
      <h1>Future Self</h1>

      <p>Create time capsules with your thoughts, dreams, and memories. Set a future date and rediscover them when the time is right.</p>

      <div class="home-banner-buttons">
        <button>
          <RouterLink to="/capsules">
            Create your first capsule
            <ArrowSVG :width="'20'" :height="'20'" :stroke="'#FFFFFF'" :stroke-width="1.5" />
          </RouterLink>
        </button>
        <button><RouterLink to="/about">Learn more</RouterLink></button>
      </div>
    </div>


    <HomeWhyCreate />

    <HomeIntroSteps />

    <HomeStatsOverview />

    <HomePeriods />

  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import ArrowSVG from '@/assets/icons/ArrowSVG.vue'
import HomeWhyCreate from '@/components/HomeWhyCreate.vue'
import HomeIntroSteps from '@/components/HomeIntroSteps.vue'
import HomeStatsOverview from '@/components/HomeStatsOverview.vue'
import HomePeriods from '@/components/HomePeriods.vue'


onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
})
</script>

<style scoped>

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
}

.home-banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  min-height: 450px;
}

.home-banner h1 {
  font-size: 48px;
  font-weight: 700;
  line-height: 115%;
  letter-spacing: 2px;
  color: #000000;
  opacity: 0.7;
}

.home-banner h1:nth-child(2) {
  color: #22C55E;
  opacity: 0.9;
}

.home-banner p {
  font-size: 22px;
  font-weight: 400;
  line-height: 140%;
  color: #000000;
  opacity: 0.6;
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  letter-spacing: 1.2px;
}

.home-banner-buttons {
  margin-top: 30px;
  display: flex;
  gap: 20px;
}

.home-banner-buttons button {
  background: #22C55E;
  border: none;
  border-radius: 6px;
  padding: 10px 25px;
  font-size: 17px;
}

.home-banner-buttons button:hover {
  background: #1b9648;
  transition: all 0.2s ease-in-out;
}

.home-banner-buttons button:nth-child(2) {
  background: transparent;
  border: 1px solid #cecece;
}

.home-banner-buttons button:nth-child(2):hover {
  background: #cecece;
  transition: all 0.2s ease-in-out;
}

.home-banner-buttons button a {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #FFFFFF;
}

.home-banner-buttons button:nth-child(2) a {
  color: #000000;
  opacity: 0.7;
}


</style>
