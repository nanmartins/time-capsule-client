<template>

  <div class="about-privacy-container">

    <div class="about-privacy-header">
      <SecuritySVG :width="'50'" :height="'50'" :stroke="'#3F88C5'" :stroke-width="2" class="about-privacy-header-icon" />
      <h1>Your Privacy is Our Priority</h1>
      <p>We understand that your time capsules contain your most personal thoughts and memories. That's why we've built Timenest with security and privacy at its core.</p>
    </div>

    <div class="about-privacy-cards-container">

      <div class="about-privacy-cards">

        <div class="about-privacy-card">
          <CheckSVG :width="'22'" :height="'22'" :stroke="'#09BC8A'" :fill="'#09BC8A'" class="about-privacy-card-icon" />
          <div class="about-privacy-card-content">
            <h3>End-to-End Encryption</h3>
            <p>Your messages are encrypted before they leave your device and remain encrypted until you unlock them.</p>
          </div>
        </div>

        <div class="about-privacy-card">
          <CheckSVG :width="'22'" :height="'22'" :stroke="'#09BC8A'" :fill="'#09BC8A'" class="about-privacy-card-icon" />
          <div class="about-privacy-card-content">
            <h3>Secure Cloud Storage</h3>
            <p>Your capsules are stored across multiple secure data centers with 99.9% uptime guarantee.</p>
          </div>
        </div>

      </div>

      <div class="about-privacy-cards">

        <div class="about-privacy-card">
          <CheckSVG :width="'22'" :height="'22'" :stroke="'#09BC8A'" :fill="'#09BC8A'" class="about-privacy-card-icon" />
          <div class="about-privacy-card-content">
            <h3>Zero-Knowledge Architecture</h3>
            <p>We can't read your messages even if we wanted to. Only you have the keys to unlock your capsules.</p>
          </div>
        </div>

        <div class="about-privacy-card">
          <CheckSVG :width="'22'" :height="'22'" :stroke="'#09BC8A'" :fill="'#09BC8A'" class="about-privacy-card-icon" />
          <div class="about-privacy-card-content">
            <h3>No Data Selling</h3>
            <p>We never sell your data or use it for advertising. Your privacy is not our product.</p>
          </div>
        </div>

      </div>

    </div>
  </div>

</template>

<script setup>
import SecuritySVG from '@/assets/icons/SecuritySVG.vue'
import CheckSVG from '@/assets/icons/CheckSVG.vue'
</script>

<style scoped>
.about-privacy-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 100px 24px;
}

.about-privacy-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 24px;
  max-width: 800px;
}

.about-privacy-header-icon {
  margin-bottom: 24px;
  padding: 8px;
  background: var(--color-highlight-light);
  border-radius: 8px;
  width: 60px;
  height: 60px;
}

.about-privacy-header h1 {
  font-size: 26px;
  font-weight: 700;
  /* line-height: 120%; */
  letter-spacing: 2px;
  color: var(--color-text);
}

.about-privacy-header p {
  font-size: 15px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 1px;
  color: var(--color-text);
  margin: 16px auto;
  max-width: 750px;
}

/* About Cards */
.about-privacy-cards-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  margin: 0 auto;
  max-width: 850px;
}

.about-privacy-cards {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
}

/* Card style */
.about-privacy-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.about-privacy-card svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.about-privacy-card-icon {
  margin-top: 8px;
  widows: 30px;
  height: 30px;
}

.about-privacy-card-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
}

.about-privacy-card h3 {
  font-size: 18px;
  font-weight: 600;
  line-height: 115%;
  letter-spacing: 1px;
  color: var(--color-text);
  margin-top: 6px;
}

.about-privacy-card p {
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 1px;
  color: var(--color-text);
  margin-bottom: 14px;
  text-align: left;
}
</style>
