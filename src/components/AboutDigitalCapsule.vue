<template>
  <div class="about-digital-capsule">

    <div class="about-digital-capsule-header">
      <h1>What is a Digital Time Capsule?</h1>
      <p>A digital time capsule is a secure, private space where you can store messages, photos, and thoughts that will be revealed to you at a future date of your choosing.</p>
    </div>

    <div class="about-capsule-card-container">

      <div class="about-capsule-cards">

        <div class="about-capsule-card">
          <FolderSVG :stroke="'#3F88C5'" :stroke-width="1.9" class="about-capsule-card-icon" />
          <div class="about-capsule-card-content">
            <h3>Preserved Digital Memories</h3>
            <p>Preserve your memories in a secure digital capsule, built to last into the future.</p>
          </div>
        </div>

        <div class="about-capsule-card">
          <ShieldSVG :stroke="'#3F88C5'" :stroke-width="2" class="about-capsule-card-icon" />
          <div class="about-capsule-card-content">
            <h3>Security & Privacy Assured</h3>
            <p>Always secure—only you can open it, at the moment you decide.</p>
          </div>
        </div>

        <div class="about-capsule-card">
          <FutureClockSVG :fill="'#3F88C5'" class="about-capsule-card-icon" />
          <div class="about-capsule-card-content">
            <h3>The Power of Time</h3>
            <p>Time capsules make writing meaningful—linking present and future, and revealing your growth over time.</p>
          </div>
        </div>
      </div>


      <div class="about-capsule-cards">

        <div class="about-capsule-card-right">
          <MailSVG :fill="'#3F88C5'" :stroke="'#3F88C5'" :stroke-width="0.2" class="about-capsule-card-right-icon" />
          <h3>Your Message Awaits</h3>
          <p>Imagine opening a heartfelt letter from yourself one, five, or even ten years ago. What would you want to remember? What dreams would you want to revisit?</p>

          <span>"Dear future me, today I'm 25 and just started my dream job. I hope by the time you read this, you've traveled the world and found true happiness..."</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import FolderSVG from '@/assets/icons/FolderSVG.vue'
import ShieldSVG from '@/assets/icons/ShieldSVG.vue'
import FutureClockSVG from '@/assets/icons/FutureClockSVG.vue'
import MailSVG from '@/assets/icons/MailSVG.vue'
</script>

<style scoped>
.about-digital-capsule {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* max-height: 550px; */
  text-align: center;
  padding: 100px 24px;
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
  gap: 48px;
  max-width: 950px;
  margin: auto;
}

/* Cards left side */
.about-capsule-cards {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  gap: 46px;
}

.about-capsule-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.about-capsule-card svg {
  width: 46px;
  height: 46px;
  flex-shrink: 0;
}

.about-capsule-card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  padding: 8px;
  background: var(--color-highlight-light);
  border-radius: 6px;
  margin-top: 10px;
}

.about-capsule-card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
}

.about-capsule-card-content h3 {
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text);
  letter-spacing: 1.1px;
}

.about-capsule-card-content p {
  font-size: 14px;
  font-weight: 400;
  color: var(--color-text);
  letter-spacing: 1px;
  /* text-align: justify; */
}

/* Cards right side */
.about-capsule-card-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 28px 36px;
  gap: 16px;
  text-align: left;
  background: var(--color-bg-dark);
  border-radius: 8px;
}

.about-capsule-card-right svg {
  width: 66px;
  height: 66px;
  flex-shrink: 0;
}

.about-capsule-card-right-icon {
  width: 76px;
  height: 76px;
  flex-shrink: 0;
  padding: 0 5px;
  border-radius: 6px;
  background: var(--color-highlight-light);
  margin: 5px auto;
}

.about-capsule-card-right h3 {
  font-size: 22px;
  font-weight: 600;
  color: var(--color-text);
  letter-spacing: 1.1px;
}

.about-capsule-card-right p {
  font-size: 14px;
  font-weight: 400;
  color: var(--color-text);
  letter-spacing: 1px;
  line-height: 24px;
  margin-bottom: 10px;
  text-align: justify;
  padding: 0 10px;
}

.about-capsule-card-right span {
  font-size: 13px;
  font-weight: 300;
  color: var(--color-text);
  letter-spacing: 1px;
  text-align: justify;
  background: var(--color-bg-light);
  padding: 22px 20px;
  border-radius: 8px;
  margin-bottom: 10px;
}
</style>
