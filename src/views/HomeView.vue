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
        <button><RouterLink to="/about" class="home-banner-buttons-link">Learn more</RouterLink></button>
      </div>
    </div>


    <HomeWhyCreate />

    <HomeIntroSteps />

    <HomeStatsOverview />

    <HomePeriods />

    <HomeNewsletter />

  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import ArrowSVG from '@/assets/icons/ArrowSVG.vue'
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
  font-weight: 800;
  line-height: 115%;
  letter-spacing: 2px;
  color: var(--color-text);
}

.home-banner h1:nth-child(2) {
  color: var(--color-highlight);
}

.home-banner p {
  font-size: 22px;
  font-weight: 300;
  line-height: 140%;
  color: #000000;
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
  background: var(--color-highlight);
  border: none;
  border-radius: 6px;
  padding: 10px 25px;
  font-size: 17px;
  font-weight: 500;
}

.home-banner-buttons button:hover {
  background: var(--color-text);
  transition: all 0.2s ease-in-out;
}

.home-banner-buttons button:nth-child(2) {
  background: transparent;
  border: 1px solid var(--color-text);
}

.home-banner-buttons button:nth-child(2):hover {
  border: 1px solid var(--color-highlight);
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
  color: var(--color-text);
}

.home-banner-buttons button:nth-child(2):hover a {
  color: var(--color-highlight);
  transition: all 0.2s ease-in-out;
}

</style>
