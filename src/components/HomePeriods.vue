<template>
  <div class="home-periods-container">

    <div class="home-periods-header">
      <h1>Popular Time Periods</h1>
      <p>See when people choose to unlock their capsules and get inspired for your own timeline</p>
    </div>

    <div class="home-periods-cards">

      <div class="home-periods-card">
        <CalendarSVG :width="'24'" :height="'24'" :stroke="'#3F88C5'" :stroke-width="1.5" class="home-periods-card-icon" />
        <p>1 Year</p>
        <span>Most popular</span>
      </div>

      <div class="home-periods-card">
        <TimerSVG :width="'24'" :height="'24'" :stroke="'#3F88C5'" :stroke-width="1.5" class="home-periods-card-icon" />
        <p>5 Years</p>
        <span>Life changes</span>
      </div>

      <div class="home-periods-card">
        <HeartSVG :width="'24'" :height="'24'" :stroke="'#3F88C5'" :stroke-width="13" class="home-periods-card-icon" />
        <p>10 Years</p>
        <span>Major milestones</span>
      </div>

      <div class="home-periods-card">
        <MedalSVG :width="'24'" :height="'24'" :fill="'#3F88C5'" class="home-periods-card-icon" />
        <p>6 Months</p>
        <span>Short term goals</span>
      </div>

      <div class="home-periods-card">
        <TrendUpSVG :width="'24'" :height="'24'" :stroke="'#3F88C5'" :stroke-width="1.7" class="home-periods-card-icon" />
        <p>20 Years</p>
        <span>Legacy messages</span>
      </div>

      <div class="home-periods-card">
        <GlobeSVG :width="'24'" :height="'24'" :stroke="'#3F88C5'" :stroke-width="1.7" class="home-periods-card-icon" />
        <p>Custom</p>
        <span>Your choice</span>
      </div>

    </div>
  </div>
</template>

<script setup>
import CalendarSVG from '@/assets/icons/CalendarSVG.vue'
import TimerSVG from '@/assets/icons/TimerSVG.vue'
import HeartSVG from '@/assets/icons/HeartSVG.vue'
import MedalSVG from '@/assets/icons/MedalSVG.vue'
import TrendUpSVG from '@/assets/icons/TrendUpSVG.vue'
import GlobeSVG from '@/assets/icons/GlobeSVG.vue'

</script>


<style scoped>

.home-periods-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 82px 16px;
  width: 100%;
  background: #FFFFFF;
}

.home-periods-header {
  text-align: center;
  width: 100%;
  max-width: 700px;
}

.home-periods-header h1 {
  font-size: 26px;
  font-weight: 700;
  line-height: 115%;
  letter-spacing: 2px;
  color: var(--color-text);
  margin-bottom: 16px;
}

.home-periods-header p {
  font-size: 16px;
  font-weight: 400;
  color: var(--color-text);
  width: 100%;
  max-width: 700px;
  letter-spacing: 1.2px;
}

.home-periods-cards {
  display: grid;
  gap: 16px;
  padding: 0 24px;
  margin-top: 32px;
  width: 100%;
  grid-template-columns: repeat(6, 1fr);
}

@media (max-width: 1100px) {
  .home-periods-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 700px) {
  .home-periods-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .home-periods-cards {
    grid-template-columns: repeat(1, 1fr);
  }
}

.home-periods-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid var(--color-lines);
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.2s ease;
}

.home-periods-card:hover {
  opacity: 1;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.home-periods-card p {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 6px;
}

.home-periods-card span {
  font-size: 13px;
  font-weight: 400;
  color: var(--color-text);
  /* opacity: 0.6; */
}

.home-periods-card-icon {
  height: 45px;
  width: 45px;
  margin-bottom: 16px;
  padding: 5px 8px;
  border-radius: 5px;
  background: var(--color-highlight-light);
}

</style>
