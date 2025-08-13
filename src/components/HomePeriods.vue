<template>
  <div class="home-periods-container">

    <div class="home-periods-header">
      <h1>Popular Time Periods</h1>
      <p>See when people choose to unlock their capsules and get inspired for your own timeline</p>
    </div>

    <div class="home-periods-cards">

      <div class="home-periods-card">
        <CalendarSVG :width="'24'" :height="'24'" :stroke="'#3B82F6'" :stroke-width="1.5" class="home-periods-card-icon bg-blue" />
        <p>1 Year</p>
        <span>Most popular</span>
      </div>

      <div class="home-periods-card">
        <TimerSVG :width="'24'" :height="'24'" :stroke="'#17A34A'" :stroke-width="1.5" class="home-periods-card-icon bg-green" />
        <p>5 Years</p>
        <span>Life changes</span>
      </div>

      <div class="home-periods-card">
        <HeartSVG :width="'24'" :height="'24'" :stroke="'#DC2625'" :stroke-width="13" class="home-periods-card-icon bg-red" />
        <p>10 Years</p>
        <span>Major milestones</span>
      </div>

      <div class="home-periods-card">
        <MedalSVG :width="'24'" :height="'24'" :fill="'#9334E9'" class="home-periods-card-icon bg-purple" />
        <p>6 Months</p>
        <span>Short term goals</span>
      </div>

      <div class="home-periods-card">
        <TrendUpSVG :width="'24'" :height="'24'" :stroke="'#CA8A03'" :stroke-width="1.7" class="home-periods-card-icon bg-yellow" />
        <p>20 Years</p>
        <span>Legacy messages</span>
      </div>

      <div class="home-periods-card">
        <GlobeSVG :width="'24'" :height="'24'" :stroke="'#EA580B'" :stroke-width="1.7" class="home-periods-card-icon bg-orange" />
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
  color: #000000;
  opacity: 0.7;
  margin-bottom: 16px;
}

.home-periods-header p {
  font-size: 16px;
  font-weight: 400;
  color: #000000;
  opacity: 0.6;
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
  border: 1px solid #c8c8c8;
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
  color: #000000;
  margin-bottom: 6px;
  opacity: 0.8;
}

.home-periods-card span {
  font-size: 13px;
  font-weight: 400;
  color: #000000;
  opacity: 0.6;
}

.home-periods-card-icon {
  height: 45px;
  width: 45px;
  margin-bottom: 16px;
  padding: 5px 8px;
  border-radius: 5px;
}


.bg-blue {
  background: #DBE9FE;
}
.bg-green {
  background: #DCFCE7;
}
.bg-red {
  background: #FEE2E1;
}
.bg-purple {
  background: #F3E8FF;
}
.bg-yellow {
  background: #FEF9C3;
}
.bg-orange {
  background: #FFEDD5;
}

/* .home-periods-card:hover {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border: 1px solid #d5d5d5;
  transition: all 0.2s ease;
} */
</style>
