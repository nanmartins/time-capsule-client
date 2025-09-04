<template>
  <div class="about-ready-to-start">

    <div class="about-ready-to-start-content">
      <h1>Ready to Start Your Journey Through Time?</h1>
      <p>Join thousands of people who are already creating meaningful connections with their future selves. Your first time capsule is just a few clicks away.</p>

      <RouterLink to="/capsules">
        <button>
          Create your first capsule
          <ArrowSVG :width="'24'" :height="'24'" :stroke="'#FFFFFF'" :stroke-width="1.7" />
        </button>
      </RouterLink>

      <span>No subscriptions. No fees. Just memories.</span>
    </div>
  </div>
</template>

<script setup>
import ArrowSVG from '@/assets/icons/ArrowSVG.vue'
</script>

<style scoped>
.about-ready-to-start {
  text-align: center;
  padding: 64px 24px;
  background: var(--color-highlight-light);
  width: 100%;
  margin: 0 auto;
}

.about-ready-to-start-content {
  display: flex;
  flex-direction: column;
  max-width: 850px;
  margin: 0 auto;
}

.about-ready-to-start-content h1 {
  font-size: 26px;
  font-weight: 700;
  line-height: 115%;
  letter-spacing: 2px;
  color: var(--color-text);
  margin-bottom: 16px;
}

.about-ready-to-start-content p {
  font-size: 15px;
  font-weight: 500;
  color: var(--color-text);
  width: 100%;
  letter-spacing: 1.1px;
  margin-bottom: 36px;
}

a {
  text-decoration: none;
}

button {
  display: flex;
  align-items: center;
  justify-self: center;
  gap: 16px;
  height: 100%;
  padding: 12px 18px;
  background: var(--color-highlight-dark);
  color: var(--color-bg-light);
  border: 1px solid var(--color-highlight-dark);
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;
}

button:hover {
  background: var(--color-highlight);
  color: var(--color-bg-light);
  border: 1px solid var(--color-highlight);
}

span {
  font-size: 13px;
  font-weight: 500;
  color: var(--color-text);
  width: 100%;
  letter-spacing: 1px;
  margin-top: 16px;
}
</style>
