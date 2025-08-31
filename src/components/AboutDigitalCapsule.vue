<template>
  <div class="about-digital-capsule">

    <div class="about-digital-capsule-header">
      <h1>What is a Digital Time Capsule?</h1>
      <p>A digital time capsule is a secure, private space where you can store messages, photos, and thoughts that will be revealed to you at a future date of your choosing.</p>
    </div>

    <div class="about-capsule-card-container">

      <div class="about-capsule-cards">

        <div class="about-capsule-card">
          <FolderSVG :width="'18'" :height="'18'" :stroke-width="2"/>
          <div class="about-capsule-card-content">
            <h3>Preserved Digital Memories</h3>
            <p>Safeguard unique moments in a secure, lasting format—creating digital time capsules that can carry your story into the future.</p>
          </div>
        </div>

        <div class="about-capsule-card">
          <ShieldSVG :width="'18'" :height="'18'" :stroke-width="2" />
          <div class="about-capsule-card-content">
            <h3>Security & Privacy Assured</h3>
            <p>Each capsule is protected and locked until the date you choose, keeping your thoughts and memories completely private until the right moment arrives.</p>
          </div>
        </div>

        <div class="about-capsule-card">
          <FutureClockSVG :width="'18'" :height="'18'" />
          <div class="about-capsule-card-content">
            <h3>The Power of Time</h3>
            <p>Digital time capsules turn the simple act of writing into a meaningful experience—where the present meets the future, helping you reflect on change, values, and milestones over the years.</p>
          </div>
        </div>
      </div>


      <div class="about-capsule-cards">
        <h3>Your Message Awaits</h3>
        <p>Imagine opening a heartfelt letter from yourself one, five, or even ten years ago. What would you want to remember? What dreams would you want to revisit?</p>

        <span>"Dear future me, today I'm 25 and just started my dream job. I hope by the time you read this, you've traveled the world and found true happiness..."</span>
      </div>

    </div>
  </div>
</template>

<script setup>
import FolderSVG from '@/assets/icons/FolderSVG.vue'
import ShieldSVG from '@/assets/icons/ShieldSVG.vue'
import FutureClockSVG from '@/assets/icons/FutureClockSVG.vue'
</script>

<style scoped>
.about-digital-capsule {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-height: 550px;
  text-align: center;
  padding: 300px 24px;
  background: var(--color-bg-light);
}

.about-digital-capsule-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 48px;
}

.about-digital-capsule-header h1 {
  font-size: 26px;
  font-weight: 700;
  line-height: 115%;
  letter-spacing: 2px;
  color: var(--color-text);
  margin-bottom: 16px;
}

.about-digital-capsule-header p {
  font-size: 16px;
  font-weight: 400;
  color: var(--color-text);
  width: 100%;
  max-width: 700px;
  letter-spacing: 1.2px;
}

/* Card container */
.about-capsule-card-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  max-width: 1000px;
  margin: auto;
}

.about-capsule-cards {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}

.about-capsule-card {
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>
