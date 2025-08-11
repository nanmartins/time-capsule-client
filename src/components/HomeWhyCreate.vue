<template>
  <div class="home-why-create">

    <div class="home-why-create-header">
      <h1>Why Create Time Capsules?</h1>
      <p>Discover the powerful benefits of connecting with your future self through meaningful messages</p>
    </div>


    <div class="home-why-create-cards">
      <div class="home-why-create-card blue-bg">
        <div class="home-why-create-card-header">
          <HeartSVG :width="'48'" :height="'48'" class="home-why-card-icon" />
          <h2>Emotional Connection</h2>
        </div>
        <p>Create a meaningful dialogue with your future self, capturing your current thoughts, dreams, and feelings in a moment of time.</p>
      </div>

      <div class="home-why-create-card green-bg">
        <div class="home-why-create-card-header">
          <LightBulbSVG :width="'48'" :height="'48'" :stroke="'#17A34A'" :strokeWidth="1.7" class="home-why-card-icon" />
          <h2>Personal Growth</h2>
        </div>
        <p>Reflect on your journey, track your progress, and gain insights into how you've evolved and grown over time.</p>
      </div>

      <div class="home-why-create-card purple-bg">
        <div class="home-why-create-card-header">
          <TargetSVG :width="'48'" :height="'48'" :stroke="'#9334E9'" :strokeWidth="1.7" class="home-why-card-icon" />
          <h2>Goal Achievement</h2>
        </div>
        <p>Set intentions and goals, then rediscover them later to see how far you've come and what you've accomplished.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeartSVG from '@/assets/icons/HeartSVG.vue';
import LightBulbSVG from '@/assets/icons/LightBulbSVG.vue';
import TargetSVG from '@/assets/icons/TargetSVG.vue';
</script>

<style scoped>

.home-why-create {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-height: 550px;
  background: #FFFFFF;
  text-align: center;
  padding: 86px 24px;
}

.home-why-create-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 48px;
}

.home-why-create-header h1 {
  font-size: 26px;
  font-weight: 700;
  line-height: 115%;
  letter-spacing: 2px;
  color: #000000;
  opacity: 0.7;
  margin-bottom: 16px;
}

.home-why-create-header p {
  font-size: 16px;
  font-weight: 400;
  color: #000000;
  opacity: 0.6;
  width: 100%;
  max-width: 700px;
  letter-spacing: 1.2px;
}

.home-why-create-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

.home-why-create-card {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 24px;
  padding: 24px;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
}

.home-why-create-card-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.home-why-card-icon {
  padding: 10px;
  border-radius: 5px;
}

.blue-bg .home-why-card-icon {
  background: #DBE9FE;
}
.green-bg .home-why-card-icon {
  background: #DCFCE7;
}
.purple-bg .home-why-card-icon {
  background: #F3E8FF;
}

.home-why-create-card-header h2 {
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  opacity: 0.6;
}

.home-why-create-card p {
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  opacity: 0.6;
}
</style>
