<template>
  <div class="about-life-moments">

    <div class="about-life-moments-header">
      <h1>Perfect for Life's Important Moments</h1>
      <p>Whether it's a milestone, a goal, or just a moment you want to remember, TimeCapsule helps you capture it</p>
    </div>


    <div class="about-life-moments-cards">

      <div class="about-life-moments-card">
        <TargetSVG :width="'28'" :height="'28'" :stroke="'#3F88C5'" :stroke-width="1.5" class="about-life-moments-card-icon" />
        <h3>New Year Resolutions</h3>
        <p>Set your goals and aspirations at the beginning of the year, then unlock them to see how far you've come.</p>
      </div>

      <div class="about-life-moments-card">
        <HeartSVG :width="'28'" :height="'28'" :stroke="'#3F88C5'" class="about-life-moments-card-icon" />
        <h3>Life Milestones</h3>
        <p>Capture the emotions of graduations, weddings, new jobs, or becoming a parent for future reflection.</p>
      </div>

      <div class="about-life-moments-card">
        <UsersSVG :width="'28'" :height="'28'" :stroke="'#3F88C5'" :stroke-width="1.7" class="about-life-moments-card-icon" />
        <h3>Family Memories</h3>
        <p>Create shared family capsules to open together, preserving precious moments and family traditions.</p>
      </div>

      <div class="about-life-moments-card">
        <LightBulbSVG :width="'28'" :height="'28'" :stroke="'#3F88C5'" :stroke-width="1.8" class="about-life-moments-card-icon" />
        <h3>Personal Growth</h3>
        <p>Document your thoughts during challenging times and rediscover your strength and resilience later.</p>
      </div>

      <div class="about-life-moments-card">
        <GlobeSVG :width="'28'" :height="'28'" :stroke="'#3F88C5'" :stroke-width="1.6" class="about-life-moments-card-icon" />
        <h3>Travel Adventures</h3>
        <p>Set intentions and goals, then rediscover them later to see how far you've come and what you've accomplished.</p>
      </div>

      <div class="about-life-moments-card">
        <StarSVG :width="'28'" :height="'28'" :stroke="'#3F88C5'" :stroke-width="1.6" class="about-life-moments-card-icon" />
        <h3>Daily Reflections</h3>
        <p>Create regular capsules to track your daily thoughts, mood, and experiences over time.</p>
      </div>

    </div>

  </div>
</template>

<script setup>
import TargetSVG from '@/assets/icons/TargetSVG.vue'
import HeartSVG from '@/assets/icons/HeartSVG.vue'
import UsersSVG from '@/assets/icons/UsersSVG.vue'
import LightBulbSVG from '@/assets/icons/LightBulbSVG.vue'
import GlobeSVG from '@/assets/icons/GlobeSVG.vue'
import StarSVG from '@/assets/icons/StarSVG.vue'
</script>

<style scoped>

.about-life-moments {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 100px 24px;
}

.about-life-moments-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 48px;
  max-width: 800px;
}

.about-life-moments-header h1 {
  font-size: 26px;
  font-weight: 700;
  line-height: 115%;
  letter-spacing: 2px;
  color: var(--color-text);
  margin-bottom: 10px;
}

.about-life-moments-header p {
  font-size: 15px;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 1px;
  color: var(--color-text);
}

/* About Cards */
.about-life-moments-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 24px;
  margin: 0 auto;
  max-width: 1200px;
}

.about-life-moments-card {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: flex-start;
  padding: 24px;
  background: var(--color-bg);
  border: 1px solid var(--color-lines);
  border-radius: 8px;
}

.about-life-moments-card svg {
  width: 46px;
  height: 46px;
  flex-shrink: 0;
}

.about-life-moments-card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  padding: 8px;
  background: var(--color-highlight-light);
  border-radius: 6px;
  margin-bottom: 10px;
}

.about-life-moments-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text);
  letter-spacing: 1.1px;
  margin-bottom: 16px;
}

.about-life-moments-card p {
  font-size: 14px;
  font-weight: 400;
  color: var(--color-text);
  letter-spacing: 1.4px;
  line-height: 24px;
  text-align: start;
}
</style>
